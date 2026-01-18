"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';
import { itemAnimation } from './Animations';
import Image from 'next/image';

export const ProjectCard = ({ project, index }) => {
    const isInProgress = project.inProgress || false;
    const isFailed = project.failed || false;
    const progress = project.progress || 0;

    const cardClassName = isFailed
        ? "group flex flex-col sm:flex-row items-stretch gap-6 bg-secondary/5 hover:bg-secondary/10 p-6 rounded-2xl transition-all duration-300 border border-secondary/20 backdrop-blur-sm shadow-lg"
        : "group flex flex-col sm:flex-row items-stretch gap-6 bg-secondary/10 hover:bg-secondary/15 p-6 rounded-2xl transition-all duration-300 border border-secondary/20 backdrop-blur-sm shadow-lg hover:shadow-xl";

    return (
        <motion.div
            variants={itemAnimation}
            className={cardClassName}
        >
            <div className="sm:w-1/3 flex-shrink-0">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-secondary/30">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500 ${isFailed ? 'grayscale-[30%] opacity-70' : ''}`}
                    />
                    {isInProgress && (
                        <div className="absolute top-3 right-3 px-3 py-1.5 bg-orange-500/95 text-white text-xs font-semibold rounded-full backdrop-blur-md shadow-lg">
                            In Progress
                        </div>
                    )}
                    {isFailed && (
                        <div className="absolute top-3 right-3 px-3 py-1.5 bg-red-500/95 text-white text-xs font-semibold rounded-full backdrop-blur-md shadow-lg">
                            Failed
                        </div>
                    )}
                </div>
            </div>

            <div className="sm:w-2/3 flex flex-col justify-between gap-4">
                <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                            <h3 className={`text-xl md:text-2xl font-bold leading-tight ${isFailed ? 'text-muted-foreground' : 'text-primary'}`}>
                                {project.title}
                            </h3>
                            {project.subtitle && (
                                <p className="text-sm text-muted-foreground/80 mt-2 leading-relaxed">
                                    {project.subtitle}
                                </p>
                            )}
                        </div>
                        <span className={`text-sm font-medium px-2 py-1 rounded-lg bg-secondary/20 ${isFailed ? 'text-muted-foreground/60' : 'text-muted-foreground'}`}>
                            #{String(index + 1).padStart(2, '0')}
                        </span>
                    </div>

                    <p className={`text-base leading-relaxed ${isFailed ? 'text-muted-foreground/70 italic' : 'text-muted-foreground'} line-clamp-3`}>
                        {project.description}
                    </p>

                    {isInProgress && (
                        <div className="space-y-2 pt-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground font-medium">Progress</span>
                                <span className="text-primary font-semibold">{progress}%</span>
                            </div>
                            <div className="h-2.5 bg-secondary/30 rounded-full overflow-hidden shadow-inner">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full shadow-sm"
                                />
                            </div>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className={`text-sm px-3 py-1.5 rounded-lg font-medium ${isFailed ? 'bg-secondary/20 text-muted-foreground' : 'bg-primary/15 text-primary border border-primary/20'}`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-secondary/20">
                    {isFailed && project.storyPath ? (
                        <Button
                            size="sm"
                            className="rounded-full h-9 px-5 text-sm bg-primary/15 hover:bg-primary/25 text-primary border border-primary/20"
                            asChild
                        >
                            <Link href={project.storyPath} className="flex items-center gap-2">
                                Read The Story
                                <FaBookOpen className="w-3.5 h-3.5" />
                            </Link>
                        </Button>
                    ) : project.demo ? (
                        <Button
                            size="sm"
                            className="rounded-full h-9 px-5 text-sm"
                            asChild
                        >
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                Live Demo
                                <FaExternalLinkAlt className="w-3.5 h-3.5" />
                            </a>
                        </Button>
                    ) : null}
                </div>
            </div>
        </motion.div>
    );
};