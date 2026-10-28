import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dna, Mail, ArrowRight, ShieldCheck, CheckCircle2, Globe, Phone, MapPin } from 'lucide-react';
import { GLOBAL_OFFICES } from '../../data/company';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid corporate or professional email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <footer className="bg-pharma-950 text-slate-300 border-t border-pharma-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-pharma-800/70">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 via-teal-500 to-emerald-400 flex items-center justify-center shadow-glow-teal">
                <Dna className="w-6 h-6 text-pharma-950 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-white">
                    NOVALYTE
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-teal-400 px-1.5 py-0.5 rounded bg-teal-950 border border-teal-500/30">
                    BioPharma
                  </span>
                </div>
                <span className="text-[10px] tracking-wider text-slate-400 font-medium">
                  MOLECULAR THERAPEUTICS & BIOPROCESSING
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Pioneering precision antibody-drug conjugates, targeted pulmonary delivery vectors, and continuous sterile bioprocessing to conquer historically intractable diseases.
            </p>

            {/* Newsletter Subscription Simulation */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-2">
                Scientific Publications & Corporate Bulletin
              </h4>
              {subscribed ? (
                <div className="p-3 bg-teal-950/80 border border-teal-500/50 rounded-xl flex items-center gap-2 text-teal-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-teal-400" />
                  <span>Subscription confirmed for demo alerts. No actual emails will be sent.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-1.5">
                  <div className="flex rounded-lg overflow-hidden border border-slate-700 bg-pharma-900 focus-within:border-teal-400 transition-colors">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter professional email"
                      className="bg-transparent px-3 py-2 text-xs text-white placeholder-slate-500 w-full focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-teal-500 hover:bg-teal-400 text-pharma-950 text-xs font-semibold flex items-center gap-1 transition-colors flex-shrink-0"
                    >
                      <span>Join</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {error && <p className="text-[11px] text-rose-400">{error}</p>}
                </form>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Therapeutics & Science
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/products" className="text-slate-400 hover:text-teal-300 transition-colors">
                  Therapeutic Areas
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-teal-300 transition-colors">
                  Product Portfolio (Mock)
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-slate-400 hover:text-teal-300 transition-colors">
                  R&D Pipeline Explorer
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-slate-400 hover:text-teal-300 transition-colors">
                  NovaLinker™ Platform
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-slate-400 hover:text-teal-300 transition-colors">
                  NeuroShuttle™ BBB Tech
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="text-slate-400 hover:text-teal-300 transition-colors">
                  Sterile Aseptic Facilities
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate & Governance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Corporate & Careers
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-teal-300 transition-colors">
                  About Novalyte
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-teal-300 transition-colors">
                  Executive Leadership
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-slate-400 hover:text-teal-300 transition-colors">
                  ESG & Green Chemistry
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-slate-400 hover:text-teal-300 transition-colors">
                  News & Publications
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-400 hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <span>Open Opportunities</span>
                  <span className="text-[9px] bg-teal-500/20 text-teal-300 px-1.5 py-0.2 rounded border border-teal-500/30">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-teal-300 transition-colors">
                  Partnering Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Operations Hubs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Global Centers (Demo)
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              {GLOBAL_OFFICES.map((office) => (
                <div key={office.city} className="border-l-2 border-slate-700 pl-2.5 py-0.5">
                  <span className="font-semibold text-slate-200 block text-xs">
                    {office.city}, {office.country}
                  </span>
                  <span className="text-[11px] text-teal-400/90 block">
                    {office.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explicit Fictional Disclaimer & Safety Advisory */}
        <div className="my-8 p-4 rounded-xl bg-pharma-900/60 border border-pharma-800 text-xs text-slate-400 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>MANDATORY REGULATORY & MEDICAL DISCLAIMER</span>
          </div>
          <p className="leading-relaxed">
            Novalyte BioPharma is a fictional biotechnology entity designed solely to demonstrate world-class web design and digital architecture. The product descriptions, active pharmaceutical ingredients (APIs), clinical pipeline trial phases, efficacy figures, and therapeutic claims presented on this website are entirely fabricated demonstration mockups. This website does not provide medical advice, diagnosis, or treatment recommendations, nor does it sell, distribute, or facilitate adverse event reporting for commercial medicines. Consult a qualified healthcare professional regarding any medical condition.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Novalyte BioPharma Inc. Fictional Demonstration Prototype. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/disclaimer" className="hover:text-teal-400 transition-colors">
              Privacy Policy & Terms
            </Link>
            <Link to="/disclaimer" className="hover:text-teal-400 transition-colors">
              Fictional Content Disclosures
            </Link>
            <Link to="/contact" className="hover:text-teal-400 transition-colors">
              Regulatory Inquiries
            </Link>
            <Link to="/disclaimer" className="hover:text-teal-400 transition-colors">
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
