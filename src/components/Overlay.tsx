"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // Fades and Parallax Y transforms for Section 1 (0% scroll)
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -150]);

    // Section 2 (30% scroll)
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.15, 0.55], [150, -150]);

    // Section 3 (60% scroll)
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.8, 0.95], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.95], [150, -150]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 w-full h-full max-w-7xl mx-auto px-6 tablet:px-12">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter drop-shadow-2xl mb-4">
                    Dev koshti
                </h1>
                <p className="text-xl md:text-3xl font-light text-gray-300 drop-shadow-xl">
                    Front End Developer.
                </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex flex-col items-start justify-center"
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white max-w-3xl drop-shadow-2xl leading-tight">
                    I build <br />
                    <span className="italic font-light text-gray-300">digital experiences.</span>
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex flex-col items-end justify-center text-right"
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white max-w-3xl drop-shadow-2xl leading-tight">
                    Bridging design <br />
                    and <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-300 to-zinc-600">engineering.</span>
                </h2>
            </motion.div>
        </div>
    );
}
