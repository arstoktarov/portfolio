import React from 'react';
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { HomePage, AboutPage, ProjectsPage, ContactsPage } from './pages';

const App = ({ routes }) => {
  
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about" element={<AboutPage />} />
      <Route exact path="/projects" element={<ProjectsPage />} />
      <Route exact path="/contacts" element={<ContactsPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App