import { LeadershipMember, GlobalOffice } from '../types';

export const COMPANY_INFO = {
  name: 'Novalyte BioPharma',
  tagline: 'Advancing Molecular Science. Enabling Global Health.',
  founded: 2012,
  headquarters: 'Cambridge, Massachusetts, USA',
  mission: 'To discover, engineer, and manufacture transformative molecular therapeutics that overcome historically intractable biological barriers and meaningfully extend human longevity.',
  vision: 'A world where severe chronic and degenerative diseases are intercepted at their molecular origins with targeted, minimally disruptive therapies.',
  values: [
    {
      title: 'Scientific Rigor & Integrity',
      description: 'Every formulation hypothesis is subjected to reproducible, hypothesis-driven inquiry and data transparency.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Precision Formulation',
      description: 'Engineering nanocarriers and targeted delivery mechanisms that maximize therapeutic index while minimizing systemic burden.',
      icon: 'Atom'
    },
    {
      title: 'Patient-First Responsibility',
      description: 'Directing our pipeline toward profound unmet medical needs with uncompromising safety margins and clinical diligence.',
      icon: 'HeartHandshake'
    },
    {
      title: 'Sustainable Biomanufacturing',
      description: 'Minimizing environmental solvent footprints and optimizing closed-loop bioreactor efficiencies across all facilities.',
      icon: 'Leaf'
    }
  ],
  stats: [
    { value: '14+', label: 'Active Pipeline Assets', subtext: 'Spanning Discovery to Phase III' },
    { value: '4', label: 'Specialized Bioprocess Centers', subtext: 'ISO & Cleanroom Class A/B standard' },
    { value: '850+', label: 'Dedicated Scientists & Engineers', subtext: 'Across North America, Europe, & APAC' },
    { value: '42', label: 'Peer-Reviewed Patents & Filings', subtext: 'In novel conjugate delivery systems' }
  ],
  disclaimerNotice: 'DISCLAIMER: Novalyte BioPharma is an illustrative, fictional biotechnology company created for demonstration and portfolio purposes. None of the compounds, clinical trial results, or medical specifications represent real-world commercial medicines or medical advice.'
};

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: 'dr-elena-vance',
    name: 'Dr. Elena Vance, M.D., Ph.D.',
    title: 'Chief Executive Officer & Founder',
    department: 'Executive Leadership',
    bio: 'Dr. Vance has spearheaded molecular medicine programs for over 22 years, previously leading translational oncology platforms and publishing extensively on antibody-drug conjugation.',
    education: 'M.D. Harvard Medical School, Ph.D. in Cellular Biology MIT',
    previousExperience: 'Former VP of Molecular Oncology at Cambridge BioLabs',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    fictionalNote: 'Fictional Executive Profile'
  },
  {
    id: 'dr-marcus-thorne',
    name: 'Dr. Marcus Thorne, Ph.D.',
    title: 'Chief Scientific Officer',
    department: 'Research & Discovery',
    bio: 'Pioneered computational protein folding models and lipid nanoparticle encapsulation technologies that form the cornerstone of Novalyte’s proprietary NovaCarrier™ delivery platform.',
    education: 'Ph.D. in Biochemistry & Biophysics, Stanford University',
    previousExperience: 'Principal Fellow at European Molecular Biology Laboratory',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    fictionalNote: 'Fictional Executive Profile'
  },
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins, M.S., RAC',
    title: 'EVP, Global Regulatory Affairs & Compliance',
    department: 'Regulatory & Governance',
    bio: 'Oversees global clinical protocol harmonization and regulatory filings with international health authorities, ensuring rigorous compliance across multi-center global studies.',
    education: 'M.S. in Regulatory Science, Johns Hopkins University',
    previousExperience: '20+ years navigating FDA, EMA, and PMDA review cycles',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    fictionalNote: 'Fictional Executive Profile'
  },
  {
    id: 'henri-duval',
    name: 'Henri Duval, Eng.',
    title: 'Senior Vice President of Advanced Biomanufacturing',
    department: 'Manufacturing Operations',
    bio: 'Leads our continuous aseptic processing infrastructure, automated vial-filling isolators, and closed-system bioreactor deployment across our global manufacturing sites.',
    education: 'M.Sc. in Biochemical Engineering, ETH Zurich',
    previousExperience: 'Director of Sterile Operations at Swiss Pharma Group',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    fictionalNote: 'Fictional Executive Profile'
  },
  {
    id: 'dr-priya-nair',
    name: 'Dr. Priya Nair, M.D.',
    title: 'Chief Medical Officer',
    department: 'Clinical Development',
    bio: 'Specialist in pulmonary biology and inflammatory cascade modulation. Directs multi-phase clinical trial designs, biomarker validation, and patient safety advisory panels.',
    education: 'M.D. Oxford University, Fellowship in Clinical Pharmacology',
    previousExperience: 'Senior Clinical Investigator at Imperial College Healthcare',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    fictionalNote: 'Fictional Executive Profile'
  },
  {
    id: 'arthur-pendleton',
    name: 'Arthur Pendleton, MBA, CPA',
    title: 'Chief Financial Officer & Corporate Development',
    department: 'Finance & Strategy',
    bio: 'Steers capital allocation, global licensing partnerships, and R&D capital expenditure with a track record of executing strategic life-science alliances.',
    education: 'MBA The Wharton School, B.S. in Economics Georgetown University',
    previousExperience: 'Managing Director, Healthcare Investment Banking Group',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    fictionalNote: 'Fictional Executive Profile'
  }
];

export const GLOBAL_OFFICES: GlobalOffice[] = [
  {
    city: 'Cambridge',
    country: 'United States',
    type: 'Global Headquarters & R&D Hub',
    address: '450 Kendall Bio Square, Suite 800, Cambridge, MA 02142',
    coordinates: '42.3626° N, 71.0843° W',
    phone: '+1 (617) 555-0194 (Demo)',
    email: 'inquiries.cambridge@novalyte-demo.org'
  },
  {
    city: 'Basel',
    country: 'Switzerland',
    type: 'European Clinical Operations',
    address: 'Hochbergerstrasse 60B, 4057 Basel, Switzerland',
    coordinates: '47.5739° N, 7.5901° E',
    phone: '+41 61 555 0142 (Demo)',
    email: 'clinical.europe@novalyte-demo.org'
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    type: 'Asia-Pacific Commercial & Supply',
    address: '10 Biopolis Way, Nucleos Tower, Singapore 138670',
    coordinates: '1.3005° N, 103.7915° E',
    phone: '+65 6555 0188 (Demo)',
    email: 'supply.apac@novalyte-demo.org'
  },
  {
    city: 'Cork',
    country: 'Ireland',
    type: 'Advanced Biologics Facility',
    address: 'Ringaskiddy Life Sciences Park, Co. Cork, Ireland',
    coordinates: '51.8340° N, 8.3101° W',
    phone: '+353 21 555 0110 (Demo)',
    email: 'manufacturing.cork@novalyte-demo.org'
  }
];
