import { TeamMember, EventItem, LeadershipMember } from '@/types';

export const CLUB_INFO = {
  name: 'NEXORA',
  department: 'Computer Science & Engineering',
  tagline: 'Think Beyond. Solve Smarter. Build the Future.',
  spirit: 'Be Curious. Be Creative. Be NEXORA.',
  overview: `NEXORA is a technical club exclusively for Computer Science and Engineering students. It encourages logical thinking, creative problem-solving, coding skills, and practical implementation. It gives students a platform to move beyond theoretical learning, explore new approaches, collaborate with peers, and transform knowledge into meaningful solutions.

Through interactive challenges, technical activities, collaborative learning, and hands-on projects, NEXORA aims to help students discover their potential, develop technical confidence, and prepare to tackle real-world challenges.`,
  vision: `To build a community of innovative, analytical, and technically skilled CSE students who can think independently, solve complex problems, and create solutions that make a difference.`,
  mission: [
    'Encourage logical, analytical, and critical thinking.',
    'Promote coding, creativity, and practical technical knowledge.',
    'Help students identify problems and develop effective solutions.',
    'Connect classroom learning with real-world application.',
    'Encourage teamwork, communication, and collaborative learning.',
    'Inspire students to turn ideas into working projects.'
  ],
  pillars: [
    {
      id: 'think',
      title: 'THINK',
      subtitle: 'Analyse & Reason',
      description: 'Deconstruct complex computational problems, challenge assumptions, and cultivate a deep analytical mindset before writing a single line of code.',
      icon: 'Brain',
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'solve',
      title: 'SOLVE',
      subtitle: 'Find Effective Solutions',
      description: 'Architect efficient algorithms, optimize systems, and formulate elegant answers to demanding technical and real-world engineering challenges.',
      icon: 'Zap',
      color: 'from-electric-blue to-cyan'
    },
    {
      id: 'build',
      title: 'BUILD',
      subtitle: 'Turn Ideas into Action',
      description: 'Transform blueprints into production-ready software, hackathon-winning prototypes, open-source repositories, and impactful digital products.',
      icon: 'Code2',
      color: 'from-violet-500 to-electric-blue'
    }
  ],
  objectives: [
    {
      title: 'Critical Thinking',
      description: 'Analyse situations, question assumptions, and approach challenges from different perspectives.',
      code: 'OBJ-01'
    },
    {
      title: 'Problem Solving',
      description: 'Encourage logical reasoning and structured approaches to technical problems.',
      code: 'OBJ-02'
    },
    {
      title: 'Implementation',
      description: 'Apply knowledge by building programs, prototypes, and practical solutions.',
      code: 'OBJ-03'
    },
    {
      title: 'Innovation',
      description: 'Encourage original ideas and creative approaches to technology.',
      code: 'OBJ-04'
    },
    {
      title: 'Collaboration',
      description: 'Create opportunities to exchange knowledge, work in teams, and learn from peers.',
      code: 'OBJ-05'
    }
  ],
  activities: [
    { name: 'Coding Challenges', desc: 'Algorithmic battles and speed programming contests to sharpen syntax and problem-solving speed.' },
    { name: 'Problem of the Week', desc: 'Curated weekly logic teasers and DSA challenges with peer solution discussions.' },
    { name: 'Technical Quizzes', desc: 'Rapid-fire assessments covering system design, OS internals, web architecture, and AI.' },
    { name: 'Debugging Challenges', desc: 'Real-world codebase bug hunting, vulnerability fixes, and code optimization races.' },
    { name: 'Innovation & Implementation', desc: 'Hands-on hackathons and sprint workshops turning raw concepts into working prototypes.' },
    { name: 'Collaborative Activities', desc: 'Team coding sessions, open-source sprints, and peer mentorship circles.' },
    { name: 'Technical Learning Sessions', desc: 'Student-led tech talks on modern stacks, cloud infrastructure, AI models, and dev tools.' }
  ],
  values: [
    { title: 'Curiosity', description: 'Ask questions and explore new possibilities.' },
    { title: 'Creativity', description: 'Look beyond the obvious.' },
    { title: 'Teamwork', description: 'Learn and grow together.' },
    { title: 'Consistency', description: 'Improve through regular practice.' },
    { title: 'Integrity', description: 'Act responsibly and fairly.' },
    { title: 'Innovation', description: 'Turn possibilities into solutions.' }
  ],
  supportingLines: [
    'Every challenge is a chance to think differently.',
    'Every problem is an opportunity to learn.',
    'Every idea has the potential to become something real.',
    'NEXORA — Where thinking meets technology, and ideas become action.'
  ]
};

