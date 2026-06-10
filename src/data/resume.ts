export const personalInfo = {
  name: "Javier Luna",
  fullName: "José Javier del Mar Luna Mendoza",
  title: "Senior Fullstack Developer",
  subtitle: "Java · Spring Boot · Angular · React · AWS",
  location: "Guadalajara, Mexico (Open to Europe)",
  email: "jaluna070@gmail.com",
  phone: "+52 3313285926",
  linkedin: "https://www.linkedin.com/in/jose-javier-luna-mendoza-57212576",
  github: "https://github.com/jlunaoax",
  summary:
    "Senior Fullstack Developer with 6+ years building enterprise microservices and modern web applications. AWS triple-certified (Solutions Architect, Developer, Cloud Practitioner). Experienced tech lead with a Master's in Software Engineering from a European university. Passionate about clean architecture, test-driven development, and cloud-native solutions.",
};

export const certifications = [
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    icon: "🏗️",
  },
  {
    name: "AWS Developer Associate",
    issuer: "Amazon Web Services",
    icon: "💻",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "☁️",
  },
];

export const skills = {
  backend: [
    "Java 8+",
    "Spring Boot",
    "Spring Cloud",
    "Spring Security",
    "Node.js",
    "Express.js",
    "Next.js",
    "JPA / Hibernate",
    "REST APIs",
    "Apache Kafka",
    "Microservices",
  ],
  frontend: [
    "Angular",
    "React",
    "TypeScript",
    "Redux",
    "HTML5 / CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "SASS",
    "Responsive Design",
  ],
  cloud: [
    "AWS (EC2, S3, Lambda, CloudWatch)",
    "Docker",
    "Kubernetes",
    "CI/CD (CodePipeline, Jenkins)",
    "Azure",
    "Firebase",
  ],
  databases: [
    "PostgreSQL",
    "MySQL",
    "Oracle",
    "MongoDB",
    "SQL Server",
  ],
  practices: [
    "Agile / Scrum",
    "TDD / BDD",
    "CI/CD",
    "Design Patterns",
    "Code Review",
    "API Documentation (Swagger/OAS 3.0)",
  ],
};

export const experience = [
  {
    company: "WGU",
    location: "Guadalajara, Mexico",
    role: "Senior Java & Angular Fullstack Developer / Tech Lead",
    period: "Jan 2023 – Present",
    highlights: [
      "Lead development team, planning work with product owners and performing code reviews",
      "Design and develop enterprise applications using Spring Boot & Angular with microservices architecture",
      "Implement and document RESTful APIs using Spring, Swagger, and OAuth/JWT",
      "Deploy applications on AWS using CodePipeline for CI/CD",
      "Participate in high-level and low-level system design, planning, and estimation",
      "Integrate Spring Security for authentication and authorization",
      "Monitor applications with AWS CloudWatch & Dynatrace",
    ],
    technologies: ["Angular", "Java", "Spring Boot", "Node.js", "Next.js", "AWS", "Microservices"],
  },
  {
    company: "IBM",
    location: "Guadalajara, Mexico",
    role: "Java Fullstack Developer",
    period: "Dec 2018 – Jan 2023",
    highlights: [
      "Built financial applications using React-Redux for frontend and Spring Boot microservices",
      "Designed and developed applications based on J2EE Design Patterns with Spring 4.x",
      "Implemented RESTful web services using JAX-RS with Spring Security integration",
      "Created server-side and client-side development guidelines for DB performance and testability",
      "Applied TDD practices with JUnit, Mockito, and Wiremock",
      "Used Jenkins for CI/CD, deploying to Tomcat Application Server",
    ],
    technologies: ["React", "Redux", "Java", "Spring Boot", "Hibernate", "Microservices", "Jenkins"],
  },
  {
    company: "Tata Consulting Services",
    location: "Mexico",
    role: "Java Developer (Support Level 2)",
    period: "Jun 2018 – Dec 2018",
    highlights: [
      "Monitored and maintained banking services (Bancanet Personal, Bancanet Empresarial)",
      "Developed RESTful web services with JAX-RS and Spring Security (LDAP auth)",
      "Implemented TDD using JUnit with database access via Spring JDBC ORM",
      "Worked with Jenkins CI/CD pipeline deploying to Weblogic Application Server",
    ],
    technologies: ["Java", "Spring", "Oracle 12C", "REST", "Selenium", "Jenkins"],
  },
  {
    company: "Liconsa",
    location: "Oaxaca, Mexico",
    role: "IT Manager",
    period: "Sep 1996 – Jun 2018",
    highlights: [
      "Led IT teams across Southeast Mexico with full ownership of infrastructure and development",
      "Designed and developed enterprise Java applications with Spring, JPA, and Oracle databases",
      "Managed migration from legacy systems to modern Java-based microservices",
      "Built CI/CD pipelines with Jenkins, Maven, and Tomcat deployments",
    ],
    technologies: ["Java", "Spring", "Oracle", "JMS", "Maven", "Jenkins", "Linux"],
  },
];

export const education = [
  {
    degree: "Master en Dirección Estratégica en Ingeniería de Software",
    school: "Universidad Europea del Atlántico (UNEATLANTICO)",
    location: "Spain",
    icon: "🇪🇸",
  },
  {
    degree: "Bachelor's in Engineering in Computer Systems",
    school: "Tecnológico de Colima",
    location: "Colima, Mexico",
    icon: "🇲🇽",
  },
];

export const projects = [
  {
    title: "Enterprise Microservices Platform",
    description:
      "Full-stack microservices architecture with Spring Boot, Angular frontend, API Gateway, service discovery, and containerized deployment.",
    technologies: ["Spring Boot", "Spring Cloud", "Angular", "Docker", "Kubernetes", "PostgreSQL"],
    type: "Architecture",
    link: "https://github.com/jlunaoax",
  },
  {
    title: "Financial Dashboard (React + Redux)",
    description:
      "Real-time financial data visualization with React-Redux state management, RESTful API integration, and responsive design.",
    technologies: ["React", "Redux", "TypeScript", "Spring Boot", "Chart.js", "JWT"],
    type: "Full-Stack",
    link: "#",
  },
  {
    title: "AWS Cloud-Native Application",
    description:
      "Serverless application leveraging AWS Lambda, API Gateway, DynamoDB, and CloudWatch for monitoring. Deployed via CodePipeline CI/CD.",
    technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudWatch", "CodePipeline"],
    type: "Cloud",
    link: "#",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "WebSocket-based real-time messaging app with Node.js backend, React frontend, and MongoDB persistence.",
    technologies: ["Node.js", "React", "WebSockets", "MongoDB", "Docker"],
    type: "Full-Stack",
    link: "#",
  },
];
