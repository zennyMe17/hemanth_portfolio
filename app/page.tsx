"use client";

import Head from "next/head";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaTools,
  FaLaptopCode,
  FaBook,
  FaProjectDiagram,
  FaTrophy,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

export default function Home() {
  const contact = {
    phone: "+91 9876543210",
    email: "yourname@example.com",
    linkedin: "https://www.linkedin.com/in/hemanth-s-b239b02b3/",
    github: "https://github.com/zennyMe17",
    leetcode: "https://leetcode.com/u/Hemanth_gowda1718/",
    codechef: "https://www.codechef.com/users/uchiha_hemanth",
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Head>
        <title>Hemanth S | Portfolio</title>
      </Head>

      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-10 shadow-md text-center">
        <h1 className="text-4xl font-bold mb-2">Hemanth S</h1>
        <p className="text-lg">Computer Science & Cybersecurity Engineering @ MSRIT</p>
        <p className="text-sm mt-1">
          Passionate about Competitive Programming, Cybersecurity, and Full Stack Development
        </p>

        <div className="flex justify-center mt-4 flex-wrap gap-5 text-lg">
          <a href={`tel:${contact.phone}`} className="flex items-center hover:text-gray-200">
            <FaPhone className="mr-2" /> Contact
          </a>
          <a href={`mailto:${contact.email}`} className="flex items-center hover:text-gray-200">
            <FaEnvelope className="mr-2" /> Email
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-200">
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-200">
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a href={contact.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-200">
            <SiLeetcode className="mr-2" /> LeetCode
          </a>
          <a href={contact.codechef} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-200">
            <SiCodechef className="mr-2" /> CodeChef
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
          <FaLaptopCode className="mr-2" /> About
        </h2>
        <p className="leading-relaxed text-gray-700">
          I’m a Computer Science and Cybersecurity Engineering student at MSRIT with a strong
          foundation in algorithms, data structures, and secure software development. I enjoy solving
          complex programming challenges and developing scalable full-stack applications using the
          MERN stack. Driven by curiosity and precision, I aim to build efficient and secure digital solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
          <FaProjectDiagram className="mr-2" /> Projects
        </h2>
        <div className="space-y-6">
          <div className="bg-white shadow-md p-5 rounded-lg border-l-4 border-indigo-600">
            <h3 className="text-lg font-semibold">Ethical Hiring</h3>
            <p className="text-gray-700">
              A secure recruitment platform ensuring fairness in hiring through encrypted test data
              and AI-powered plagiarism detection, designed to promote transparency in candidate evaluation.
            </p>
          </div>

          <div className="bg-white shadow-md p-5 rounded-lg border-l-4 border-indigo-600">
            <h3 className="text-lg font-semibold">Dynamic Cache</h3>
            <p className="text-gray-700">
              Implemented an adaptive caching algorithm that enhances data retrieval and optimizes
              system performance using real-time access pattern analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
          <FaTrophy className="mr-2" /> Achievements
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Strong foundation in Data Structures and Algorithms with 600+ problems solved</li>
          <li>Consistent performer in coding contests and hackathons</li>
          <li>Active contributor to open-source and collaborative projects</li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
          <FaTools className="mr-2" /> Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            "C++",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Cybersecurity",
            "Problem Solving",
            "Git & GitHub",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 text-gray-600 text-sm border-t">
        © {new Date().getFullYear()} Hemanth S. All rights reserved.
      </footer>
    </div>
  );
}
