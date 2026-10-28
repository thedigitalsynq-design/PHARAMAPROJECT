# Novalyte BioPharma | World-Class Pharmaceutical Company Website

A high-performance, enterprise-grade static website engineered for **Novalyte BioPharma**, an illustrative next-generation biotechnology corporation specializing in precision antibody-drug conjugates (ADCs), targeted pulmonary formulation, and continuous sterile bioprocessing.

---

## 🔬 Scientific Brand Identity & Design Direction

- **Brand Name**: Novalyte BioPharma (Fictional Demonstration)
- **Tagline**: *Advancing Molecular Science. Enabling Global Health.*
- **Palette**: Deep midnight navy (`#060B17`, `#0B1528`), bio-teal accents (`#0D9488`, `#14B8A6`), cool whites, and slate surfaces.
- **Typography**: Google Fonts — Plus Jakarta Sans & Inter pairing.
- **Aesthetic**: Editorial life-sciences aesthetic with asymmetric bento grids, subtle bioluminescent glow shadows, and interactive scientific pipeline visualizations.

---

## 🚀 Website Structure & Pages

| Page | URL Path | Core Features |
|------|----------|---------------|
| **Home** | `/` | Hero section, scientific mission, 6 therapeutic areas grid, interactive clinical pipeline radar, manufacturing highlights, featured formulations, latest news, strategic partner CTA, and global corporate footer. |
| **About Us** | `/about` | Corporate origins, mission, vision, governance ethics, historical 14-year milestone timeline, and interactive executive leadership committee with detailed biographical modals. |
| **Therapeutic Areas & Products** | `/products` | Filterable and searchable formulation catalog across 6 biological domains (Oncology, Cardiovascular, Immunology, Respiratory, Neurology, Metabolic), with molecular specifications modal and safety notices. |
| **R&D Pipeline** | `/research` | Interactive multi-phase pipeline tracker (Discovery to Phase III), proprietary delivery platforms (NovaLinker™, NeuroShuttle™, AeroMatrix™), and Declaration of Helsinki clinical trial ethics. |
| **Manufacturing & Quality** | `/manufacturing` | 4-step sterile bioprocess workflow (01-04), Quality by Design (QbD) & Process Analytical Technology (PAT), robotic Class A glove-less isolators, and global specialized bioprocess facilities. |
| **Sustainability & ESG** | `/sustainability` | Green chemistry solvent reduction, closed-loop Water for Injection (WFI), renewable energy biomanufacturing, trial inclusivity, and rare disease compassionate access. |
| **News & Insights** | `/news` | Editorial scientific publications, whitepapers, category filters, read-time estimates, tags, and interactive full-paper reading modal dialog. |
| **Careers** | `/careers` | People culture pillars, total rewards and benefits, interactive job openings board by department, and simulated candidate dossier application submission. |
| **Contact Us** | `/contact` | Department-routed inquiry form with client-side validation and demonstration response state, global operating hubs (Cambridge, Basel, Singapore, Cork), and emergency medical notice. |
| **Legal Disclosures & Privacy** | `/disclaimer` | Transparent demonstration declarations, medical advice disclaimers, pharmacovigilance notice, and static zero-tracking privacy policy. |

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Icons**: Lucide React
- **Routing**: React Router DOM (v7) with smooth automatic scroll restoration
- **Architecture**: 100% frontend static website (zero backend, zero database, zero external API keys required)

---

## ⚡ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Create production static build
npm run build

# 4. Preview static production bundle
npm run preview
```

---

## 🌐 Cloudflare Pages Deployment Guide

The website is fully optimized for static deployment to **Cloudflare Pages**:

1. **Build Command**: `npm run build`
2. **Build Output Directory**: `dist`
3. **Node Version**: 18+ or 20+

### Included Cloudflare Pages Configurations
- `public/_redirects`: Provides SPA fallback rule (`/* /index.html 200`) ensuring subpage routes (`/products`, `/research`, etc.) resolve on direct browser refresh.
- `public/_headers`: Enforces production security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy) and asset cache headers.
- `public/robots.txt` & `public/sitemap.xml`: Configured for search engine crawlability.

---

## ⚖️ Mandatory Demonstration Disclaimer

Novalyte BioPharma is an illustrative, fictional biotechnology company created strictly for web design and frontend engineering demonstration. The molecules, clinical trial phases, active ingredients, and efficacy claims are simulated. This website does not provide medical advice or commercial medications.
