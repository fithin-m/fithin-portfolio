"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiChip, HiCode, HiDatabase, HiCube } from 'react-icons/hi';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { config } from '@/config';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const categoryAnimation = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

// Brand colors for technology icons
const getTechColor = (techName) => {
    const colorMap = {
        'Next.js 15': '#000000',
        'React': '#61DAFB',
        'TailwindCSS': '#06B6D4',
        'JavaScript': '#F7DF1E',
        'TypeScript': '#3178C6',
        'Framer Motion': '#0055FF',
        'HTML5': '#E34F26',
        'CSS3': '#1572B6',
        'Node.js': '#339933',
        'Express.js': '#000000',
        'REST APIs': '#FF6B6B',
        'GraphQL': '#E10098',
        'Python': '#3776AB',
        'PostgreSQL': '#4169E1',
        'MongoDB': '#47A248',
        'MySQL': '#4479A1',
        'Redis': '#DC382D',
        'Firebase': '#FFCA28',
        'Flutter': '#02569B',
        'React Native': '#61DAFB',
        'Dart': '#0175C2',
        'Docker': '#2496ED',
        'Git': '#F05032',
        'VS Code': '#007ACC',
        'Postman': '#FF6C37',
        'Linux': '#FCC624',
        'Vercel': '#000000',
        'AWS': '#FF9900',
        'GitHub Actions': '#2088FF'
    };
    return colorMap[techName] || '#9CA3AF';
};

const TechBadge = ({ tech, index, categoryColor }) => {
    // Handle both old format (string) and new format (object with name and icon)
    const techName = typeof tech === 'string' ? tech : tech.name;
    const TechIcon = typeof tech === 'object' && tech.icon ? tech.icon : null;
    const iconColor = getTechColor(techName);

    return (
        <motion.div
            variants={itemAnimation}
            whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
            }}
            className="group relative"
        >
            <TooltipProvider delayDuration={200}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div
                            className={cn(
                                "inline-flex items-center gap-3 px-5 py-3 rounded-lg",
                                "bg-secondary/5 border border-secondary/10",
                                "text-primary font-semibold text-base",
                                "cursor-pointer transition-all duration-300",
                                "hover:bg-secondary/10 hover:border-secondary/20",
                                "hover:shadow-lg hover:shadow-primary/5",
                                "backdrop-blur-sm",
                                "group-hover:shadow-xl"
                            )}
                        >
                            {TechIcon && (
                                <TechIcon 
                                    className="w-6 h-6 flex-shrink-0" 
                                    style={{ color: iconColor }}
                                />
                            )}
                            <span className="text-primary group-hover:text-primary/90 transition-colors">
                                {techName}
                            </span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{techName}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </motion.div>
    );
};

const CategorySection = ({ category, index }) => (
    <motion.div
        variants={categoryAnimation}
        className="space-y-6"
    >
        <div className="flex items-center gap-3 pb-2 border-b border-secondary/10">
            <div className={cn("p-2.5 rounded-xl", category.bgClass)}>
                <div className={cn("w-5 h-5", category.iconClass)}>
                    {category.icon}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
        </div>

        <motion.div
            variants={containerAnimation}
            className="flex flex-wrap gap-3"
        >
            {category.technologies.map((tech, idx) => (
                <TechBadge 
                    key={idx} 
                    tech={tech} 
                    index={idx}
                    categoryColor={category.iconClass}
                />
            ))}
        </motion.div>
    </motion.div>
);

const SkillsSection = () => {
    const techStack = config.techStack || config.skills;

    // If using old config format, transform it
    const stack = techStack.map(category => ({
        ...category,
        technologies: category.technologies || category.skills?.map(s => typeof s === 'string' ? s : s.name) || []
    }));

    return (
        <section className="py-24" id="skills">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-16"
                >
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
                        >
                            <HiChip className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                Tech Stack
                            </span>
                        </motion.div>

                        <motion.div variants={itemAnimation} className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                                Tech Stack
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                A snapshot of the tools and technologies I use to build scalable, modern applications.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={containerAnimation}
                        className="space-y-12 max-w-5xl mx-auto"
                    >
                        {stack.map((category, index) => (
                            <CategorySection key={index} category={category} index={index} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;