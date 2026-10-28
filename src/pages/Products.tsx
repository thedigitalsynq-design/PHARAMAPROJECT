import React, { useState, useMemo } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ProductModal } from '../components/ui/ProductModal';
import { PRODUCTS } from '../data/products';
import { THERAPEUTIC_AREAS } from '../data/therapeuticAreas';
import { Product, TherapeuticAreaId } from '../types';
import { 
  Search, 
  Filter, 
  Dna, 
  ArrowUpRight, 
  ShieldAlert, 
  CheckCircle, 
  X,
  Package,
  Activity,
  AlertCircle
} from 'lucide-react';

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'All Categories',
    'Prescription Biologic',
    'Small Molecule',
    'Targeted Delivery',
    'Inhaled Therapeutic'
  ];

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Area filter
      if (selectedArea !== 'all' && p.therapeuticArea !== selectedArea) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCode = p.codeName.toLowerCase().includes(query);
        const matchesSummary = p.summary.toLowerCase().includes(query);
        const matchesGeneric = p.genericName.toLowerCase().includes(query);
        const matchesArea = p.therapeuticAreaName.toLowerCase().includes(query);
        return matchesName || matchesCode || matchesSummary || matchesGeneric || matchesArea;
      }
      return true;
    });
  }, [searchQuery, selectedArea, selectedCategory]);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-pharma-950 text-white py-16 sm:py-20 border-b border-pharma-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Therapeutic Areas & Products' }]} theme="dark" />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950 border border-teal-500/40 text-teal-300 mb-4">
              <Dna className="w-3.5 h-3.5 text-teal-400" />
              <span>Investigational & Formulation Catalog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Therapeutic Areas & Product Portfolio
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our representative molecular formulations, novel conjugate delivery vectors, and clinical candidate profiles across six core therapeutic domains.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Search & Filter Controls */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by molecule name, indication, code (NVL)..."
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

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 mr-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Domain:</span>
              </div>
              <button
                onClick={() => setSelectedArea('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedArea === 'all'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Domains
              </button>
              {THERAPEUTIC_AREAS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setSelectedArea(a.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedArea === a.id
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {a.name.split(' ')[0]}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Product List Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Active Filter Indicators */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 text-xs text-slate-500">
            <div>
              Showing <strong className="text-slate-900">{filteredProducts.length}</strong> demonstrative formulations
              {selectedArea !== 'all' && <span> in <span className="text-teal-700 font-bold uppercase">{selectedArea}</span></span>}
            </div>
            {(selectedArea !== 'all' || selectedCategory !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedArea('all');
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-teal-700 hover:underline font-semibold"
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto my-12">
              <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1">
                No matching formulations found
              </h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                We couldn't find any mock records matching your active filter criteria. Try clearing search filters or browsing all domains.
              </p>
              <button
                onClick={() => {
                  setSelectedArea('all');
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col justify-between p-6 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                      {p.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {p.codeName}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-400 italic mb-3">
                    {p.genericName}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-5">
                    {p.summary}
                  </p>

                  <div className="space-y-2 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Dosage Form:</span>
                      <span className="font-semibold text-slate-800 text-right">{p.dosageForm}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Administration:</span>
                      <span className="font-semibold text-slate-800 text-right">{p.deliveryMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Status Phase:</span>
                      <span className="font-semibold text-teal-700 text-right">{p.stage}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setSelectedProduct(p)}
                    className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider bg-slate-900 hover:bg-teal-600 text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>View Molecular Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    Fictional demonstration profile
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Safety & Medical Notice */}
      <section className="py-12 bg-amber-50/60 border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-amber-900 space-y-2">
          <div className="flex items-center justify-center gap-2 font-bold text-amber-800">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>CLINICAL DEMONSTRATION CATALOGUE NOTICE</span>
          </div>
          <p className="leading-relaxed">
            All formulations listed above are hypothetical scientific prototypes designed solely to illustrate pharmaceutical product architecture. No real medication exists under these names. This website does not offer medical advice, sell pharmaceuticals, or validate clinical outcomes.
          </p>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
};
