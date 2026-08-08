'use client';

import React, { useState } from 'react';
import { EnquiryFormData } from '@/types';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Building2, Phone, Mail, User, FileText, Users, Download, ShieldCheck, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EnquiryForm() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    phoneNumber: '',
    trainingRequirement: 'Generative AI & Agentic Systems',
    teamSize: '10 - 50 employees',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverMessage, setServerMessage] = useState('');
  const [enquiryId, setEnquiryId] = useState('');
  const [assignedAdvisor, setAssignedAdvisor] = useState('');
  const [leadPriority, setLeadPriority] = useState('');

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail || !emailRegex.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid work email address.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required.';
    }

    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{6,15}$/;
    if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number with area/country code.';
    }

    if (!formData.trainingRequirement) {
      newErrors.trainingRequirement = 'Please select a primary training focus.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide details about your requirement (min 10 chars).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setServerMessage('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        setEnquiryId(result.enquiryId);
        setAssignedAdvisor(result.assignedAdvisor || 'Senior Enterprise Solutions Advisor');
        setLeadPriority(result.leadPriority || 'High Priority');
        setServerMessage(result.message);
      } else {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setServerMessage(result.message || 'Failed to submit enquiry. Please try again.');
        }
      }
    } catch (err) {
      console.error(err);
      setServerMessage('A network error occurred. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      companyName: '',
      phoneNumber: '',
      trainingRequirement: 'Generative AI & Agentic Systems',
      teamSize: '10 - 50 employees',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
    setServerMessage('');
    setEnquiryId('');
    setAssignedAdvisor('');
  };

  return (
    <section id="enquiry" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Contact Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-6">
              Transform Your Workforce with Accredian Enterprise
            </h2>

            <p className="text-[#4B5563] text-base leading-relaxed mb-8">
              Speak directly with an enterprise training solution advisor. We will evaluate your team goals and craft a bespoke upskilling blueprint.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111827]">Enterprise Sales Email</h4>
                  <p className="text-xs text-[#6B7280]">enterprise@accredian.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111827]">Corporate Support Line</h4>
                  <p className="text-xs text-[#6B7280]">+1 (800) 555-ACCRED</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs text-[#111827]">
              <strong className="text-[#0284C7] font-bold block mb-1">⚡ Fast Response SLA:</strong>
              Our dedicated solutions team responds to corporate requests within 24 business hours.
            </div>
          </div>

          {/* Right Column Form & Success Screen */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative">
              
              <h3 className="text-2xl font-extrabold text-[#111827] mb-2">Schedule Corporate Consultation</h3>
              <p className="text-[#6B7280] text-sm mb-6">Fill in your requirements below to request program details & custom quotes.</p>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 rounded-2xl bg-[#F8FAFC] border border-emerald-300 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] text-xs font-bold border border-sky-200">
                        Ref ID: {enquiryId}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                        {leadPriority}
                      </span>
                    </div>

                    <h4 className="text-2xl font-bold text-[#111827] mb-2">Enquiry Logged Successfully!</h4>
                    <p className="text-[#4B5563] text-sm leading-relaxed mb-6">
                      {serverMessage}
                    </p>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-left mb-6 space-y-2">
                      <div className="flex items-center justify-between text-[#111827]">
                        <span className="flex items-center gap-1.5 font-bold"><ShieldCheck className="w-4 h-4 text-[#168CFF]" /> Assigned Advisor:</span>
                        <span className="text-[#0284C7] font-extrabold">{assignedAdvisor}</span>
                      </div>
                      <div className="flex items-center justify-between text-[#111827]">
                        <span className="flex items-center gap-1.5 font-bold"><Clock className="w-4 h-4 text-emerald-600" /> Response SLA:</span>
                        <span className="text-emerald-700 font-bold">Guaranteed &lt; 24 Business Hours</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={() => alert(`Brochure PDF for ${formData.trainingRequirement} downloaded!`)}
                        className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#168CFF] hover:bg-[#0284C7] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Track Brochure PDF</span>
                      </button>

                      <button
                        onClick={handleReset}
                        className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#111827] border border-slate-200 font-bold text-xs transition-colors"
                      >
                        Submit Another Requirement
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {serverMessage && !isSuccess && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{serverMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1.5 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#0284C7]" /> Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border text-[#111827] placeholder-[#6B7280] text-sm focus:outline-none transition-colors ${
                            errors.fullName ? 'border-red-500' : 'border-slate-200 focus:border-[#168CFF]'
                          }`}
                        />
                        {errors.fullName && <p className="text-red-600 text-[11px] mt-1">{errors.fullName}</p>}
                      </div>

                      {/* Work Email */}
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1.5 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-[#0284C7]" /> Work Email *
                        </label>
                        <input
                          type="email"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="sarah@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border text-[#111827] placeholder-[#6B7280] text-sm focus:outline-none transition-colors ${
                            errors.workEmail ? 'border-red-500' : 'border-slate-200 focus:border-[#168CFF]'
                          }`}
                        />
                        {errors.workEmail && <p className="text-red-600 text-[11px] mt-1">{errors.workEmail}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Company Name */}
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1.5 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-[#0284C7]" /> Company / Organization *
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Acme Corp"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border text-[#111827] placeholder-[#6B7280] text-sm focus:outline-none transition-colors ${
                            errors.companyName ? 'border-red-500' : 'border-slate-200 focus:border-[#168CFF]'
                          }`}
                        />
                        {errors.companyName && <p className="text-red-600 text-[11px] mt-1">{errors.companyName}</p>}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#0284C7]" /> Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border text-[#111827] placeholder-[#6B7280] text-sm focus:outline-none transition-colors ${
                            errors.phoneNumber ? 'border-red-500' : 'border-slate-200 focus:border-[#168CFF]'
                          }`}
                        />
                        {errors.phoneNumber && <p className="text-red-600 text-[11px] mt-1">{errors.phoneNumber}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Training Requirement */}
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1.5 flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-[#0284C7]" /> Primary Training Focus *
                        </label>
                        <select
                          value={formData.trainingRequirement}
                          onChange={(e) => setFormData({ ...formData, trainingRequirement: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#111827] text-sm focus:outline-none focus:border-[#168CFF] transition-colors"
                        >
                          <option value="Generative AI & Agentic Systems">Generative AI & Agentic Systems</option>
                          <option value="Data Science & Advanced Analytics">Data Science & Advanced Analytics</option>
                          <option value="Digital Product Management">Digital Product Management</option>
                          <option value="Executive AI Leadership & Strategy">Executive AI Leadership & Strategy</option>
                          <option value="Cloud Security & DevSecOps">Cloud Security & DevSecOps</option>
                          <option value="Custom Multi-Track Upskilling">Custom Multi-Track Upskilling</option>
                        </select>
                      </div>

                      {/* Team Size */}
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1.5 flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#0284C7]" /> Estimated Team Size
                        </label>
                        <select
                          value={formData.teamSize}
                          onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#111827] text-sm focus:outline-none focus:border-[#168CFF] transition-colors"
                        >
                          <option value="1 - 10 employees">1 - 10 employees</option>
                          <option value="10 - 50 employees">10 - 50 employees</option>
                          <option value="50 - 200 employees">50 - 200 employees</option>
                          <option value="200+ employees">200+ employees</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1.5">
                        Requirements & Goals Overview *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your team size, tech stack, timeline, and training goals..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border text-[#111827] placeholder-[#6B7280] text-sm focus:outline-none transition-colors ${
                          errors.message ? 'border-red-500' : 'border-slate-200 focus:border-[#168CFF]'
                        }`}
                      />
                      {errors.message && <p className="text-red-600 text-[11px] mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 rounded-xl bg-[#168CFF] hover:bg-[#0284C7] text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Assigning Advisor & Logging Lead...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Corporate Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
