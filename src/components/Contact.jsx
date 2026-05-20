import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, CheckCircle2, AlertTriangle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    // Simulate submission delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Nice subtle celebration confetti
      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.85 },
        colors: ['#3b82f6', '#6366f1', '#ffffff']
      });

      // Clear success banner after 4s
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#09090b] overflow-hidden spotlight-container">
      {/* Background radial effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[20%] w-[35vw] h-[35vw] bg-zinc-800/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-blue-500 font-mono tracking-widest uppercase mb-2"
          >
            GET_IN_TOUCH
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans uppercase"
          >
            Contact Me
          </motion.h2>
          <div className="w-8 h-[2px] bg-zinc-700 mt-3" />
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info cards - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white tracking-wide font-sans">
                Contact Channels
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans max-w-sm">
                Have a question, an opportunity, or interested in collaborating on frontend layouts or technology systems? Drop a message and I will reply as soon as possible.
              </p>

              <div className="space-y-4 pt-4">
                {/* Location */}
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 font-sans text-xs text-zinc-300">
                  <MapPin className="text-zinc-500" size={16} />
                  <div>
                    <span className="text-[10px] text-zinc-500 block font-mono">LOCATION</span>
                    <span className="font-medium">Jammu & Kashmir, India</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 font-sans text-xs text-zinc-300">
                  <Mail className="text-zinc-500" size={16} />
                  <div>
                    <span className="text-[10px] text-zinc-500 block font-mono">DIRECT EMAIL</span>
                    <a href="mailto:miladlai526@gmail.com" className="hover:text-white transition-colors font-medium">
                      miladlai526@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="space-y-3.5 pt-6 border-t border-zinc-800/60">
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest block uppercase select-none">SOCIAL CHANNELS</span>
              <div className="flex items-center space-x-3 select-none">
                <a 
                  href="https://github.com/miladali-8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 py-2 px-3 border border-zinc-850 hover:border-zinc-700 rounded-xl bg-zinc-900/50 text-zinc-400 hover:text-white font-sans text-[10px] font-medium tracking-wide text-center flex items-center justify-center gap-1.5 transition-all duration-300"
                >
                  <GithubIcon size={12} /> GITHUB
                </a>
                <a 
                  href="https://www.linkedin.com/in/milad-ali" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 py-2 px-3 border border-zinc-850 hover:border-zinc-700 rounded-xl bg-zinc-900/50 text-zinc-400 hover:text-white font-sans text-[10px] font-medium tracking-wide text-center flex items-center justify-center gap-1.5 transition-all duration-300"
                >
                  <LinkedinIcon size={12} /> LINKEDIN
                </a>
                <a 
                  href="https://www.instagram.com/miladali01/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 py-2 px-3 border border-zinc-850 hover:border-zinc-700 rounded-xl bg-zinc-900/50 text-zinc-400 hover:text-white font-sans text-[10px] font-medium tracking-wide text-center flex items-center justify-center gap-1.5 transition-all duration-300"
                >
                  <InstagramIcon size={12} /> INSTAGRAM
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Card - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6 backdrop-blur-sm shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-750 focus:border-zinc-650 rounded-xl px-3.5 py-2 text-xs font-sans text-white placeholder-zinc-600 outline-none transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-750 focus:border-zinc-650 rounded-xl px-3.5 py-2 text-xs font-sans text-white placeholder-zinc-600 outline-none transition-all duration-300"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-750 focus:border-zinc-650 rounded-xl px-3.5 py-2 text-xs font-sans text-white placeholder-zinc-600 outline-none transition-all duration-300"
                  placeholder="Subject (Optional)"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-750 focus:border-zinc-650 rounded-xl px-3.5 py-2 text-xs font-sans text-white placeholder-zinc-600 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your thoughts..."
                  required
                />
              </div>

              {/* Validation Responses */}
              {status === 'success' && (
                <div className="flex items-center space-x-2 text-green-400 text-xs font-sans p-3 bg-green-500/5 border border-green-500/10 rounded-xl">
                  <CheckCircle2 size={14} />
                  <span>Success! Your message was sent successfully.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center space-x-2 text-red-400 text-xs font-sans p-3 bg-red-500/5 border border-red-500/10 rounded-xl">
                  <AlertTriangle size={14} />
                  <span>Failed: Please fill all required fields correctly.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all duration-300 font-sans text-xs font-bold flex items-center justify-center space-x-2 cursor-pointer shadow-md"
              >
                {status === 'sending' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={12} />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
