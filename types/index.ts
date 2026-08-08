export interface EnquiryFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  phoneNumber: string;
  trainingRequirement: string;
  teamSize?: string;
  message: string;
}

export interface CourseProgram {
  id: string;
  title: string;
  domain: string;
  level: 'Executive' | 'Professional' | 'Foundational' | 'Enterprise Custom';
  duration: string;
  format: string;
  description: string;
  highlights: string[];
  skills: string[];
  targetAudience: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogo?: string;
  image: string;
  quote: string;
  rating: number;
  impactMetric: string;
  domain: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Customization' | 'Delivery' | 'ROI & Impact';
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface EdgeFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface CATStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface Partner {
  name: string;
  type: 'corporate' | 'academic';
  logoText: string;
  industry: string;
}

export interface AudienceRole {
  title: string;
  description: string;
  keyBenefits: string[];
  icon: string;
}

export interface SuccessMetric {
  title: string;
  value: string;
  label: string;
  company: string;
  story: string;
}
