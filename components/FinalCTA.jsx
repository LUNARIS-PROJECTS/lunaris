"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-lunar-blue/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6 text-glow">
                    Ready to Launch?
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                    Join the AI revolution today. Start your free trial and see the difference Lunaris makes.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-lunar-blue"
                    />
                    <Button size="lg" className="h-12 px-8 text-lg group">
                        Get Started Free
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                <p className="mt-6 text-sm text-gray-500">
                    No credit card required. 14-day free trial.
                </p>
            </div>
        </section>
    )
}
