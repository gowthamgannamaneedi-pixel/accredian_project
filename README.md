# Accredian Enterprise Landing Page

A production-grade, fully responsive enterprise upskilling landing page — a high-fidelity inspired clone of [Accredian Enterprise](https://enterprise.accredian.com/), built as a front-end internship submission project.

---

## 🌐 Live Demo

> Deploy via [Vercel](https://vercel.com/) by connecting the GitHub repository below.

---

## 📁 GitHub Repository

**[https://github.com/gowthamgannamaneedi-pixel/accredian_project](https://github.com/gowthamgannamaneedi-pixel/accredian_project)**

---

## 📋 Problem Statement

Build a responsive, modern enterprise landing page inspired by Accredian Enterprise's web portal. The page must:

- Showcase enterprise training programs, features, and outcomes
- Include interactive UI components (FAQ accordion, program filters, ROI calculator, chatbot, enquiry form)
- Have a functional lead-capture API endpoint with validation
- Be production-ready with SEO metadata, clean build, and 0 lint errors
- Demonstrate strong front-end development skills using the latest web stack

---

## ✨ Features

- **Sticky Navbar**: Jump anchors, mobile hamburger drawer, and consultation CTA
- **Hero Section**: Value statement, trust indicators, and an animated L&D dashboard mockup card
- **Enterprise Impact Stats**: Scroll-triggered animated counters:
  - 10K+ Active Enterprise Learners
  - 200+ Corporate Partners
  - 94% Program Completion Rate
  - 500+ Industry Expert Mentors
- **Partners Marquee**: Infinite animated scrolling marquee featuring brand logos (Google, Microsoft, Amazon, Meta, IBM, Accenture, TCS, Wipro, Infosys, Oracle, Deloitte, Samsung) and academic partners (IIT Guwahati, XLRI)
- **Accredian Edge (6 Pillars)**: Interactive feature cards for core differentiators
- **Domain Expertise Navigator**: Tabbed switcher across AI & GenAI, Data Science, Product Management, Executive Leadership, and Cloud & DevSecOps
- **Filterable Program Catalog**: Filter by All / Executive / Professional / Enterprise Custom with interactive syllabus modal
- **Who Should Join**: Persona-targeted audience grid (Tech Leaders, Data Teams, Product Managers, Executives)
- **CAT Framework Visualizer**: Step-by-step viewer for Diagnostics → Architecture → Execution
- **ROI Calculator**: Interactive slider and domain selector for real-time ROI estimation
- **AI Chatbot Assistant**: Floating chatbot widget with quick-prompt bubbles and contextual responses
- **Case Studies & Results**: Corporate outcome metrics from enterprise client showcases
- **Testimonials Carousel**: Executive quote cards with ratings and navigation controls
- **Categorized FAQ Accordion**: Searchable & filterable expandable Q&A
- **Enquiry Form**: Fully validated lead-capture form with loading state, success message, and POST API integration
- **Footer**: Social media links (LinkedIn, Twitter/X, YouTube, Instagram), navigation links, contact info, and back-to-top

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI Library | React 19 |
| Styling | Vanilla CSS + Tailwind CSS v4 |
| Icons | Lucide React |
| Animations | Framer Motion + CSS keyframes |
| Counter Animation | Vanilla `IntersectionObserver` + `requestAnimationFrame` |
| API | Next.js Route Handlers (`/api/enquiry`) |
| SEO | Next.js Metadata API, `robots.ts`, `sitemap.ts` |

---

## 📂 Project Structure

```
accredian_project/
├── app/
│   ├── api/
│   │   └── enquiry/
│   │       └── route.ts         # POST endpoint for lead capture validation
│   ├── favicon.ico
│   ├── globals.css              # Custom CSS, animations, marquee keyframes
│   ├── layout.tsx               # Root layout with SEO metadata & JSON-LD
│   ├── robots.ts                # SEO robots.txt generator
│   ├── sitemap.ts               # SEO sitemap.xml generator
│   └── page.tsx                 # Main landing page (all sections assembled)
├── components/
│   ├── Navbar.tsx               # Sticky nav with Accredian logo & mobile menu
│   ├── Hero.tsx                 # Hero section with animated dashboard card
│   ├── Stats.tsx                # Animated enterprise impact counters
│   ├── Partners.tsx             # Brand logo marquee & academic partner cards
│   ├── AccredianEdge.tsx        # 6-pillar differentiator cards
│   ├── Domains.tsx              # Interactive domain expertise tab switcher
│   ├── Courses.tsx              # Filterable program catalog & syllabus modal
│   ├── Audience.tsx             # Persona-targeted audience grid
│   ├── CATFramework.tsx         # CAT Framework step-by-step visualizer
│   ├── ROICalculator.tsx        # Enterprise ROI & skill estimator
│   ├── Chatbot.tsx              # Floating AI assistant widget
│   ├── Results.tsx              # Case studies & enterprise outcome metrics
│   ├── Testimonials.tsx         # Executive testimonials carousel
│   ├── FAQ.tsx                  # Searchable & categorized FAQ accordion
│   ├── EnquiryForm.tsx          # Validated lead form with API submission
│   └── Footer.tsx               # Footer with social icons & links
├── lib/
│   └── data.ts                  # All structured mock content & data
├── types/
│   └── index.ts                 # TypeScript interfaces & type definitions
├── public/                      # Static assets
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/gowthamgannamaneedi-pixel/accredian_project.git

# 2. Navigate into the project folder
cd accredian_project

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build:

```bash
npm run build
```

---

## 🔌 API Integration

### `POST /api/enquiry`

A server-side Next.js Route Handler that handles enterprise consultation form submissions.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "company": "Acme Corp",
  "phone": "+91 9876543210",
  "teamSize": "51-200",
  "message": "We want to upskill our data team."
}
```

**Validation:**
- Name, email, company, and teamSize are required
- Email format is validated server-side
- Returns `400` with error details on invalid input
- Returns `200` with success confirmation on valid submission

**Form UX:**
- Displays animated spinner with "Submitting..." during request
- Submit button is disabled during submission to prevent duplicates
- Shows a success message with checkmark on completion
- Shows an error message and re-enables the form on failure

---

## 🤖 AI Usage

AI development tools (including **Antigravity / Google DeepMind AI coding assistant**) were used throughout this project to assist with:

- **UI Design Ideas**: Generating layout concepts, color palette suggestions, and component structure
- **Code Generation**: Scaffolding React components, TypeScript interfaces, and CSS animations
- **Debugging Assistance**: Identifying and fixing counter animation bugs (e.g., the `0+` display issue caused by Framer Motion's `animate()` firing `onUpdate(0)` on the first frame — resolved using vanilla `IntersectionObserver` + `requestAnimationFrame`)
- **Content Writing**: Generating placeholder copy, FAQ questions, and testimonial text

**All AI-generated code was:**
- Manually reviewed and understood before being accepted
- Modified and refined to match the project's specific requirements
- Tested locally in the browser across multiple screen sizes
- Verified to pass `npm run lint` (0 errors) and `npm run build` successfully

The final implementation, design decisions, feature selection, debugging approach, and project structure were directed and reviewed by the developer.

---

## 🔧 Manual Improvements

The following issues were identified and fixed manually during development:

1. **Counter Bug**: Enterprise Impact counters were displaying `0+`, `0%` because Framer Motion's `animate()` callback fires with `value=0` on the first frame — fixed by switching to vanilla `IntersectionObserver` + `requestAnimationFrame` with direct DOM mutation, ensuring the correct final value is always shown even before animation begins.
2. **Typo Fix**: `"Besposke Design"` corrected to `"Bespoke Design"` in the program catalog.
3. **Social Media Icons**: Replaced generic Lucide icons (Globe, Share2, Video, MessageSquare) with proper brand SVG logos for LinkedIn, Twitter/X, YouTube, and Instagram in the footer.
4. **Partner Logos**: Replaced external Wikimedia image URLs (which caused broken/missing logos due to network issues) with inline SVG brand logos for all 12 corporate partners.
5. **Navbar Logo**: Updated from a generic shield icon to the official Accredian wordmark (`accredian` in brand blue with "credentials that matter" tagline).
6. **ESLint Cleanup**: Fixed all React purity warnings, unused imports, and `@next/next/no-img-element` violations to achieve a zero-warning build.

---

## 🚧 Challenges

- **Counter Animation on SSR/Static Sites**: Framer Motion's `animate()` function fires `onUpdate(0)` synchronously on the first frame, causing counters to show `0+` before the animation reaches the target value. The fix required abandoning `useState` + framer-motion and switching to direct DOM manipulation via `requestAnimationFrame`.
- **External Logo Reliability**: CDN-hosted logos from Wikimedia Commons loaded inconsistently due to rate limiting and browser CORS policies — resolved by embedding all logos as inline SVGs.
- **Hydration Mismatches**: Some client-side components using `Math.random()` or `Date.now()` during render caused React hydration errors — fixed by moving non-deterministic values into `useMemo` or pre-computing them statically.

---

## 🚀 Future Improvements

- Connect the enquiry form to a real CRM or email service (e.g., HubSpot, SendGrid, Nodemailer)
- Add authentication for an enterprise admin dashboard
- Integrate real analytics (Mixpanel / PostHog) for lead tracking
- Replace mock testimonials and case studies with real data from a CMS (e.g., Contentful, Sanity)
- Add multi-language support (i18n) for APAC / EMEA regions
- Add unit and integration tests (Jest + React Testing Library)
- Migrate chatbot to a real LLM API (e.g., Gemini, OpenAI)

---

## 📦 Deployment

This project is ready for **1-click Vercel deployment**:

1. Push code to [GitHub](https://github.com/gowthamgannamaneedi-pixel/accredian_project)
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import from GitHub
3. Select `accredian_project` → click **Deploy**
4. No environment variables required for the base version

```bash
# Or deploy via Vercel CLI
npx vercel --prod
```

---

## 📄 License

This project was created for educational and internship evaluation purposes. Inspired by [enterprise.accredian.com](https://enterprise.accredian.com/).
