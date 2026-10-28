import React, { useState } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { GLOBAL_OFFICES } from '../data/company';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldAlert, 
  Building2, 
  Globe, 
  ArrowUpRight,
  Clock
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    department: 'Partnering & Licensing',
    subject: '',
    message: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const departments = [
    'Partnering & Out-Licensing',
    'Clinical Trial Collaboration',
    'Scientific & Medical Affairs',
    'Biomanufacturing & Supply Chain',
    'Corporate Communications & Media',
    'General Information'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please complete all required fields.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please enter a valid professional email address.');
      return;
    }
    if (!formData.consent) {
      setError('Please confirm that you understand this is a fictional demonstration interface.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-pharma-950 text-white py-16 sm:py-20 border-b border-pharma-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Contact & Inquiries' }]} theme="dark" />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950 border border-teal-500/40 text-teal-300 mb-4">
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>Global Communications & Alliances</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Connect with Novalyte BioPharma
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Reach our corporate development, translational clinical teams, and global bioprocess facilities across North America, Europe, and Asia-Pacific.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Office Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
                Direct Inquiry Intake
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                Initiate a Conversation
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-8">
                Select your inquiry department to route your inquiry to the relevant scientific or strategic committee.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 space-y-4 animate-in fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-teal-950">Inquiry Simulation Acknowledged</h3>
                      <p className="text-xs text-teal-700">Client-side demonstration validation passed.</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-teal-800 leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your message for <em>{formData.department}</em> regarding "{formData.subject || 'Strategic Inquiry'}" has been simulated. Because Novalyte BioPharma is a demonstration portfolio prototype, no actual email will be sent or recorded.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        organization: '',
                        department: 'Partnering & Licensing',
                        subject: '',
                        message: '',
                        consent: false
                      });
                    }}
                    className="text-xs font-bold text-teal-700 hover:underline pt-2 block"
                  >
                    Submit another test inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Dr. Katherine Miller"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Professional Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="k.miller@institution.org"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Affiliated Organization / Hospital
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Metropolitan Oncology Center"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Target Department *
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
                      >
                        {departments.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject / Project Scope *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Co-development inquiry for Phase II ADC protocol"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Inquiry Narrative *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide an overview of your organization's scientific background or inquiry..."
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 rounded text-teal-600 focus:ring-teal-500"
                    />
                    <label htmlFor="consent" className="text-xs text-slate-600">
                      I acknowledge that Novalyte BioPharma is a fictional company website demonstration and that this form does not transmit confidential health information or real patient inquiries. *
                    </label>
                  </div>

                  {error && <p className="text-xs text-rose-600 font-semibold">{error}</p>}

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-teal-500 hover:bg-teal-400 text-pharma-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-glow-teal flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry for Review</span>
                  </button>
                </form>
              )}
            </div>

            {/* Global Centers Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Critical Safety Notice */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-800">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  <span>CRITICAL MEDICAL NOTICE</span>
                </div>
                <p className="leading-relaxed">
                  This website does NOT provide medical advice, emergency triage, or adverse event intake. If you or someone you know is experiencing a medical emergency, please call your local emergency emergency number immediately.
                </p>
              </div>

              {/* Global Offices */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-teal-600" />
                  Global Operating Centers (Mock)
                </h3>

                <div className="space-y-4">
                  {GLOBAL_OFFICES.map((office) => (
                    <div
                      key={office.city}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs text-slate-600"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-slate-900 text-sm">
                          {office.city}, {office.country}
                        </span>
                        <span className="text-[10px] font-mono text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                          {office.type.split(' ')[0]}
                        </span>
                      </div>
                      <p className="text-slate-500 text-[11px] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        {office.address}
                      </p>
                      <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500 border-t border-slate-200/60">
                        <span>{office.phone}</span>
                        <span className="text-teal-700 font-medium">{office.email}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-5 rounded-2xl bg-pharma-950 text-white space-y-2 text-xs">
                <div className="flex items-center gap-2 text-teal-300 font-bold">
                  <Clock className="w-4 h-4" />
                  <span>Central Operations Desk</span>
                </div>
                <p className="text-slate-300">
                  Monday – Friday: 08:00 – 18:00 EST / CET (Demonstration Schedule)
                </p>
                <p className="text-slate-400 text-[11px]">
                  All demo inquiries receive simulated responses within 24 business hours.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