export const INITIAL_TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Rubeen Fathima',
    role: 'President ',
    department: 'Computer Science & Engineering',
    year: '2nd Year',
    bio: 'Passionate full-stack developer and competitive programmer with a passion for systems architecture, compiler engineering, and building resilient tech communities.',
    photoUrl: '/team/Rubeen.png',
    asciiArt: `
.------------------------------------.
|  ██████╗ ██╗   ██╗██████╗          |
|  ██╔══██╗██║   ██║██╔══██╗         |
|  ██████╔╝██║   ██║██████╔╝         |
|  ██╔══██╗██║   ██║██╔══██╗         |
|  ██║  ██║╚██████╔╝██████╔╝         |
|  ╚═╝  ╚═╝ ╚═════╝ ╚═════╝          |
'------------------------------------'
        .---.
       /  .  \\
      |  (o)  |
      |   <   |
       \\  -  /
        '---'
      /|  :  |\\
     / |  :  | \\
    /  |=====|  \\
   /   |     |   \\
  `,
    linkedinUrl: 'https://www.linkedin.com/in/rubeen-fathima/',
    githubUrl: 'https://github.com/rubeenfathima-codes',
    skills: ['HTML', 'React.js', 'Nodejs', 'Python', '  C++', 'Java']
  },
  {
    id: '2',
    name: 'DHAKSH',
    role: 'Vice President',
    department: 'Computer Science & Engineering',
    year: '2ndd Year',
    bio: 'Ex Intern @ T works, Government of Telangana | Student | UI/UX evangelist dedicated to organizing impactful hackathons and fostering inclusive learning environments for student engineers.',
    photoUrl: '/team/dhaksh.png',
    asciiArt: `
.------------------------------------.
|  ██████╗  █████╗ ██╗  ██╗          |
|  ██╔══██╗██╔══██╗╚██╗██╔╝          |
|  ██║  ██║███████║ ╚███╔╝           |
|  ██║  ██║██╔══██║ ██╔██╗           |
|  ██████╔╝██║  ██║██╔╝ ██╗          |
|  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝          |
'------------------------------------'
        _--""--_
      /  .----.  \\
     |  /  ||  \\  |
     | |  [||]  | |
     |  \\  ''  /  |
      \\  '----'  /
       '--....--'
     /|    ||    |\\
    / |    ||    | \\
   /  |====||====|  \\
  /   |    ||    |   \\

  `,
    linkedinUrl: 'https://www.linkedin.com/in/dhaksh-m/',
    githubUrl: 'https://github.com/dhaksh-m',
    skills: ['Python', 'PyTorch', 'Figma', 'React', 'UI/UX Design', 'Hackathon Organization', ]
  },
  {
    id: '3',
    name: 'Vamshi',
    role: 'Media Lead',
    department: 'Computer Science & Engineering',
    year: '2nd Year',
    bio: 'Backend specialist and Linux enthusiast. Enjoys deep diving into database indexing, microservices, and leading NEXORA debugging bootcamps.',
    photoUrl: '/team/vamshi.png',
    asciiArt: `
 .------------------------------------.
|  ██╗   ██╗ █████╗ ███╗   ███╗      |
|  ██║   ██║██╔══██╗████╗ ████║      |
|  ██║   ██║███████║██╔████╔██║      |
|  ╚██╗ ██╔╝██╔══██║██║╚██╔╝██║      |
|   ╚████╔╝ ██║  ██║██║ ╚═╝ ██║      |
|    ╚═══╝  ╚═╝  ╚═╝╚═╝     ╚═╝      |
'------------------------------------'
       ______
      /  __  \\
     |  (  )  |
     |   ||   |
      \\  --  /
       '----'
      /| || |\\
     / | || | \\
    /  |====|  \\
   /   |    |   \\
  `,
    linkedinUrl: 'https://www.linkedin.com/in/r-vamshi-5a306a446?',
    githubUrl: 'https://github.com/vamshi4924',
    skills: ['Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'C++']
  },
  {
    id: '4',
    name: 'Hansitha',
    role: 'General Secretary',
    department: 'Computer Science & Engineering',
    year: '2nd Year',
    bio: 'Frontend craftsman specializing in interactive canvas graphics, motion design, and developer relations. Leads branding and digital assets for NEXORA.',
    photoUrl: '/team/hansitha.png',
    asciiArt: `
.------------------------------------.
|  ██╗  ██╗ █████╗ ███╗   ██╗        |
|  ██║  ██║██╔══██╗████╗  ██║        |
|  ███████║███████║██╔██╗ ██║        |
|  ██╔══██║██╔══██║██║╚██╗██║        |
|  ██║  ██║██║  ██║██║ ╚████║        |
|  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝        |
'------------------------------------'
        .-""""-.
       /  .::.  \\
      |  (o  o)  |
      |    ||    |
       \\  '--'  /
        '-....-'
       /|   ||   |\\
      / |   ||   | \\
     /  |========|  \\
    /   |        |   \\
  `,
    linkedinUrl: 'https://www.linkedin.com/in/hansitha-gangapuram-75aa8a435/',
    githubUrl: 'https://github.com/HansithaGangapuram',
    skills: ['Three.js', 'TailwindCSS', 'TypeScript', 'GLSL', 'UI/UX']
  },
{
    id: '5',
    name: 'Shailaja',
    role: 'Technology Lead',
    department: 'Computer Science & Engineering',
    year: '2nd Year',
    bio: 'Frontend craftsman specializing in interactive canvas graphics, motion design, and developer relations. Leads branding and digital assets for NEXORA.',
    photoUrl: '/team/shailaja.png',
    asciiArt: `
.------------------------------------.
|  ███████╗██╗  ██╗ █████╗           |
|  ██╔════╝██║  ██║██╔══██╗          |
|  ███████╗███████║███████║          |
|  ╚════██║██╔══██║██╔══██║          |
|  ███████║██║  ██║██║  ██║          |
|  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝          |
'------------------------------------'
        .-""""-.
       /  .::.  \\
      |  (o  o)  |
      |    ||    |
       \\  '--'  /
        '-....-'
       /|   ||   |\\
      / |   ||   | \\
     /  |========|  \\
    /   |        |   \\
  `,
    linkedinUrl: 'https://www.linkedin.com/in/valapatla-shailaja-b89046445?',
    githubUrl: 'https://github.com/shailajavalapatla',
    skills: ['Three.js', 'TailwindCSS', 'TypeScript', 'GLSL', 'UI/UX']
  }


  
];

