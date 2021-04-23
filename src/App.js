import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import { GlobalStyle } from './GlobalStyle';

export default function App() {
  return (
    <Router>
      <Header />
      <Home />
      <GlobalStyle />
    </Router>
  );
}
