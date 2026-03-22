"use client";

import Head from "next/head";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaCode,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiCodechef,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiCplusplus,
  SiPython,
} from "react-icons/si";

export default function Home() {
  const contact = {
    email: "gowda.hemanth.1718@gmail.com",
    linkedin: "https://www.linkedin.com/in/hemanth-s-b239b02b3/",
    github: "https://github.com/zennyMe17",
    leetcode: "https://leetcode.com/u/CuteItachi1718/",
    codechef: "https://www.codechef.com/users/uchiha_hemanth",
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-200 selection:text-indigo-900">
      <Head>
        <title>Hemanth S | Software Engineer</title>
        <meta name="description" content="Portfolio of Hemanth S, Software Developer Intern at IBM & Cybersecurity Engineer." />
      </Head>

      {/* ===== Hero Section ===== */}
      <header className="relative bg-white border-b border-slate-200 pt-20 pb-16 px-6 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-transparent to-transparent opacity-60"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 mb-6 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full">
            Available for Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Hemanth S.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
            Software Developer Intern at <span className="font-semibold text-slate-800">IBM</span> & Cybersecurity Engineering student at MSRIT. I build secure, high-performance systems and solve complex algorithmic challenges.
          </p>

          <div className="flex flex-wrap gap-4 text-slate-600 mb-8 items-center text-sm md:text-base">
            <span className="flex items-center gap-2"><FaMapMarkerAlt /> Bengaluru, India</span>
            <span className="text-slate-300">|</span>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-indigo-600 transition-colors"><FaEnvelope /> Email Me</a>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-md flex items-center gap-2">
              <FaGithub className="text-xl" /> GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-md flex items-center gap-2">
              <FaLinkedin className="text-xl" /> LinkedIn
            </a>
            <a href={contact.leetcode} target="_blank" rel="noopener noreferrer" className="p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all hover:-translate-y-1 shadow-md flex items-center gap-2">
              <SiLeetcode className="text-xl" /> LeetCode
            </a>
            <a href={contact.codechef} target="_blank" rel="noopener noreferrer" className="p-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-all hover:-translate-y-1 shadow-md flex items-center gap-2">
              <SiCodechef className="text-xl" /> CodeChef
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        
        {/* ===== Experience Section ===== */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <FaBriefcase className="text-indigo-600" /> Experience
          </h2>
          <div className="space-y-8 border-l-2 border-indigo-100 ml-3 pl-6">
            
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-indigo-600"></div>
              <h3 className="text-xl font-bold text-slate-900">Software Developer Intern</h3>
              <p className="text-indigo-600 font-medium mb-2">IBM <span className="text-slate-500 font-normal text-sm ml-2">• Jan 2026 - Present</span></p>
              <ul className="list-none space-y-2 text-slate-600">
                <li className="flex items-start gap-2"><span className="text-indigo-400 mt-1">▹</span> Built an end-to-end pipeline for Access Monitor data analysis to enable peer group discovery.</li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 mt-1">▹</span> Designed data preprocessing workflows to transform raw access logs into ML-ready feature sets.</li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 mt-1">▹</span> Developed a clustering-based ML solution to group users based on access behavior patterns.</li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 mt-1">▹</span> Implemented outlier detection to identify anomalous users deviating from peer groups.</li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-slate-300"></div>
              <h3 className="text-xl font-bold text-slate-900">Technical Lead</h3>
              <p className="text-slate-600 font-medium mb-2">Teach Yuva Bengaluru Trust</p>
              <ul className="list-none space-y-2 text-slate-600">
                <li className="flex items-start gap-2"><span className="text-slate-400 mt-1">▹</span> Spearheaded the development of a gamified Generative AI learning platform using AWS PartyRock for government school students.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* ===== Education Section ===== */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-indigo-600" /> Education
          </h2>
          <div className="space-y-6 border-l-2 border-indigo-100 ml-3 pl-6">
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-indigo-600"></div>
              <h3 className="text-xl font-bold text-slate-900">B.E - Computer Science & Cyber Security</h3>
              <p className="text-slate-600 font-medium">M S Ramaiah Institute of Technology <span className="text-slate-500 font-normal text-sm ml-2">• 2022 - 2026</span></p>
              <p className="text-indigo-600 font-semibold mt-1">CGPA: 9.02</p>
            </div>
          </div>
        </section>

        {/* ===== Projects Section ===== */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <FaCode className="text-indigo-600" /> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Project 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition-all flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <FaShieldAlt className="text-3xl text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">QuMail</h3>
              <p className="text-slate-600 text-sm mb-4 flex-grow">
                Post-Quantum Cryptography Mail Server. Architected a full mail server stack bridging liboqs with standard mail protocols via a custom Python-based KMS.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['Docker', 'Postfix', 'liboqs', 'Python'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">{tech}</span>
                ))}
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition-all flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <FaServer className="text-3xl text-indigo-500" />
                <a href="https://github.com/zennyMe17/AceInterview-AI" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600"><FaExternalLinkAlt /></a>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">AceInterview-AI</h3>
              <p className="text-slate-600 text-sm mb-4 flex-grow">
                Scalable SaaS web app for AI-driven mock interviews. Integrated Vapi AI for real-time voice-based interaction and personalized assessments.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['MERN', 'Vapi AI', 'AWS S3', 'Next.js'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">{tech}</span>
                ))}
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition-all flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <FaCode className="text-3xl text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Async Logging System</h3>
              <p className="text-slate-600 text-sm mb-4 flex-grow">
                High-performance asynchronous logging system engineered to minimize I/O latency using a producer-consumer model and multithreading.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['C++', 'Multithreading', 'Mutexes'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">{tech}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ===== Achievements Section ===== */}
        <section>
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-8 md:p-12 text-white shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <FaTrophy className="text-yellow-400" /> Competitive Programming & Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-200">Data Structures & Algorithms</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <SiLeetcode className="text-yellow-500 text-xl" /> 
                    <span><strong className="text-white">1946 Rating (Knight)</strong> on LeetCode (Top 3%)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <SiCodechef className="text-amber-600 text-xl" /> 
                    <span><strong className="text-white">1420 Rating</strong> on CodeChef</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-200">Hackathons & Competitions</h3>
                <p className="text-slate-300 leading-relaxed">
                  Selected as a <strong className="text-white">Pre-Finalist</strong> in <strong className="text-white">Flipkart GRiD 5.0</strong> Software Development Track among thousands of participants nationwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Skills Section ===== */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <FaCode className="text-indigo-600" /> Technical Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {/* Icons mapping */}
            <span className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-700 transition-colors cursor-default shadow-sm"><SiCplusplus className="text-blue-600 text-lg" /> C++</span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-700 transition-colors cursor-default shadow-sm"><SiPython className="text-yellow-500 text-lg" /> Python</span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-700 transition-colors cursor-default shadow-sm"><SiReact className="text-blue-400 text-lg" /> React.js</span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-700 transition-colors cursor-default shadow-sm"><SiNextdotjs className="text-black text-lg" /> Next.js</span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-700 transition-colors cursor-default shadow-sm"><SiNodedotjs className="text-green-600 text-lg" /> Node.js</span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-700 transition-colors cursor-default shadow-sm"><SiMongodb className="text-green-500 text-lg" /> MongoDB</span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-700 transition-colors cursor-default shadow-sm"><SiDocker className="text-blue-500 text-lg" /> Docker</span>
            
            {/* Text only mapping */}
            {[
              "C", "JavaScript", "SQL", "Express.js", "REST APIs",
              "Linux/Unix", "CI/CD", "GitHub Actions",
              "Machine Learning", "System Design", "Cybersecurity", "Data Structures"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-700 transition-colors cursor-default shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

      </main>

      {/* ==== Footer ==== */}
      <footer className="bg-white border-t border-slate-200 py-10 text-center text-slate-500">
        <p>© {new Date().getFullYear()} Hemanth S. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}
