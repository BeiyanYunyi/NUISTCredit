import { Route, Router, Routes } from 'solid-app-router';
import { Component } from 'solid-js';
import Nav from './components/Nav';

import About from './views/About';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Result from './views/Result';

const App: Component = () => (
  <Router>
    <Nav />
    <Routes>
      <Route path="/result" element={<Result />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
