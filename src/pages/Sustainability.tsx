import React from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { 
  Leaf, 
  Droplet, 
  Sun, 
  Users, 
  ShieldCheck, 
  Heart, 
  Globe2, 
  Recycle,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const Sustainability: React.FC = () => {
  const esgPillars = [
    {
      title: 'Green Chemistry & Solvent Minimization',
      category: 'Environmental',
      icon: Leaf,
      desc: 'Transitioning from petroleum-derived polar aprotic solvents (such as DMF and DCM) to bio-based cyclopentyl methyl ether (CPME) and water-micellar peptide coupling systems.',
      metrics: '62% Reduction in Hazardous Volatile Solvents (Pilot Goal)'
    },
    {
      title: 'Closed-Loop Water for Injection (WFI)',
      category: 'Environmental',
      icon: Droplet,
      desc: 'Our Cork and Basel bioprocess facilities deploy state-of-the-art reverse osmosis and multi-effect distillation systems that recycle 84% of process rinse waters.',
      metrics: '84% Industrial Water Re-circulation Efficiency'
    },
    {
      title: '100% Renewable Biomanufacturing Power',
      category: 'Environmental',
      icon: Sun,
      desc: 'Operating our Cambridge discovery campus and European continuous manufacturing suites on verified renewable wind and photovoltaic grid power purchase agreements.',
      metrics: '100% Scope 1 & 2 Renewable Electricity Transition'
    },
    {
      title: 'Global Clinical Trial Inclusivity',
      category: 'Social Responsibility',
      icon: Users,
      desc: 'Structuring multi-center trials across North America, Europe, and Asia-Pacific to guarantee that investigational demographic cohorts reflect the actual patient populations affected by disease.',
      metrics: 'Multi-lingual patient advocates across all trial sites'
    },
    {
      title: 'Rare Disease Compassionate Access',
      category: 'Social Responsibility',
      icon: Heart,
      desc: 'Establishing compassionate early-access pathways for critically ill patients who lack standard therapeutic alternatives, reviewed by independent bioethics committees.',
      metrics: 'Ethics board reviewed compassionate protocol framework'
    },
    {
      title: 'Transparent Bioethics & Data Governance',
      category: 'Corporate Governance',
      icon: ShieldCheck,
      desc: 'Adhering to public clinical trial registries, unblinded safety monitoring boards (DSMBs), and publication of both positive and negative experimental findings.',
      metrics: '100% Trial Protocol Transparency Registry Compliance'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-pharma-950 text-white py-16 sm:py-20 border-b border-pharma-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Sustainability & Corporate Responsibility' }]} theme="dark" />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950 border border-teal-500/40 text-teal-300 mb-4">
              <Leaf className="w-3.5 h-3.5 text-teal-400" />
              <span>ESG Commitment & Ethical Science</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Sustainability & Responsible Healthcare
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Advancing human health must not come at the expense of our planetary ecosystem. Discover our initiatives in green chemistry, trial inclusivity, and transparent bioethics.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="ESG Framework"
            title="Translating Corporate Responsibility into Measurable Action"
            description="Our three core pillars—Environmental Stewardship, Social Equity, and Transparent Governance—guide our long-term research priorities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {esgPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-400 hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-pharma-900 text-teal-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                        {p.category}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <span className="text-xs font-bold text-teal-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>{p.metrics}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Green Chemistry Spotlight */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block">
                Technical Innovation in Green Chemistry
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Decarbonizing Peptide Synthesis and Conjugation Chemistry.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Biopharmaceutical manufacturing historically required extensive quantities of harsh organic solvents to maintain peptide solubility during chemical synthesis. By developing water-based micellar surfactants, our chemical engineers synthesize complex conjugate peptides using non-toxic aqueous solutions.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Recycle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Closed-Loop Solvent Recovery</h4>
                    <p className="text-xs text-slate-400">On-site fractional distillation towers achieving 91% solvent re-capture in our pilot facilities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Biodegradable Packaging Blisters</h4>
                    <p className="text-xs text-slate-400">Evaluating bio-based polylactic acid (PLA) secondary packaging to phase out non-recyclable PVC laminates.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200"
                  alt="Ecological and sustainable biotechnology practices"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Demonstrative Disclaimer */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center text-xs text-slate-500">
          <p>
            <strong className="text-slate-700">Demonstration Disclosure: </strong>
            All environmental figures, sustainability benchmarks, and operational metrics described on this page are modeled examples illustrating best-in-class pharmaceutical ESG reporting for website demonstration purposes.
          </p>
        </div>
      </section>

    </div>
  );
};
