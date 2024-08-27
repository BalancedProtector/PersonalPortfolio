import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders HomeContent component for the default route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/home content/i)).toBeInTheDocument();
});

test('renders AboutMe component for the /about route', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/about me/i)).toBeInTheDocument();
});

test('renders Portfolio component for the /portfolio route', () => {
  render(
    <MemoryRouter initialEntries={['/portfolio']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
});

test('renders ContactMe component for the /contact route', () => {
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/contact me/i)).toBeInTheDocument();
});

test('renders AllProjects component for the /portfolio/all route', () => {
  render(
    <MemoryRouter initialEntries={['/portfolio/all']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/all projects/i)).toBeInTheDocument();
});

test('renders ProjectDetail component for the /portfolio/:projectId route', () => {
  render(
    <MemoryRouter initialEntries={['/portfolio/1']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/project detail/i)).toBeInTheDocument();
});