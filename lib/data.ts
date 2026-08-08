import {
  CourseProgram,
  Testimonial,
  FAQItem,
  StatItem,
  EdgeFeature,
  CATStep,
  Partner,
  AudienceRole,
  SuccessMetric
} from '@/types';

export const NAV_LINKS = [
  { label: 'Why Accredian', href: '#edge' },
  { label: 'Domains', href: '#domains' },
  { label: 'Programs', href: '#programs' },
  { label: 'CAT Framework', href: '#framework' },
  { label: 'Enterprise Impact', href: '#results' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const HERO_STATS = [
  { label: 'Enterprise Learners', value: '10K+' },
  { label: 'Global Client Partners', value: '200+' },
  { label: 'Avg Salary Impact / Upskill', value: '40%' },
  { label: 'Industry Expert Mentors', value: '500+' },
];

export const STATS_DATA: StatItem[] = [
  {
    id: '1',
    label: 'Active Enterprise Learners',
    value: 10,
    targetNumber: 10,
    displayValue: '10K',
    suffix: '+',
    description: 'Engineers, data scientists & executive leaders trained globally',
    iconName: 'Users'
  },
  {
    id: '2',
    label: 'Corporate Partners',
    value: 200,
    targetNumber: 200,
    displayValue: '200',
    suffix: '+',
    description: 'Fortune 500 tech & enterprise organizations trusting Accredian',
    iconName: 'Building2'
  },
  {
    id: '3',
    label: 'Program Completion Rate',
    value: 94,
    targetNumber: 94,
    displayValue: '94',
    suffix: '%',
    description: 'Industry-leading engagement through concept-to-context learning',
    iconName: 'Award'
  },
  {
    id: '4',
    label: 'Industry Expert Mentors',
    value: 500,
    targetNumber: 500,
    displayValue: '500',
    suffix: '+',
    description: 'Senior practitioners from top tech companies leading live cohorts',
    iconName: 'GraduationCap'
  }
];

export const PARTNERS_DATA: Partner[] = [
  { name: 'Google', type: 'corporate', logoText: 'Google', industry: 'Technology' },
  { name: 'Microsoft', type: 'corporate', logoText: 'Microsoft', industry: 'Technology' },
  { name: 'Amazon', type: 'corporate', logoText: 'Amazon', industry: 'E-Commerce & Cloud' },
  { name: 'Meta', type: 'corporate', logoText: 'Meta', industry: 'Technology & AI' },
  { name: 'ADP', type: 'corporate', logoText: 'ADP', industry: 'HR Tech & Enterprise' },
  { name: 'Bayer', type: 'corporate', logoText: 'Bayer', industry: 'Healthcare & Biotech' },
  { name: 'TCS', type: 'corporate', logoText: 'TCS', industry: 'IT Services' },
  { name: 'Accenture', type: 'corporate', logoText: 'Accenture', industry: 'Consulting' },
  { name: 'Reliance Industries', type: 'corporate', logoText: 'Reliance', industry: 'Conglomerate' },
  { name: 'IIT Guwahati', type: 'academic', logoText: 'E&ICT Academy, IIT Guwahati', industry: 'Academic Certification Partner' },
  { name: 'XLRI Jamshedpur', type: 'academic', logoText: 'XLRI Executive Education', industry: 'Academic Certification Partner' },
];

export const ACCREDIAN_EDGE: EdgeFeature[] = [
  {
    id: '1',
    title: 'Concept-to-Context Learning',
    description: 'Theory is seamlessly tied to live production workflows, industry datasets, and company-specific architecture.',
    icon: 'Target',
    tag: 'Practitioner Approach'
  },
  {
    id: '2',
    title: 'Tailored Enterprise Curricula',
    description: 'Customized modular pathways built specifically around your tech stack, business metrics, and team maturity levels.',
    icon: 'Sliders',
    tag: 'Bespoke Design'
  },
  {
    id: '3',
    title: 'Live Practitioner-Led Workshops',
    description: 'Taught by domain leaders and chief data architects currently solving enterprise AI scale problems.',
    icon: 'Users',
    tag: '500+ Mentors'
  },
  {
    id: '4',
    title: 'Real-World Industry Capstones',
    description: 'Teams solve company-relevant business challenges with direct mentorship and measurable proof of concept.',
    icon: 'Briefcase',
    tag: 'Hands-on Execution'
  },
  {
    id: '5',
    title: 'Measurable Skill Growth & ROI',
    description: 'Real-time analytics dashboards track assessment benchmarks, skill adoption, and team performance metrics.',
    icon: 'TrendingUp',
    tag: 'Data-Driven ROI'
  },
  {
    id: '6',
    title: 'Premier Certification Endorsement',
    description: 'Co-branded certificates with elite academic institutions like E&ICT Academy, IIT Guwahati boosting team motivation.',
    icon: 'CheckCircle2',
    tag: 'Elite Recognition'
  }
];

export const DOMAIN_DATA = [
  {
    id: 'ai-genai',
    title: 'Artificial Intelligence & Generative AI',
    description: 'Master LLM orchestration, fine-tuning, RAG architectures, prompt engineering, and production GenAI pipelines.',
    color: 'from-blue-600 to-indigo-600',
    skills: ['LLM Fine-tuning', 'RAG Pipelines', 'LangChain', 'PyTorch', 'GenAI Architecture', 'AI Governance'],
    icon: 'Brain'
  },
  {
    id: 'data-science',
    title: 'Data Science & Advanced Analytics',
    description: 'Transform enterprise data assets into actionable business intelligence through machine learning and predictive modeling.',
    color: 'from-cyan-600 to-teal-600',
    skills: ['Predictive Analytics', 'Machine Learning', 'Python for Data', 'Big Data Engineering', 'MLOps'],
    icon: 'BarChart3'
  },
  {
    id: 'product-mgmt',
    title: 'Digital Product Management',
    description: 'Upskill product teams to build data-informed, customer-centric enterprise applications with agile velocity.',
    color: 'from-violet-600 to-purple-600',
    skills: ['Product Strategy', 'Data-Driven UX', 'Agile Scale', 'Feature Analytics', 'Product Ops'],
    icon: 'Layers'
  },
  {
    id: 'executive-leadership',
    title: 'Executive Leadership & Digital Transformation',
    description: 'Empower senior decision-makers to formulate digital strategy, champion AI adoption, and foster innovation.',
    color: 'from-amber-600 to-orange-600',
    skills: ['AI Strategy', 'Change Management', 'Digital Disruption', 'Tech Valuation', 'Agile Leadership'],
    icon: 'Crown'
  },
  {
    id: 'cloud-cyber',
    title: 'Cloud Security & DevOps Engineering',
    description: 'Modernize infrastructure with secure cloud-native architecture, automated CI/CD pipelines, and Zero-Trust principles.',
    color: 'from-emerald-600 to-teal-600',
    skills: ['AWS / Azure Cloud', 'Kubernetes', 'DevSecOps', 'Zero Trust Architecture', 'CI/CD Automation'],
    icon: 'ShieldCheck'
  }
];

export const COURSES_DATA: CourseProgram[] = [
  {
    id: 'pgp-ai-genai',
    title: 'Enterprise Executive Program in GenAI & Agentic AI',
    domain: 'ai-genai',
    level: 'Executive',
    duration: '6 Months (Live Online)',
    format: 'Weekend Cohorts + Hands-on Labs',
    description: 'Designed for engineering leaders and AI architects to deploy production-grade Multi-Agent AI systems and RAG pipelines.',
    highlights: [
      'Co-branded with Premier Tech Academies',
      'Deploy 4 Enterprise GenAI Capstones',
      'Master RAG, Vector DBs & LangGraph',
      '1-on-1 Mentorship from AI Principals'
    ],
    skills: ['LangChain', 'LlamaIndex', 'Vector Databases', 'Prompt Engineering', 'AI Security'],
    targetAudience: 'Senior Engineers, Tech Leads, Enterprise Architects',
    isPopular: true
  },
  {
    id: 'pgp-data-science',
    title: 'Post Graduate Program in Enterprise Data Science & MLOps',
    domain: 'data-science',
    level: 'Professional',
    duration: '8 Months',
    format: 'Hybrid / Live Sessions',
    description: 'Build enterprise-scale predictive models, automated feature stores, and robust continuous model monitoring systems.',
    highlights: [
      'End-to-End MLOps Pipeline Building',
      'Live Case Studies from Fortune 500s',
      'IIT Partner Certification Pathway',
      'Dedicated Enterprise Sandbox'
    ],
    skills: ['PyTorch', 'MLflow', 'Feature Stores', 'Statistical Modeling', 'Spark Analytics'],
    targetAudience: 'Data Engineers, Analysts, Software Engineers',
    isPopular: false
  },
  {
    id: 'product-leadership',
    title: 'Strategic Product Leadership for AI-First Enterprise',
    domain: 'product-mgmt',
    level: 'Executive',
    duration: '4 Months',
    format: 'Live Online Workshops',
    description: 'Bridge the gap between business vision and AI technologies. Create data-backed product roadmaps that scale ROI.',
    highlights: [
      'AI Product Strategy Frameworks',
      'Customer-Centric UX Design for AI',
      'Go-To-Market Execution Plans',
      'Peer Executive Networking'
    ],
    skills: ['Product Analytics', 'GenAI Roadmapping', 'Value Prop Design', 'Agile Product Ops'],
    targetAudience: 'Product Managers, Directors of Product, Business Leads',
    isPopular: true
  },
  {
    id: 'exec-ai-leadership',
    title: 'C-Suite Executive AI Transformation Blueprint',
    domain: 'executive-leadership',
    level: 'Enterprise Custom',
    duration: '2 Months (Customized)',
    format: 'Executive Retreat / Masterclasses',
    description: 'Equip C-Suite leaders, VPs, and BU Heads to lead AI integration across strategy, governance, talent, and tech stack.',
    highlights: [
      'Bespoke Business Case Development',
      'AI Governance & Ethical Compliance',
      'ROI Benchmarking & Metrics',
      'Exclusive Executive Coaching'
    ],
    skills: ['AI Capital Allocation', 'Corporate Governance', 'Talent Strategy', 'Tech Stack Evaluation'],
    targetAudience: 'CTOs, CIOs, VPs of Tech, Business Unit Leaders',
    isPopular: false
  },
  {
    id: 'cloud-sec-program',
    title: 'Cloud-Native Architecture & Enterprise DevSecOps',
    domain: 'cloud-cyber',
    level: 'Professional',
    duration: '5 Months',
    format: 'Interactive Virtual Labs',
    description: 'Transform monolithic systems into resilient cloud-native architectures with automated security and Zero Trust protocols.',
    highlights: [
      'Multi-Cloud AWS & Azure Integration',
      'Kubernetes Cluster Orchestration',
      'Automated Vulnerability Scanning',
      'Live Infrastructure-as-Code Labs'
    ],
    skills: ['Kubernetes', 'Terraform', 'Docker', 'AWS Security', 'Zero Trust Architecture'],
    targetAudience: 'DevOps Engineers, SysAdmins, Cloud Architects',
    isPopular: false
  }
];

export const AUDIENCE_ROLES: AudienceRole[] = [
  {
    title: 'Senior Engineering & Tech Leaders',
    description: 'CTOs, VPs, and Engineering Managers aiming to integrate modern GenAI, cloud automation, and MLOps into enterprise platforms.',
    keyBenefits: [
      'Architect resilient AI-first infrastructure',
      'Reduce time-to-market for digital products',
      'Align engineering sprints with strategic business goals'
    ],
    icon: 'Code2'
  },
  {
    title: 'Data & Analytics Teams',
    description: 'Data Scientists, BI Leads, and Analysts expanding into advanced predictive modeling, LLMs, and real-time data pipelines.',
    keyBenefits: [
      'Transition from static BI to predictive AI modeling',
      'Automate data pipelines with modern MLOps tools',
      'Communicate data insights directly to C-level executives'
    ],
    icon: 'LineChart'
  },
  {
    title: 'Product & Business Managers',
    description: 'Product Managers, Technical PMs, and Business Leaders building data-driven features and customer-centric products.',
    keyBenefits: [
      'Formulate GenAI product strategies with high ROI',
      'Leverage behavioral telemetry for product decisions',
      'Lead cross-functional agile development teams'
    ],
    icon: 'LayoutGrid'
  },
  {
    title: 'Non-Tech Executive Leaders',
    description: 'Business Unit Heads, Operations Directors, and HR Executives needing high-level AI comprehension and strategic vision.',
    keyBenefits: [
      'Demystify AI & Data capabilities without coding friction',
      'Drive enterprise-wide digital adoption initiatives',
      'Evaluate third-party AI vendor proposals accurately'
    ],
    icon: 'Briefcase'
  }
];

export const CAT_STEPS: CATStep[] = [
  {
    step: 1,
    title: 'Capabilities & Skill Gap Analysis',
    subtitle: 'Step 1: Diagnostics',
    description: 'We conduct comprehensive skill audits across engineering, data, and leadership teams to pinpoint operational gaps against industry benchmarks.',
    deliverables: [
      'Diagnostic Team Skill Matrix',
      'Role Maturity Assessments',
      'Custom Capability Radar Charts'
    ],
    icon: 'SearchCheck'
  },
  {
    step: 2,
    title: 'Customized Training Plan',
    subtitle: 'Step 2: Architecture',
    description: 'Our curriculum architects collaborate with your L&D and tech heads to design a bespoke learning roadmap customized to your stack, tools, and business goals.',
    deliverables: [
      'Tailored Learning Pathways',
      'Company Stack-Aligned Labs',
      'Flexible Cohort Schedules'
    ],
    icon: 'Compass'
  },
  {
    step: 3,
    title: 'Flexible Program Delivery',
    subtitle: 'Step 3: Execution',
    description: 'Delivered via live practitioner workshops, cloud-hosted sandboxes, real-world capstone projects, and continuous progress dashboards.',
    deliverables: [
      'Live Masterclasses with Industry Mentors',
      'Production-Ready Capstone Projects',
      'Executive ROI & Mastery Analytics'
    ],
    icon: 'Rocket'
  }
];

export const RESULTS_DATA: SuccessMetric[] = [
  {
    title: 'Accelerated Time-to-Production for AI Initiatives',
    value: '3.5x',
    label: 'Faster AI Project Deployment',
    company: 'ADP (Automatic Data Processing)',
    story: 'ADP upskilled 300+ software engineers in advanced Data Science and AI models, enabling rapid integration of automated HR analytics.'
  },
  {
    title: 'Enterprise Skill Upskilling with High Retention',
    value: '94%',
    label: 'Employee Completion & Satisfaction',
    company: 'Bayer Life Sciences',
    story: 'Bayer partnered with Accredian to deliver custom analytics masterclasses, driving concept-to-context application in research datasets.'
  },
  {
    title: 'Average Post-Training Team Productivity Boost',
    value: '40%',
    label: 'Efficiency Gain across Workflows',
    company: 'Leading Enterprise Client',
    story: 'Engineering teams demonstrated marked improvements in code output, automated test coverage, and RAG search accuracy.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajnish Kumar',
    role: 'Vice President - Global Engineering & Operations',
    company: 'ADP',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    quote: 'Accredian’s enterprise team demonstrated unparalleled dedication and deep domain expertise. They worked closely with our engineering leaders to customize the AI curriculum to our tech ecosystem. The result was immediate productivity gains in our teams.',
    rating: 5,
    impactMetric: '300+ Engineers Upskilled',
    domain: 'AI & Data Science'
  },
  {
    id: 't2',
    name: 'Ananya Sharma',
    role: 'Head of Learning & Organizational Development',
    company: 'Bayer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    quote: 'Working with Accredian felt like a true extension of our internal L&D team. They consistently go the extra mile to ensure live sessions, hands-on capstone projects, and evaluations map cleanly to real business metrics.',
    rating: 5,
    impactMetric: '94% Completion Rate',
    domain: 'Advanced Analytics'
  },
  {
    id: 't3',
    name: 'Vikramaditya Rao',
    role: 'Director of Product Management',
    company: 'Enterprise Fintech Titan',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    quote: 'The CAT framework gave our leadership complete visibility into skill gap improvements. Our PMs can now confidently converse with data engineers and architect GenAI-driven user experiences.',
    rating: 5,
    impactMetric: '40% Faster Product Sprints',
    domain: 'Product Leadership'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does Accredian customize training programs for our specific corporate needs?',
    answer: 'We begin with Step 1 of our CAT Framework—Capabilities & Skill Gap Analysis. We evaluate your current team capabilities, business goals, and tech stack. We then customize curriculum modules, real-world capstone projects, and live hands-on labs using your proprietary tools or sanitized datasets.',
    category: 'Customization'
  },
  {
    id: 'faq-2',
    question: 'What format are the enterprise sessions delivered in (Live, Hybrid, On-Demand)?',
    answer: 'We offer flexible delivery options: Live Virtual Interactive Workshops, In-person Executive Bootcamps, and Hybrid Cohorts. All live sessions are led by senior industry practitioners and complemented by 24/7 access to cloud sandbox labs and session recordings.',
    category: 'Delivery'
  },
  {
    id: 'faq-3',
    question: 'What academic certifications or credentials will our employees receive?',
    answer: 'Graduates receive Accredian Enterprise Certifications along with co-branded certificates issued in collaboration with premier academic institutions such as E&ICT Academy, IIT Guwahati, or XLRI (depending on the chosen program track).',
    category: 'General'
  },
  {
    id: 'faq-4',
    question: 'How does Accredian measure training ROI and skill mastery for enterprise clients?',
    answer: 'Enterprise clients gain access to an L&D Analytics Dashboard. We monitor live attendance, assignment completion, pre-and-post assessment scores, capstone presentation feedback, and participant NPS. Post-program surveys evaluate on-the-job skill application.',
    category: 'ROI & Impact'
  },
  {
    id: 'faq-5',
    question: 'What is the minimum team size required for a customized corporate program?',
    answer: 'While our open-enrollment executive cohorts welcome individual managers, our custom enterprise cohorts are optimized for teams of 10 to 500+ participants. We can segment large organizations into specialized sub-tracks by role.',
    category: 'General'
  },
  {
    id: 'faq-6',
    question: 'Who are the instructors and mentors leading the sessions?',
    answer: 'Our mentor network includes over 500+ industry practitioners—Chief Data Officers, AI Principals, Senior Staff Engineers, and Product Directors from companies like Google, Microsoft, Amazon, and leading enterprise labs.',
    category: 'Delivery'
  }
];
