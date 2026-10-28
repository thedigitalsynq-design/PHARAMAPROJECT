import React, { useState } from 'react';
import { AlertTriangle, Info, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DemoBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-pharma-950 text-slate-300 text-xs py-2 px-4 border-b border-pharma-800/60 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="flex h-2 w-2 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <p className="truncate">
            <span className="font-semibold text-white uppercase tracking-wider text-[11px] mr-2 px-1.5 py-0.5 rounded bg-teal-950/80 border border-teal-500/40 text-teal-300">
              Fictional Enterprise Demonstration
            </span>
            Novalyte BioPharma is an illustrative pharmaceutical showcase. All products, pipeline data, and clinical statistics are simulated.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            to="/disclaimer"
            className="text-teal-400 hover:text-teal-300 underline underline-offset-2 font-medium hidden sm:inline-flex items-center gap-1"
          >
            <Info className="w-3.5 h-3.5" /> Full Legal Notice
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
