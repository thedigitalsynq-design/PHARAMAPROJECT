import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  theme?: 'dark' | 'light';
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <nav className="flex items-center space-x-2 text-xs py-2 mb-6" aria-label="Breadcrumb">
      <Link
        to="/"
        className={`flex items-center gap-1 transition-colors ${
          isDark ? 'text-slate-400 hover:text-teal-300' : 'text-slate-500 hover:text-teal-700'
        }`}
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={item.label} className="flex items-center space-x-2">
            <ChevronRight className={`w-3.5 h-3.5 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
            {isLast || !item.path ? (
              <span className={`font-medium ${isDark ? 'text-teal-300' : 'text-teal-800'}`}>
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className={`transition-colors ${
                  isDark ? 'text-slate-400 hover:text-teal-300' : 'text-slate-500 hover:text-teal-700'
                }`}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};