export const LEADERSHIP_MEMBERS: LeadershipMember[] = [
  {
    id: 'chairman',
    name: 'Sri. G. Panduranga Reddy ',
    role: 'Chairman, SDI',
    category: 'Chief Patron',
    institution: 'Sree Dattha Institutions',
    photoUrl: '/leadership/chairman.png'
  },
  {
    id: 'vice-chairman',
    name: 'Dr. G. N. V. Vibhav Reddy',
    role: 'Vice-Chairman, SDI',
    category: 'Patron',
    institution: 'Sree Dattha Institutions',
    photoUrl: '/leadership/vice-chairman.png'
  },
  {
    id: 'CMD',
    name: 'Sri. G. Devendra Vikram Reddy',
    role: 'Chief Managing Director, SDI',
    category: 'Patron',
    institution: 'Sree Dattha Institutions',
    photoUrl: '/leadership/cmd.png'
  },
  {
    id: 'Technical Chair',
    name: 'Dr. A. Srinivasula Reddy',
    role: 'Professor in EEE & PRINCIPAL, SDES',
    category: 'Technical Chair',
    institution: 'Sree Dattha Institute of Engineering & Science (Autonomous)',
    photoUrl: '/leadership/technical-chair.png'
  },
  {
    id: 'Technical Co-Chair',
    name: 'Dr. S. Venkata Achuta Rao',
    role: 'Prof., Dean-Academics & Administration, SDI',
    category: 'Technical Chair',
    institution: 'Sree Dattha Institute of Engineering & Science (Autonomous)',
    photoUrl: '/leadership/technical-co-chair.png'
  },
  {
    id: 'HOD-CSE',
    name: 'Dr. SK. Mahaboob Basha',
    role: 'Professor & HOD - CSE, SDES',
    category: 'Convener',
    department: 'Department of Computer Science & Engineering',
    institution: 'Sree Dattha Institute of Engineering & Science',
    photoUrl: '/leadership/hod-cse.png'
  },
  {
    id: 'faculty-coordinator',
    name: 'Mrs. K. Mounika',
    role: 'Assistant Professor, Dept. of CSE, SDES',
    category: 'Coordinator',
    department: 'Department of Computer Science & Engineering',
    institution: 'Sree Dattha Institute of Engineering & Science',
    photoUrl: '/leadership/coordinator.png'
  }
];

