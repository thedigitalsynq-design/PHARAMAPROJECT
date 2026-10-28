export type TherapeuticAreaId = 
  | 'cardiovascular'
  | 'oncology'
  | 'immunology'
  | 'respiratory'
  | 'neurology'
  | 'metabolic';

export interface TherapeuticArea {
  id: TherapeuticAreaId;
  name: string;
  shortDescription: string;
  fullDescription: string;
  keyMolecules: string[];
  icon: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface Product {
  id: string;
  name: string;
  codeName: string;
  genericName: string;
  therapeuticArea: TherapeuticAreaId;
  therapeuticAreaName: string;
  category: 'Prescription Biologic' | 'Small Molecule' | 'Targeted Delivery' | 'Inhaled Therapeutic' | 'Sterile Injectable';
  dosageForm: string;
  deliveryMethod: string;
  stage: 'Approved Formulation (Mock)' | 'Registration Phase' | 'Clinical Assessment';
  summary: string;
  mechanismOfAction: string;
  indications: string[];
  features: string[];
  disclaimer: string;
  packaging: string;
}

export interface PipelineProject {
  id: string;
  compound: string;
  target: string;
  therapeuticArea: TherapeuticAreaId;
  therapeuticAreaName: string;
  modality: 'Monoclonal Antibody' | 'Oral Small Molecule' | 'mRNA Vaccine' | 'Peptide Conjugate' | 'Bispecific Engager';
  phase: 'Discovery' | 'Preclinical' | 'Phase I' | 'Phase II' | 'Phase III';
  indication: string;
  milestoneExpected: string;
  partner?: string;
  description: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  department: string;
  bio: string;
  education: string;
  previousExperience: string;
  image: string;
  fictionalNote: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Scientific Publication' | 'Corporate Milestone' | 'Manufacturing & Supply' | 'Clinical Update' | 'Sustainability';
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
  image: string;
  tags: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: 'R&D Discovery' | 'Clinical Operations' | 'Quality & Regulatory' | 'Bioprocess Manufacturing' | 'Commercial & Strategy' | 'Data Science & AI';
  location: string;
  type: 'Full-Time' | 'Contract' | 'Hybrid' | 'On-Site';
  experienceLevel: 'Director' | 'Principal Scientist' | 'Senior Associate' | 'Staff Engineer';
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

export interface GlobalOffice {
  city: string;
  country: string;
  type: 'Global Headquarters & R&D Hub' | 'European Clinical Operations' | 'Asia-Pacific Commercial & Supply' | 'Advanced Biologics Facility' | 'Innovation & Discovery Center';
  address: string;
  coordinates: string;
  phone: string;
  email: string;
}
