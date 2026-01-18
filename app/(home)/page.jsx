"use client"
import React from 'react'
import HeroSection from './components/HeroSection'
import GithubProjects from './components/GithubProjects'
import SkillsSection from './components/Skills'
import { config } from '@/config'
import { FaMapPin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const LocationSection = () => {
  const locationInfo = config.contactInfo.find(i => i.label === "Location")
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 flex items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 bg-secondary/5 border border-secondary/20 rounded-2xl p-6 backdrop-blur-sm">
          <FaMapPin className="w-5 h-5 text-primary" />
          <p className="text-base text-muted-foreground">
            {locationInfo?.value || "Kochi, Kerala, India"}
          </p>
        </div>
      </div>
    </motion.section>
  )
}

const Home = () => {
  return (
    <div>
      <HeroSection />
      <GithubProjects />
      <SkillsSection />
      <LocationSection />
    </div>
  )
}

export default Home