"use client"
import React, { useState, useEffect } from 'react';
import { FaMagic } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { config } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = config.NAV_ITEMS;

const NavLink = ({ href, label, onClick }) => {
    const pathname = usePathname();
    // Match exact path or if pathname starts with href (for nested routes)
    const isActive = pathname === href || pathname.startsWith(href + '/');

    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <Link
            href={href}
            className="relative"
            onClick={handleClick}
        >
            <motion.span
                className={`relative px-4 py-2 text-gray-300 hover:text-white transition-colors cursor-pointer ${isActive ? 'text-white' : ''
                    }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {label}
                {isActive && (
                    <motion.div
                        className="absolute inset-0 bg-secondary/30  rounded-lg backdrop-blur-sm"
                        layoutId="activeNavBackground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                        style={{
                            zIndex: -1
                        }}
                    />
                )}
            </motion.span>
        </Link>
    );
};

const Logo = () => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
        >
            <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
            >
                {/* <Image
                    src={config.developer.profilePicture}
                    width={2000}
                    height={2000}
                    alt='logo'
                    className='w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-white/20 shadow-lg ring-2 ring-white/10'
                    priority
                    quality={95}
                    style={{ objectPosition: 'center 55%' }}
                /> */}
            </motion.div>
            <motion.span
                className="text-gray-300 text-lg font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {config.developer.name}
            </motion.span>
        </Link>
    </motion.div>
);

const Navigation = ({ mobile = false, onLinkClick }) => (
    <motion.nav
        className={mobile ? "flex flex-col space-y-4" : "hidden md:flex space-x-2"}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
    >
        {NAV_ITEMS.map((item, index) => (
            <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
            >
                <NavLink {...item} onClick={onLinkClick} />
            </motion.div>
        ))}
    </motion.nav>
);

const MobileMenu = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] md:hidden"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-64 bg-secondary/95 backdrop-blur-lg z-[70] md:hidden shadow-2xl border-l border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col h-full p-6">
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-lg font-semibold text-white">Menu</span>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors z-10 relative"
                                    aria-label="Close menu"
                                >
                                    <HiX className="w-6 h-6 text-white" />
                                </button>
                            </div>
                            <Navigation mobile={true} onLinkClick={onClose} />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

const ContactButton = () => (
    <motion.div
        className="flex items-center space-x-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
    >
        <Link href={"https://github.com/Fr3zyy/developer-portfolio"} target='_blank'>
            <Button className="rounded-2xl font-semibold bg-white text-gray-900 hover:bg-gray-200">
                Use this template!
            </Button>
        </Link>
    </motion.div>
);

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                className="py-9 z-50 text-white relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto flex items-center justify-between md:px-64 px-6">
                    <Logo />
                    <Navigation />
                    <button
                        onClick={handleMobileMenuToggle}
                        className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors z-50 relative"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <HiX className="w-6 h-6 text-white" />
                        ) : (
                            <HiMenu className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>
            </motion.header>
            <MobileMenu isOpen={mobileMenuOpen} onClose={handleMobileMenuClose} />
        </>
    );
};

export default Header;