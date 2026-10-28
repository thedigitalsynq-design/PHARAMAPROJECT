import React from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { 
  MANUFACTURING_CAPABILITIES, 
  PROCESS_PILLARS, 
  QUALITY_STANDARDS, 
  MANUFACTURING_FACILITIES 
} from '../data/manufacturing';
import { 
  Factory, 
  Cpu, 
  Filter, 
  ShieldCheck, 
  Radio, 
  Building2, 
  CheckCircle2, 
  MapPin, 
  Sparkles,
  Leaf,
  Layers
} from 'lucide-react';

export const Manufacturing: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-pharma-950 text-white py-16 sm:py-20 border-b border-pharma-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Manufacturing & Quality' }]} theme="dark" />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950 border border-teal-500/40 text-teal-300 mb-4">
              <Factory className="w-3.5 h-3.5 text-teal-400" />
              <span>Bioprocess Engineering & Sterile Fill-Finish</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Advanced Biomanufacturing & Quality Science
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Operating robotic Class A isolators, continuous single-use perfusion bioreactors, and real-time analytical spectroscopy to ensure unmatched product sterility and batch reproducibility.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Philosophy Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block">
                Quality Management Philosophy
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Quality by Design (QbD) and Process Analytical Technology.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {MANUFACTURING_CAPABILITIES.qualityPhilosophy}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than testing for deviations at the conclusion of weeks-long runs, inline Raman spectroscopy and real-time hydrodynamic sensors monitor Critical Quality Attributes (CQAs) at millisecond intervals, automatically tuning feed rates to maintain identical glycosylation and folding profiles.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-teal-700">0.00%</div>
                  <div className="text-xs font-bold text-slate-900 mt-1">Sterility Compromise Tolerance</div>
                  <div className="text-[11px] text-slate-500">Robotic barrier isolation</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-emerald-700">&gt;6 Log10</div>
                  <div className="text-xs font-bold text-slate-900 mt-1">Viral Clearance Benchmark</div>
                  <div className="text-[11px] text-slate-500">Multi-tier nano-filtration</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200"
                  alt="Aseptic robotic pharmaceutical manufacturing fill finish"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white text-xs">
                  <p className="font-bold text-sm mb-0.5">
                    Class A (ISO 4.8) Robotic Isolator Envelope
                  </p>
                  Sterile fill-finish with zero direct human operator intervention.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4-Step Production Workflow */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Standard Operating Procedure"
            title="The Four Pillars of Our Sterile Bioprocess Flow"
            description="From initial cell bank inoculation through continuous chromatography and GPS cold distribution."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_PILLARS.map((pillar) => (
              <div
                key={pillar.step}
                className="p-6 rounded-2xl bg-pharma-950 border border-slate-800 hover:border-teal-400 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-teal-400 font-mono">
                      {pillar.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 text-teal-300 flex items-center justify-center">
                      {pillar.step === '01' && <Cpu className="w-4 h-4" />}
                      {pillar.step === '02' && <Filter className="w-4 h-4" />}
                      {pillar.step === '03' && <ShieldCheck className="w-4 h-4" />}
                      {pillar.step === '04' && <Radio className="w-4 h-4" />}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <span className="text-[11px] font-semibold text-teal-300 block">
                    {pillar.metrics}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Quality Control & Analytical Testing Standards */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Quality Assurance"
            title="Comprehensive Analytical Testing Protocols"
            description="Every drug substance batch undergoes rigorous physico-chemical, structural, and microbiological verification before release."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {QUALITY_STANDARDS.map((std, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                      {std.badge}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {std.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {std.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Manufacturing Facilities Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Global Production Network"
            title="Specialized Biomanufacturing Facilities"
            description="Strategic geographic redundancy across North America and Europe ensuring continuous clinical supply resilience."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MANUFACTURING_FACILITIES.map((facility, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                    <Building2 className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-1">
                    {facility.location}
                  </h3>
                  <p className="text-xs text-teal-700 font-semibold mb-3">
                    {facility.focus}
                  </p>

                  <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div>
                      <span className="font-semibold text-slate-800">Cleanroom Scale: </span>
                      {facility.area}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Key Equipment: </span>
                      {facility.equipment}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                  Operates under Class A/B cleanroom protocols (Demonstration Profile)
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-4 rounded-xl bg-slate-100 border border-slate-200 text-center max-w-2xl mx-auto text-xs text-slate-500">
            {MANUFACTURING_CAPABILITIES.disclaimer}
          </div>

        </div>
      </section>

    </div>
  );
};
