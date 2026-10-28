export const MANUFACTURING_CAPABILITIES = {
  headline: 'Precision Bioprocess Engineering & Sterile Fill-Finish',
  subheadline: 'From single-use closed-loop bioreactors to robotic aseptic isolators, our facilities operate at the cutting edge of modern pharmaceutical manufacturing science.',
  qualityPhilosophy: 'Quality is not merely inspected at the culmination of a production run; it is designed into every stage of synthesis, purification, and cold distribution through Quality by Design (QbD) principles and Process Analytical Technology (PAT).',
  disclaimer: 'DEMONSTRATION FACILITY PROFILE: Technical descriptions, operational metrics, and facility specifications reflect illustrative standard biopharma manufacturing engineering for demonstration purposes and do not represent verified certified production audits of a commercial facility.'
};

export const PROCESS_PILLARS = [
  {
    step: '01',
    title: 'Closed-System Upstream Bioprocessing',
    description: 'Utilizing 2,000L single-use perfusion bioreactors with automated dissolved oxygen, pH, and nutrient feed telemetry. Closed system architecture prevents ambient contamination risks while maximizing titer yields.',
    metrics: '99.4% Batch Reproducibility Rate (Simulated)',
    icon: 'Cpu'
  },
  {
    step: '02',
    title: 'Multi-Column Continuous Downstream Purification',
    description: 'Automated chromatography skids with real-time UV/vis spectroscopic monitoring, membrane ultrafiltration, and nano-filtration steps for viral clearance exceeding international log-reduction benchmarks.',
    metrics: '>6 Log10 Viral Clearance (Model Benchmark)',
    icon: 'Filter'
  },
  {
    step: '03',
    title: 'Robotic Aseptic Isolator Fill-Finish',
    description: 'Class A (ISO 4.8) isolator filling line equipped with glove-less gloveless robotic arms, continuous particulate monitoring, and 100% automated high-speed visual inspection for particulate and container closure integrity.',
    metrics: '0.00% Sterility Breach Tolerances',
    icon: 'ShieldCheck'
  },
  {
    step: '04',
    title: 'End-to-End Cold-Chain IoT Telemetry',
    description: 'Continuous real-time temperature, humidity, and shock-monitoring sensor arrays embedded across global shipping containers from bulk drug substance storage to point-of-dispense clinical repositories.',
    metrics: '24/7 Global GPS & Thermal Logging',
    icon: 'Radio'
  }
];

export const QUALITY_STANDARDS = [
  {
    name: 'Analytical Chromatography Suite',
    desc: 'High-resolution UPLC, multi-angle light scattering (SEC-MALS), and peptide mapping by mass spectrometry to establish structural identity, purity, and charge variant profiles.',
    badge: 'Analytical Precision'
  },
  {
    name: 'Microbial & Endotoxin Rigor',
    desc: 'Rapid kinetic chromogenic LAL assays and automated sterility testing systems delivering verified pyrogen-free release profiles ahead of clinical batch release.',
    badge: 'Aseptic Verification'
  },
  {
    name: 'Process Analytical Technology (PAT)',
    desc: 'Inline Raman spectroscopy and near-infrared sensors providing instant feedback loops for critical quality attributes (CQAs) without interrupting manufacturing runs.',
    badge: 'Real-Time Release'
  },
  {
    name: 'Green Chemistry Solvents & Water Recycling',
    desc: 'Closed-circuit Water for Injection (WFI) loops and supercritical CO2 extraction protocols minimizing hazardous organic solvent consumption by 62% across our pilot facilities.',
    badge: 'Eco-Efficiency'
  }
];

export const MANUFACTURING_FACILITIES = [
  {
    location: 'Cambridge Bioscience Campus (MA, USA)',
    focus: 'Translational Pilot Plant & Small-Batch Clinical Trials Formulation',
    area: '48,000 sq ft Cleanroom Footprint',
    equipment: 'Single-Use Bioreactors (50L–500L), Cryo-Lyophilization Chambers'
  },
  {
    location: 'Ringaskiddy Bioprocess Center (Cork, Ireland)',
    focus: 'Commercial-Scale Monoclonal Antibody & ADC Conjugation',
    area: '120,000 sq ft Advanced Facility',
    equipment: 'Dual-Train 2,000L Perfusion Systems, Robotic Glove-less Isolators'
  },
  {
    location: 'Basel Precision Formulation Lab (Switzerland)',
    focus: 'AeroMatrix™ Pulmonary Dry Powders & Micro-Encapsulation',
    area: '35,000 sq ft Specialized Facility',
    equipment: 'Controlled Spray-Freeze Dryers, Jet Milling & Micronization Units'
  }
];
