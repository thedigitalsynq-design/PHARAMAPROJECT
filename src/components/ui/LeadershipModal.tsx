import React, { useEffect } from 'react';
import { X, GraduationCap, Award, Building, AlertCircle } from 'lucide-react';
import { LeadershipMember } from '../../types';

interface LeadershipModalProps {
  leader: LeadershipMember | null;
  onClose: () => void;
}

export const LeadershipModal: React.FC<LeadershipModalProps> = ({ leader, onClose }) => {
  useEffect(() => {
    if (leader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [leader]);

  if (!leader) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-pharma-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header with photo */}
        <div className="relative h-48 bg-gradient-to-r from-pharma-950 to-pharma-850 p-6 flex items-end">
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors"
              aria-label="Close leader details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-4 z-10">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl"
            />
            <div className="text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 block">
                {leader.department}
              </span>
              <h3 className="text-xl font-extrabold text-white">
                {leader.name}
              </h3>
              <p className="text-xs text-slate-300">
                {leader.title}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Executive & Scientific Biography
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {leader.bio}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
            <div className="flex items-start gap-2">
              <GraduationCap className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Education & Honors: </strong>
                <span>{leader.education}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Building className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Career Trajectory: </strong>
                <span>{leader.previousExperience}</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-[11px]">
              Fictional demonstration profile. The name, title, and biographical claims are illustrative and created solely for portfolio representation.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
