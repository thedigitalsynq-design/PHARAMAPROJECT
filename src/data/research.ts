import { PipelineProject } from '../types';

export const RESEARCH_PHILOSOPHY = {
  tagline: 'Rational Molecular Design Meets Translational Precision',
  statement: 'We discard empirical screening trial-and-error in favor of atomic-resolution structural biology, computational biophysics, and tissue-targeted delivery vectors that address the root biochemical triggers of disease.',
  pillars: [
    {
      title: 'Structural Biology & Cryo-EM',
      desc: 'Sub-2-Angstrom cryo-electron microscopy resolution enabling rational ligand docking into transient, unmapped allosteric pockets.',
      icon: 'Layers'
    },
    {
      title: 'Targeted Conjugate Chemistry',
      desc: 'Enzyme-cleavable hydrophilic linkers that guarantee stable systemic transit and rapid payload liberation solely within diseased tissues.',
      icon: 'Share2'
    },
    {
      title: 'Physiologically Based Pharmacokinetics',
      desc: 'Predictive multi-compartment in silico pharmacokinetic modeling to optimize human dosing regimens long before initial phase entry.',
      icon: 'Activity'
    },
    {
      title: 'Ethical Trial Stewardship',
      desc: 'Strict adherence to Declaration of Helsinki standards, comprehensive patient consent, and proactive demographic diversity across clinical sites.',
      icon: 'ShieldCheck'
    }
  ]
};

export const PIPELINE_PROJECTS: PipelineProject[] = [
  {
    id: 'nvl-702',
    compound: 'NVL-702 (OncoVance™)',
    target: 'HER2 / Topo-I Hydrophilic Linker',
    therapeuticArea: 'oncology',
    therapeuticAreaName: 'Targeted Oncology',
    modality: 'Monoclonal Antibody',
    phase: 'Phase III',
    indication: 'Refractory Metastatic HER2-Positive Carcinoma',
    milestoneExpected: 'Global Phase III Pivotal Trial Readout (Simulated Q4)',
    partner: 'Global Oncology Clinical Consortium',
    description: 'High-DAR antibody-drug conjugate designed to circumvent tumor multidrug resistance pumps with an optimized bystander kill profile.'
  },
  {
    id: 'nvl-540',
    compound: 'NVL-540 (ImmunoLux™)',
    target: 'Interleukin-23 p19 Subunit',
    therapeuticArea: 'immunology',
    therapeuticAreaName: 'Immunology',
    modality: 'Monoclonal Antibody',
    phase: 'Phase III',
    indication: 'Moderate-to-Severe Plaque Psoriasis & Psoriatic Arthritis',
    milestoneExpected: 'Regulatory Filing Dossier Submission (Simulated)',
    partner: 'In-House Development',
    description: 'High-affinity biologic offering 12-week maintenance dosing with sustained PASI-90 and PASI-100 clearance profiles in modeled cohorts.'
  },
  {
    id: 'nvl-310',
    compound: 'NVL-310 (CardioNov™)',
    target: 'Dual NEP / AT1 Receptor Modulator',
    therapeuticArea: 'cardiovascular',
    therapeuticAreaName: 'Cardiometabolic',
    modality: 'Oral Small Molecule',
    phase: 'Phase II',
    indication: 'Heart Failure with Preserved Ejection Fraction (HFpEF)',
    milestoneExpected: 'Phase IIb Hemodynamic Endpoint Analysis',
    partner: 'European Vascular Institute',
    description: 'First-in-class balanced dual inhibitor formulated to attenuate left ventricular fibrosis and pulmonary capillary wedge pressure elevations.'
  },
  {
    id: 'nvl-412',
    compound: 'NVL-412 (AeroLyte™)',
    target: 'AeroMatrix™ Beta2/Steroid Pulmonary Complex',
    therapeuticArea: 'respiratory',
    therapeuticAreaName: 'Pulmonary Medicine',
    modality: 'Inhaled Therapeutic' as any,
    phase: 'Phase II',
    indication: 'Chronic Obstructive Pulmonary Disease with Frequent Exacerbations',
    milestoneExpected: 'Phase II dose-range spirometry confirmation',
    partner: 'In-House Development',
    description: 'Nanoporous low-density powder engineered for targeted deposition in small conducting airways without systemic cortisol suppression.'
  },
  {
    id: 'nvl-814',
    compound: 'NVL-814',
    target: 'CD3 × Claudin-18.2 Bispecific',
    therapeuticArea: 'oncology',
    therapeuticAreaName: 'Targeted Oncology',
    modality: 'Bispecific Engager',
    phase: 'Phase I',
    indication: 'Gastric and Gastroesophageal Junction Adenocarcinoma',
    milestoneExpected: 'Maximum Tolerated Dose (MTD) Cohort Completion',
    partner: 'Asia-Pacific BioCollaborative',
    description: 'Dual-affinity engineered construct bridging host CD3+ cytotoxic T lymphocytes directly against Claudin-18.2 presenting tumor cells.'
  },
  {
    id: 'nvl-920',
    compound: 'NVL-920 (NeuroShield™)',
    target: 'TfR1-Mediated Transcytosis / α-Synuclein',
    therapeuticArea: 'neurology',
    therapeuticAreaName: 'Neurotherapeutics',
    modality: 'Monoclonal Antibody',
    phase: 'Phase I',
    indication: 'Early-Stage Parkinsonian Synucleinopathy',
    milestoneExpected: 'CSF Pharmacokinetic & Safety Confirmation',
    partner: 'NeuroVance Discovery Network',
    description: 'Trans-blood-brain barrier antibody shuttling technology achieving therapeutic parenchymal concentrations without disruption of tight junctions.'
  },
  {
    id: 'nvl-188',
    compound: 'NVL-188 (Metabloom™)',
    target: 'Protected Recombinant β-Glucocerebrosidase',
    therapeuticArea: 'metabolic',
    therapeuticAreaName: 'Metabolic Disorders',
    modality: 'Peptide Conjugate',
    phase: 'Preclinical',
    indication: 'Type 1 Gaucher Disease & Lysosomal Accumulation',
    milestoneExpected: 'IND-Enabling Toxicology and Biodistribution Studies',
    partner: 'Rare Disease Genetic Alliance',
    description: 'Enterically protected oral peptide formulation engineered to liberate bioavailable enzyme directly across mucosal epithelial transporters.'
  },
  {
    id: 'nvl-601',
    compound: 'NVL-601',
    target: 'Allosteric TYK2 / JAK1 Pseudokinase Domain',
    therapeuticArea: 'immunology',
    therapeuticAreaName: 'Immunology',
    modality: 'Oral Small Molecule',
    phase: 'Preclinical',
    indication: 'Refractory Systemic Lupus Erythematosus',
    milestoneExpected: 'Lead Compound Optimization & Selectivity Profiling',
    partner: 'In-House Discovery',
    description: 'Non-ATP-competitive allosteric regulator achieving extraordinary selectivity over JAK2/JAK3 to preserve normal hematopoietic signaling.'
  },
  {
    id: 'nvl-209',
    compound: 'NVL-209',
    target: 'KRAS G12D Novel Covalent Inhibitor',
    therapeuticArea: 'oncology',
    therapeuticAreaName: 'Targeted Oncology',
    modality: 'Oral Small Molecule',
    phase: 'Discovery',
    indication: 'Pancreatic Ductal Adenocarcinoma & Colorectal Cancer',
    milestoneExpected: 'Target Engagement and Cryo-EM Crystal Complex',
    partner: 'Academic Structural Biology Consortium',
    description: 'Novel switch-II pocket covalent trapping molecule specifically targeting aspartate substitution mutations with sub-nanomolar affinity.'
  }
];

