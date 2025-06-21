// data/portfolioData.ts

export const portfolioData = {
  name: "Hemanth S",
  contact: {
    phone: "+91-7022158519",
    email: "gowda.hemanth.1718@gmail.com",
    linkedin: "https://www.linkedin.com/in/hemanth-s-b239b02b3/",
    github: "https://github.com/zennyMe17",
    leetcode: "https://leetcode.com/u/Hemanth-S/",
    geeksforgeeks: "https://www.geeksforgeeks.org/user/gowdahema6afm/",
  },
  education: {
    institution: "M S Ramaiah Institute of Technology, Bengaluru",
    years: "2022 – 2026",
    degree: "B.E - Computer Science and Cyber Security Engineering",
    cgpa: "9.82",
    location: "Bengaluru, Karnataka",
  },
  projects: [
    {
      title: "Ethical Hiring – AI Hiring Platform",
      link: "https://github.com/zennyMe17/ethicra",
      technologies: "Next.js, Firebase, AWS S3, NLP, Vapi AI",
      date: "Jan'25",
      summary: "Developed a cutting-edge SaaS platform offering AI-powered mock interviews, integrating real-time voice interaction and secure resume handling. This project leverages advanced NLP and generative AI to personalize the interview experience, significantly boosting user retention.",
      description: [
        "Designed and deployed a scalable SaaS web application delivering AI-powered mock interviews for job aspirants.",
        "Integrated Vapi AI for real-time, voice-based interviews and utilized AWS S3 for secure resume uploads, enhancing both interaction quality and data handling.",
        "Implemented AI-powered video integrity checks using TensorFlow.js and BlazeFace for live face detection,emotion analysis, and frame-by-frame video tracking",
        "Implemented user profile customization to support personalized assessments, increasing user retention by 60%.",
      ],
    },
    {
      title: "Smart Farming Assistant – Crop Recommender",
      link: "https://github.com/zennyMe17/smart_farming_assistant",
      technologies: "Python, Flask, scikit-learn, Next.js",
      date: "Dec'24",
      summary: "Created an intelligent crop recommender system, offering farmers data-driven insights for optimal planting. The system features a robust Flask API for real-time predictions and a user-friendly Next.js frontend, enhancing agricultural productivity.",
      description: [
        "Implemented a secure crop recommender system using decision trees trained on live farm data.",
        "Built and deployed a Flask API with input validation and weather integration for real-time predictions.",
        "Designed a responsive Next.js frontend for farmers to receive dynamic and personalized suggestions.",
      ],
    },
    {
      title: "DynamiCache – Hybrid Cache System",
      link: "https://github.com/zennyMe17/HybridCacheSystem",
      technologies: "C++, Threading, LFU, LRU, Multi-Level Queues",
      date: "Mar'25",
      summary: "Engineered a high-performance, dynamically adaptive caching solution that intelligently switches between LFU and LRU policies. This system offers exceptional scalability and low-latency operation through efficient threading and optimized data access management.",
      description: [
        "Developed a high-performance caching system with dynamic switching between LFU and LRU caching policies, optimizing performance based on real-time data access patterns.",
        "Ensured high scalability and robustness of the system by designing it to handle fluctuating workloads and large-scale data demands without performance degradation.",
        "Leveraged threading to asynchronously manage cache operations, enabling low-latency updates and cache reconfiguration without blocking user requests.",
      ],
    },
  ],
  skills: {
    languages: "C++ (Advanced), C (Advanced), Java (Intermediate), Python (Intermediate), JavaScript (Intermediate), SQL (Advanced)",
    techFrameworks: "Linux/Unix, Git, GitHub, ReactJS, Redux, Node.js, Express.js, MongoDB, Tailwind CSS, Docker, Jenkins, Firebase, VapiAI, REST APIs, CI/CD Pipelines, Bash Scripting, DevOps",
    systemsConcepts: "Distributed Systems, Operating Systems, Computer Networks (TCP/IP, OSI), Object-Oriented Programming, Secure Coding, System Design, Microservices, Version Control",
    coursework: "Data Structures & Algorithms, Database Management Systems, Cloud Computing, Machine Learning, Natural Language Processing, Big Data Analytics, Vulnerability and Penetrating Test",
  },
  certifications: [
    {
      name: "AWS Academy Cloud Foundations – AWS Training and Certification",
      link: "https://www.credly.com/badges/2cee8d9a-6565-414a-b799-98f748ef1a19/public_url",
    },
    {
      name: "Google Cloud Cybersecurity – Google Cloud Career",
      link: "https://drive.google.com/file/d/1ad_3rbYSuOX22FoJTefboQBiPHNPZ0n6/view?usp=drive_link",
    },
    {
      name: "Machine Learning – Infosys",
      link: "https://drive.google.com/file/d/1ijurfIyv7gQuAcUslkF7hohdvWwUbnYP/view?usp=drive_link",
    },
  ],
  extracurricular: [
    {
      title: "Data Structures & Algorithms",
      description: "Solved 150+ problems across LeetCode and GFG. Strong in graphs, trees, DP, and system design patterns.",
    },
    {
      title: "Student Teacher – Yuva Bengaluru Trust, Bengaluru, India",
      description: "Delivered offline technical and soft-skills training to 300+ students through workshops, curriculum design, and mentoring.",
    },
  ],
};
