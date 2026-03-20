import { Link } from 'react-router-dom';
import { Bot, GitBranch, LayoutPanelLeft, LineChart, Zap, Search, Box, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
    const services = [
        {
            id: "ai-agents",
            title: "AI Agent Development",
            badge: "Most Requested",
            icon: <Bot className="w-8 h-8 text-secondary" />,
            description: "We build intelligent agents that handle conversations, qualify leads, answer questions, and manage scheduling — all without human intervention. Your AI agents work 24/7, never take a sick day, and get smarter over time.",
            includes: [
                "Customer-facing chatbots that actually help",
                "Lead qualification and routing agents",
                "Knowledge base assistants trained on your docs",
                "Scheduling agents integrated with your calendar",
                "Data extraction and processing bots"
            ]
        },
        {
            id: "workflow-automation",
            title: "Workflow Automation",
            badge: "Highest Time Savings",
            icon: <GitBranch className="w-8 h-8 text-accent" />,
            description: "Stop copying data between apps. Stop manually sending follow-ups. Stop chasing invoices. We connect your tools into automated pipelines that run themselves.",
            includes: [
                "CRM pipeline automation and lead nurturing",
                "Automated reporting and analytics dashboards",
                "Invoice processing and payment tracking",
                "Employee and client onboarding workflows",
                "Social media scheduling and content pipelines"
            ]
        },
        {
            id: "custom-tools",
            title: "Custom Internal Tools",
            badge: "Complete Control",
            icon: <LayoutPanelLeft className="w-8 h-8 text-secondary" />,
            description: "Off-the-shelf software never quite fits. We build tools shaped around your process — admin dashboards, client portals, and management systems that work the way your team actually works.",
            includes: [
                "Admin dashboards with real-time data",
                "Client-facing portals and self-service tools",
                "Inventory and resource management systems",
                "Project tracking and team coordination tools",
                "Data visualization and business intelligence"
            ]
        },
        {
            id: "consulting",
            title: "Operations Consulting",
            badge: "Great Starting Point",
            icon: <LineChart className="w-8 h-8 text-accent" />,
            description: "Not sure where to start? We audit your current operations, map out your bottlenecks, and create a prioritized automation roadmap — so every dollar you invest delivers measurable ROI.",
            includes: [
                "End-to-end process audits",
                "Custom automation roadmaps with ROI projections",
                "Tech stack evaluation and recommendations",
                "Team training and AI readiness workshops"
            ]
        }
    ];

    return (
        <div className="w-full bg-background min-h-screen pt-32 pb-40 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-32">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                        <Zap size={14} className="text-accent" />
                        <span className="text-xs font-mono tracking-wide text-text/80 uppercase">What We Do</span>
                    </div>
                    <h1 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter mb-8 leading-tight">
                        Automation That Actually <span className="font-serif italic text-white/50 text-6xl md:text-8xl block mt-2">Works for You.</span>
                    </h1>
                    <p className="text-xl text-text/60 leading-relaxed font-light">
                        Four core services, one goal: eliminate the repetitive work that keeps your team from doing what they do best.
                    </p>
                </div>

                {/* Alternating Services */}
                <div className="space-y-32 mb-40">
                    {services.map((svc, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={svc.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24 group`}>

                                {/* Text Side */}
                                <div className="flex-1 w-full relative z-10">
                                    <div className="mb-6 flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-3xl bg-surface border border-white/10 flex items-center justify-center shadow-2xl shadow-secondary/20">
                                            {svc.icon}
                                        </div>
                                        {svc.badge && (
                                            <span className="text-xs font-mono px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-bold">
                                                {svc.badge}
                                            </span>
                                        )}
                                    </div>

                                    <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter mb-6 group-hover:text-secondary transition-colors duration-500">{svc.title}</h2>
                                    <p className="text-lg text-text/70 leading-relaxed mb-8">{svc.description}</p>
                                </div>

                                {/* Glass Card List Side */}
                                <div className="flex-1 w-full relative">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${isEven ? 'from-secondary/20 to-transparent' : 'from-transparent to-secondary/20'} opacity-20 blur-[100px] rounded-full group-hover:opacity-50 transition-opacity duration-1000`}></div>
                                    <div className="glass-card rounded-[3rem] p-10 md:p-14 relative z-10 transform transition-transform duration-700 hover:scale-[1.02] border-white/10 bg-surface/80">
                                        <h3 className="font-mono text-sm tracking-widest uppercase mb-8 opacity-50 underline decoration-secondary decoration-2 underline-offset-8">What's Included</h3>
                                        <ul className="space-y-5">
                                            {svc.includes.map((item, i) => (
                                                <li key={i} className="flex gap-4 items-start group/item">
                                                    <CheckCircle2 size={20} className="text-accent mt-0.5 shrink-0 group-hover/item:scale-125 transition-transform" />
                                                    <span className="text-text/90 font-medium leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

                {/* Quick Win Products */}
                <div className="pt-20 border-t border-white/10">
                    <div className="text-center mb-16">
                        <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">Not Sure Where to Start?</h2>
                        <p className="text-text/60">Quick-win solutions designed to deliver value immediately.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass-card hover:-translate-y-2 transition-transform duration-500 rounded-[2rem] p-8 flex flex-col items-start border border-white/5 hover:border-secondary/30 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[50px] group-hover:bg-secondary/20 transition-colors"></div>
                            <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-mono font-bold mb-6">Free</span>
                            <h3 className="text-2xl font-bold font-sans mb-3">AI Readiness Assessment</h3>
                            <p className="text-sm opacity-60 mb-8 leading-relaxed">A 30-minute call where we evaluate your current operations and identify the top 3 automation opportunities.</p>
                            <Link to="/contact" className="mt-auto flex items-center gap-2 text-sm font-bold text-accent hover:text-white transition-colors">Book Now <ArrowRight size={16} /></Link>
                        </div>

                        <div className="glass-card hover:-translate-y-2 transition-transform duration-500 rounded-[2rem] p-8 flex flex-col items-start border border-white/5 hover:border-accent/30 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-colors"></div>
                            <span className="bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-full text-xs font-mono font-bold mb-6">$499</span>
                            <h3 className="text-2xl font-bold font-sans mb-3">Automation Audit</h3>
                            <p className="text-sm opacity-60 mb-8 leading-relaxed">A deep-dive analysis of your workflows, tools, and bottlenecks — delivered as a detailed report with ROI projections.</p>
                            <Link to="/contact" className="mt-auto flex items-center gap-2 text-sm font-bold text-accent hover:text-white transition-colors">Start Audit <ArrowRight size={16} /></Link>
                        </div>

                        <div className="glass-card hover:-translate-y-2 transition-transform duration-500 rounded-[2rem] p-8 flex flex-col items-start border border-white/5 hover:border-secondary/30 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[50px] group-hover:bg-secondary/20 transition-colors"></div>
                            <span className="bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1 rounded-full text-xs font-mono font-bold mb-6">$999</span>
                            <h3 className="text-2xl font-bold font-sans mb-3">Quick-Start Agent</h3>
                            <p className="text-sm opacity-60 mb-8 leading-relaxed">A simple AI agent or automation delivered in one week. Perfect for testing the waters of our retainer service.</p>
                            <Link to="/contact" className="mt-auto flex items-center gap-2 text-sm font-bold text-accent hover:text-white transition-colors">Build It <ArrowRight size={16} /></Link>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-40 text-center">
                    <Link to="/contact" className="magnetic-button inline-flex px-10 py-5 rounded-full bg-accent text-primary font-sans font-bold text-lg glow-amber items-center gap-3">
                        Let's Build Something Together
                        <ArrowRight size={20} />
                    </Link>
                </div>

            </div>
        </div>
    );
}
