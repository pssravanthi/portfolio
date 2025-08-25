export const profileData = {
  name: 'Sai Sravanthi Ponigate',
  title: 'Senior Software Engineer',
  email: 'ponigatesai@gmail.com',
  phone: '(614) 636-1316',
  github: 'https://github.com/pssravanthi',
  linkedin: 'https://www.linkedin.com/in/ponigatesai/',
  resumeUrl: '/Sai_Sravanthi_Ponigate.pdf',
};

export const aboutMe = {
  summary: 'A results-driven Senior Software Engineer with 9+ years of expertise in designing and deploying scalable, cloud-native web applications.',
  motto: 'Code with purpose, build for impact.',
};

export const projectsData = [
    {
        title: 'Movie Discovery App',
        description: 'A React-based web application for discovering and searching for movies using The Movie Database (TMDb) API. Features include viewing popular movies, searching for specific titles, and managing a personal list of favorite movies using browser local storage.',
        technologies: ['React', 'React Router', 'CSS', 'TMDb API'],
        githubUrl: 'https://github.com/pssravanthi/movie-app-example',
        liveUrl: null,
        image: '/project-movie-app.png',
        aiHint: 'movie posters collage'
    },
    {
        title: 'FHB Participant Portal',
        description: 'A high-traffic internal portal for Phone Associates to manage Fidelity Health & Wellness participants. Features robust search functionality and real-time data streaming for instant updates on participant eligibility.',
        technologies: ['Angular 17', 'Java 17', 'Spring Boot', 'Azure', 'Kubernetes'],
        githubUrl: null,
        liveUrl: null,
        image: '/project-enterprise-dashboard.png',
        aiHint: 'corporate dashboard charts'
    },
    {
        title: 'Customer Experience Platform',
        description: 'A modernized, cloud-native microservices platform for Citi. This digital transformation project focused on enhancing the frontend user experience and building a scalable backend for financial transactions.',
        technologies: ['React.js', 'Redux', 'Java 17', 'Spring Boot', 'AWS', 'PostgreSQL'],
        githubUrl: null,
        liveUrl: null,
        image: '/project-finance-platform.png',
        aiHint: 'financial technology interface'
    }
];

