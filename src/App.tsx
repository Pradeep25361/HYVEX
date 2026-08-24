import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import DigitalMarketing from './pages/DigitalMarketing';
import PerformanceMarketing from './pages/PerformanceMarketing';
import WebDevelopment from './pages/WebDevelopment';
import AppDevelopment from './pages/AppDevelopment';
import SEOServices from './pages/SEOServices';
import About from './pages/About';
import Founder from './pages/Founder';
import Team from './pages/Team';
import Clients from './pages/Clients';
import BookAppointment from './pages/BookAppointment';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FFFFFF] text-[#0A0A0A] flex flex-col font-sans selection:bg-[#0A0A0A] selection:text-[#FFFFFF]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/app-development" element={<AppDevelopment />} />
            <Route path="/seo-services" element={<SEOServices />} />
            <Route path="/about" element={<About />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/team" element={<Team />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/our-clients" element={<Clients />} />
            <Route path="/work" element={<Clients />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route redirecting to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
