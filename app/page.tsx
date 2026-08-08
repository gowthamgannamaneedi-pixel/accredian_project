import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Partners from '@/components/Partners';
import AccredianEdge from '@/components/AccredianEdge';
import Domains from '@/components/Domains';
import Courses from '@/components/Courses';
import Audience from '@/components/Audience';
import CATFramework from '@/components/CATFramework';
import ROICalculator from '@/components/ROICalculator';
import Results from '@/components/Results';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Section 1: Responsive Navbar with Region Switcher */}
      <Navbar />

      {/* Section 2: Hero Section */}
      <Hero />

      {/* Section 3: Track Record / Statistics */}
      <Stats />

      {/* Section 4: Partnerships / Trusted Organizations */}
      <Partners />

      {/* Section 5: Accredian Edge / Why Choose Us */}
      <AccredianEdge />

      {/* Section 6: Domain Expertise */}
      <Domains />

      {/* Section 7: Course / Program Segmentation & Interactive Syllabus Modal */}
      <Courses />

      {/* Section 8: Who Should Join */}
      <Audience />

      {/* Section 9: CAT Framework / Learning Approach */}
      <CATFramework />

      {/* Interactive Enterprise Skill & ROI Calculator */}
      <ROICalculator />

      {/* Section 10: Results / Success Section */}
      <Results />

      {/* Section 11: Testimonials */}
      <Testimonials />

      {/* Section 12: FAQ Accordion */}
      <FAQ />

      {/* Section 13: Lead Capture / Enquiry Form */}
      <EnquiryForm />

      {/* Section 14: Footer */}
      <Footer />

      {/* Interactive Accredian AI Enterprise Chatbot Widget */}
      <Chatbot />
    </main>
  );
}
