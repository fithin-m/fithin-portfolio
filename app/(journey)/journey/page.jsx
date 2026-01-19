"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaRocket, FaLightbulb } from 'react-icons/fa';
import { BackgroundPresets } from '@/components/ui/background-effects';

const journeyData = [
  {
    id: 1,
    type: 'work',
    title: 'Software Developer',
    company: 'Locus8 Network LLP',
    location: 'Kochi, Kerala, India',
    period: 'May 2025 – Present',
    year: '2025',
    icon: FaBriefcase,
    description: 'Building scalable software solutions and contributing to innovative projects.',
    side: 'right'
  },
  {
    id: 2,
    type: 'work',
    title: 'Full Stack Developer Intern',
    company: 'Flick Network',
    location: 'Kochi, Kerala, India',
    period: 'Dec 2024 – Apr 2025',
    year: '2024',
    icon: FaBriefcase,
    description: 'Developed full-stack applications and gained hands-on experience in modern web technologies.',
    side: 'left'
  },
  {
    id: 3,
    type: 'work',
    title: 'Summer Research Intern',
    company: 'Indian Institute of Information Technology (IIIT) Kottayam',
    location: 'Kottayam, Kerala, India',
    period: 'May 2024 – July 2024',
    year: '2024',
    icon: FaBriefcase,
    description: 'Conducted research and contributed to academic projects in information technology.',
    side: 'right'
  },
  {
    id: 4,
    type: 'entrepreneur',
    title: 'Hiresteer',
    company: 'Entrepreneurial Venture',
    location: 'CITTIC CUSAT, KSUM',
    period: '2024',
    year: '2024',
    icon: FaRocket,
    description: 'Built a platform for booking drivers & chauffeurs. A learning experience that taught me valuable lessons about product development, market validation, and the importance of persistence. Not all ideas succeed, but some failures shape you more than success.',
    side: 'left',
    failed: true
  },
  {
    id: 5,
    type: 'entrepreneur',
    title: 'College Projects & Experiments',
    company: 'Tech Entrepreneur Journey',
    location: 'Cochin University',
    period: '2023-2025',
    year: '2023-2025',
    icon: FaLightbulb,
    description: 'Explored various entrepreneurial ideas and built multiple projects during college. These experiences taught me to think beyond traditional employment and embrace the mindset of a tech entrepreneur—building solutions, taking risks, and learning from both successes and failures.',
    side: 'right',
    isEntrepreneur: true
  },
  {
    id: 6,
    type: 'education',
    title: 'Master\'s Degree',
    company: 'Cochin University of Science and Technology',
    location: 'Kochi, Kerala, India',
    period: '2023-2025',
    year: '2023-2025',
    icon: FaGraduationCap,
    description: 'Pursuing advanced studies in technology while balancing academic excellence with real-world projects and entrepreneurial ventures.',
    side: 'left'
  }
];

const JourneyItem = ({ item, index }) => {
  const Icon = item.icon;
  const isRight = item.side === 'right';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${isRight ? 'flex-row-reverse' : 'flex-row'} mb-12 md:mb-16`}
    >
      {/* Content Card */}
      <div className={`w-full md:w-5/12 ${isRight ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`relative bg-secondary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 ${
            item.failed ? 'border-orange-500/30 hover:border-orange-500/50' : ''
          } ${item.isEntrepreneur ? 'border-purple-500/30 hover:border-purple-500/50' : ''}`}
        >
          {/* Year Badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
            item.type === 'work' ? 'bg-blue-500/20 text-blue-400' :
            item.type === 'education' ? 'bg-green-500/20 text-green-400' :
            item.failed ? 'bg-orange-500/20 text-orange-400' :
            'bg-purple-500/20 text-purple-400'
          }`}>
            <Icon className="w-3 h-3" />
            <span>{item.year}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
            {item.title}
          </h3>
          <p className="text-base md:text-lg text-white/80 font-medium mb-1">
            {item.company}
          </p>
          <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
            <span>{item.location}</span>
            <span>•</span>
            <span>{item.period}</span>
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* Timeline Center - Comet Line */}
      <div className="hidden md:flex flex-col items-center justify-center w-2/12 relative">
        {/* Vertical Timeline Line */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-full bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10 relative overflow-hidden">
            {/* Animated comet effect - multiple particles */}
            <motion.div
              className="absolute w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/70"
              animate={{
                y: ['0%', '100%'],
                opacity: [1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.5
              }}
              style={{ left: '-4px' }}
            />
            <motion.div
              className="absolute w-2 h-8 bg-gradient-to-b from-primary via-primary/50 to-transparent"
              animate={{
                y: ['0%', '100%'],
                opacity: [0.8, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.5 + 0.2
              }}
              style={{ left: '-3px' }}
            />
          </div>
        </div>

        {/* Timeline Dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
          className={`relative z-10 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center ${
            item.type === 'work' ? 'bg-blue-500' :
            item.type === 'education' ? 'bg-green-500' :
            item.failed ? 'bg-orange-500' :
            'bg-purple-500'
          } shadow-lg shadow-primary/50`}
        >
          <Icon className="w-4 h-4 text-white" />
          <motion.div
            className={`absolute inset-0 rounded-full ${
              item.type === 'work' ? 'bg-blue-500/30' :
              item.type === 'education' ? 'bg-green-500/30' :
              item.failed ? 'bg-orange-500/30' :
              'bg-purple-500/30'
            }`}
            animate={{ scale: [1, 1.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Mobile Timeline Dot */}
      <div className="md:hidden absolute left-0 top-6 w-5 h-5 rounded-full border-2 border-background flex items-center justify-center z-10 bg-primary">
        <Icon className="w-3 h-3 text-white" />
      </div>

      {/* Year Display */}
      <div className={`hidden md:block w-5/12 ${isRight ? 'text-left pl-8' : 'text-right pr-8'}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="inline-block"
        >
          <span className="text-4xl md:text-5xl font-bold text-primary/20">
            {item.year}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const JourneyPage = () => {
  return (
    <div className="min-h-screen relative py-12 md:py-20">
      <BackgroundPresets.Minimal />
      
      <div className="container mx-auto px-6 md:px-64 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            My Journey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of my studies, work experiences, and entrepreneurial ventures—each step shaping who I am today
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Timeline Line (Mobile) */}
          <div className="md:hidden absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

          {/* Journey Items */}
          <div className="space-y-0">
            {journeyData.map((item, index) => (
              <JourneyItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Future Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-4"
            >
              <FaRocket className="w-8 h-8 md:w-12 md:h-12 text-primary" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Going for New Challenges
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Always exploring new opportunities, building innovative solutions, and pushing boundaries. The journey continues—ready to take on the next challenge and make an impact.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JourneyPage;

