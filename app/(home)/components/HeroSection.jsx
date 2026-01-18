/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HiCode, HiArrowRight, HiMusicNote } from 'react-icons/hi';
import { config } from '@/config';
import Link from 'next/link';
import { BackgroundPresets } from '@/components/ui/background-effects';
import { motion } from 'framer-motion';
import LanyardPlayer from './LanyardPlayer';
import RecentTracks from './RecentTracks';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
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
      ease: "easeOut"
    }
  }
};

const textAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-140px)] flex items-center justify-center relative">
      <BackgroundPresets.Minimal />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center space-y-8 relative"
        >
          <motion.div
            variants={itemAnimation}
            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
          >
            <HiCode className="w-5 h-5" />
            <span className="text-sm font-medium">Welcome to my portfolio</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={itemAnimation}
              className="text-4xl md:text-7xl font-bold tracking-tight"
            >
              <motion.div
                variants={textAnimation}
                className="flex items-center justify-center gap-4 md:gap-6 mb-2 flex-wrap"
              >
                <span className="text-primary">Hi, I'm</span>
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative inline-flex"
                >
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="relative w-14 h-14 md:w-20 md:h-20 rounded-full border-2 md:border-[3px] border-primary/40 overflow-hidden bg-secondary/10 backdrop-blur-sm shadow-lg hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 ring-2 ring-primary/10"
                  >
                    {config.developer.profilePicture ? (
                      <Image
                        src={config.developer.profilePicture}
                        alt={config.developer.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                        priority
                        style={{ objectPosition: 'center 35%' }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                        <span className="text-xl md:text-3xl font-bold text-primary">
                          {config.developer.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
                <span className="text-primary">{config.developer.name}</span>
              </motion.div>
              <motion.span
                variants={textAnimation}
                className="block text-white/60 text-2xl md:text-4xl mt-2"
              >
                Software Development Engineer
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemAnimation}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            {config.developer.summary || "I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products."}
          </motion.p>

          <motion.blockquote
            variants={itemAnimation}
            className="text-xl md:text-2xl font-semibold text-primary italic max-w-2xl mx-auto py-4 border-l-4 border-primary/40 pl-6 my-4"
          >
            "Build fast. Solve real problems. Ship with purpose."
          </motion.blockquote>

          <motion.div
            variants={itemAnimation}
            className="flex flex-wrap gap-4 justify-center pt-6"
          >
            <Link href={"/projects"}>
              <Button
                variant="expandIcon"
                Icon={HiArrowRight}
                iconPlacement="right"
                className="rounded-full px-6 py-6 text-base transition-all duration-300 hover:scale-105 font-semibold"
              >
                View Projects
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemAnimation}
            className="mt-12 w-full mx-auto"
          >
            <LanyardPlayer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -z-10 inset-0 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
        {
          config.recentTracks ? (
            <RecentTracks />
          ) : (
            null
          )
        }
      </div>
    </section>
  );
};

export default HeroSection;