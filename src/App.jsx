import React from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { Toaster } from './components/ui/sonner';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
      <Toaster position="bottom-right" />
    </Router>
  );
}

// 404 Page Component
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="text-center px-4 relative z-10">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4 tech-glow">404</h1>
        <p className="text-2xl text-muted-foreground mb-8 font-medium">Page not found</p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-[0.98] tech-glow"
        >
          Back to home
        </a>
      </div>
    </div>
  );
};

export default App;