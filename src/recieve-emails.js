import Imap from 'imap';
import { simpleParser } from 'mailparser';
import dotenv from 'dotenv';

dotenv.config();

const imap = new Imap({
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    host: 'imap.gmail.com',
    port: 993,
    tls: true
});

function openInbox(cb) {
    imap.openBox('INBOX', true, cb);
}

imap.once('ready', () => {
    openInbox(function (err, box) {
        if (err) throw err;
        imap.search(['UNSEEN', ['SINCE', new Date()]], function (err, results) {
            if (err) throw err;
            const f = imap.fetch(results, { bodies: '' });
            f.on('message', function (msg) {
                msg.on('body', function (stream) {
                    simpleParser(stream, (err, parsed) => {
                        if (err) throw err;
                        console.log('Subject: ', parsed.subject);
                        console.log('From: ', parsed.from.text);
                        console.log('Body: ', parsed.text);
                    });
                });
            });
            f.once('error', function (err) {
                console.log('Fetch error: ' + err);
            });
            f.once('end', function () {
                console.log('Done fetching all messages');
                imap.end();
            });
        });
    });
});

imap.once('error', function (err) {
    console.log(err);
});

imap.once('end', function () {
    console.log('Connection ended');
});

imap.connect();