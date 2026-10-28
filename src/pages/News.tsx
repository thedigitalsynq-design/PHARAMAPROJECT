import React, { useState, useMemo } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ArticleModal } from '../components/ui/ArticleModal';
import { NEWS_ARTICLES } from '../data/news';
import { NewsArticle } from '../types';
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen, 
  Tag, 
  X,
  FileText
} from 'lucide-react';

export const News: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'All Categories',
    'Scientific Publication',
    'Corporate Milestone',
    'Manufacturing & Supply',
    'Clinical Update',
    'Sustainability'
  ];

  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter((art) => {
      if (selectedCategory !== 'all' && art.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = art.title.toLowerCase().includes(q);
        const matchesSummary = art.summary.toLowerCase().includes(q);
        const matchesAuthor = art.author.name.toLowerCase().includes(q);
        const matchesTag = art.tags.some(t => t.toLowerCase().includes(q));
        return matchesTitle || matchesSummary || matchesAuthor || matchesTag;
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  const featuredArticle = NEWS_ARTICLES[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-pharma-950 text-white py-16 sm:py-20 border-b border-pharma-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'News & Editorial Insights' }]} theme="dark" />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950 border border-teal-500/40 text-teal-300 mb-4">
              <FileText className="w-3.5 h-3.5 text-teal-400" />
              <span>Scientific Publications & Corporate Bulletin</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              News, Whitepapers & Insights
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              In-depth articles from our scientific leadership covering targeted ADC conjugation, continuous bioprocessing, blood-brain barrier transport, and green chemistry.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article Spotlight */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            onClick={() => setSelectedArticle(featuredArticle)}
            className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 p-8 sm:p-12 text-white space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-500 text-pharma-950 font-mono">
                    Featured Publication
                  </span>
                  <span className="text-xs text-slate-400">
                    {featuredArticle.date} • {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight group-hover:text-teal-300 transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                  {featuredArticle.summary}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <User className="w-3.5 h-3.5 text-teal-400" />
                    <span>{featuredArticle.author.name}</span>
                    <span className="text-slate-500">({featuredArticle.author.role})</span>
                  </div>

                  <span className="text-teal-400 font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Full Paper</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden bg-slate-950">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search publications by keyword, author, tag..."
                className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-slate-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isAll = cat === 'All Categories';
                const catVal = isAll ? 'all' : cat;
                const isActive = selectedCategory === catVal;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(catVal)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-teal-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200 text-xs text-slate-500">
            <div>
              Showing <strong className="text-slate-900">{filteredArticles.length}</strong> publications
            </div>
            {(selectedCategory !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-teal-700 hover:underline font-semibold"
              >
                Clear Filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-teal-400 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-pharma-950/90 text-teal-300 border border-teal-500/40">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-teal-600" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-teal-600" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2 mb-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {article.summary}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {article.tags.map((tag) => (
                        <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-medium text-slate-500 truncate max-w-[160px]">
                      {article.author.name}
                    </span>
                    <span className="text-teal-700 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Article Detail Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

    </div>
  );
};
