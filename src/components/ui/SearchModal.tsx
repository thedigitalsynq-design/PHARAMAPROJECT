import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Dna, FileText, Briefcase, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { PIPELINE_PROJECTS } from '../../data/research';
import { NEWS_ARTICLES } from '../../data/news';
import { JOB_OPENINGS } from '../../data/careers';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingProducts = trimmed
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.codeName.toLowerCase().includes(trimmed) ||
          p.summary.toLowerCase().includes(trimmed) ||
          p.therapeuticAreaName.toLowerCase().includes(trimmed)
      )
    : [];

  const matchingPipeline = trimmed
    ? PIPELINE_PROJECTS.filter(
        (pl) =>
          pl.compound.toLowerCase().includes(trimmed) ||
          pl.indication.toLowerCase().includes(trimmed) ||
          pl.target.toLowerCase().includes(trimmed) ||
          pl.phase.toLowerCase().includes(trimmed)
      )
    : [];

  const matchingNews = trimmed
    ? NEWS_ARTICLES.filter(
        (n) =>
          n.title.toLowerCase().includes(trimmed) ||
          n.summary.toLowerCase().includes(trimmed) ||
          n.category.toLowerCase().includes(trimmed)
      )
    : [];

  const matchingJobs = trimmed
    ? JOB_OPENINGS.filter(
        (j) =>
          j.title.toLowerCase().includes(trimmed) ||
          j.department.toLowerCase().includes(trimmed) ||
          j.location.toLowerCase().includes(trimmed)
      )
    : [];

  const totalResults =
    matchingProducts.length + matchingPipeline.length + matchingNews.length + matchingJobs.length;

  const handleSelect = (url: string) => {
    onClose();
    navigate(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      <div
        className="fixed inset-0 bg-pharma-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-slate-900 border border-slate-700/80 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[75vh]">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-950/60">
          <Search className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, pipeline assets, scientific articles, or open roles..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Search Results Area */}
        <div className="p-4 overflow-y-auto space-y-4">
          {!trimmed && (
            <div className="text-center py-8 text-slate-400">
              <Dna className="w-10 h-10 text-teal-500/40 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-300">
                Explore the Novalyte Scientific Intelligence Hub
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Type keywords like "Oncology", "ADC", "Inhalant", "Pipeline", or "Synthesis"
              </p>
            </div>
          )}

          {trimmed && totalResults === 0 && (
            <div className="text-center py-8 text-slate-400">
              <p className="text-sm text-slate-300">No mock records found matching "{query}"</p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for broader keywords like "antibody", "respiratory", or "clinical"
              </p>
            </div>
          )}

          {matchingProducts.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 block mb-2">
                Products & Formulations ({matchingProducts.length})
              </span>
              <div className="space-y-1.5">
                {matchingProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleSelect('/products')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors flex items-center justify-between group border border-transparent hover:border-slate-700"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-white group-hover:text-teal-300">
                          {p.name}
                        </span>
                        <span className="text-xs text-slate-400">({p.codeName})</span>
                        <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">
                          {p.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{p.summary}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchingPipeline.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                Pipeline Candidates ({matchingPipeline.length})
              </span>
              <div className="space-y-1.5">
                {matchingPipeline.map((pl) => (
                  <button
                    key={pl.id}
                    onClick={() => handleSelect('/research')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors flex items-center justify-between group border border-transparent hover:border-slate-700"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-white group-hover:text-emerald-300">
                          {pl.compound}
                        </span>
                        <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                          {pl.phase}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Target: {pl.target} • {pl.indication}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchingNews.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-2">
                Scientific Publications & News ({matchingNews.length})
              </span>
              <div className="space-y-1.5">
                {matchingNews.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => handleSelect('/news')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors flex items-center justify-between group border border-transparent hover:border-slate-700"
                  >
                    <div>
                      <span className="font-semibold text-sm text-white group-hover:text-blue-300 line-clamp-1">
                        {n.title}
                      </span>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {n.category} • {n.date}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchingJobs.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 block mb-2">
                Career Opportunities ({matchingJobs.length})
              </span>
              <div className="space-y-1.5">
                {matchingJobs.map((j) => (
                  <button
                    key={j.id}
                    onClick={() => handleSelect('/careers')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors flex items-center justify-between group border border-transparent hover:border-slate-700"
                  >
                    <div>
                      <span className="font-semibold text-sm text-white group-hover:text-purple-300">
                        {j.title}
                      </span>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {j.department} • {j.location}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <span>Demonstration search index across mock datasets</span>
          <span>Click any item to navigate</span>
        </div>
      </div>
    </div>
  );
};
