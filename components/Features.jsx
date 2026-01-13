"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code2, Users, Bot, Zap, BarChart3, Shield } from "lucide-react"

const features = [
    {
        title: "Interview AI",
        description: "Practice with our AI interviewer that adapts to your responses and provides real-time feedback.",
        icon: Users,
    },
    {
        title: "Code Review Bot",
        description: "Instant code analysis for bugs, security vulnerabilities, and performance optimizations.",
        icon: Code2,
    },
    {
        title: "Meeting Summarizer",
        description: "Turn hour-long meetings into concise summaries and actionable tasks automatically.",
        icon: Bot,
    },
    {
        title: "Viral Growth Tools",
        description: "Analyze trends and generate viral content ideas tailored to your niche.",
        icon: Zap,
    },
    {
        title: "SaaS Analyzer",
        description: "Deep dive into SaaS metrics and get AI-powered recommendations for growth.",
        icon: BarChart3,
    },
    {
        title: "Security Shield",
        description: "Automated security scanning for your applications and infrastructure.",
        icon: Shield,
    },
]

export default function Features() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-space-black -z-20" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nebula-purple/10 rounded-full blur-[100px] -z-10 animate-blob" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-lunar-blue/10 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000" />
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-4 text-glow">
                        Power Your Workflow
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A complete suite of AI utilities designed to supercharge your productivity and growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-white/5 border-white/10 hover:border-lunar-blue/50 hover:bg-white/10 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(0,212,255,0.15)] relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-lunar-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-lunar-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <feature.icon className="w-6 h-6 text-lunar-blue group-hover:text-white transition-colors" />
                                        </div>
                                        <CardTitle className="text-xl text-white group-hover:text-lunar-blue transition-colors">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-400 group-hover:text-gray-300">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
