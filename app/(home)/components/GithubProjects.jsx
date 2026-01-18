"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const GithubProjects = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="space-y-12">
                    <div className="space-y-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
                        >
                            <FaGithub className="w-5 h-5" />
                            <span className="text-sm font-medium">GitHub Activity</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-primary"
                        >
                            GitHub Activity & Contributions
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                        >
                            A visual snapshot of my consistency, learning journey, and open-source involvement on GitHub.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center space-y-6"
                    >
                        <div className="w-full max-w-4xl">
                            <img
                                src="https://ghchart.rshah.org/fithin-m"
                                alt="GitHub Contribution Chart"
                                className="w-full h-auto rounded-xl border border-secondary/10 shadow-lg dark:shadow-secondary/5 transition-all duration-300 hover:shadow-xl dark:hover:shadow-secondary/10"
                                style={{
                                    imageRendering: 'crisp-edges'
                                }}
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-sm text-muted-foreground"
                        >
                            Green intensity indicates contribution frequency
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Button
                                variant="expandIcon"
                                Icon={FaGithub}
                                iconPlacement="right"
                                className="rounded-full px-6 py-6 text-base transition-all duration-300 hover:scale-105"
                                asChild
                            >
                                <a
                                    href="https://github.com/fithin-m"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View My GitHub Profile
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GithubProjects;