'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Sparkles, ChevronRight, RefreshCw, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actionLink?: { label: string; href: string };
  options?: string[];
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'msg-init-1',
    sender: 'bot',
    text: "Hello! 👋 I'm Accredian's AI Enterprise Advisor. How can I assist with your team's upskilling goals today?",
    timestamp: 'Just now',
    options: [
      'Tell me about GenAI & Agentic AI programs',
      'How does the CAT Framework work?',
      'Tell me about IIT Guwahati certification',
      'How do I book a corporate consultation?'
    ]
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageCounter = useRef(100);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateBotReply = (userQuery: string) => {
    const query = userQuery.toLowerCase();
    let replyText = '';
    let actionLink: { label: string; href: string } | undefined;
    let options: string[] | undefined;

    if (query.includes('genai') || query.includes('ai') || query.includes('agentic')) {
      replyText = "Our Enterprise Executive Program in GenAI & Agentic AI is a 6-month live cohort. Teams master RAG architectures, Vector DBs, LangChain, and fine-tuning LLMs with dedicated enterprise sandbox environments.";
      actionLink = { label: 'View GenAI Program Details', href: '#programs' };
      options = ['What is the team size requirement?', 'Show me ROI case studies', 'Book a Consultation'];
    } else if (query.includes('cat') || query.includes('framework') || query.includes('methodology')) {
      replyText = "The Accredian CAT Framework is a 3-step structured approach:\n1️⃣ Capabilities & Skill Gap Analysis (Diagnostics)\n2️⃣ Customized Training Plan (Architecture)\n3️⃣ Flexible Program Delivery (Execution & ROI Metrics).";
      actionLink = { label: 'Explore CAT Framework', href: '#framework' };
      options = ['Request Stage 1 Assessment', 'View ROI Calculator'];
    } else if (query.includes('iit') || query.includes('guwahati') || query.includes('certificate') || query.includes('xlri')) {
      replyText = "Accredian programs feature co-branded credentials issued in collaboration with elite institutions like E&ICT Academy, IIT Guwahati & XLRI. Certificates are globally verifiable for your employees.";
      actionLink = { label: 'See Academic Partners', href: '#partners' };
      options = ['Explore Programs', 'Book a Consultation'];
    } else if (query.includes('roi') || query.includes('calculator') || query.includes('cost') || query.includes('pricing')) {
      replyText = "Our enterprise clients typically report a 3.5x faster AI project deployment speed and a 40% average productivity boost. You can test your team parameters using our Interactive ROI Estimator!";
      actionLink = { label: 'Launch ROI Calculator', href: '#calculator' };
      options = ['Book a Consultation', 'Tell me about GenAI programs'];
    } else if (query.includes('consultation') || query.includes('book') || query.includes('talk') || query.includes('contact')) {
      replyText = "You can schedule a consultation directly with an Enterprise Advisor! We respond within 24 business hours to evaluate your custom stack and team goals.";
      actionLink = { label: 'Fill Consultation Form', href: '#enquiry' };
    } else {
      replyText = "Thank you for reaching out! We offer bespoke corporate upskilling across GenAI, Data Science, Product Leadership, Executive Strategy, and DevSecOps. Would you like to schedule a call with a Solutions Director?";
      actionLink = { label: 'Schedule Corporate Consultation', href: '#enquiry' };
      options = ['Tell me about GenAI programs', 'How does the CAT Framework work?', 'Launch ROI Calculator'];
    }

    return { replyText, actionLink, options };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    messageCounter.current += 1;
    const userMsgId = `msg-usr-${messageCounter.current}`;

    const userMsg: Message = {
      id: userMsgId,
      sender: 'user',
      text: text.trim(),
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      messageCounter.current += 1;
      const botMsgId = `msg-bot-${messageCounter.current}`;
      const { replyText, actionLink, options } = generateBotReply(text);
      const botMsg: Message = {
        id: botMsgId,
        sender: 'bot',
        text: replyText,
        timestamp: 'Just now',
        actionLink,
        options,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#168CFF] hover:bg-[#0284C7] text-white font-bold text-sm shadow-xl border border-[#168CFF]/30 group"
          aria-label="Toggle Accredian AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
          </div>
          <span className="hidden sm:inline font-bold">Ask Accredian AI</span>
          <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
        </motion.button>
      </div>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[600px] rounded-3xl bg-white border border-slate-200 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="p-4 bg-[#F8FAFC] border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#168CFF] flex items-center justify-center text-white shadow-md">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111827] flex items-center gap-1.5">
                    Accredian AI Advisor
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Online
                    </span>
                  </h4>
                  <p className="text-[11px] text-[#6B7280]">Enterprise Learning Assistant</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  className="p-2 rounded-lg text-[#6B7280] hover:text-[#111827] hover:bg-slate-200 transition-colors"
                  title="Reset Chat Conversation"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-[#6B7280] hover:text-[#111827] hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="p-4 flex-1 overflow-y-auto space-y-4 max-h-[400px] text-xs bg-white">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-start gap-2 max-w-[85%]">
                    {msg.sender === 'bot' && (
                      <div className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] shrink-0 mt-0.5">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}

                    <div
                      className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-line font-medium ${
                        msg.sender === 'user'
                          ? 'bg-[#168CFF] text-white rounded-br-none shadow-md'
                          : 'bg-[#F8FAFC] border border-slate-200 text-[#111827] rounded-bl-none'
                      }`}
                    >
                      {msg.text}

                      {/* Action Link */}
                      {msg.actionLink && (
                        <div className="mt-2.5 pt-2 border-t border-slate-200">
                          <a
                            href={msg.actionLink.href}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1 text-[#168CFF] font-bold hover:underline"
                          >
                            <span>{msg.actionLink.label}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] text-[#6B7280] mt-1 px-1">{msg.timestamp}</span>

                  {/* Dynamic Options */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 pl-9">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(opt)}
                          className="px-2.5 py-1 rounded-full bg-[#F8FAFC] hover:bg-slate-100 text-[#0284C7] border border-slate-200 text-[11px] font-bold transition-colors flex items-center gap-1"
                        >
                          <span>{opt}</span>
                          <ChevronRight className="w-3 h-3 text-[#0284C7]" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-[#6B7280] pl-9">
                  <div className="w-2 h-2 rounded-full bg-[#168CFF] animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-[#168CFF] animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-[#168CFF] animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] font-semibold ml-1">AI Advisor is thinking...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="p-3 bg-[#F8FAFC] border-t border-slate-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question about Accredian programs..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-[#111827] placeholder-[#6B7280] text-xs focus:outline-none focus:border-[#168CFF] transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2.5 rounded-xl bg-[#168CFF] hover:bg-[#0284C7] text-white font-bold disabled:opacity-40 shadow-md transition-opacity"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