export const RESEARCH_PLATFORMS = [
  {
    name: 'NovaLinker™ Conjugation Chemistry',
    type: 'Next-Generation ADCs',
    description: 'A proprietary hydrophilic peptide linker system that prevents premature de-conjugation in systemic circulation, delivering over 90% of cytotoxic cargo selectively inside the targeted tumor lysosome.',
    capabilities: ['DAR Precision Control (2 to 8)', 'Zero-Aggregation Formulation', 'Hydrophilic Spacer Technology'],
    icon: 'Link'
  },
  {
    name: 'NeuroShuttle™ Transcytosis Engine',
    type: 'Blood-Brain Barrier Crossing',
    description: 'Engineered monovalent receptor affinity that hijacks endogenous transferrin transcytosis mechanisms, ferrying large macromolecules across the vascular endothelium without triggering receptor degradation.',
    capabilities: ['8x Elevated CSF Bioavailability', 'Endothelial Preservation', 'Broad Biologic Compatibility'],
    icon: 'Radio'
  },
  {
    name: 'AeroMatrix™ Micro-Engineered Inhalants',
    type: 'Pulmonary Drug Delivery',
    description: 'Controlled spray-freeze-drying technology creating hollow, low-density spherical microparticles that travel with inhaled air currents directly into the alveolar capillary bed.',
    capabilities: ['Sub-3µm Aerodynamic Diameters', 'Room Temperature Physical Stability', 'Ultra-Low Inhaled Resistance'],
    icon: 'Wind'
  }
];
