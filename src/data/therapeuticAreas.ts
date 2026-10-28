import { TherapeuticArea } from '../types';

export const THERAPEUTIC_AREAS: TherapeuticArea[] = [
  {
    id: 'oncology',
    name: 'Targeted Oncology & Hematology',
    shortDescription: 'Engineering next-generation antibody-drug conjugates (ADCs) and bispecific constructs that selectively eliminate malignant cells while sparing healthy tissue.',
    fullDescription: 'Our oncology division leverages precision surface antigen mapping coupled with cleavable hydrophilic linkers to deliver potent cytotoxic payloads directly to tumor microenvironments. By overcoming traditional efflux mechanisms and intratumoral pressure barriers, our investigational molecules aim to broaden the therapeutic window in refractory solid tumors and liquid malignancies.',
    keyMolecules: ['NVL-702 (ADC Payload)', 'NVL-814 (Bispecific T-Cell Engager)', 'NVL-209 (Kinase Inhibitor)'],
    icon: 'Target',
    image: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Active Pipeline Assets', value: '4 Compounds' },
      { label: 'Primary Focus', value: 'Refractory Solid Tumors' },
      { label: 'Novel Platform', value: 'NovaLinker™ Bio-Conjugation' }
    ]
  },
  {
    id: 'cardiovascular',
    name: 'Cardiometabolic & Vascular Medicine',
    shortDescription: 'Modulating vascular endothelial function, lipid handling pathways, and microvascular resistance to prevent ischemic remodeling.',
    fullDescription: 'Cardiovascular disease remains the leading cause of global morbidity. Novalyte’s research targets key metabolic signaling nodes, including PCSK9 alternative regulation, endothelial nitric oxide synthase stabilization, and myocardial energetics, aiming to deliver durable cardioprotection for high-risk patients with atherosclerosis and heart failure with preserved ejection fraction (HFpEF).',
    keyMolecules: ['NVL-310 (Endothelial Stabilizer)', 'NVL-105 (Lipid Clearence Activator)'],
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Clinical Programs', value: '2 Phase II Trials' },
      { label: 'Therapeutic Modality', value: 'Oral Small Molecules' },
      { label: 'Target Pathway', value: 'Endothelial Integrity' }
    ]
  },
  {
    id: 'immunology',
    name: 'Immunology & Chronic Inflammation',
    shortDescription: 'Selective cytokine blockade and regulatory T-cell induction to halt auto-aggressive immune responses without causing pan-immunosuppression.',
    fullDescription: 'In autoimmune conditions such as psoriatic arthritis, Crohn’s disease, and lupus nephritis, traditional therapies frequently suppress the broad immune system, causing significant vulnerability to opportunistic pathogens. Our research centers on pathway-specific allosteric inhibitors that restore immune homeostasis without blunt immunosuppression.',
    keyMolecules: ['NVL-540 (Selective IL-23 Receptor Blocker)', 'NVL-601 (JAK-Allosteric Modulator)'],
    icon: 'Shield',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Pipeline Phase', value: 'Phase III Readout' },
      { label: 'Indication Range', value: 'Severe Autoimmune Disorders' },
      { label: 'Selectivity Ratio', value: '>120x vs Non-Target' }
    ]
  },
  {
    id: 'respiratory',
    name: 'Pulmonary & Respiratory Therapeutics',
    shortDescription: 'Delivering micro-engineered dry powder formulations and targeted aerosol biologics directly to deep alveolar lung parenchyma.',
    fullDescription: 'Chronic obstructive pulmonary disease (COPD), idiopathic pulmonary fibrosis (IPF), and severe eosinophilic asthma require localized, high-concentration pharmacodynamics. Novalyte has engineered the AeroMatrix™ delivery system, producing aerodynamic particles (1.5–3.0 µm) that deposit reliably in the lower airways with negligible systemic circulation.',
    keyMolecules: ['NVL-412 (Aerosol Biologic Inhalant)', 'NVL-430 (Anti-Fibrotic Small Molecule)'],
    icon: 'Wind',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Specialized Tech', value: 'AeroMatrix™ Particle Tech' },
      { label: 'Deposition Efficacy', value: '>65% Fine Particle Fraction' },
      { label: 'Lead Asset', value: 'Phase IIb Completed' }
    ]
  },
  {
    id: 'neurology',
    name: 'Neurotherapeutics & Blood-Brain Barrier Penetration',
    shortDescription: 'Employing receptor-mediated transcytosis to ferry neuroprotective biologics across the intact blood-brain barrier for neurodegenerative diseases.',
    fullDescription: 'The blood-brain barrier excludes over 98% of potential neurotherapeutics. Our NeuroShuttle™ platform binds specific transferrin receptors on brain capillary endothelial cells, facilitating receptor-mediated transcytosis of therapeutic enzymes and monoclonal antibodies to combat tauopathies, synucleinopathies, and ALS.',
    keyMolecules: ['NVL-920 (BBB-Penetrant Monoclonal)', 'NVL-945 (Microglial Modulator)'],
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Brain Penetrance', value: '8.4x over standard IgG' },
      { label: 'Indications', value: 'Early Neurodegeneration' },
      { label: 'Translational Status', value: 'Phase I Safety Cohort' }
    ]
  },
  {
    id: 'metabolic',
    name: 'Metabolic & Rare Endocrine Disorders',
    shortDescription: 'Correcting underlying genetic enzyme deficiencies and mitochondrial bioenergetics with long-acting pegylated analogs.',
    fullDescription: 'Rare metabolic diseases frequently manifest with catastrophic multiorgan failure due to single-gene enzymatic blocks. We engineer recombinant enzymes with extended serum half-lives and targeted cellular uptake signals, offering potential monthly or quarterly therapy for populations with limited alternatives.',
    keyMolecules: ['NVL-188 (Enzyme Replacement Fusion)', 'NVL-194 (Substrate Reduction Therapy)'],
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Designation', value: 'Orphan Drug Research' },
      { label: 'Administration', value: 'Subcutaneous Monthly' },
      { label: 'Development Stage', value: 'Preclinical Optimization' }
    ]
  }
];
