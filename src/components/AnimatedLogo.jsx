import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = ({ className = "" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                initial="hidden"
                animate="visible"
            >
                {/* 'M' Letter - Enters from bottom, shifted left */}
                <motion.path
                    d="M 45 80 L 65 30 L 75 50 L 85 20 L 85 80"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
                        }
                    }}
                />

                {/* 'F' Letter - Enters from top, shifted right */}
                <motion.path
                    d="M 25 20 L 45 20 M 25 50 L 40 50 M 25 20 L 25 80"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={{
                        hidden: { y: -20, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.8, ease: "easeOut" }
                        }
                    }}
                />

                {/* Musical Note with Heartbeat Wave - Fades in */}
                <motion.g
                    variants={{
                        hidden: { scale: 0.8, opacity: 0 },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.6, ease: "easeOut", delay: 1 }
                        }
                    }}
                >
                    {/* Note Base */}
                    <path
                        d="M 60 40 L 60 70 A 8 8 0 1 1 45 70 L 60 70 M 60 40 L 75 45 L 75 50 L 60 45"
                        fill="none"
                        stroke="#2196F3" // Changed to Blue
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* Heartbeat inside note head */}
                    <path
                        d="M 45 68 L 48 68 L 51 60 L 53 75 L 56 68 L 60 68"
                        fill="none"
                        stroke="#32cd32" // Accent theme color
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </motion.g>

            </motion.svg>
        </div>
    );
};

export default AnimatedLogo;
