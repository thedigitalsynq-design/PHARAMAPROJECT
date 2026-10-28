import React from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { ShieldAlert, AlertCircle, FileText, Lock, Info, CheckCircle2 } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-pharma-950 text-white py-16 sm:py-20 border-b border-pharma-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Legal Disclosures & Privacy' }]} theme="dark" />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950 border border-teal-500/40 text-teal-300 mb-4">
              <ShieldAlert className="w-3.5 h-3.5 text-teal-400" />
              <span>Mandatory Demonstration Declarations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Fictional Disclosures & Privacy Notice
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Transparent terms explaining the illustrative nature of Novalyte BioPharma, medical disclaimers, and data protection practices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section 1: Fictional Company Declaration */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-amber-700">
              <AlertCircle className="w-6 h-6 flex-shrink-0" />
              <h2 className="text-xl font-bold text-slate-900">
                1. Illustrative & Fictional Enterprise Notice
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Novalyte BioPharma</strong> is an entirely fictional corporate entity designed, formulated, and published strictly for website design, digital craft, and frontend engineering demonstration purposes.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              All company details, executive leadership names, bios, research compounds (e.g., NVL-702, OncoVance™, AeroLyte™, CardioNov™), clinical trial pipeline phases, scientific publications, certifications, and operational metrics are simulated artifacts. Any resemblance to real corporations, approved pharmaceuticals, or living individuals is purely coincidental.
            </p>
          </div>

          {/* Section 2: No Medical Advice */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-rose-700">
              <ShieldAlert className="w-6 h-6 flex-shrink-0" />
              <h2 className="text-xl font-bold text-slate-900">
                2. Explicit Medical Disclaimer
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              The content provided across this website is for informational and educational demonstration only. It does <strong>not</strong> constitute medical advice, medical diagnosis, treatment protocols, or pharmaceutical prescriptions.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc pl-5">
              <li>No doctor-patient relationship is established by visiting this site.</li>
              <li>None of the products described are approved for clinical administration or available for retail or hospital purchase.</li>
              <li>Always seek the advice of a licensed physician or other qualified healthcare provider with questions regarding medical symptoms or conditions.</li>
            </ul>
          </div>

          {/* Section 3: Adverse Event Reporting */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-teal-700">
              <FileText className="w-6 h-6 flex-shrink-0" />
              <h2 className="text-xl font-bold text-slate-900">
                3. Pharmacovigilance & Adverse Event Reporting
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              This demonstration website does <strong>not</strong> provide mechanisms to report adverse drug reactions, side effects, or product quality complaints for any genuine commercial pharmaceutical.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              If you believe you have experienced a side effect or adverse reaction to a prescribed medication, contact your treating physician, local hospital emergency room, or submit an official report to your national regulatory agency (such as the US FDA MedWatch program, UK MHRA Yellow Card scheme, or the European Medicines Agency).
            </p>
          </div>

          {/* Section 4: Privacy & Data Protection */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-pharma-900">
              <Lock className="w-6 h-6 flex-shrink-0" />
              <h2 className="text-xl font-bold text-slate-900">
                4. Privacy Policy & Static Architecture
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Novalyte BioPharma operates as a static client-side web application. We prioritize user privacy and adhere to the following architecture principles:
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span><strong>No Backend Databases:</strong> Interactive forms (contact inquiries, job applications, newsletter subscriptions) execute exclusively client-side simulated checks without saving data to remote databases.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span><strong>No Third-Party Ad Trackers:</strong> We do not deploy invasive cross-site marketing cookies, pixel trackers, or commercial fingerprinting scripts.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span><strong>Static Hosting Ready:</strong> Built to deploy on high-performance edge content delivery networks (such as Cloudflare Pages) with strict HTTP security headers.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
