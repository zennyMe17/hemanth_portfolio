import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Phone, File } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'; // Assuming these are part of your custom components

const HemanthSWebsite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction Section */}
        <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Hemanth S
            </CardTitle>
            <CardDescription className="text-gray-300">
              Computer Science Engineering Student
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-gray-200">
              Hello! I&apos;m Hemanth, a passionate Computer Science Engineering student at Ramaiah Institute Of Technology. I have a strong foundation in data structures, algorithms, and various programming languages. I&apos;m eager to apply my skills to develop innovative and impactful solutions.
            </p>
            <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
              <a href="https://leetcode.com/u/Hemanth-S/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <button className="bg-transparent border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200 transition-colors px-4 py-2 rounded-md border">
                  <File className="mr-2 h-4 w-4" />
                  LeetCode
                </button>
              </a>
              <a href="https://github.com/zennyMe17" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <button className="bg-transparent border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 transition-colors px-4 py-2 rounded-md border">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </button>
              </a>
              <a href="https://shorturl.at/kKTC1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <button className="bg-transparent border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 transition-colors px-4 py-2 rounded-md border">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </button>
              </a>
              <a href="mailto:gowda.hemanth.1718@gmail.com" className="inline-flex items-center">
                <button className="bg-transparent border-green-500/30 text-green-300 hover:bg-green-500/20 hover:text-green-200 transition-colors px-4 py-2 rounded-md border">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </button>
              </a>
              <a href="tel:+917022158519" className="inline-flex items-center">
                <button className="bg-transparent border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/20 hover:text-yellow-200 transition-colors px-4 py-2 rounded-md border">
                  <Phone className="mr-2 h-4 w-4" />
                  Mobile
                </button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-300">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-200">Ramaiah Institute Of Technology</h3>
              <p className="text-gray-300">Bachelor of Engineering - Computer Science Engineering; GPA: 9.00</p>
              <p className="text-sm text-gray-400">July 2022 - Present</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-200">Amara Jyothi PU College</h3>
              <p className="text-gray-300">Class XII; GPA: 9.53</p>
              <p className="text-sm text-gray-400">June 2021 - March 2022</p>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-green-500/20 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-green-300">Skills Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-md font-medium text-gray-200 mb-2">Courses</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">Data Structures</Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">Algorithms</Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">Operating Systems</Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">Networking</Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">Databases</Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">Machine Learning</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-md font-medium text-gray-200 mb-2">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">C</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">C++</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">Java</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">Python</Badge>
                </div>
              </div>
              <div className="w-full">
                <h4 className="text-md font-medium text-gray-200 mb-2">Technologies/Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">Unix/Linux</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">Distributed Systems</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">TCP/IP</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">Git</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">GitHub</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">ReactJS</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">NextJS</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">ExpressJS</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">NodeJS</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">Tailwind CSS</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">CSS3</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">HTML5</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">Google FIREBASE</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">NLP</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">Deep Learning</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Experience Section */}
        <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-purple-300">Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Example Project Experience */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-200">
                Project Intern - <a href="https://ethicra.vercel.app/" className="text-blue-400 hover:underline flex items-center">Website</a> (Ethicra: New Era of Ethical Hiring)
              </h3>
              <p className="text-gray-300">
                Worked with a team to develop a platform that streamlines the recruitment process by automating resume processing, screening, and interview scheduling.
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Tech:</span> NEXT JS Google&apos;s FIREBASE NLP Deep learning (March &apos;25 - Present)
              </p>
            </div>
            {/* Add more experiences here */}
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default HemanthSWebsite;
