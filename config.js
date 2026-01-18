import { FaDiscord, FaGithub, FaMapPin, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail } from "react-icons/hi";
import { 
    SiNextdotjs, SiReact, SiTailwindcss, SiJavascript, SiTypescript, 
    SiFramer, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiGraphql, 
    SiPython, SiPostgresql, SiMongodb, SiMysql, SiRedis, SiFirebase,
    SiFlutter, SiDart, SiDocker, SiGit, SiVisualstudiocode,
    SiPostman, SiLinux, SiVercel, SiAmazon, SiGithubactions, SiRedux
} from "react-icons/si";

export const config = {
    developer: {
        name: "Fithin M",
        profilePicture: "/fithin.png", // Add your profile picture to /public folder
        summary: "A full-stack developer and product builder passionate about creating real-world digital solutions that solve actual business problems. I specialize in building scalable mobile and web platforms, designing clean APIs, and turning complex workflows into simple, powerful user experiences."
    },
    social: {
        github: "fithin-m",
        discord: "1155137511954337887"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "Mobile App for iOS & Android",
            description: "Currently working on a cross-platform mobile application for both Apple iOS and Android platforms. Building a scalable solution with modern technologies and best practices.",
            image: "/projects/mobile.jpeg",
            technologies: ["React Native", "Node.js", "Express", "PostgreSQL"],
            github: null,
            demo: null,
            inProgress: true,
            progress: 85
        },
        {
            id: 2,
            title: "HireStreer App",
            subtitle: "A platform for booking drivers & chauffeurs — built from a real-world problem",
            description: "Not all ideas succeed. But some failures shape you more than success.",
            image: "/projects/chauff.jpeg",
            technologies: ["Flutter", "Node.js", "PostgreSQL", "Real-time Matching"],
            github: null,
            demo: null,
            failed: true,
            storyPath: "/hirestreet-story"
        },
        {
            id: 3,
            title: "NotaryDoc.in – Legal Document Automation Platform",
            description: "Built a web platform for advocates to auto-generate legal documents. Implemented dynamic forms that populate official document templates. Developed secure backend APIs for data storage and retrieval. Reduced manual document preparation time significantly.",
            image: "/projects/adv.jpeg",
            technologies: ["React", "Node.js", "Prisma", "PostgreSQL"],
            github: null,
            demo: null
        },
        {
            id: 4,
            title: "Noorqi – Clinic Website with CMS",
            description: "Developed a responsive clinic website with modern UI. Integrated Sanity CMS for dynamic content management. Enabled non-technical users to update services, blogs, and announcements. Built SEO-friendly pages for better online visibility.",
            image: "/projects/Noor.jpeg",
            technologies: ["React", "Sanity CMS"],
            github: null,
            demo: null
        },
        {
            id: 5,
            title: "Keystroke Dynamics Research App",
            description: "Built a mobile application to collect keystroke behavior data. Designed datasets for ML-based user identification. Supported RNN-based behavioral authentication research.",
            image: "/projects/keystroke.jpeg",
            technologies: ["Flutter", "Python", "TensorFlow"],
            github: null,
            demo: null
        }
    ],
    techStack: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            technologies: [
                { name: "Next.js 15", icon: SiNextdotjs },
                { name: "React", icon: SiReact },
                { name: "TailwindCSS", icon: SiTailwindcss },
                { name: "JavaScript", icon: SiJavascript },
                { name: "TypeScript", icon: SiTypescript },
                { name: "Redux", icon: SiRedux },
                { name: "Zustand", icon: null },
                // { name: "Framer Motion", icon: SiFramer },
                { name: "HTML5", icon: SiHtml5 },
                { name: "CSS3", icon: SiCss3 }
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & API development",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            technologies: [
                { name: "Node.js", icon: SiNodedotjs },
                { name: "Express.js", icon: SiExpress },
                { name: "REST APIs", icon: null },
                // { name: "GraphQL", icon: SiGraphql },
                { name: "Python", icon: SiPython },
                { name: "PostgreSQL", icon: SiPostgresql }
            ]
        },
        {
            title: "Database",
            icon: <HiDatabase />,
            description: "Data storage & management",
            bgClass: "bg-purple-500/10",
            iconClass: "text-purple-500",
            technologies: [
                { name: "MongoDB", icon: SiMongodb },
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "MySQL", icon: SiMysql },
                { name: "Redis", icon: SiRedis },
                { name: "Firebase", icon: SiFirebase }
            ]
        },
        {
            title: "Mobile",
            icon: <HiCube />,
            description: "Cross-platform mobile development",
            bgClass: "bg-indigo-500/10",
            iconClass: "text-indigo-500",
            technologies: [
                { name: "Flutter", icon: SiFlutter },
                { name: "React Native", icon: SiReact },
                { name: "Dart", icon: SiDart }
            ]
        },
        {
            title: "DevOps & Tools",
            icon: <HiCube />,
            description: "Development & deployment tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            technologies: [
                { name: "Docker", icon: SiDocker },
                { name: "Git", icon: SiGit },
                { name: "VS Code", icon: SiVisualstudiocode },
                { name: "Postman", icon: SiPostman },
                // { name: "Linux", icon: SiLinux },
                { name: "Vercel", icon: SiVercel },
                // { name: "AWS", icon: SiAmazon },
                // { name: "GitHub Actions", icon: SiGithubactions }
            ]
        }
    ],
    contactInfo: [
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "fithinfith@gmail.com",
            link: "mailto:fithinfith@gmail.com"
        },
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "fithin-m",
            link: `https://github.com/fithin-m`
        },
        {
            icon: <FaPhone className="w-5 h-5" />,
            label: "Phone",
            value: "+91 8157832715",
            link: "tel:+918157832715"
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "fithin-vijay-mv",
            link: `https://linkedin.com/in/fithin-vijay-mv`
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Kochi, Kerala, India",
            link: null
        }
    ]
}