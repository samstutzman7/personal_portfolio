import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    git,
    figma,
    farrpro,
    target,
    tigerhawk,
    carrent,
    jobit,
    tripguide,
    cplusplus,
    java,
    python,
    sql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: "Machine Learning Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "C++",
      icon: cplusplus,
    },
    {
      name: "SQL",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Student Artificial Intelligence Engineer",
      company_name: "FarrPro",
      icon: farrpro,
      iconBg: "#ffffff",
      date: "April 2023 - Present",
      points: [
        "• Orchestrated large language models, machine vision systems, and neural network applications.",
        "• Designed, implemented, and evaluated machine learning models and experiments.",
        "• Improved machine learning frameworks using TensorFlow, PyTorch, and scikit-learn.",
      ],
    },
    {
      title: "Artificial Intelligence Engineering Intern",
      company_name: "FarrPro",
      icon: farrpro,
      iconBg: "#ffffff",
      date: "April 2023 - August 2023",
      points: [
        "• Collaborated with 5 co-workers on new projects to eliminate inefficiencies.",
        "• Completed data analysis, statistical modeling, and algorithm development for 10-15 farms to their grow business.",
        "• Conducted analysis with Django (REST Framework) and React to develop websites for various businesses.",
      ],
    },
    {
      title: "ITS - Help Desk",
      company_name: "University of Iowa",
      icon: tigerhawk,
      iconBg: "#000000",
      date: "February 2023 - August 2023",
      points: [
        "• Displayed courtesy and strong interpersonal skills with customer interactions.",
        "• Diagnosed issues on various computer systems and databases in order to resolve complaints, answer inquiries, and outline solutions.",
        "• Informed customers about issue resolution progression.",
        "• Suggested solutions to customers with a variety of technical issues that needed resolved.",
        "• Escalated tickets to a higher priority while keeping the customer informed.",
      ],
    },
    {
      title: "Guest Advocate",
      company_name: "Target Inc.",
      icon: target,
      iconBg: "#ffffff",
      date: "October 2018 - January 2023",
      points: [
        "• Optimized customer support by establishing a collaborative service environment.",
        "• Collaborated with staff members to enhance customer service experience and exceed team goals through effective customer satisfaction rates.",
        "• Acquired the skills needed to work in a fast-paced environment while simultaneously completing the task at hand.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };