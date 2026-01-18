/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HiArrowLeft } from 'react-icons/hi';
import BackgroundEffects from '@/components/ui/background-effects';

const HireStreetStory = () => {
    const sectionAnimation = {
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

    const itemAnimation = {
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

    return (
        <section className="relative min-h-screen py-20">
            <BackgroundEffects
                variant="diagonal"
                colors={{ first: "secondary", second: "secondary" }}
                intensity="10"
                blurAmount="3xl"
            />

            <div className="container mx-auto px-6 max-w-4xl relative">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Button
                        variant="ghost"
                        asChild
                        className="rounded-full hover:bg-secondary/10"
                    >
                        <Link href="/projects" className="flex items-center gap-2">
                            <HiArrowLeft className="w-4 h-4" />
                            <span>Back to Projects</span>
                        </Link>
                    </Button>
                </motion.div>

                {/* Section 1: Hero */}
                <motion.div
                    variants={sectionAnimation}
                    initial="hidden"
                    animate="show"
                    className="text-center space-y-6 mb-20"
                >
                    <motion.div
                        variants={itemAnimation}
                        className="inline-flex items-center space-x-2 bg-red-500/10 border-[1.8px] border-red-500/20 px-4 py-2 rounded-full text-red-400 backdrop-blur-sm"
                    >
                        <span className="text-sm font-medium">Failed but Valuable</span>
                    </motion.div>

                    <motion.h1
                        variants={itemAnimation}
                        className="text-4xl md:text-6xl font-bold text-primary leading-tight"
                    >
                        HireStreet — A Startup That Changed Me
                    </motion.h1>

                    <motion.p
                        variants={itemAnimation}
                        className="text-xl md:text-2xl text-muted-foreground"
                    >
                        Built in college. Failed in execution. Successful in lessons.
                    </motion.p>
                </motion.div>

                {/* Section 2: The Origin */}
                <motion.div
                    variants={sectionAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        The Origin
                    </h2>
                    <div className="prose prose-invert max-w-none space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                        <p>
                            I was an MCA student at CUSAT. During my college days, I worked part-time as a chauffeur. That's when I noticed how unbalanced and unfair the market was. Agencies were charging customers heavily, while drivers barely got a fair cut. The system was broken.
                        </p>
                        <p>
                            So we thought — what if we could fix this? What if we could connect people directly with drivers and create a fair marketplace? That idea became HireStreet.
                        </p>
                    </div>
                </motion.div>

                {/* Section 3: What We Built */}
                <motion.div
                    variants={sectionAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        What We Built
                    </h2>
                    <div className="space-y-4">
                        <ul className="space-y-3 text-base md:text-lg text-muted-foreground list-disc list-inside">
                            <li>Flutter app for both iOS and Android</li>
                            <li>Driver booking system</li>
                            <li>Real-time matching</li>
                            <li>Pricing transparency</li>
                            <li>User & driver apps</li>
                        </ul>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
                            Built as part of college innovation and was pitched under the Kerala Startup Mission incubation center.
                        </p>
                    </div>
                </motion.div>

                {/* Section 4: The Reality */}
                <motion.div
                    variants={sectionAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 space-y-6 bg-secondary/5 p-8 rounded-2xl border border-secondary/10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        The Reality
                    </h2>
                    <div className="prose prose-invert max-w-none space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                        <p>
                            We couldn't continue the project. Not because the idea was bad — but because execution, funding, timing, and real-world challenges hit hard. Some things don't work out the way you expect.
                        </p>
                    </div>
                </motion.div>

                {/* Section 5: What It Taught Me */}
                <motion.div
                    variants={sectionAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        What It Taught Me
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 italic">
                        This is the most important section.
                    </p>
                    <div className="space-y-4">
                        <ul className="space-y-3 text-base md:text-lg text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span><strong className="text-primary">Real-world product building</strong> — Not just code, but understanding users and markets</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span><strong className="text-primary">Market realities</strong> — Ideas need more than technical execution</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span><strong className="text-primary">User behavior</strong> — How people actually interact with products</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span><strong className="text-primary">Team challenges</strong> — Collaboration, communication, and compromise</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span><strong className="text-primary">Tech scalability</strong> — Building for growth, not just MVP</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span><strong className="text-primary">Why startups fail</strong> — The harsh truth about the startup journey</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span><strong className="text-primary">Why classrooms can't teach this</strong> — Real experience vs. theoretical knowledge</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Section 6: No Regrets, Only Growth */}
                <motion.div
                    variants={sectionAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 space-y-6 bg-primary/5 p-8 rounded-2xl border border-primary/10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        No Regrets, Only Growth
                    </h2>
                    <div className="prose prose-invert max-w-none space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                        <p>
                            I don't regret this project. I don't feel guilty about it. Some things happen for a reason. This experience pushed me harder. I was an ordinary kid with big dreams — and this made me stronger, not weaker.
                        </p>
                    </div>
                </motion.div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center pt-8 border-t border-secondary/10"
                >
                    <p className="text-muted-foreground mb-4">
                        Want to build something together?
                    </p>
                    <Button
                        asChild
                        variant="expandIcon"
                        Icon={HiArrowLeft}
                        iconPlacement="left"
                        className="rounded-full px-6 py-6 text-base"
                    >
                        <Link href="/contact">Let's Connect</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default HireStreetStory;

