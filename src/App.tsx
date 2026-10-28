import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DemoBanner } from './components/layout/DemoBanner';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { SearchModal } from './components/ui/SearchModal';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Research } from './pages/Research';
import { Manufacturing } from './pages/Manufacturing';
import { Sustainability } from './pages/Sustainability';
import { News } from './pages/News';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Disclaimer } from './pages/Disclaimer';

export function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-500 selection:text-white">
        {/* Persistent Fictional Demonstration Notice */}
        <DemoBanner />

        {/* Global Navigation Header */}
        <Navbar onOpenSearch={() => setSearchOpen(true)} />

        {/* Global Search Dialog */}
        <SearchModal
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
        />

        {/* Page Content Viewport */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/research" element={<Research />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Comprehensive Corporate Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
