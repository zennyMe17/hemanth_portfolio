"use client";

import Head from "next/head";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaTools,
  FaLaptopCode,
  FaBook,
  FaProjectDiagram,
  FaTrophy,
} from "react-icons/fa";

import { portfolioData } from "../data/portfolioData";

// Section Title Component
const SectionTitle = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <h2 className="flex items-center text-3xl font-extrabold text-blue-800 mb-6 pb-2 border-b-4 border-blue-600">
    {icon}
    <span className="ml-3">{children}</span>
  </h2>
);

// Skill Badges Component
const SkillBadges = ({ title, skills, icon }: { title: string; skills: string; icon: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.split(", ").map((skill, idx) => (
        <span
          key={idx}
          className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-blue-200 transition-colors duration-200"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Home() {
  const { name, contact, education, projects, skills, certifications, extracurricular } = portfolioData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans text-gray-800">
      <Head>
        <title>{name}'s Portfolio</title>
        <meta name="description" content={`Portfolio of ${name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-6 sm:p-10 max-w-5xl">
        {/* Header */}
        <header className="bg-white rounded-xl shadow-xl p-10 text-center mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-200 opacity-30"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2">{name}</h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Computer Science & Cybersecurity Engineering | Full-Stack Developer | Problem Solver
            </p>
            <div className="flex flex-wrap justify-center gap-5 text-base sm:text-lg">
              <a href={`tel:${contact.phone}`} className="flex items-center text-blue-700 hover:text-blue-900">
                <FaPhone className="mr-2" /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center text-blue-700 hover:text-blue-900">
                <FaEnvelope className="mr-2" /> {contact.email}
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-700 hover:text-blue-900">
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-700 hover:text-blue-900">
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <SectionTitle icon={<FaLaptopCode />}>About Me</SectionTitle>
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m a Computer Science and Cybersecurity Engineering student passionate about problem-solving and secure software development.
            Skilled in full-stack web technologies and algorithms, I focus on creating scalable, efficient, and reliable digital solutions.
          </p>
        </section>

        {/* Education */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <SectionTitle icon={<FaGraduationCap />}>Education</SectionTitle>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{education.institution}</h3>
            <p className="text-md text-gray-600 italic">{education.degree}</p>
            <p className="text-sm text-gray-500">{education.years} | {education.location}</p>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <SectionTitle icon={<FaProjectDiagram />}>Projects</SectionTitle>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-blue-700 mb-2 flex items-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {project.title}
                  </a>
                  <FaExternalLinkAlt className="ml-2 text-sm text-blue-500" />
                </h3>
                <p className="text-sm text-gray-600 mb-2 italic">
                  {project.technologies} | {project.date}
                </p>
                <p className="text-gray-700 text-base">{project.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <SectionTitle icon={<FaCode />}>Technical Skills</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
            <SkillBadges title="Languages" skills={skills.languages} icon={<FaCode className="text-blue-600" />} />
            <SkillBadges title="Frameworks" skills={skills.techFrameworks} icon={<FaTools className="text-green-600" />} />
            <SkillBadges title="Tools" skills={skills.systemsConcepts} icon={<FaLaptopCode className="text-purple-600" />} />
            <SkillBadges title="Concepts" skills={skills.coursework} icon={<FaBook className="text-red-600" />} />
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <SectionTitle icon={<FaCertificate />}>Certifications</SectionTitle>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {certifications.map((cert, index) => (
              <li key={index}>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 font-medium">
                  {cert.name} <FaExternalLinkAlt className="inline-block ml-1 text-xs" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <SectionTitle icon={<FaTrophy />}>Achievements</SectionTitle>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {extracurricular.map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white rounded-xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-3">Let’s Connect</h2>
          <p className="text-lg mb-6">
            Open to internships and collaborations in software development and cybersecurity.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-md"
          >
            Send an Email
          </a>
        </footer>
      </main>

      <style jsx global>{`
        html, body { font-family: 'Inter', sans-serif; }
        * { transition: all 0.2s ease-in-out; }
      `}</style>
    </div>
  );
}
