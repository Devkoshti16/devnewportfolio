"use client";

import { motion } from "framer-motion";

const PROJECTS = [
    {
        title: "smoothick",
        category: "E-commerce",
        image: "https://portfolio-3c77ya14h-devkoshti16s-projects.vercel.app/assets/project1-DcrKoWyU.jpg",
        link: "https://smoothick.com/",
    },
    {
        title: "blazinsports",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop",
        link: "https://blazinsports.com/",
    },
    {
        title: "docsshipping",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop",
        link: "https://docsshipping.com/",
    },
    {
        title: "smoothick",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop",
        link: "https://smoothick.com/",
    },
    {
        title: "Top workvibes",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop",
        link: "https://topworkvibes.com/",
    }
];

export default function Projects() {
    return (
        <section className="min-h-screen bg-[#121212] py-32 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h3 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-4">Selected Work</h3>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Recent Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {PROJECTS.map((project, idx) => (
                        <motion.a
                            href={project.link}
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group block relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                                <p className="text-zinc-400 text-sm font-medium tracking-wide mb-2 uppercase">
                                    {project.category}
                                </p>
                                <h4 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-between">
                                    {project.title}
                                    <span className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                        →
                                    </span>
                                </h4>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
