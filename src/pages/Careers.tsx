import React, { useState, useMemo } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { JobModal } from '../components/ui/JobModal';
import { CULTURE_PILLARS, BENEFITS, JOB_OPENINGS } from '../data/careers';
import { JobOpening } from '../types';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  FileCheck, 
  Users, 
  Heart,
  Search,
  Filter,
  Sparkles
} from 'lucide-react';

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const departments = [
    'All Departments',
    'R&D Discovery',
    'Clinical Operations',
    'Bioprocess Manufacturing',
    'Data Science & AI',
    'Quality & Regulatory'
  ];

  const filteredJobs = useMemo(() => {
    return JOB_OPENINGS.filter((job) => {
      if (selectedDept !== 'all' && job.department !== selectedDept) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesLocation = job.location.toLowerCase().includes(q);
        const matchesDept = job.department.toLowerCase().includes(q);
        return matchesTitle || matchesLocation || matchesDept;
      }
      return true;
    });
  }, [selectedDept, searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-pharma-950 text-white py-16 sm:py-20 border-b border-pharma-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Careers & Culture' }]} theme="dark" />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950 border border-teal-500/40 text-teal-300 mb-4">
              <Briefcase className="w-3.5 h-3.5 text-teal-400" />
              <span>Join Novalyte BioPharma</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Shape the Future of Molecular Medicine
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We bring together synthetic chemists, structural biologists, process engineers, and clinical innovators dedicated to translating biological discoveries into life-altering patient therapies.
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Working Environment */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Our People & Culture"
            title="A Culture Founded on Intellectual Courage & Rigor"
            description="We foster an exploratory environment where unconventional hypotheses receive serious computational and wet-lab investigation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULTURE_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-pharma-900 text-teal-400 flex items-center justify-center mb-4">
                  {idx === 0 && <Compass className="w-5 h-5" />}
                  {idx === 1 && <FileCheck className="w-5 h-5" />}
                  {idx === 2 && <Users className="w-5 h-5" />}
                  {idx === 3 && <Heart className="w-5 h-5" />}
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

      {/* Benefits & Employee Value Proposition */}
      <section className="py-16 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block mb-2">
              Comprehensive Total Rewards
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Empowering You Beyond the Laboratory
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Competitive compensation packages designed to sustain long-term intellectual curiosity and personal vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Interactive Board */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
                Current Opportunities (Demonstration Roles)
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Explore Open Positions
              </h2>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => {
                const isAll = dept === 'All Departments';
                const deptVal = isAll ? 'all' : dept;
                const isActive = selectedDept === deptVal;
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(deptVal)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-teal-600 text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Job List Cards */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-1.5 md:w-3/4">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                      {job.department}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                      {job.type}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                      {job.experienceLevel}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-600" />
                    <span>{job.location}</span>
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-2 pt-1 leading-relaxed">
                    {job.summary}
                  </p>
                </div>

                <div className="md:w-1/4 flex md:justify-end">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-pharma-950 hover:bg-teal-600 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>View Role & Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200 text-center max-w-2xl mx-auto text-xs text-slate-500">
            <span className="font-bold text-slate-700">Demonstration Notice: </span>
            The job openings listed above are illustrative examples for this website portfolio prototype. Submitting candidate details runs a simulated validation test without external data submission.
          </div>

        </div>
      </section>

      {/* Job Details & Application Modal */}
      <JobModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />

    </div>
  );
};
