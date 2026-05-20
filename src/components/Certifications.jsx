import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const CERT_DATA = [
  {
    title: 'Ethical Hacking Basics',
    issuer: 'EC-Council Learning / Platform Courses',
    date: 'Issued: 2024',
    id: 'Credential ID: EH-BASIC-8842',
    verifyLink: 'https://github.com'
  },
  {
    title: 'Web Development Fundamentals',
    issuer: 'FreeCodeCamp / Developer Platforms',
    date: 'Issued: 2023',
    id: 'Credential ID: FCC-WEB-9031',
    verifyLink: 'https://github.com'
  },
  {
    title: 'Cybersecurity Principles & Networks',
    issuer: 'Cisco Networking Academy Courseware',
    date: 'Issued: 2024',
    id: 'Credential ID: CS-NET-7741',
    verifyLink: 'https://github.com'
  },
  {
    title: 'Linux Operating Systems Basics',
    issuer: 'RedHat / Linux Academy Materials',
    date: 'Issued: 2024',
    id: 'Credential ID: RH-LINUX-4491',
    verifyLink: 'https://github.com'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative bg-[#09090b] overflow-hidden spotlight-container">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[50%] left-[20%] w-[30vw] h-[30vw] bg-zinc-800/10 rounded-full filter blur-[100px]" />
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
            CREDENTIALS_LIST
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans uppercase"
          >
            Certifications
          </motion.h2>
          <div className="w-8 h-[2px] bg-zinc-700 mt-3" />
        </div>

        {/* Certifications cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERT_DATA.map((cert, index) => {
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex items-start space-x-4 backdrop-blur-sm shadow-md"
              >
                <div className="p-2.5 bg-zinc-800 border border-zinc-700/60 rounded-xl text-zinc-400 group-hover:text-white transition-colors duration-300 flex-shrink-0 select-none">
                  <Award size={18} />
                </div>

                <div className="flex-1 space-y-2">
                  <div>
                    <h3 className="text-sm font-bold text-white font-sans tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 font-sans mt-0.5">{cert.issuer}</p>
                  </div>

                  <div className="text-[10px] font-sans text-zinc-400 space-y-0.5">
                    <p>{cert.date}</p>
                    <p className="font-mono text-[9px] text-zinc-500">{cert.id}</p>
                  </div>

                  <div className="pt-2.5 border-t border-zinc-800/60">
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[10px] font-mono text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={10} className="mr-1.5" /> VERIFY_CREDENTIAL
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
