import React, { useEffect, useState } from 'react';
import { Toaster } from "./components/ui/sonner";
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { AdminDashboard } from './components/AdminDashboard';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SEO } from './components/SEO';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Simple routing logic
  if (currentPath === '/admin') {
    return (
      <ErrorBoundary>
        <SEO 
          title="Admin Dashboard - Rakshit Bisht Portfolio"
          description="Portfolio admin dashboard for managing contacts and analytics"
        />
        <div className="min-h-screen">
          <AdminDashboard />
          <Toaster position="top-right" />
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <SEO />
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Toaster position="top-right" />
      </div>
    </ErrorBoundary>
  );
}