import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'oncovance-adc',
    name: 'OncoVance™',
    codeName: 'NVL-702',
    genericName: 'vancil-derux-conjugate (fictional)',
    therapeuticArea: 'oncology',
    therapeuticAreaName: 'Targeted Oncology',
    category: 'Prescription Biologic',
    dosageForm: 'Lyophilized powder for IV infusion',
    deliveryMethod: 'Intravenous infusion vial',
    stage: 'Clinical Assessment',
    summary: 'A targeted antibody-drug conjugate (ADC) engineered with a novel topoisomerase I inhibitor linked via a tumor-cleavable tetrapeptide to an anti-HER2/neu monoclonal antibody.',
    mechanismOfAction: 'Binds HER2 receptors on tumor cells; internalized via endocytosis; lysosomal cleavage releases the toxic payload, inducing DNA double-strand breaks and apoptotic cell death with minimal off-target exposure.',
    indications: [
      'Investigational for advanced metastatic solid tumors with HER2 amplification',
      'Evaluation in second-line refractory adenocarcinoma'
    ],
    features: [
      'Engineered drug-to-antibody ratio (DAR) of 7.8 for maximal cytotoxic potency',
      'Hydrophilic cleavable linker minimizing premature systemic leakage',
      'Dual bystander antitumor killing mechanism in heterogeneous tumor microenvironments'
    ],
    packaging: 'Single-dose 100 mg sterile glass vial with tamper-evident seal. Store at 2°C to 8°C (36°F to 46°F).',
    disclaimer: 'FICTIONAL DEMONSTRATION PRODUCT: OncoVance™ is an illustrative compound created for website simulation. Not approved by any health authority and not available for commercial prescription or human use.'
  },
  {
    id: 'aerolyte-resp',
    name: 'AeroLyte™ Respira',
    codeName: 'NVL-412',
    genericName: 'fluticasone/formoterol/aero-matrix (fictional)',
    therapeuticArea: 'respiratory',
    therapeuticAreaName: 'Pulmonary Medicine',
    category: 'Inhaled Therapeutic',
    dosageForm: 'Engineered dry powder inhalation (DPI)',
    deliveryMethod: 'Breath-actuated multi-dose inhaler',
    stage: 'Approved Formulation (Mock)',
    summary: 'A triple-action dry powder formulation formulated using porous aerodynamic micro-particles that achieve sustained bronchodilation and localized mucosal anti-inflammatory efficacy.',
    mechanismOfAction: 'Combines long-acting beta2-agonist relaxation of airway smooth muscle with targeted glucocorticoid suppression of eosinophilic bronchial cascades and cytokine secretion.',
    indications: [
      'Demonstration model for maintenance treatment of chronic obstructive pulmonary disease (COPD)',
      'Maintenance therapy for severe uncontrolled adult asthma'
    ],
    features: [
      'Aerodynamic particle size distribution (MMAD: 2.1 µm) for optimal alveolar deposition',
      'Low inspiratory flow resistance mechanism (works even in compromised lung capacity)',
      'Digital dose counter with acoustic confirmation and moisture-barrier casing'
    ],
    packaging: 'Inhalation device containing 60 metered blisters with desiccant protection inside foil overwrap.',
    disclaimer: 'FICTIONAL DEMONSTRATION PRODUCT: AeroLyte™ is an illustrative prototype. Not real medical advice, not for purchase, and not approved by FDA/EMA.'
  },
  {
    id: 'cardionov-cardio',
    name: 'CardioNov™ XR',
    codeName: 'NVL-310',
    genericName: 'novalipril extended-release (fictional)',
    therapeuticArea: 'cardiovascular',
    therapeuticAreaName: 'Cardiovascular Health',
    category: 'Small Molecule',
    dosageForm: 'Extended-release osmotic matrix tablet',
    deliveryMethod: 'Oral once-daily administration',
    stage: 'Approved Formulation (Mock)',
    summary: 'An advanced dual-action angiotensin receptor-neprilysin stabilizer designed for smooth 24-hour plasma concentration and vascular endothelial remodeling.',
    mechanismOfAction: 'Inhibits neutral endopeptidase neprilysin while selectively antagonizing AT1 angiotensin receptors, boosting beneficial natriuretic peptides while blocking harmful vasoconstrictive signaling.',
    indications: [
      'Hypothetical maintenance treatment of chronic symptomatic heart failure',
      'Demonstration protocol for resistant arterial hypertension'
    ],
    features: [
      'Zero-order kinetic release profile preventing peak-trough blood pressure oscillations',
      'Demonstrated low renal potassium wasting in simulated pharmacokinetics',
      'Scored tablet for flexible dose titration'
    ],
    packaging: 'Blister packs of 30 extended-release tablets (24 mg/26 mg equivalent). Store at controlled room temperature 20°C–25°C.',
    disclaimer: 'FICTIONAL DEMONSTRATION PRODUCT: Fictional pharmaceutical entry for portfolio showcase only. Does not reflect an existing commercially approved medication.'
  },
  {
    id: 'immunolux-immuno',
    name: 'ImmunoLux™ SubQ',
    codeName: 'NVL-540',
    genericName: 'tavrilizumab-auto (fictional)',
    therapeuticArea: 'immunology',
    therapeuticAreaName: 'Immunology & Inflammation',
    category: 'Prescription Biologic',
    dosageForm: 'Sterile solution in pre-filled autoinjector',
    deliveryMethod: 'Subcutaneous self-administration device',
    stage: 'Clinical Assessment',
    summary: 'A fully human IgG1 monoclonal antibody targeting the p19 subunit of interleukin-23 (IL-23), interrupting chronic autoimmune inflammatory cycles with high specificity.',
    mechanismOfAction: 'Specifically neutralizes bioactive IL-23 without cross-reacting with IL-12, effectively preserving host defense against intracellular pathogens while suppressing Th17-mediated pathogenic tissue damage.',
    indications: [
      'Investigational model for moderate-to-severe plaque psoriasis',
      'Exploratory phase for active psoriatic arthritis and ulcerative colitis'
    ],
    features: [
      'Prefilled autoinjector with concealed ultra-thin needle for minimal injection discomfort',
      '12-week dosing interval following initial induction regimen',
      'Room-temperature stability for up to 14 days outside cold chain'
    ],
    packaging: 'Single-use prefilled autoinjector delivering 100 mg in 1.0 mL sterile solution. Cold-chain storage at 2°C–8°C.',
    disclaimer: 'FICTIONAL DEMONSTRATION PRODUCT: ImmunoLux™ is a mock pharmaceutical profile. All safety, efficacy, and clinical values are simulated.'
  },
  {
    id: 'neuroshield-neuro',
    name: 'NeuroShield™ Monomer',
    codeName: 'NVL-920',
    genericName: 'trans-cervil-cerebro (fictional)',
    therapeuticArea: 'neurology',
    therapeuticAreaName: 'Neurotherapeutics',
    category: 'Targeted Delivery',
    dosageForm: 'High-concentration concentrated vial for micro-infusion',
    deliveryMethod: 'Intravenous infusion with BBB-transporter affinity',
    stage: 'Clinical Assessment',
    summary: 'A novel bispecific biologic combining high-affinity misfolded alpha-synuclein clearance with an engineered transferrin-receptor binding arm for active blood-brain barrier transcytosis.',
    mechanismOfAction: 'Utilizes monovalent transferrin-receptor affinity to trigger endothelial endocytosis across the cerebral vasculature into brain parenchyma, followed by selective phagocytic clearance of toxic aggregates.',
    indications: [
      'Investigational model for early-stage neurodegenerative synucleinopathies',
      'Targeted neuroinflammatory cascade mitigation'
    ],
    features: [
      'Achieves up to 840% higher CSF-to-serum penetration ratio compared to conventional IgG antibodies',
      'Engineered Fc-silent domain preventing inappropriate microglial hyperactivation',
      'Formulated with stabilization buffers preventing aggregation in storage'
    ],
    packaging: 'Sterile 200 mg/5 mL single-use glass vial with nitrogen headspace purge.',
    disclaimer: 'FICTIONAL DEMONSTRATION PRODUCT: Fictional pipeline candidate for scientific visualization only.'
  },
  {
    id: 'metabloom-meta',
    name: 'Metabloom™ Oral-Gel',
    codeName: 'NVL-188',
    genericName: 'peg-glucocerebrosidase-syn (fictional)',
    therapeuticArea: 'metabolic',
    therapeuticAreaName: 'Metabolic & Rare Disorders',
    category: 'Targeted Delivery',
    dosageForm: 'Oral enterically coated micro-pellet suspension',
    deliveryMethod: 'Oral sachet reconstitution',
    stage: 'Registration Phase',
    summary: 'A protected recombinant enzyme replacement formulation engineered with a pH-responsive polymer shell to survive gastric acidity and liberate active enzyme directly into duodenal enterocytes.',
    mechanismOfAction: 'Restores hydrolytic cleavage of complex glycosphingolipids, preventing pathological accumulation in hepatic, splenic, and skeletal macrophages without requiring weekly intravenous infusions.',
    indications: [
      'Investigational model for systemic lysosomal storage diseases',
      'Non-neuropathic manifestations of Gaucher disease type 1'
    ],
    features: [
      'Transforms traditional intravenous enzyme therapy into needle-free oral weekly administration',
      'Bio-inert pegylation shield conferring extended plasma half-life and minimized antibody neutralization',
      'Pleasant citrus flavor masking system for pediatric and geriatric patient compliance'
    ],
    packaging: 'Carton of 4 unit-dose aluminum foil packets with oral dosing syringe. Store dry at 15°C–25°C.',
    disclaimer: 'FICTIONAL DEMONSTRATION PRODUCT: Fictional concept. No actual medication exists under this name or specification.'
  }
];