export const experienceData = [
  {
    role: 'Senior Software Engineer',
    company: 'Fidelity Investments',
    period: 'Aug 2024 - Present',
    location: 'Dallas, TX',
    project: 'FHB Participant Services Portal',
    description:
      'Developed a high-traffic internal portal for Phone Associates to manage Fidelity Health & Wellness participants, featuring robust search and real-time data streaming capabilities.',
    technologies: [
      {
        name: 'Angular 17',
        responsibilities: [
          'Collaborated with UI/UX designers to translate Figma wireframes into pixel-perfect interfaces using HTML5, CSS3, Bootstrap, and Angular Material.',
          'Expertly debugged and resolved DOM rendering issues, CSS grid inconsistencies, and Angular animation glitches across browsers.',
          'Developed responsive UI components using Angular 17, RxJS, and TypeScript signals to manage reactive state.',
          'Integrated Server-Sent Events (SSE) with Angular to stream real-time participant eligibility decisions.',
        ],
      },
      {
        name: 'Java 17 / Spring Boot 3.5.0',
        responsibilities: [
          'Architected 15+ RESTful APIs (Java 17/Spring Boot 3.5.0) with OpenAPI specs, reducing latency.',
          'Built microservices architecture using Spring Cloud and Apache Kafka for decoupled inter-service communication.',
          'Designed thread-safe components using Java concurrent API (Executors, Callable, Semaphore).',
        ],
      },
      {
        name: 'Cloud & DevOps (Azure, Docker, K8s)',
        responsibilities: [
          'Deployed containerized microservices on Azure AKS using Terraform.',
          'Monitored application and infrastructure performance using DataDog and Splunk.',
        ],
      }
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Citi',
    period: 'Aug 2023 - Jul 2024',
    location: 'Columbus, OH',
    project: 'Customer Experience Optimization Platform',
    description:
      'Contributed to a major digital transformation initiative to modernize Citi’s platform by building cloud-native microservices and enhancing frontend user experience.',
    technologies: [
      {
        name: 'React.js 18',
        responsibilities: [
            'Developed 10+ reusable React.js 18 components (dynamic forms, data grids).',
            'Integrated Redux for state management across React components.',
        ]
      },
      {
        name: 'Java 17 / Spring Boot 3.2',
        responsibilities: [
            'Developed scalable REST and GraphQL APIs using Java 17 and Spring Boot 3.2.',
            'Leveraged Kafka for real-time, event-driven processing of financial transactions.',
        ]
      },
      {
          name: 'Databases (PostgreSQL, Elasticsearch)',
          responsibilities: [
              'Wrote optimized PostgreSQL queries and managed schema versioning using Flyway.',
              'Integrated ElasticSearch for indexing customer profile and account metadata.',
          ]
      },
       {
        name: 'Cloud & DevOps (AWS, Jenkins)',
        responsibilities: [
            'Automated CI/CD pipelines with Jenkins and GitHub Actions.',
            'Deployed microservices on AWS (Lambda, EC2) and integrated S3 for document storage.',
        ]
      }
    ],
  },
  {
    role: 'Software Engineer',
    company: 'British Telecommunications',
    period: 'May 2022 - Jul 2023',
    location: 'Hyderabad, India',
    project: 'BT Connect Platform',
    description:
      'Modernized BT’s service provisioning and network operations by migrating legacy systems to a scalable, cloud-native microservices architecture.',
    technologies: [
        {
            name: 'React.js 18',
            responsibilities: [
                'Developed real-time dashboards using React.js 18 and integrated backend services via secure REST APIs.',
            ]
        },
        {
            name: 'Java 11 / Spring Boot',
            responsibilities: [
                 'Designed and implemented RESTful microservices using Java 11 and Spring Boot.',
                 'Implemented Kafka-based asynchronous messaging to handle 10K+ events/sec.',
            ]
        },
        {
            name: 'Monitoring (Splunk, Prometheus)',
            responsibilities: [
                'Enabled centralized logging with Logback and integrated with Splunk.',
                'Used Prometheus and Grafana to monitor system health and custom metrics.',
            ]
        },
        {
            name: 'Cloud & DevOps (AWS)',
            responsibilities: [
                 'Deployed containerized services on AWS EC2 instances.',
            ]
        }
    ],
  },
    {
    role: 'Software Engineer',
    company: 'Tata Consultancy Services',
    period: 'Sep 2021 - Apr 2022',
    location: 'Hyderabad, India',
    project: 'Digital Integration Spine Framework',
    description: 'Built a scalable integration platform to connect various digital technologies and data sources, driving enterprise-wide digital transformation.',
    technologies: [
      {
        name: 'Java 8 / Spring Boot',
        responsibilities: [
          'Followed Agile Scrum methodology for delivery milestones.',
          'Designed and implemented 25+ RESTful APIs using Java 8 and Spring Boot.',
          'Validated service endpoints using Postman and documented them with OpenAPI/Swagger.',
          'Added input validation and global exception handling using @ControllerAdvice.',
        ]
      },
      {
        name: 'Databases (DB2)',
        responsibilities: [
            'Used DB2 11.5 for transactional workflows and optimized stored procedures.',
        ]
      },
      {
        name: 'DevOps (Git, Jenkins)',
        responsibilities: [
            'Managed Git repositories, merged feature branches, and integrated releases.'
        ]
      }
    ],
  },
  {
    role: 'Software Engineer',
    company: 'NCR',
    period: 'Jul 2018 - Aug 2021',
    location: 'Hyderabad, India',
    project: 'Loyalty Promotion Engine',
    description: 'Developed a high-performance platform to manage customer loyalty programs, promotions, and real-time rewards for major retail and hospitality clients.',
    technologies: [
        {
            name: 'Angular 12',
            responsibilities: [
                'Built Angular 12-based web interfaces for configuring promotions and loyalty rules.',
                'Resolved change detection errors and memory leaks in Angular.',
            ]
        },
        {
            name: 'Java / Scala',
            responsibilities: [
                 'Used microservices and REST APIs to integrate loyalty rules engine with POS systems.',
                 'Wrote business logic in Java and Scala to manage rule evaluation.',
            ]
        },
        {
            name: 'Messaging & Caching (ActiveMQ, Redis)',
            responsibilities: [
                'Implemented event-driven workflows with ActiveMQ.',
                'Designed MongoDB schemas for 1M+ loyalty transactions.',
                'Implemented Redis caching for loyalty point calculations, reducing latency by 90%.'
            ]
        }
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Fraazo',
    period: 'Apr 2016 - Jun 2018',
    location: 'Mumbai, India',
    project: 'Real-Time Supply Chain Optimization',
    description: 'Created a comprehensive SCM platform to streamline logistics, integrating databases and real-time data processing for inventory optimization.',
    technologies: [
        {
            name: 'Java / Spring Boot / React.js',
            responsibilities: [
                'Designed and developed a real-time SCM dashboard using Java, Spring Boot, and React.js.',
            ]
        },
        {
            name: 'Databases & Messaging',
            responsibilities: [
                'Automated critical company operations by integrating MySQL and PostgreSQL.',
                'Wrote optimized database queries and stored procedures.',
                'Integrated Apache Kafka for real-time data streaming.',
            ]
        },
        {
            name: 'DevOps (Jenkins, Docker)',
            responsibilities: [
                'Designed and implemented CI/CD pipelines using Jenkins and Docker.',
                'Led migration of a major legacy project to a modern architecture with zero downtime.'
            ]
        }
    ],
  }
];

export const certifications = [
  { name: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft' },
  { name: 'Oracle Autonomous Database Cloud 2021 Certified Specialist', issuer: 'Oracle' },
  { name: 'Oracle Cloud Infrastructure 2021 Certified Architect Associate', issuer: 'Oracle' },
  { name: 'Oracle Cloud Infrastructure Developer 2021 Certified Associate', issuer: 'Oracle' },
  { name: 'Oracle Cloud Infrastructure Foundations 2021 Certified Associate', issuer: 'Oracle' },
  { name: 'Aviatrix Multi-Cloud Networking Associate', issuer: 'Aviatrix' },
];

export const skillsData = {
  'Backend': [
    { name: 'Java', level: 95 },
    { name: 'Spring Boot', level: 95 },
    { name: 'Microservices', level: 90 },
    { name: 'REST API', level: 95 },
    { name: 'Node.js', level: 60 },
    { name: 'GraphQL', level: 50 },
    { name: 'Apache Kafka', level: 80 },
    { name: 'Hibernate', level: 70 },
    { name: 'Scala', level: 40 },
  ],
  'Frontend': [
    { name: 'Angular', level: 80 },
    { name: 'React.js', level: 75 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'Bootstrap', level: 85 },
    { name: 'RxJS', level: 70 },
    { name: 'Redux', level: 60 },
  ],
  'Databases': [
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 60 },
    { name: 'Oracle', level: 50 },
    { name: 'MongoDB', level: 50 },
    { name: 'Redis', level: 60 },
    { name: 'Elasticsearch', level: 50 },
    { name: 'DB2', level: 30 },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', level: 80 },
    { name: 'Azure', level: 70 },
    { name: 'Docker', level: 85 },
    { name: 'Kubernetes', level: 80 },
    { name: 'Jenkins', level: 85 },
    { name: 'CI/CD', level: 90 },
    { name: 'Terraform', level: 50 },
    { name: 'Git', level: 95 },
  ],
  'Tools & Testing': [
    { name: 'Jira', level: 95 },
    { name: 'Splunk', level: 70 },
    { name: 'DataDog', level: 60 },
    { name: 'Prometheus', level: 60 },
    { name: 'Grafana', level: 60 },
    { name: 'JUnit', level: 90 },
    { name: 'Mockito', level: 85 },
    { name: 'Jest', level: 70 },
  ]
};
