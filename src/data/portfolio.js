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
      title: "Taskly",
      type: "Productivity app",
      description:
        "A focused task manager with filters, priorities and persistent data. Built while learning how a frontend talks to a real backend.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/taskly",
    },
    {
      number: "02",
      title: "Cinebase",
      type: "Movie discovery",
      description:
        "A responsive movie browser with search, categories and clean detail pages. A project that pushed my React state and API skills.",
      stack: ["JavaScript", "React", "REST API", "CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/cinebase",
    },
    {
      number: "03",
      title: "Spendwise",
      type: "Expense tracker",
      description:
        "A simple personal finance dashboard for tracking expenses and seeing where money goes, with a deliberately minimal interface.",
      stack: ["HTML", "CSS", "JavaScript", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/spendwise",
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
