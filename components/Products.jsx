"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, PenTool, Users, Mail, UserCheck, ArrowRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
    {
        id: "devpilot",
        title: "DevPilot",
        description: "Your AI co-pilot for navigating complex codebases.",
        icon: Code2,
        color: "from-cyan-400 to-blue-600",
        features: ["Context-aware completion", "Refactoring agent", "Bug prediction"],
    },
    {
        id: "content-suite",
        title: "Content Optima",
        description: "Automated content optimization suite for maximum engagement.",
        icon: PenTool,
        color: "from-purple-400 to-pink-600",
        features: ["SEO auto-fix", "Tone adjustment", "Viral prediction"],
    },
    {
        id: "lead-gen",
        title: "GrowthBuilder",
        description: "Easy lead-gen and referral program builder.",
        icon: Users,
        color: "from-green-400 to-emerald-600",
        features: ["Viral loops", "Reward tracking", "crm integration"],
    },
    {
        id: "task-assistant",
        title: "TaskFlow AI",
        description: "AI-powered task and email assistant that gets things done.",
        icon: Mail,
        color: "from-yellow-400 to-orange-600",
        features: ["Email triage", "Auto-scheduling", "Meeting summaries"],
    },
    {
        id: "interview-prep",
        title: "CareerLaunch",
        description: "The ultimate interview prep utility for tech roles.",
        icon: UserCheck,
        color: "from-red-400 to-rose-600",
        features: ["Mock interviews", "Resume scanner", "Skill gap analysis"],
    },
];

export default function Products() {
    const [activeProduct, setActiveProduct] = useState(products[0]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black -z-10" />
            <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4">
                        Upcoming Launches
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        We are building the next generation of tools to empower your workflow.
                        Explore our constellation of products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Navigation / List */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {products.map((product) => (
                            <motion.button
                                key={product.id}
                                onClick={() => setActiveProduct(product)}
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                className={`group relative p-4 rounded-xl text-left transition-all duration-300 border ${activeProduct.id === product.id
                                        ? "bg-white/10 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                                        : "bg-transparent border-transparent hover:bg-white/5"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`p-2 rounded-lg bg-gradient-to-br ${product.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                                    >
                                        <product.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className={`font-semibold text-lg ${activeProduct.id === product.id ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                                            {product.title}
                                        </h3>
                                    </div>
                                    {activeProduct.id === product.id && (
                                        <motion.div
                                            layoutId="active-indicator"
                                            className="absolute right-4 text-white/50"
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Display Area */}
                    <div className="lg:col-span-8 relative h-[500px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProduct.id}
                                initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                                exit={{ opacity: 0, scale: 0.9, rotateX: -20 }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                className="w-full max-w-2xl"
                            >
                                <Card className="relative overflow-hidden border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-12 group">
                                    {/* Glow Effect */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${activeProduct.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                                    />
                                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

                                    <div className="relative z-10">
                                        <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${activeProduct.color} mb-6 shadow-lg`}>
                                            <activeProduct.icon className="w-10 h-10 text-white" />
                                        </div>

                                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                            {activeProduct.title}
                                        </h3>
                                        <p className="text-slate-300 text-xl leading-relaxed mb-8">
                                            {activeProduct.description}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                            {activeProduct.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                                                    <Sparkles className="w-4 h-4 text-yellow-400" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <Button className="bg-white text-black hover:bg-slate-200 transition-colors rounded-full px-8 py-6 text-lg font-semibold group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                            Join Waitlist
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
