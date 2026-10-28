import { JobOpening } from '../types';

export const CULTURE_PILLARS = [
  {
    title: 'Intellectual Autonomy & Bold Inventions',
    desc: 'We empower scientists and engineers to pursue high-risk, paradigm-shifting hypotheses with dedicated exploratory laboratory time.',
    icon: 'Compass'
  },
  {
    title: 'Radical Scientific Integrity',
    desc: 'Uncompromising dedication to peer reproducibility, negative result sharing, and objective data-first decision frameworks.',
    icon: 'FileCheck'
  },
  {
    title: 'Cross-Disciplinary Synergy',
    desc: 'Computational biologists, organic chemists, process engineers, and regulatory specialists collaborating in friction-free discovery pods.',
    icon: 'Users'
  },
  {
    title: 'Comprehensive Well-Being',
    desc: 'Holistic mental and physical wellness support, generous parental leave, educational grants, and flexible modern working models.',
    icon: 'Heart'
  }
];

export const BENEFITS = [
  'Comprehensive global health, dental & vision coverage',
  'Annual $6,000 continuous education & scientific conference stipend',
  'Hybrid and flexible working frameworks for non-wet-lab positions',
  'Competitive equity ownership & patent bonus incentive programs',
  '401(k) / Pension matching up to 8% with immediate vesting',
  'Dedicated mental health days and fully paid sabbatical opportunities'
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'lead-adc-bioconjugation-chemist',
    title: 'Principal Scientist, ADC Bioconjugation Chemistry',
    department: 'R&D Discovery',
    location: 'Cambridge, MA (USA)',
    type: 'Full-Time',
    experienceLevel: 'Principal Scientist',
    summary: 'Lead our synthetic conjugate chemistry team in designing novel hydrophilic linkers and site-specific enzymatic conjugation protocols for next-generation antibody-drug conjugates.',
    responsibilities: [
      'Design and synthesize novel cleavable and non-cleavable linkers for high-potency warheads',
      'Optimize enzymatic and chemical site-specific conjugation methods (engineered cysteines, microbial transglutaminase)',
      'Direct analytical characterization of ADCs using LC-MS, HIC, SEC-MALS, and icIEF',
      'Collaborate closely with oncology pharmacology teams to interpret in vivo biodistribution and efficacy data'
    ],
    qualifications: [
      'Ph.D. in Organic Chemistry, Chemical Biology, or Medicinal Chemistry with 6+ years post-doctoral or biopharma industry experience',
      'Demonstrated track record of peer-reviewed publications or patents in bioconjugation chemistry',
      'Expertise in handling high-potency active pharmaceutical ingredients (HPAPIs) under safe isolator conditions'
    ]
  },
  {
    id: 'director-clinical-pharmacology',
    title: 'Director, Clinical Pharmacology & Translational Medicine',
    department: 'Clinical Operations',
    location: 'Basel, Switzerland',
    type: 'Hybrid',
    experienceLevel: 'Director',
    summary: 'Oversee translational PK/PD modeling, first-in-human dose escalation rationale, and biomarker strategy for early-phase clinical programs across Europe and North America.',
    responsibilities: [
      'Serve as clinical pharmacology lead across multiple investigational new drug (IND) submissions',
      'Design, analyze, and report Phase I/II clinical pharmacokinetic and pharmacodynamic endpoints',
      'Interface directly with regulatory health authorities (FDA, EMA, Swissmedic) on clinical study protocols',
      'Mentor and manage a multidisciplinary team of clinical pharmacologists and pharmacometricians'
    ],
    qualifications: [
      'Pharm.D., M.D., or Ph.D. in Clinical Pharmacology, Pharmacokinetics, or Pharmaceutical Sciences',
      '8+ years biopharmaceutical industry experience in oncology or immunology clinical development',
      'Proficiency in NONMEM, Phoenix WinNonlin, and R for PK/PD modeling and simulation'
    ]
  },
  {
    id: 'senior-bioprocess-engineer-upstream',
    title: 'Senior Bioprocess Engineer, Upstream Perfusion Operations',
    department: 'Bioprocess Manufacturing',
    location: 'Ringaskiddy, Cork (Ireland)',
    type: 'On-Site',
    experienceLevel: 'Staff Engineer',
    summary: 'Manage operations of our 2,000L single-use perfusion bioreactor trains and oversee tech transfer from pilot scale to commercial GMP sterile production.',
    responsibilities: [
      'Lead upstream cell culture scale-up and optimization in mammalian CHO perfusion systems',
      'Evaluate critical process parameters (CPPs) and implement automated inline PAT feedback loops',
      'Author and execute batch records, standard operating procedures, and deviation root-cause investigations',
      'Supervise cleanroom technician crews and guarantee Class A/B sterility compliance'
    ],
    qualifications: [
      'B.S. or M.S. in Biochemical Engineering, Biotechnology, or Chemical Engineering',
      '5+ years hands-on experience in mammalian cell culture bioreactors within a cGMP manufacturing setting',
      'Strong practical familiarity with single-use technologies (SUT) and automated DCS/SCADA control systems'
    ]
  },
  {
    id: 'lead-computational-biologist-ai',
    title: 'Staff Scientist, AI Structural Biology & Molecular Dynamics',
    department: 'Data Science & AI',
    location: 'Cambridge, MA or Remote (US)',
    type: 'Hybrid',
    experienceLevel: 'Staff Engineer',
    summary: 'Pioneer the application of deep learning protein folding models and accelerated molecular dynamics simulations to predict formulation stability and novel binding pockets.',
    responsibilities: [
      'Develop machine learning pipelines for predicting antibody deamidation, oxidation, and aggregation propensities',
      'Run microsecond-scale all-atom molecular dynamics on high-performance GPU clusters',
      'Collaborate with structural biologists to interpret Cryo-EM electron density maps and model ligand interactions',
      'Build internal web dashboards for wet-lab scientists to access in silico property predictions'
    ],
    qualifications: [
      'Ph.D. in Computational Biology, Biophysics, Bioinformatics, or Computer Science',
      'Proven mastery of Python, PyTorch, OpenMM/GROMACS, and modern structural bioinformatics tools (e.g., AlphaFold/ESM)',
      'Strong communication skills and enthusiasm for iterative collaborative science'
    ]
  },
  {
    id: 'associate-director-regulatory-affairs',
    title: 'Associate Director, Global Regulatory CMC & Compliance',
    department: 'Quality & Regulatory',
    location: 'Basel, Switzerland or London (UK)',
    type: 'Hybrid',
    experienceLevel: 'Director',
    summary: 'Drive Chemistry, Manufacturing, and Controls (CMC) regulatory strategies for biologic candidates, authoring Module 3 dossiers and managing health agency consultations.',
    responsibilities: [
      'Lead CMC regulatory submissions including INDs, IMPDs, CTDs, and briefing documents for scientific advice meetings',
      'Collaborate with analytical development and quality assurance to establish robust drug substance and drug product specifications',
      'Assess regulatory impacts of biomanufacturing process changes and scale-up strategies',
      'Maintain up-to-date surveillance on evolving international guidelines (ICH, FDA, EMA, WHO)'
    ],
    qualifications: [
      'Advanced degree in Life Sciences or Pharmacy with RAC certification preferred',
      '7+ years in pharmaceutical regulatory CMC, with specific depth in recombinant proteins or monoclonal antibodies',
      'Proven track record of successful interactions with European and US regulatory review panels'
    ]
  }
];
