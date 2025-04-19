"use client"; // Add this directive at the very top

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Phone, File, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'; // Assuming CardFooter is also available

const HemanthSWebsite = () => {
  // Theme state, default to 'dark' or read from localStorage
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
      // Check for system preference if no saved theme (only in browser)
      setTheme('light');
    } else {
      setTheme('dark'); // Default to dark if no preference or not in browser
    }
  }, []);

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      // Optional: Apply theme class to body or html for broader styling
      // document.documentElement.classList.toggle('light-mode', theme === 'light');
      // document.documentElement.classList.toggle('dark-mode', theme === 'dark');
    }
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Helper function to get theme-dependent classes
  const getThemeClasses = (darkClasses: string, lightClasses: string) => {
    return theme === 'dark' ? darkClasses : lightClasses;
  };

  // Helper function for badge colors based on theme
  const getBadgeClasses = (baseColor: string) => {
    // Outline style for light mode for better visibility
    const darkVariant = `bg-${baseColor}-500/20 text-${baseColor}-300 border border-${baseColor}-500/30`;
    const lightVariant = `bg-transparent text-${baseColor}-700 border border-${baseColor}-500`; // Changed to outline style
    return `${getThemeClasses(darkVariant, lightVariant)}`;
  };



  return (
    <div className={`min-h-screen ${getThemeClasses('bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white', 'bg-gradient-to-br from-gray-100 via-blue-100 to-white text-gray-900')} p-4 md:p-8 transition-colors duration-300`}>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 p-2 rounded-full ${getThemeClasses('bg-gray-800 text-white hover:bg-gray-700', 'bg-gray-200 text-gray-800 hover:bg-gray-300')} transition-colors duration-300 z-50`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </button>


      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction Section */}
        <Card className={`${getThemeClasses('bg-white/5 border border-white/10 shadow-xl hover:shadow-purple-500/20', 'bg-white/50 border border-gray-200 shadow-lg hover:shadow-blue-200')} backdrop-blur-lg transition-all duration-300`}>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Hemanth S
            </CardTitle>
            <CardDescription className={getThemeClasses('text-gray-300', 'text-gray-600')}>
              Computer Science Engineering Student
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className={getThemeClasses('text-lg text-gray-200', 'text-lg text-gray-700')}>
              Hello! I&apos;m Hemanth, a passionate Computer Science Engineering student at Ramaiah Institute Of Technology. I have a strong foundation in data structures, algorithms, and various programming languages. I&apos;m eager to apply my skills to develop innovative and impactful solutions.
            </p>
            <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">

              {/* Profile Links (LeetCode, GitHub, LinkedIn, Email, Phone) */}
              <Link href="https://leetcode.com/u/Hemanth-S/" target="_blank" rel="noopener noreferrer">
                <button className={`${getThemeClasses('bg-transparent border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200', 'bg-transparent border-purple-300 text-purple-700 hover:bg-purple-100 hover:text-purple-800')} transition-colors px-4 py-2 rounded-md border inline-flex items-center`}>
                  <File className="mr-2 h-4 w-4" />
                  LeetCode
                </button>
              </Link>
              <Link href="https://github.com/zennyMe17" target="_blank" rel="noopener noreferrer">
                <button className={`${getThemeClasses('bg-transparent border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200', 'bg-transparent border-blue-300 text-blue-700 hover:bg-blue-100 hover:text-blue-800')} transition-colors px-4 py-2 rounded-md border inline-flex items-center`}>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </button>
              </Link>
              <Link href="https://shorturl.at/kKTC1" target="_blank" rel="noopener noreferrer">
                <button className={`${getThemeClasses('bg-transparent border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200', 'bg-transparent border-blue-300 text-blue-700 hover:bg-blue-100 hover:text-blue-800')} transition-colors px-4 py-2 rounded-md border inline-flex items-center`}>
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </button>
              </Link>
              <Link href="mailto:gowda.hemanth.1718@gmail.com">
                <button className={`${getThemeClasses('bg-transparent border-green-500/30 text-green-300 hover:bg-green-500/20 hover:text-green-200', 'bg-transparent border-green-300 text-green-700 hover:bg-green-100 hover:text-green-800')} transition-colors px-4 py-2 rounded-md border inline-flex items-center`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </button>
              </Link>
              <Link href="tel:+917022158519">
                <button className={`${getThemeClasses('bg-transparent border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/20 hover:text-yellow-200', 'bg-transparent border-yellow-300 text-yellow-700 hover:bg-yellow-100 hover:text-yellow-800')} transition-colors px-4 py-2 rounded-md border inline-flex items-center`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Mobile
                </button>
              </Link>
              {/* CodeChef Profile Link (Moved to last) */}
              <Link href="https://www.codechef.com/users/uchiha_hemanth" target="_blank" rel="noopener noreferrer">
                <button className={`${getThemeClasses('bg-transparent border-orange-500/30 text-orange-300 hover:bg-orange-500/20 hover:text-orange-200', 'bg-transparent border-orange-300 text-orange-700 hover:bg-orange-100 hover:text-orange-800')} transition-colors px-4 py-2 rounded-md border inline-flex items-center`}>
                  <File className="mr-2 h-4 w-4" /> {/* Reusing File icon */}
                  CodeChef
                </button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Resume Section (Separate Card) */}
        <Card className={`${getThemeClasses('bg-white/5 border border-white/10 shadow-xl hover:shadow-blue-500/20', 'bg-white/50 border border-gray-200 shadow-lg hover:shadow-blue-200')} backdrop-blur-lg transition-all duration-300`}>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-300">Resume</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/hemanth_resume.pdf" download>
              <button className={`${getThemeClasses('bg-transparent border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200', 'bg-transparent border-blue-300 text-blue-700 hover:bg-blue-100 hover:text-blue-800')} transition-colors px-4 py-2 rounded-md border inline-flex items-center`}>
                <File className="mr-2 h-4 w-4" />
                Download Resume (PDF)
              </button>
            </Link>
          </CardContent>
        </Card>


        {/* Education Section */}
        <Card className={`${getThemeClasses('bg-white/5 border border-white/10 shadow-xl hover:shadow-blue-500/20', 'bg-white/50 border border-gray-200 shadow-lg hover:shadow-blue-200')} backdrop-blur-lg transition-all duration-300`}>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-300">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className={getThemeClasses('text-lg font-medium text-gray-200', 'text-lg font-medium text-gray-800')}>Ramaiah Institute Of Technology</h3>
              <p className={getThemeClasses('text-gray-300', 'text-gray-700')}>Bachelor of Engineering - Computer Science Engineering; GPA: 9.00</p>
              <p className={getThemeClasses('text-sm text-gray-400', 'text-sm text-gray-600')}>July 2022 - Present</p>
            </div>
            <div className="space-y-2">
              <h3 className={getThemeClasses('text-lg font-medium text-gray-200', 'text-lg font-medium text-gray-800')}>Amara Jyothi PU College</h3>
              <p className={getThemeClasses('text-gray-300', 'text-gray-700')}>Class XII; GPA: 9.53</p>
              <p className={getThemeClasses('text-sm text-gray-400', 'text-sm text-gray-600')}>June 2021 - March 2022</p>
            </div>
          </CardContent>
        </Card>

{/* Experience Section */}
        <Card className={`${getThemeClasses('bg-white/5 border border-white/10 shadow-xl hover:shadow-purple-500/20', 'bg-white/50 border border-gray-200 shadow-lg hover:shadow-purple-200')} backdrop-blur-lg transition-all duration-300 max-w-5xl mx-auto`}>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-purple-300 text-center">Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-12">

            {/* Ethicra Experience */}
            <div className="space-y-4">
              <h3 className={`text-center ${getThemeClasses('text-xl font-semibold text-gray-200', 'text-xl font-semibold text-gray-800')}`}>
                Project Intern -{' '}
                <Link href="https://ethicra.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center">
                  Website
                </Link>{' '}
                (Ethicra: New Era of Ethical Hiring - Online AI Interview Platform)
              </h3>
              <p className={`text-center ${getThemeClasses('text-gray-300', 'text-gray-700')}`}>
                Contributed to the development of an innovative online AI interview platform focused on ethical hiring practices. My responsibilities included enhancing the automated resume parsing and candidate screening modules using Natural Language Processing (NLP) and Deep Learning techniques. I also played a key role in designing and implementing the AI-driven interview analysis features, which provided comprehensive reports on candidate suitability based on their responses and behavioral cues. This involved working with large datasets and optimizing algorithms for efficiency and accuracy.
              </p>
              <div className="text-sm mt-2 flex flex-wrap gap-2 justify-center items-center">
                <span className={`font-semibold ${getThemeClasses('text-gray-300', 'text-gray-700')}`}>Tech:</span>{' '}
                <Badge variant="secondary" className={getBadgeClasses('blue')}>NextJS</Badge>
                <Badge variant="secondary" className={getBadgeClasses('orange')}>Google Firebase</Badge>
                <Badge variant="secondary" className={getBadgeClasses('green')}>NLP</Badge>
                <Badge variant="secondary" className={getBadgeClasses('purple')}>Deep Learning</Badge>
              </div>
              <p className={`text-center ${getThemeClasses('text-sm text-gray-400', 'text-sm text-gray-600')}`}>(March `25 - Present)</p>
            </div>

            {/* Finathon Experience */}
            <div className="space-y-4">
              <h3 className={`text-center ${getThemeClasses('text-xl font-semibold text-gray-200', 'text-xl font-semibold text-gray-800')}`}>
                Finathon -{' '}
                <Link href="https://agri-mitra-mu.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center">
                  Website
                </Link>{' '}
                (Agri Mitra: Empowering Farmers through a Digital Marketplace - Puttannaiah Foundation & PES Mandya Initiative)
              </h3>
              <p className={`text-center ${getThemeClasses('text-gray-300', 'text-gray-700')}`}>
                As part of the Finathon initiative, I contributed to the development of "Santhe," a robust web platform designed to directly connect farmers with a wider market, thereby fostering entrepreneurial empowerment within the agricultural sector. My role involved front-end development using ReactJS to create an intuitive interface for farmers to register their produce and manage their listings. Additionally, I worked on the back-end using NodeJS, ExpressJS, and MongoDB to build scalable and secure APIs for product catalog management, order processing, and facilitating transactions. This project aimed to address critical challenges in agricultural commerce by providing a transparent and efficient digital marketplace.
              </p>
              <div className="text-sm mt-2 flex flex-wrap gap-2 justify-center items-center">
                <span className={`font-semibold ${getThemeClasses('text-gray-300', 'text-gray-700')}`}>Tech:</span>{' '}
                <Badge variant="secondary" className={getBadgeClasses('blue')}>ReactJS</Badge>
                <Badge variant="secondary" className={getBadgeClasses('green')}>NodeJS</Badge>
                <Badge variant="secondary" className={getBadgeClasses('yellow')}>MongoDB</Badge>
                <Badge variant="secondary" className={getBadgeClasses('purple')}>ExpressJS</Badge>
              </div>
              <p className={`text-center ${getThemeClasses('text-sm text-gray-400', 'text-sm text-gray-600')}`}>(October `24)</p>
            </div>

          </CardContent>
        </Card>



        {/* Projects Section */}
        <Card className={`${getThemeClasses('bg-white/5 border border-white/10 shadow-xl hover:shadow-pink-500/20', 'bg-white/50 border border-gray-200 shadow-lg hover:shadow-pink-200')} backdrop-blur-lg transition-all duration-300`}>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-pink-300">Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Sell My Pen Project */}
            <div className="space-y-2">
              <h3 className={getThemeClasses('text-lg font-medium text-gray-200', 'text-lg font-medium text-gray-800')}>
                Sell My Pen (Web Development, Chatbot, Web Scraping) -{' '}
                <Link href="https://github.com/dscInterview/dsc_final_project" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center">
                  GitHub
                </Link>
              </h3>
              <p className={getThemeClasses('text-gray-300', 'text-gray-700')}>
                Developed a platform where users can describe the type of product they want. The app includes a chatbot for interaction and a web scraper to fetch ratings, cost, and other details from specified product links. Users can analyze product details and make informed purchasing decisions. Features: Chatbot interaction, real-time price comparison, and dynamic data fetching.
              </p>
              {/* Changed p to div for badges */}
              <div className="text-sm mt-2 flex flex-wrap gap-2 items-center">
                <span className={`font-semibold ${getThemeClasses('text-gray-300', 'text-gray-700')}`}>Tech:</span>{' '}
                <Badge variant="secondary" className={getBadgeClasses('blue')}>ReactJS</Badge>
                <Badge variant="secondary" className={getBadgeClasses('green')}>NodeJS</Badge>
                <Badge variant="secondary" className={getBadgeClasses('purple')}>ExpressJS</Badge>
                <Badge variant="secondary" className={getBadgeClasses('yellow')}>MongoDB</Badge>
                <Badge variant="secondary" className={getBadgeClasses('indigo')}>Web Scraping</Badge>
              </div>
              <p className={getThemeClasses('text-sm text-gray-400', 'text-sm text-gray-600')}>(December `24)</p>
            </div>
            {/* Ritverse Project */}
            <div className="space-y-2">
              <h3 className={getThemeClasses('text-lg font-medium text-gray-200', 'text-lg font-medium text-gray-800')}>
                Ritverse (Web Development, User Interaction) -{' '}
                <Link href="https://github.com/Code-Monks-4/RitVerse/tree/main" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center">
                  GitHub
                </Link>
              </h3>
              <p className={getThemeClasses('text-gray-300', 'text-gray-700')}>
                Created a platform where students can list unwanted items for others, facilitate interactions between seniors and juniors, and provide a career section powered by alumni. The platform allows students to donate or sell items, and engage in career discussions with alumni for guidance. Features: Item listing, alumni career section, user interaction, and responsive UI.
              </p>
              {/* Changed p to div for badges */}
              <div className="text-sm mt-2 flex flex-wrap gap-2 items-center">
                <span className={`font-semibold ${getThemeClasses('text-gray-300', 'text-gray-700')}`}>Tech:</span>{' '}
                <Badge variant="secondary" className={getBadgeClasses('blue')}>ReactJS</Badge>
                <Badge variant="secondary" className={getBadgeClasses('green')}>NodeJS</Badge>
                <Badge variant="secondary" className={getBadgeClasses('yellow')}>MongoDB</Badge>
                <Badge variant="secondary" className={getBadgeClasses('purple')}>ExpressJS</Badge>
                <Badge variant="secondary" className={getBadgeClasses('teal')}>TailwindCSS</Badge>
              </div>
              <p className={getThemeClasses('text-sm text-gray-400', 'text-sm text-gray-600')}>(November `24)</p>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className={`${getThemeClasses('bg-white/5 border border-white/10 shadow-xl hover:shadow-green-500/20', 'bg-white/50 border border-gray-200 shadow-lg hover:shadow-green-200')} backdrop-blur-lg transition-all duration-300`}>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-green-300">Skills Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className={getThemeClasses('text-md font-medium text-gray-200', 'text-md font-medium text-gray-800')}>Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {/* Adjusted Badge classes for theme */}
                  <Badge variant="secondary" className={getBadgeClasses('purple')}>Data Structures</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('purple')}>Algorithms</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('purple')}>Operating Systems</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('purple')}>Networking</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('purple')}>Databases</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('purple')}>Machine Learning</Badge>
                </div>
              </div>
              <div>
                <h4 className={getThemeClasses('text-md font-medium text-gray-200', 'text-md font-medium text-gray-800')}>Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {/* Adjusted Badge classes for theme */}
                  <Badge variant="secondary" className={getBadgeClasses('blue')}>C</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('blue')}>C++</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('blue')}>Java</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('blue')}>Python</Badge>
                </div>
              </div>
              <div className="w-full">
                <h4 className={getThemeClasses('text-md font-medium text-gray-200', 'text-md font-medium text-gray-800')}>Technologies/Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {/* Adjusted Badge classes for theme */}
                  <Badge variant="secondary" className={getBadgeClasses('green')}>Unix/Linux</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('green')}>Distributed Systems</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('green')}>TCP/IP</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('green')}>Git</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('green')}>GitHub</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('green')}>ReactJS</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('green')}>NextJS</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('green')}>ExpressJS</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('green')}>NodeJS</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('green')}>Tailwind CSS</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('green')}>CSS3</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('green')}>HTML5</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('orange')}>Google FIREBASE</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('purple')}>NLP</Badge>
                  <Badge variant="secondary" className={getBadgeClasses('purple')}>Deep Learning</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications Section */}
        <Card className={`${getThemeClasses('bg-white/5 border border-white/10 shadow-xl hover:shadow-orange-500/20', 'bg-white/50 border border-gray-200 shadow-lg hover:shadow-orange-200')} backdrop-blur-lg transition-all duration-300`}>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-orange-300">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className={`list-disc list-inside ${getThemeClasses('text-gray-300', 'text-gray-700')} space-y-2`}>
              <li>A2Z DSA Course <span className={getThemeClasses('text-sm text-gray-400', 'text-sm text-gray-600')}>- Take U Forward</span></li>
              <li>DEVOPS <span className={getThemeClasses('text-sm text-gray-400', 'text-sm text-gray-600')}>- Junoon</span></li>
              <li>MERN STACK <span className={getThemeClasses('text-sm text-gray-400', 'text-sm text-gray-600')}>- Code Help</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Volunteer Experience Section */}
        <Card className={`${getThemeClasses('bg-white/5 border border-white/10 shadow-xl hover:shadow-teal-500/20', 'bg-white/50 border border-gray-200 shadow-lg hover:shadow-teal-200')} backdrop-blur-lg transition-all duration-300`}>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-teal-300">Volunteer Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Yuva Bengaluru Trust */}
            <div className="space-y-1">
              <h3 className={getThemeClasses('text-lg font-medium text-gray-200', 'text-lg font-medium text-gray-800')}>Student Teacher at Yuva Bengaluru Trust</h3>
              <p className={getThemeClasses('text-sm text-gray-400', 'text-sm text-gray-600')}>Bengaluru, India</p>
              <ul className={`list-disc list-inside ${getThemeClasses('text-gray-300', 'text-gray-700')} space-y-1 mt-2`}>
                <li>Conducted offline technical \& soft-skills training impacting over 300+ students.</li>
                <li>Designed and delivered hands-on workshops focusing on coding, problem-solving, and communication skills.</li>
                <li>Collaborated with faculty to create a curriculum that addresses both technical and professional growth for students.</li>
              </ul>
            </div>
            {/* FLY */}
            <div className="space-y-1">
              <h3 className={getThemeClasses('text-lg font-medium text-gray-200', 'text-lg font-medium text-gray-800')}>Event Organizer at FLY (Finding The Leader In You)</h3>
              <p className={getThemeClasses('text-sm text-gray-400', 'text-sm text-gray-600')}>Bengaluru, India</p>
              <ul className={`list-disc list-inside ${getThemeClasses('text-gray-300', 'text-gray-700')} space-y-1 mt-2`}>
                <li>Organized group discussion events and communication skills workshops for students.</li>
                <li>Led teams to plan and execute large-scale events that foster leadership and teamwork skills among participants.\\</li>
                <li>Coordinated with industry professionals to organize guest lectures and workshops, enhancing student learning.</li>
              </ul>
            </div>
          </CardContent>
        </Card>




      </div>
    </div>
  );
};

export default HemanthSWebsite;