"use client"

import { motion } from "framer-motion"
import { XCircle, CheckCircle2, Clock, TrendingUp } from "lucide-react"

export default function ProblemSolution() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-space-black -z-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lunar-blue/5 rounded-full blur-[120px] -z-10" />
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Problem Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-400 mb-6">The Old Way</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors duration-300">
                                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-semibold text-red-200 mb-2">Slow Hiring Process</h4>
                                    <p className="text-gray-400">Weeks spent screening candidates and conducting manual interviews.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors duration-300">
                                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-semibold text-red-200 mb-2">Buggy Code Releases</h4>
                                    <p className="text-gray-400">Manual code reviews miss critical bugs and security flaws.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Solution Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-lunar-blue mb-6">The Lunaris Way</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 rounded-xl bg-lunar-blue/10 border border-lunar-blue/20 shadow-[0_0_30px_rgba(0,212,255,0.1)] hover:shadow-[0_0_50px_rgba(0,212,255,0.2)] transition-all duration-300">
                                <CheckCircle2 className="w-6 h-6 text-lunar-blue shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">80% Faster Hiring</h4>
                                    <p className="text-gray-300">AI conducts initial interviews and ranks candidates automatically.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 rounded-xl bg-lunar-blue/10 border border-lunar-blue/20 shadow-[0_0_30px_rgba(0,212,255,0.1)] hover:shadow-[0_0_50px_rgba(0,212,255,0.2)] transition-all duration-300">
                                <CheckCircle2 className="w-6 h-6 text-lunar-blue shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">2x Code Velocity</h4>
                                    <p className="text-gray-300">Instant AI code reviews ensure quality and security before merge.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
