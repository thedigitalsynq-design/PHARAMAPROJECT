import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Dna, ArrowUpRight, Search } from 'lucide-react';

interface NavbarProps {
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Therapeutic Areas & Products', path: '/products' },
    { name: 'R&D Pipeline', path: '/research' },
    { name: 'Manufacturing & Quality', path: '/manufacturing' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'News & Insights', path: '/news' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-pharma-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-pharma-800/80 py-3'
          : 'bg-pharma-950/90 backdrop-blur-sm border-b border-pharma-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 via-teal-500 to-emerald-400 flex items-center justify-center shadow-glow-teal group-hover:scale-105 transition-transform duration-300">
              <Dna className="w-6 h-6 text-pharma-950 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-teal-300 transition-colors">
                  NOVALYTE
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-teal-400 px-1.5 py-0.5 rounded bg-teal-950/80 border border-teal-500/30">
                  BioPharma
                </span>
              </div>
              <span className="text-[10px] tracking-wider text-slate-400 font-medium hidden sm:block">
                MOLECULAR THERAPEUTICS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-teal-300 font-semibold bg-pharma-800/60'
                      : 'text-slate-300 hover:text-white hover:bg-pharma-800/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Search catalog and research"
                className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-pharma-800/60 border border-slate-700/60 transition-colors"
                title="Search website"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-teal-500 hover:bg-teal-400 text-pharma-950 shadow-glow-teal hover:shadow-teal-400/50 transition-all duration-200 active:scale-95"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Search catalog"
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-pharma-800/60 border border-slate-700/60"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-pharma-800/60 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(100%+1px)] bg-pharma-950/98 backdrop-blur-xl border-b border-pharma-800 p-6 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1 pb-4 border-b border-pharma-800/70">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-950/80 text-teal-300 font-semibold border border-teal-500/30'
                      : 'text-slate-200 hover:bg-pharma-900 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-teal-400' : 'text-slate-500'}`} />
                </Link>
              );
            })}
          </div>

          <div className="pt-5 flex flex-col gap-3">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm uppercase tracking-wider bg-teal-500 text-pharma-950 hover:bg-teal-400 transition-colors shadow-glow-teal"
            >
              <span>Partner With Us / Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              Fictional Biotechnology Enterprise Showcase • Demo Portfolio
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
