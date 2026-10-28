import React, { useState } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PIPELINE_PROJECTS, RESEARCH_PHILOSOPHY, RESEARCH_PLATFORMS } from '../data/research';
import { PipelineProject } from '../types';
import { 
  Activity, 
  Dna, 
  Layers, 
  Link as LinkIcon, 
  Radio, 
  Wind, 
  ShieldCheck, 
  Share2, 
  ChevronRight, 
  Filter, 
  Info,
  CheckCircle2,
  Atom
} from 'lucide-react';

export const Research: React.FC = () => {
  const [activePhase, setActivePhase] = useState<string>('all');
  const [activeModality, setActiveModality] = useState<string>('all');

  const phases = ['All Phases', 'Discovery', 'Preclinical', 'Phase I', 'Phase II', 'Phase III'];

  const filteredPipeline = PIPELINE_PROJECTS.filter((p) => {
    if (activePhase !== 'all' && p.phase !== activePhase) return false;
    if (activeModality !== 'all' && p.modality !== activeModality) return false;
    return true;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-pharma-950 text-white py-16 sm:py-20 border-b border-pharma-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'R&D Pipeline & Platforms' }]} theme="dark" />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950 border border-teal-500/40 text-teal-300 mb-4">
              <Atom className="w-3.5 h-3.5 text-teal-400" />
              <span>Translational Pipeline & Discovery Platforms</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Research & Development Pipeline
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Advancing multi-modality therapeutic candidates through hypothesis-driven biophysical design, site-specific conjugate chemistry, and rigorous multi-center clinical trials.
            </p>
          </div>
        </div>
      </section>

      {/* Research Philosophy Overview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-2">
              Our Discovery Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {RESEARCH_PHILOSOPHY.tagline}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {RESEARCH_PHILOSOPHY.statement}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESEARCH_PHILOSOPHY.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-400 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-pharma-900 text-teal-400 flex items-center justify-center mb-4">
                  {idx === 0 && <Layers className="w-5 h-5" />}
                  {idx === 1 && <Share2 className="w-5 h-5" />}
                  {idx === 2 && <Activity className="w-5 h-5" />}
                  {idx === 3 && <ShieldCheck className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Clinical Pipeline Tracker */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950 border border-teal-500/40 text-teal-300 mb-2">
                <Activity className="w-3.5 h-3.5 text-teal-400" />
                <span>Clinical Radar</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Active Investigational Pipeline Tracker
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Filter by trial phase to inspect target mechanisms, modalities, and anticipated milestones.
              </p>
            </div>

            {/* Phase Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {phases.map((ph) => {
                const isAll = ph === 'All Phases';
                const phaseVal = isAll ? 'all' : ph;
                const isActive = activePhase === phaseVal;
                return (
                  <button
                    key={ph}
                    onClick={() => setActivePhase(phaseVal)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-teal-500 text-pharma-950 shadow-glow-teal font-bold'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {ph}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pipeline Table / Cards */}
          <div className="space-y-4">
            {filteredPipeline.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-pharma-950/80 border border-slate-800 hover:border-teal-500/50 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-md"
              >
                {/* Compound & Target */}
                <div className="lg:w-2/5 space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg font-extrabold text-white tracking-tight">
                      {project.compound}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-teal-300 border border-slate-700">
                      {project.modality}
                    </span>
                  </div>
                  <div className="text-xs text-teal-400 font-medium">
                    Molecular Target: {project.target}
                  </div>
                  <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                    {project.indication}
                  </p>
                  <p className="text-[11px] text-slate-400 italic">
                    {project.description}
                  </p>
                </div>

                {/* Progress Visualizer */}
                <div className="lg:w-2/5">
                  <div className="grid grid-cols-5 gap-2 text-center text-[10px] font-bold">
                    {['Discovery', 'Preclinical', 'Phase I', 'Phase II', 'Phase III'].map((ph, idx) => {
                      const phaseRanks = ['Discovery', 'Preclinical', 'Phase I', 'Phase II', 'Phase III'];
                      const currentRank = phaseRanks.indexOf(project.phase);
                      const isCompleted = idx <= currentRank;
                      const isCurrent = idx === currentRank;

                      return (
                        <div key={ph} className="flex flex-col items-center">
                          <div
                            className={`w-full h-2.5 rounded-full mb-1 transition-all ${
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
                                ? 'text-teal-300 font-black'
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

                {/* Expected Milestone */}
                <div className="lg:w-1/5 bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Target Milestone
                  </span>
                  <span className="text-xs font-semibold text-teal-300 block">
                    {project.milestoneExpected}
                  </span>
                  {project.partner && (
                    <span className="text-[10px] text-slate-400 block mt-1">
                      Co-dev: {project.partner}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center text-xs text-slate-400">
            <span className="text-teal-400 font-bold">Illustrative Demonstration Notice: </span>
            The clinical trials and compounds presented in this pipeline are fictional representations created for web portfolio modeling.
          </div>

        </div>
      </section>

      {/* Proprietary Scientific Platforms */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Engineered Delivery"
            title="Proprietary Scientific Delivery Platforms"
            description="Overcoming physiological delivery barriers through proprietary linker conjugation, blood-brain transcytosis, and aerodynamic pulmonary formulations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESEARCH_PLATFORMS.map((platform, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-pharma-900 text-teal-400 flex items-center justify-center mb-6 shadow-sm">
                    {idx === 0 && <LinkIcon className="w-6 h-6" />}
                    {idx === 1 && <Radio className="w-6 h-6" />}
                    {idx === 2 && <Wind className="w-6 h-6" />}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 block mb-1">
                    {platform.type}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {platform.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Core Platform Capabilities:
                  </span>
                  {platform.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Research Ethics & Clinical Trial Stewardship */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Uncompromising Research Ethics & Trial Participant Protection
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Novalyte adheres strictly to the International Council for Harmonisation (ICH) E6 Good Clinical Practice standards, independent Institutional Review Boards (IRBs), and multi-lingual informed consent. We publish protocol summaries and outcome metrics in open clinical trial registries to foster scientific transparency.
          </p>
        </div>
      </section>

    </div>
  );
};
