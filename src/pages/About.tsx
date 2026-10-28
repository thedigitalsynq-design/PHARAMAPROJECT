import React, { useState } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { LeadershipModal } from '../components/ui/LeadershipModal';
import { COMPANY_INFO, LEADERSHIP_TEAM } from '../data/company';
import { LeadershipMember } from '../types';
import { 
  Dna, 
  Target, 
  ShieldCheck, 
  Compass, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Award,
  FileText
} from 'lucide-react';

export const About: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<LeadershipMember | null>(null);

  const milestones = [
    {
      year: '2012',
      title: 'Founding & Target Chemistry Core',
      desc: 'Founded in Cambridge, Massachusetts by Dr. Elena Vance to explore enzyme-cleavable linker chemistry for cytotoxic warheads.'
    },
    {
      year: '2016',
      title: 'NovaLinker™ Platform Validation',
      desc: 'Demonstrated sub-nanomolar targeting specificity in preclinical xenograft models, securing Series A and university co-development alliances.'
    },
    {
      year: '2019',
      title: 'European Expansion in Basel & Cork',
      desc: 'Commissioned our Basel formulation facility and broke ground on the Ringaskiddy Bioprocess Center for continuous perfusion operations.'
    },
    {
      year: '2022',
      title: 'Pivotal Phase III Initiation',
      desc: 'First patient dosed in multi-center clinical trials for lead ADC candidate NVL-702 and subcutaneous autoimmune biologic NVL-540.'
    },
    {
      year: '2024',
      title: 'AeroMatrix™ Pulmonary Delivery',
      desc: 'Patented engineered dry powder micro-particles capable of deep lung deposition with negligible systemic glucocorticoid absorption.'
    },
    {
      year: '2026',
      title: 'Global Molecular Leadership',
      desc: 'Operating 4 bioprocess centers with over 850 researchers and engineers committed to solving intractable human diseases.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-pharma-950 text-white py-16 sm:py-20 border-b border-pharma-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'About Us' }]} theme="dark" />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950 border border-teal-500/40 text-teal-300 mb-4">
              <Dna className="w-3.5 h-3.5 text-teal-400" />
              <span>Corporate Heritage & Scientific Vision</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Advancing Molecular Science. Enabling Global Health.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We bring disciplined biophysical inquiry, modern automated biomanufacturing, and an ethical commitment to quality together to serve the evolving imperatives of modern healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Editorial Overview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Our Corporate Origins
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Founded on the Premise that Precision Delivery Changes Everything.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Historically, the pharmaceutical industry faced a difficult trade-off: high therapeutic efficacy almost invariably came at the expense of severe off-target toxicity. Novalyte BioPharma was founded to challenge this paradigm.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                By focusing on the bio-conjugate interface—the chemistry that links a targeting antibody or peptide to its bioactive payload—our scientists engineered vectors that travel inertly through blood circulation, releasing active molecules exclusively inside pathological cellular environments.
              </p>
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Core Guiding Principles
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Hypothesis-driven rigor</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Open scientific peer review</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Aseptic continuous quality</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Patient-first safety metrics</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200"
                  alt="Novalyte scientists collaborating in analytical laboratory"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-6 right-6 text-white text-xs">
                  <p className="font-bold text-sm mb-1">
                    Kendall Bio Square R&D Center (Cambridge, MA)
                  </p>
                  Home to our primary computational biophysics and bioconjugation discovery groups.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Bento */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Strategic Foundations"
            title="Mission, Vision & Organizational Values"
            description="The pillars that define our corporate decisions, R&D capital allocation, and clinical ethics."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-5 font-bold">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-teal-800 font-semibold">
                Focused on Unmet Patient Realities
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-pharma-900 text-teal-300 flex items-center justify-center mb-5 font-bold">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-teal-800 font-semibold">
                Intercepting Pathologies Early
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">Governance & Ethics</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every pre-clinical trial and clinical protocol operates in strict alignment with Good Clinical Practice (GCP), Declaration of Helsinki tenets, and robust data transparency standards.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-emerald-800 font-semibold">
                Uncompromising Research Integrity
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Corporate Timeline */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Historical Trajectory"
            title="Fourteen Years of Scientific Breakthroughs"
            description="From an exploratory biotechnology incubation lab in Massachusetts to an internationally recognized biopharmaceutical innovator."
          />

          <div className="relative border-l-2 border-teal-500/40 ml-4 md:ml-32 space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Year Marker Badge on Left */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-pharma-950 border-4 border-white flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-1">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200 w-fit">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {m.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Executive Leadership"
            title="Led by Practicing Clinicians and Bioprocess Pioneers"
            description="Our executive committee brings together over a century of collective leadership across oncology, molecular biology, clinical pharmacology, and regulatory affairs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((leader) => (
              <div
                key={leader.id}
                onClick={() => setSelectedLeader(leader)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-400 transition-all duration-300 p-6 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-teal-500/30 group-hover:border-teal-500 transition-colors"
                    />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 block">
                        {leader.department}
                      </span>
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {leader.title}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 italic">
                    {leader.fictionalNote}
                  </span>
                  <span className="font-bold text-teal-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Full Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership Modal */}
      <LeadershipModal
        leader={selectedLeader}
        onClose={() => setSelectedLeader(null)}
      />

    </div>
  );
};
