import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import HomeContent from './home-content';
import AboutMe from './about-me';
import Portfolio from './portfolio';
import ContactMe from './contact-me';
import AllProjects from './all-projects';
import ProjectDetail from './project-detail';
import Footer from './footer';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/projects/portfolio" element={<Portfolio />} />
          <Route path="/projects/all" element={<AllProjects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
};
export default App;