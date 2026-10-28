import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  align = 'center',
  theme = 'light'
}) => {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl mb-12 ${isCenter ? 'mx-auto text-center' : 'text-left'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
          isDark 
            ? 'bg-teal-950/80 text-teal-300 border border-teal-500/40 shadow-glow-teal'
            : 'bg-teal-50 text-teal-800 border border-teal-200'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
        isDark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
