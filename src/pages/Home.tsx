import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Dna, 
  ShieldCheck, 
  Microscope, 
  Factory, 
  Sparkles, 
  ChevronRight, 
  Activity, 
  Share2, 
  Globe2, 
  Leaf, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers,
  Search,
  BookOpen
} from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ProductModal } from '../components/ui/ProductModal';
import { ArticleModal } from '../components/ui/ArticleModal';
import { THERAPEUTIC_AREAS } from '../data/therapeuticAreas';
import { PRODUCTS } from '../data/products';
import { PIPELINE_PROJECTS, RESEARCH_PLATFORMS } from '../data/research';
import { NEWS_ARTICLES } from '../data/news';
import { COMPANY_INFO } from '../data/company';
import { Product, NewsArticle } from '../types';

export const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  // Take top pipeline assets for the homepage radar
  const featuredPipeline = PIPELINE_PROJECTS.slice(0, 4);
  const featuredProducts = PRODUCTS.slice(0, 3);
  const latestArticles = NEWS_ARTICLES.slice(0, 3);

  return (
    <div className="bg-slate-50 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center bg-pharma-950 text-white overflow-hidden">
        {/* Ambient background glowing elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />

        {/* Hero imagery overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-25 lg:opacity-40 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&q=80&w=1600"
            alt="Advanced molecular biotechnology research laboratory"
            className="w-full h-full object-cover object-center filter saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pharma-950 via-pharma-950/70 to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-pharma-950 via-transparent to-pharma-950/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 z-10 w-full">
          <div className="max-w-3xl">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pharma-900/90 border border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-glow-teal">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
              <span>Advancing Next-Generation Molecular Medicine</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Engineering Molecular Therapeutics for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Unmet Global Needs</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Novalyte BioPharma bridges rational biophysical design, targeted antibody conjugation, and continuous aseptic manufacturing to develop transformative therapies for chronic, oncology, and rare disease patient populations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                to="/research"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider bg-teal-500 hover:bg-teal-400 text-pharma-950 shadow-glow-teal hover:shadow-teal-400/50 transition-all duration-200 active:scale-95"
              >
                <span>Explore Clinical Pipeline</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
              >
                <span>Formulation Portfolio</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Micro Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              {COMPANY_INFO.stats.map((stat, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-teal-400">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* STRATEGIC MISSION & SCIENTIFIC PILLARS */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
                <Dna className="w-3.5 h-3.5 text-teal-600" />
                <span>Our Scientific Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                From Fundamental Biophysics to Precision Patient Impact.
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Traditional drug development frequently relies on broad-spectrum chemistry that taxes healthy tissue. At Novalyte, our interdisciplinary teams combine structural biology, site-specific bioconjugation, and computer-guided formulation to restrict therapeutic activation strictly to pathological tissue microenvironments.
              </p>
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    QbD
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Quality by Design Philosophy</h4>
                    <p className="text-xs text-slate-600">Translational rigor embedded from lead optimization through fill-finish.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 group"
                >
                  <span>Learn about our leadership and corporate heritage</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Bento Grid Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {COMPANY_INFO.values.map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pharma-900 text-teal-400 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors shadow-sm">
                    {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 1 && <Dna className="w-5 h-5" />}
                    {idx === 2 && <Activity className="w-5 h-5" />}
                    {idx === 3 && <Leaf className="w-5 h-5" />}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* CORE THERAPEUTIC AREAS GRID */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Therapeutic Domains"
            title="Pioneering Research Across 6 Biological Frontiers"
            description="Our investigational discovery pipelines are engineered to address high-morbidity chronic, oncology, and rare degenerative indications with unprecedented molecular precision."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {THERAPEUTIC_AREAS.map((area) => (
              <div
                key={area.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950/90 px-2 py-0.5 rounded border border-teal-500/30">
                      Therapeutic Focus
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      {area.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {area.shortDescription}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Key Molecular Assets:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {area.keyMolecules.map((mol, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                        >
                          {mol}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 group-hover:text-teal-800"
                    >
                      <span>Explore domain formulations</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pharma-950 hover:bg-pharma-900 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              <span>View Full Therapeutic & Product Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* R&D PIPELINE RADAR HIGHLIGHT */}
      <section className="py-20 lg:py-28 bg-pharma-950 text-white relative overflow-hidden border-b border-pharma-800">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950 border border-teal-500/40 text-teal-300 mb-3">
                <Activity className="w-3.5 h-3.5 text-teal-400" />
                <span>Translational Discovery</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Active Investigational Pipeline Highlights
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                Tracking our advancing molecular candidates from exploratory target validation through international multi-center clinical trials.
              </p>
            </div>

            <Link
              to="/research"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-teal-500 hover:bg-teal-400 text-pharma-950 transition-colors shadow-glow-teal flex-shrink-0"
            >
              <span>Full Pipeline Tracker (14 Assets)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Pipeline Interactive Cards */}
          <div className="space-y-3.5">
            {featuredPipeline.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-pharma-900/80 border border-pharma-800 hover:border-teal-500/50 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-extrabold text-base text-white tracking-tight">
                      {item.compound}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pharma-800 text-slate-300 border border-pharma-700">
                      {item.modality}
                    </span>
                  </div>
                  <p className="text-xs text-teal-400 font-medium">
                    Target: {item.target}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {item.indication}
                  </p>
                </div>

                {/* Visual Phase Progress Bar */}
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-5 gap-1.5 text-center text-[10px] font-bold">
                    {['Discovery', 'Preclinical', 'Phase I', 'Phase II', 'Phase III'].map((ph, idx) => {
                      const phaseRanks = ['Discovery', 'Preclinical', 'Phase I', 'Phase II', 'Phase III'];
                      const currentRank = phaseRanks.indexOf(item.phase);
                      const isCompleted = idx <= currentRank;
                      const isCurrent = idx === currentRank;

                      return (
                        <div key={ph} className="flex flex-col items-center">
                          <div
                            className={`w-full h-2 rounded-full mb-1 transition-all ${
                              isCurrent
                                ? 'bg-teal-400 shadow-glow-teal animate-pulse'
                                : isCompleted
                                ? 'bg-teal-600'
                                : 'bg-slate-800'
                            }`}
                          />
                          <span
                            className={
                              isCurrent
                                ? 'text-teal-300 font-extrabold'
                                : isCompleted
                                ? 'text-slate-300'
                                : 'text-slate-600'
                            }
                          >
                            {ph}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="lg:w-1/6 flex lg:justify-end">
                  <Link
                    to="/research"
                    className="text-xs font-semibold text-teal-300 hover:text-teal-200 flex items-center gap-1 group"
                  >
                    <span>Read Protocol</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED PRODUCTS & FORMULATION PORTFOLIO */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Formulation Portfolio"
            title="Featured Molecular Formulations & Delivery Systems"
            description="Representative pharmaceutical models highlighting our cleanroom manufacturing, targeted delivery matrices, and sterile packaging standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-slate-200 bg-white hover:border-teal-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                      {product.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {product.codeName}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-400 italic mb-3">
                    {product.genericName}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {product.summary}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Route:</span>
                      <span className="font-medium text-slate-800">{product.deliveryMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Status:</span>
                      <span className="font-medium text-teal-700">{product.stage}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider bg-slate-900 hover:bg-teal-600 text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto">
            <p className="text-xs text-slate-500">
              <strong className="text-slate-700">Demonstration Note: </strong>
              Products listed above are fictional prototypes created for portfolio presentation. None of these formulations are commercially available or approved for medical therapy.
            </p>
          </div>

        </div>
      </section>

      {/* MANUFACTURING & QUALITY EXCELLENCE OVERVIEW */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950 border border-teal-500/40 text-teal-300">
                <Factory className="w-3.5 h-3.5 text-teal-400" />
                <span>Advanced Bioprocess Infrastructure</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Robotic Aseptic Isolators and Continuous Single-Use Bioreactors.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Sterile biopharmaceutical production requires unprecedented levels of environmental containment. Our modern cleanrooms feature Class A robotic filling, continuous Process Analytical Technology (PAT), and automated cold-chain logistics across the United States, Switzerland, and Ireland.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-2xl font-black text-teal-400">Class A</div>
                  <div className="text-xs font-bold text-white mt-1">Glove-Less Isolator Filling</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Eliminates human particulate shedding.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-2xl font-black text-emerald-400">2,000 L</div>
                  <div className="text-xs font-bold text-white mt-1">Perfusion Bioreactor Trains</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Continuous single-use cell culture.</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/manufacturing"
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:text-teal-300 group"
                >
                  <span>Explore manufacturing facilities and quality metrics</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200"
                  alt="Robotic pharmaceutical cleanroom manufacturing line"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs text-slate-300">
                  <span className="font-bold text-white block mb-0.5">
                    Ringaskiddy Bioprocess Center (Cork, Ireland)
                  </span>
                  Continuous monoclonal antibody purification & viral clearance suites.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* EDITORIAL NEWS & INSIGHTS */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionHeader
                badge="Editorial & Research"
                title="Latest Scientific Publications & Corporate Insights"
                description="Original articles and whitepapers exploring next-generation drug delivery, green chemistry, and bioprocess engineering."
                align="left"
              />
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 flex-shrink-0 mb-12"
            >
              <span>View All Publications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-teal-300 transition-all flex flex-col group cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
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

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 mb-2">
                      {article.date} • {article.readTime}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">
                      By {article.author.name}
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

      {/* PARTNERSHIP & BUSINESS INQUIRY CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-pharma-950 via-pharma-900 to-pharma-850 text-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950 border border-teal-500/40 text-teal-300 mb-6">
            <Share2 className="w-3.5 h-3.5 text-teal-400" />
            <span>Strategic Alliances & Out-Licensing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Partner With Us to Accelerate Breakthrough Science.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            We collaborate with leading academic medical centers, biotechnology firms, and healthcare institutions to license investigational assets, expand clinical trials, and engineer custom conjugate vectors.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider bg-teal-500 hover:bg-teal-400 text-pharma-950 shadow-glow-teal hover:shadow-teal-400/50 transition-all duration-200"
            >
              <span>Initiate Partnering Dialogue</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
            >
              <span>About Our Organization</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

    </div>
  );
};
