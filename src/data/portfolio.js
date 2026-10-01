export const portfolioData = {
  developer: {
    name: "Prashant Gangwar",
    handle: "prashantg.dev",
    role: "Aspiring Full-Stack Developer",
    location: "India",
    email: "prashantg.dev07@gmail.com",

    availability: "Open to learning & building",

    intro: {
      emphasis: "for the web",
      description:
        "I'm Arjun, an aspiring full-stack developer from India. I recently finished 12th and started my developer journey early — one project at a time.",
    },

    facts: ["Uttar Pradesh, India", "Next: B.Tech", "Learning JS"],

    me: {
      status: "learning",
      focus: "Full-stack",
      stack: ["JS", "React", "Node.js"],
      building: true,
      coffee: "optional"
    },

    about: {
      heading: {
        first: "Early in the journey.",
        emphasis: "Serious about it.",
      },

      paragraphs: [
        {
          type: "lead",
          text: "I finished my 12th recently, and instead of waiting for college to start, I decided to start building now.",
        },
        {
          text: "My goal is simple: become the kind of developer who can take an idea, break it down, design a useful interface, build the backend, and ship it. Right now I'm working through JavaScript and React, then moving deeper into Node.js, Express and MongoDB.",
        },
        {
          text: "I'm still learning, which is exactly why I like making projects. Every project gives me something new to figure out — and something I can show.",
        },
      ]
    },
  },

  navigation: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ],

  technologies: [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "NODE.JS",
    "EXPRESS",
    "PYTHON",
    "MONGODB",
  ],

  projects: [
    {
      number: "01",
      title: "NodeChat",
      type: "Chat application",
      description:
        "A private one-to-one chat application. The current UI is intentionally quiet and editorial.",
      stack: ["Node.js", "Express", "Socket.IO", "MongoDB"],
      liveUrl: "https://node-chat-pyfg.onrender.com",
      githubUrl: "https://github.com/prashantgdev/node-chat",
    },
    {
      number: "02",
      title: "Health Monitor",
      type: "API Health Tracker",
      description:
        "A lightweight uptime monitor for periodically checking HTTP health endpoints with a simple web dashboard.",
      stack: ["Node.js", "Express", "REST API", "CSS"],
      liveUrl: "https://health-monitor-s08a.onrender.com",
      githubUrl: "https://github.com/prashantgdev/health-monitor",
    },
    {
      number: "03",
      title: "Birthday Wisher",
      type: "Birthday greeting app",
      description:
        "A simple app for sending birthday wishes to friends and family, with a clean and intuitive interface.",
      stack: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://birthday-wishers.netlify.app",
      githubUrl: "https://github.com/prashantgdev/birthday-wisher",
    },
  ],

  stack: [
    {
      title: "Frontend",
      description:
        "Building responsive interfaces and getting comfortable with component-based thinking.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      description:
        "Starting to understand servers, APIs, routing, requests and how applications actually work.",
      technologies: ["Node.js", "Express.js", "Python", "REST APIs"],
    },
    {
      title: "Data",
      description:
        "Learning how to structure, store and retrieve application data without making a mess.",
      technologies: ["MongoDB", "CRUD", "Data modeling"],
    },
  ],

  learning: [
    {
      name: "HTML",
      description: "Semantic structure & accessible markup",
      stage: "Comfortable",
    },
    {
      name: "CSS",
      description: "Responsive layouts & UI styling",
      stage: "Comfortable",
    },
    {
      name: "JavaScript",
      description: "DOM, ES6+, async code & APIs",
      stage: "Learning",
    },
    {
      name: "React",
      description: "Components, hooks & state",
      stage: "Learning",
    },
    {
      name: "Node + Express",
      description: "Backend fundamentals",
      stage: "Exploring",
    },
    {
      name: "Python",
      description: "Backend fundamentals",
      stage: "Exploring",
    },
    {
      name: "MongoDB",
      description: "Data modeling & CRUD",
      stage: "Exploring",
    },
  ],

  journey: "Over the next few years I want to turn the things I'm learning now into stronger engineering fundamentals, bigger projects and useful products.",

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/prashantgdev",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/prashantgdev",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://x.com/prashantgdev",
      icon: "twitter",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/prashantg.dev",
      icon: "instagram",
    }
  ]
};
