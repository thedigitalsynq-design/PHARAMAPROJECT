import { NewsArticle } from '../types';

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'next-gen-adc-advancements',
    title: 'Overcoming Intratumoral Barriers: Next-Generation Cleavable Linkers in Antibody-Drug Conjugates',
    slug: 'next-gen-adc-advancements',
    category: 'Scientific Publication',
    date: 'October 14, 2026',
    readTime: '6 min read',
    summary: 'A deep-dive review into how hydrophilic amino-acid linkers and enzyme-triggered cleavage kinetics prevent premature payload shedding while enhancing bystander cytotoxicity in dense solid carcinomas.',
    content: [
      'The therapeutic paradigm of antibody-drug conjugates (ADCs) has witnessed profound evolution over the last decade. While first-generation constructs were plagued by unstable linkers that released toxic warheads into systemic circulation, contemporary molecular design leverages enzyme-cleavable hydrophilic peptide linkages that remain inert until enzymatic exposure within the lysosome.',
      'At Novalyte BioPharma, our translational biology team evaluated several hydrophilic spacer configurations. By incorporating polyethylene glycol (PEG) side branches alongside cathepisn-B sensitive valine-citrulline dipeptides, we observed a dramatic reduction in hepatic clearance and off-target non-specific uptake.',
      'Furthermore, the bystander effect—where the uncharged cytotoxic payload diffuses into adjacent antigen-negative malignant cells—proves pivotal in overcoming tumor heterogeneity. As we advance our NVL-702 platform toward multi-center cohorts, these structural optimizations represent a meaningful blueprint for future targeted oncology regimens.'
    ],
    author: {
      name: 'Dr. Marcus Thorne, Ph.D.',
      role: 'Chief Scientific Officer'
    },
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200',
    tags: ['Oncology', 'Bioconjugation', 'Translational Medicine', 'ADCs']
  },
  {
    id: 'continuous-aseptic-biomanufacturing',
    title: 'The Shift Toward Continuous Flow Synthesis and Automated Isolators in Sterile Biomanufacturing',
    slug: 'continuous-aseptic-biomanufacturing',
    category: 'Manufacturing & Supply',
    date: 'September 28, 2026',
    readTime: '5 min read',
    summary: 'How transitioning from traditional batch formulation to automated, closed-system continuous bioprocessing improves batch uniformity and eliminates human intervention contamination risks.',
    content: [
      'Traditional batch manufacturing in the pharmaceutical industry has historically necessitated massive storage tanks, extended holding times, and frequent human interventions during equipment changeovers. Today, modern bioprocessing is transitioning toward continuous upstream perfusion and inline single-pass tangential flow filtration.',
      'Our Ringaskiddy Bioprocess Center exemplifies this transformation. By integrating robotic glove-less isolators operating within Class A laminar flow envelopes, ambient environmental particulate contamination risks are reduced to theoretical limits.',
      'Real-time Process Analytical Technology (PAT), including inline Raman spectroscopy, continuously assays product critical quality attributes (CQAs). This closed-loop control allows micro-adjustments to be executed automatically in real time, ensuring uncompromising safety and standard-setting purity profiles.'
    ],
    author: {
      name: 'Henri Duval, Eng.',
      role: 'SVP of Advanced Biomanufacturing'
    },
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200',
    tags: ['Manufacturing', 'Robotics', 'Aseptic Filling', 'Quality by Design']
  },
  {
    id: 'blood-brain-barrier-shuttle-breakthrough',
    title: 'Unlocking the Central Nervous System: Receptor-Mediated Transcytosis Across the Blood-Brain Barrier',
    slug: 'blood-brain-barrier-shuttle-breakthrough',
    category: 'Clinical Update',
    date: 'August 19, 2026',
    readTime: '7 min read',
    summary: 'Investigating monovalent transferrin-receptor shuttling to deliver large biologics into cerebral parenchyma without compromising vascular integrity or endothelial tight junctions.',
    content: [
      'The blood-brain barrier (BBB) represents the most impenetrable biological defense in the human physiology. While this vascular barrier protects the brain from circulating toxins, it has concurrently rendered more than 98% of prospective small molecules and nearly 100% of large macromolecular biologics ineffective for central nervous system indications.',
      'Through our NeuroShuttle™ platform, our scientists engineered an antibody with finely tuned monovalent affinity to the transferrin receptor 1 (TfR1). High affinity binding can lead to receptor entrapment and lysosomal degradation; in contrast, intermediate, rapid-off-rate binding permits the antibody to be transported across the endothelial lumen and discharged intact into brain interstitial space.',
      'Preclinical pharmacokinetic analyses demonstrated an 8.4-fold higher brain-to-plasma ratio compared to conventional IgG antibodies, establishing a viable foundation for next-stage neurodegenerative intervention studies.'
    ],
    author: {
      name: 'Dr. Priya Nair, M.D.',
      role: 'Chief Medical Officer'
    },
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200',
    tags: ['Neurology', 'BBB Transcytosis', 'Drug Delivery', 'Neurodegeneration']
  },
  {
    id: 'green-chemistry-solvent-reduction',
    title: 'Sustainable Life Sciences: Reducing Hazardous Solvents in Pharmaceutical Peptide Synthesis',
    slug: 'green-chemistry-solvent-reduction',
    category: 'Sustainability',
    date: 'July 11, 2026',
    readTime: '4 min read',
    summary: 'Evaluating water-based coupling agents and closed-loop supercritical fluid recovery to decrease environmental waste in therapeutic peptide manufacturing.',
    content: [
      'Solid-phase peptide synthesis (SPPS) has historically consumed vast volumes of hazardous polar aprotic solvents like N,N-dimethylformamide (DMF) and dichloromethane (DCM). As an enterprise committed to environmental stewardship, Novalyte BioPharma established an ambitious internal mandate to systematically decarbonize and de-solventize our research pilot facilities.',
      'Our chemical development team successfully implemented green solvent alternatives, including cyclopentyl methyl ether (CPME) and 2-methyltetrahydrofuran (2-MeTHF), combined with novel aqueous micellar reaction media. This breakthrough resulted in a 62% reduction in volatile organic solvent waste per kilogram of synthesized peptide.',
      'By demonstrating that ecological sustainability and rigorous pharmaceutical purity are mutually reinforcing objectives, we hope to encourage widespread industry adoption of greener manufacturing protocols.'
    ],
    author: {
      name: 'Sarah Jenkins, M.S.',
      role: 'EVP, Global Regulatory Affairs'
    },
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200',
    tags: ['ESG', 'Green Chemistry', 'Peptide Synthesis', 'Sustainability']
  },
  {
    id: 'ai-computational-biology-formulation',
    title: 'In Silico Molecular Dynamics: Predicting Lyophilization Stability in Protein Formulations',
    slug: 'ai-computational-biology-formulation',
    category: 'Scientific Publication',
    date: 'June 03, 2026',
    readTime: '6 min read',
    summary: 'Deploying high-throughput molecular dynamics simulations to identify conformational aggregation hotspots and optimize cryoprotectant excipient matrices.',
    content: [
      'Lyophilization (freeze-drying) is the golden standard for preserving delicate monoclonal antibodies and protein therapeutics during extended global distribution. However, the physical stresses of ice crystallization, dehydration, and rehydration frequently trigger partial protein unfolding and irreversible sub-visible particulate aggregation.',
      'Our computational biophysics department formulated an in silico screening suite that simulates thousands of microsecond-scale trajectories of candidate biologics across varying pH, ionic strength, and disaccharide cryoprotectant ratios.',
      'The simulation precisely identifies flexible hydrophobic surface patches prone to self-association, allowing molecular engineers to introduce conservative point mutations or select custom trehalose-arginine excipient ratios that preserve over 99.5% monomer integrity post-reconstitution.'
    ],
    author: {
      name: 'Dr. Marcus Thorne, Ph.D.',
      role: 'Chief Scientific Officer'
    },
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=1200',
    tags: ['Computational Biology', 'Formulation Science', 'Lyophilization', 'Biophysics']
  },
  {
    id: 'global-supply-resilience-cold-chain',
    title: 'Building Resilient Global Cold Chains for Temperature-Sensitive Advanced Therapies',
    slug: 'global-supply-resilience-cold-chain',
    category: 'Corporate Milestone',
    date: 'May 17, 2026',
    readTime: '5 min read',
    summary: 'How multi-modal IoT sensor networks and regional logistics distribution centers safeguard biologic integrity across divergent global climates.',
    content: [
      'Biologics and mRNA-based therapeutics require strict temperature control ranging from refrigerated (2°C to 8°C) to ultra-cryogenic (-80°C). A single unmonitored thermal deviation during transit can compromise quaternary protein structure and therapeutic efficacy.',
      'Novalyte BioPharma has deployed active IoT thermal dataloggers with continuous cellular and satellite uplink capabilities throughout our global distribution network. If internal package temperatures deviate by even 0.5°C from validated parameters, automated corrective dispatch protocols are triggered immediately.',
      'By decentralizing distribution through our hubs in Cambridge, Basel, and Singapore, we have achieved a 99.98% validated thermal transit success rate across more than 4,200 simulated clinical trial shipments worldwide.'
    ],
    author: {
      name: 'Arthur Pendleton, MBA',
      role: 'Chief Financial Officer & Strategy'
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    tags: ['Supply Chain', 'Logistics', 'IoT Telemetry', 'Clinical Distribution']
  }
];
