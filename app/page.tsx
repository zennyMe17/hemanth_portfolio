"use client"; // Added "use client" directive at the very top

import Head from 'next/head';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaExternalLinkAlt, FaGraduationCap, FaCode, FaCertificate, FaStar, FaTools, FaLaptopCode, FaBook, FaProjectDiagram } from 'react-icons/fa'; // Added FaProjectDiagram

import { portfolioData } from '../data/portfolioData';

// Reusable Section Title Component
interface SectionTitleProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, icon }) => (
  <h2 className="flex items-center text-3xl font-extrabold text-blue-800 mb-6 pb-2 border-b-4 border-blue-600">
    {icon}
    <span className="ml-3">{children}</span>
  </h2>
);

// Component to render skill badges
interface SkillBadgesProps {
  title: string;
  skills: string;
  icon: React.ReactNode;
}

const SkillBadges: React.FC<SkillBadgesProps> = ({ title, skills, icon }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.split(', ').map((skill, idx) => (
        <span key={idx} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-blue-200 transition-colors duration-200 ease-in-out cursor-default">
          {skill}
        </span>
      ))}
    </div>
  </div>
);


export default function Home() {
  const { name, contact, education, projects, skills, certifications, extracurricular } = portfolioData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans text-gray-800 antialiased">
      <Head>
        <title>{name}'s Portfolio</title>
        <meta name="description" content={`Professional portfolio of ${name}`} />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <main className="container mx-auto p-4 sm:p-8 lg:p-12 max-w-6xl">
        {/* Header - Hero Section */}
        <header className="bg-white rounded-xl shadow-xl p-8 md:p-12 mb-10 text-center relative overflow-hidden">
          {/* Subtle background shape */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-200 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2"></div>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4 leading-tight animate-fade-in-down">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">{name}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 animate-fade-in-up">
            Computer Science and Cyber Security Engineering Student | Passionate about building scalable and secure solutions.
          </p>

          {/* Contact Icons */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-base sm:text-lg animate-fade-in">
            <a href={`tel:${contact.phone}`} className="flex items-center text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out hover:scale-105">
              <FaPhone className="mr-2" /> <span>{contact.phone}</span>
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out hover:scale-105">
              <FaEnvelope className="mr-2" /> <span>{contact.email}</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out hover:scale-105">
              <FaLinkedin className="mr-2" /> <span>LinkedIn</span>
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out hover:scale-105">
              <FaGithub className="mr-2" /> <span>GitHub</span>
            </a>
            {contact.leetcode && (
              <a href={contact.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out hover:scale-105">
                <Image src="/leetcode.png" alt="LeetCode" width={20} height={20} className="mr-2 filter grayscale hover:grayscale-0 transition-all duration-300" /> <span>LeetCode</span>
              </a>
            )}
            {contact.geeksforgeeks && (
              <a href={contact.geeksforgeeks} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out hover:scale-105">
                <Image src="/gfg.png" alt="GeeksforGeeks" width={20} height={20} className="mr-2 filter grayscale hover:grayscale-0 transition-all duration-300" /> <span>GeeksforGeeks</span>
              </a>
            )}
          </div>
        </header>

        {/* About Me Section - New */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-10">
          <SectionTitle icon={<FaStar />}>About Me</SectionTitle>
          <p className="text-lg leading-relaxed text-gray-700">
            Hi there! I'm Hemanth S, a passionate Computer Science and Cyber Security Engineering student with a strong drive for building innovative and secure technological solutions. My academic journey at M S Ramaiah Institute of Technology has equipped me with a solid foundation in data structures, algorithms, system design, and cutting-edge technologies. I thrive on tackling complex problems and am constantly exploring new ways to leverage technology for positive impact. I'm always eager to collaborate on exciting projects and contribute to a team that values creativity and excellence.
          </p>
        </section>

        {/* Education Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-10">
          <SectionTitle icon={<FaGraduationCap />}>Education</SectionTitle>
          <div className="relative pl-6 border-l-2 border-blue-400">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full animate-bounce-slow"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{education.institution}</h3>
            <p className="text-md text-gray-600 italic mb-2">{education.degree}</p>
            <p className="text-md font-medium text-gray-700">CGPA: {education.cgpa} <span className="float-right text-gray-500 font-normal">{education.years}</span></p>
            <p className="text-sm text-gray-500">{education.location}</p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-10">
          <SectionTitle icon={<FaProjectDiagram />}>Projects</SectionTitle>
          <div className="grid grid-cols-1 gap-8"> {/* Changed to grid-cols-1 for full width */}
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-white rounded-lg p-6 border-2 border-transparent hover:border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2 flex items-center">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {project.title}
                    </a>
                    <FaExternalLinkAlt className="ml-2 text-sm text-blue-500 group-hover:text-blue-700 transition-colors duration-300 group-hover:scale-110" />
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 italic">{project.technologies} | {project.date}</p>
                  {project.summary && (
                    <p className="text-base text-gray-700 mb-3 font-medium">
                      {project.summary}
                    </p>
                  )}
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {project.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills & Coursework Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-10">
          <SectionTitle icon={<FaLaptopCode />}>Technical Skills & Coursework</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
            <SkillBadges title="Languages" skills={skills.languages} icon={<FaCode className="text-blue-600" />} />
            <SkillBadges title="Technologies/Frameworks" skills={skills.techFrameworks} icon={<FaTools className="text-green-600" />} />
            <SkillBadges title="Systems & Concepts" skills={skills.systemsConcepts} icon={<FaLaptopCode className="text-purple-600" />} />
            <SkillBadges title="Coursework" skills={skills.coursework} icon={<FaBook className="text-red-600" />} />
          </div>
        </section>

        {/* Certifications Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-10">
          <SectionTitle icon={<FaCertificate />}>Certifications</SectionTitle>
          <ul className="list-disc list-inside text-gray-700 text-base space-y-3">
            {certifications.map((cert, index) => (
              <li key={index}>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 font-medium">
                  {cert.name} <FaExternalLinkAlt className="inline-block ml-2 text-sm" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Extracurricular Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-10">
          <SectionTitle icon={<FaStar />}>Extracurricular</SectionTitle>
          <div className="space-y-6">
            {extracurricular.map((activity, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{activity.title}</h3>
                <p className="text-gray-700 text-base">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer / Call to Action */}
        <footer className="bg-gray-800 text-white rounded-xl p-8 md:p-10 text-center mt-10 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
          <p className="text-lg mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Send Me an Email
          </a>
        </footer>
      </main>

      <style jsx global>{`
        /* Custom animations */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out 0.3s forwards; /* Delayed */
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out 0.6s forwards; /* Delayed */
        }

        .animate-bounce-slow {
            animation: bounceSlow 2s infinite ease-in-out;
        }

        /* Basic global styles to ensure Inter font is applied */
        html, body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
