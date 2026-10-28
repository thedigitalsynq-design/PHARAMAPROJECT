import React, { useEffect } from 'react';
import { X, Calendar, Clock, User, Share2, Tag, BookOpen, AlertCircle } from 'lucide-react';
import { NewsArticle } from '../../types';

interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [article]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-pharma-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Cover Image */}
        <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full backdrop-blur-sm transition-colors border border-white/20"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-500 text-pharma-950 inline-block mb-2 font-mono">
              {article.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              {article.title}
            </h3>
          </div>
        </div>

        {/* Article Meta */}
        <div className="px-6 sm:px-8 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-teal-600" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              {article.readTime}
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-medium text-slate-800">
            <User className="w-3.5 h-3.5 text-teal-600" />
            <span>{article.author.name}</span>
            <span className="text-slate-400">({article.author.role})</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[55vh] overflow-y-auto text-slate-700 text-sm leading-relaxed">
          <p className="font-semibold text-slate-900 text-base leading-relaxed border-l-4 border-teal-500 pl-4 py-1 bg-teal-50/40 rounded-r-lg">
            {article.summary}
          </p>

          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Tags */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2 mt-4">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-[11px]">
              Fictional demonstration publication written to illustrate scientific content architecture. No real clinical efficacy or regulatory endorsement is implied.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Published under Novalyte BioPharma Editorial Hub
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-pharma-950 hover:bg-pharma-900 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