export const NEXORA_IDEATHON_EVENT = {
  id: 'nexora-ideathon-2026',
  title: 'NEXORA IDEATHON',
  date: '31st Oct',
  registrationDeadline: '29th Oct 2026, 11:30 PM',
  fee: 'RS 50/-',
  registrationUrl: 'https://rzp.io/rzp/nexora2026',
  whatsappCommunityUrl: 'https://chat.whatsapp.com/LMMCmt2dsHL6yoYq9efupu',
  theme: {
    title: 'Student Life & System Simplification',
    description: 'Solve real life problems faced by the students and make an existing system easier.'
  },
  teamSize: '1, 2, 3, 4, or 5 Members (Max 5 people per team)',
  waitingMessage: 'We are waiting to see your innovative ideas to solve the IRL problems',
  organizedBy: 'Organised by Nexora team, under the department of computer science and engineering',
  guidelines: [
    {
      title: 'Team Formation (1 - 5 Members)',
      description: 'Teams can consist of 1, 2, 3, 4, or 5 members. The maximum allowed team size is strictly 5 members per team.'
    },
    {
      title: 'Affordable Entry Fee',
      description: 'Registration fee is just RS 50/- per team.'
    },
    {
      title: 'Strict No-Refund Policy',
      description: 'Please note that there is NO REFUND of the registration fee under any circumstances once registered.'
    },
    {
      title: 'Accurate Information Required',
      description: 'Ensure that you fill out all personal, contact (phone & email), and team details correctly and completely while registering on the portal.'
    },
    {
      title: 'Single Focused Theme',
      description: 'Your proposed solution must strictly target real-life problems encountered by students or improve and simplify an existing process/system.'
    },
    {
      title: 'Presentation & Deliverables',
      description: 'Teams should prepare a clear presentation or conceptual prototype explaining the problem statement, proposed approach, feasibility, and impact.'
    },
    {
      title: 'Originality & Integrity',
      description: 'All submitted ideas must be original concepts created by the participating team. Plagiarism will lead to immediate disqualification.'
    },
    {
      title: 'Bring Your Own Laptop',
      description: 'Participants are required to bring their own laptops for the presentation.'
    }
  ]
};

export const UNCONFIRMED_EVENT: EventItem = {
  id: 'construction-01',
  title: 'NEXORA IDEATHON 2026',
  description: 'Solve real life problems faced by the students and make an existing system easier.',
  date: '31st Oct',
  time: '9:00 AM Onwards',
  venue: 'Campus Tech Hub / Online',
  isConfirmed: true,
  registrationUrl: 'https://rzp.io/rzp/nexora2026',
  category: 'Hackathon'
};
