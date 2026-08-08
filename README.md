# Accredian Enterprise Landing Page

A production-grade, highly responsive, modern enterprise upskilling landing page constructed as a high-fidelity partial clone inspired by [Accredian Enterprise](https://enterprise.accredian.com/).

Built with **Next.js 14+ (App Router), TypeScript, React 19, Tailwind CSS v4, Lucide React icons, and Framer Motion**.

---

## 1. Project Overview

Accredian Enterprise provides bespoke corporate upskilling programs in **Artificial Intelligence, Generative AI, Data Science, MLOps, Product Leadership, and Executive Strategy**.

This application recreates Accredian's enterprise web portal with custom-built React components, interactive learning framework visualizers, domain tab filters, animated statistics counters, interactive FAQ accordions, an interactive Enterprise ROI & Skill Calculator, a full Syllabus Modal overlay, an AI Chatbot Assistant widget, and a functional lead-capture API endpoint with server-side validation.

---

## 2. Key Features

- **Responsive & Sticky Navigation**: Header navigation featuring quick jump anchors, region switcher (APAC / NA / EMEA), consultation CTAs, and a mobile drawer menu.
- **Hero Section & Interactive Mockup Card**: Value statement, key metrics, trust indicators, and a mock L&D telemetry dashboard card.
- **Animated Statistics Counter**: Scroll-triggered numerical counters highlighting 50,000+ Learners, 200+ Corporate Clients, 94% ROI, and 500+ Expert Mentors.
- **Partnerships & Marquee**: Infinite animated marquee of enterprise clients (Google, Microsoft, Amazon, ADP, Bayer, TCS) and premier academic partners (IIT Guwahati, XLRI).
- **Accredian Edge (6 Pillars)**: Interactive cards detailing Concept-to-Context learning, bespoke curricula, live practitioner workshops, and ROI dashboards.
- **Domain Expertise Navigator**: Interactive domain switcher (AI & GenAI, Data Science, Product Management, Executive Leadership, Cloud & DevSecOps) displaying skills and frameworks.
- **Filterable Program Catalog & Interactive Syllabus Modal**: Filterable course cards showing duration, format, target audience, key highlights, and an interactive week-by-week syllabus modal with PDF brochure downloads.
- **Who Should Join (Audience Grid)**: Persona-targeted cards for Tech Leaders, Data Teams, Product Managers, and Non-Tech Executives.
- **Interactive CAT Framework Visualizer**: Step-by-step viewer (Diagnostics → Architecture → Execution) outlining stage deliverables.
- **Interactive Enterprise ROI Calculator**: Real-time slider and domain selector calculating expected team productivity index, annual hours saved, and value-add ROI.
- **Interactive Accredian AI Chatbot Widget**: Floating AI assistant answering questions on courses, CAT framework, IIT certifications, and consultation scheduling with quick prompt bubbles and direct section links.
- **Corporate Case Studies & Results**: Real outcome metrics and client success highlights from ADP and Bayer.
- **Executive Testimonials Carousel**: Video/text quote cards with rating stars, executive photos, company badges, and navigation controls.
- **Categorized FAQ Accordion**: Expandable Q&A accordion featuring search filter by keyword and category filters.
- **Validated Lead Capture Form**: Enterprise consultation booking form with real-time client-side error handling, loading spinners, server API submission, advisor auto-assignment, lead priority badges, and success modal.
- **Complete Enterprise Footer**: Links, office locations, social profiles, and back-to-top button.

---

## 3. Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (Strict Type Safety)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism Utilities
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **HTTP/API Handling**: Next.js Server Route Handlers (`app/api/enquiry/route.ts`)

---

## 4. Project Structure

```
inten/
├── app/
│   ├── api/
│   │   └── enquiry/
│   │       └── route.ts         # POST API endpoint for lead capture validation
│   ├── favicon.ico
│   ├── globals.css              # Custom CSS rules, glassmorphism, animations
│   ├── layout.tsx               # Root layout with Metadata (SEO) & JSON-LD
│   ├── robots.ts                # SEO robots.txt generator
│   ├── sitemap.ts               # SEO sitemap.xml generator
│   └── page.tsx                 # Main landing page incorporating 16 components
├── components/
│   ├── Navbar.tsx               # Sticky nav & multi-region selector
│   ├── Hero.tsx                 # Enterprise hero with interactive card
│   ├── Stats.tsx                # Animated counter stats grid
│   ├── Partners.tsx             # Trusted partners marquee & academic badges
│   ├── AccredianEdge.tsx        # 6 core differentiators
│   ├── Domains.tsx              # Interactive domain expertise tabs
│   ├── Courses.tsx              # Filterable catalog & Syllabus Modal
│   ├── Audience.tsx             # Who Should Join / persona grid
│   ├── CATFramework.tsx         # Step-by-step CAT Framework viewer
│   ├── ROICalculator.tsx        # Interactive Enterprise ROI & Skill Estimator
│   ├── Chatbot.tsx              # Interactive Accredian AI Assistant Widget
│   ├── Results.tsx              # Corporate case studies & ROI metrics
│   ├── Testimonials.tsx         # Executive quote carousel
│   ├── FAQ.tsx                  # Searchable FAQ accordion
│   ├── EnquiryForm.tsx          # Validated lead capture form & Advisor Handoff
│   └── Footer.tsx               # Enterprise footer & links
├── lib/
│   └── data.ts                  # Structured mock data & content
├── types/
│   └── index.ts                 # TypeScript interfaces
├── public/                      # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 5. Installation Instructions & Running Locally

```bash
# Clone repository
git clone <repository-url>
cd inten

# Install dependencies
npm install

# Start local dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
