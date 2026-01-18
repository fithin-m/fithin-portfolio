/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import BackgroundEffects from '@/components/ui/background-effects';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaMapPin } from 'react-icons/fa';
import { config } from '@/config';

const ContactPage = () => {
    const [message, setMessage] = useState('');

    const contactButtons = [
        {
            label: "DM me on LinkedIn",
            icon: FaLinkedin,
            href: config.contactInfo.find(i => i.label === "LinkedIn")?.link || "https://linkedin.com/in/fithin-vijay-mv",
            color: "text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30",
            delay: 0.1
        },
        {
            label: "Email me",
            icon: HiMail,
            href: config.contactInfo.find(i => i.label === "Email")?.link || "mailto:fithinfith@gmail.com",
            color: "text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400/30",
            delay: 0.2
        },
        {
            label: "WhatsApp me",
            icon: FaWhatsapp,
            href: "https://wa.me/918157832715",
            color: "text-green-400 hover:bg-green-400/10 hover:border-green-400/30",
            delay: 0.3
        },
        {
            label: "View My GitHub",
            icon: FaGithub,
            href: config.contactInfo.find(i => i.label === "GitHub")?.link || "https://github.com/fithin-m",
            color: "text-purple-400 hover:bg-purple-400/10 hover:border-purple-400/30",
            delay: 0.4
        }
    ];

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

    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="relative flex items-center justify-center py-6 min-h-[calc(100vh-140px)]" id="contact">
            <BackgroundEffects
                variant="corners"
                colors={{ first: "secondary", second: "secondary" }}
                intensity="10"
                blurAmount="3xl"
            />

            <div className="container mx-auto px-6 py-20 flex flex-col items-center max-w-4xl">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    animate="show"
                    className="w-full space-y-8"
                >
                    {/* Header */}
                    <motion.div
                        variants={itemAnimation}
                        className="text-center space-y-4"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
                        >
                            <span className="text-sm font-medium">Let's Connect</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold text-primary">
                            Let's Build Something Cool 🚀
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Got a wild project idea? Need help? Want to collab? Or just here to say hi?
                        </p>
                        <p className="text-base text-muted-foreground/80 max-w-xl mx-auto">
                            No boring forms. No formalities. Just drop a message and let's make something awesome.
                        </p>
                    </motion.div>

                    {/* Optional Message Box */}
                    <motion.div
                        variants={itemAnimation}
                        className="backdrop-blur-sm bg-secondary/5 p-6 rounded-2xl border border-secondary/10 space-y-4"
                    >
                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                                <span className="italic">Tell me your idea — even if it sounds crazy.</span>
                            </p>
                            <Textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message here... (optional)"
                                className="rounded-lg border-primary/20 min-h-[120px] bg-secondary/5 focus:bg-secondary/10 transition-colors resize-none"
                            />
                        </div>
                    </motion.div>

                    {/* Contact Buttons */}
                    <motion.div
                        variants={containerAnimation}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {contactButtons.map((button, index) => {
                            const Icon = button.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemAnimation}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        asChild
                                        variant="outline"
                                        className={`w-full rounded-xl h-16 px-6 text-base font-semibold border-secondary/20 bg-secondary/5 hover:shadow-lg transition-all duration-300 group ${button.color}`}
                                    >
                                        <a
                                            href={button.href}
                                            target={button.href.startsWith('mailto:') ? undefined : "_blank"}
                                            rel={button.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                                            className="flex items-center justify-center gap-3"
                                        >
                                            <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                                            <span>{button.label}</span>
                                        </a>
                                    </Button>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Location Section */}
                    <motion.div
                        variants={itemAnimation}
                        className="flex items-center justify-center gap-3 pt-6 border-t border-secondary/20"
                    >
                        <FaMapPin className="w-5 h-5 text-primary" />
                        <p className="text-base text-muted-foreground">
                            {config.contactInfo.find(i => i.label === "Location")?.value || "Kochi, Kerala, India"}
                        </p>
                    </motion.div>

                    {/* Fun Lines */}
                    <motion.div
                        variants={itemAnimation}
                        className="text-center space-y-2 pt-4"
                    >
                        <p className="text-sm text-muted-foreground/70 italic">
                            No resumes. No cover letters. Just vibes.
                        </p>
                        {/* <p className="text-xs text-muted-foreground/50">
                            I reply faster than your crush (sometimes).
                        </p> */}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactPage;
