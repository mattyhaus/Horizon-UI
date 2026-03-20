import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'AI Agents', 'Automation', 'Custom Tools'];

    const projects = [
        {
            id: 1,
            title: "AI Support Agent",
            category: "AI Agents",
            clientType: "SaaS Company",
            tech: ["Claude API", "Next.js", "Supabase", "Webhooks"],
            outcome: "Reduced response time by 80%, resolved 65% of tickets without humans.",
            color: "from-secondary/20 to-transparent",
            accent: "text-secondary"
        },
        {
            id: 2,
            title: "Invoice Processing Pipeline",
            category: "Automation",
            clientType: "Accounting Firm",
            tech: ["Document AI", "Zapier", "QuickBooks API", "Python"],
            outcome: "Saving 15 hours/week, eliminating processing errors completely.",
            color: "from-accent/20 to-transparent",
            accent: "text-accent"
        },
        {
            id: 3,
            title: "Client Dashboard",
            category: "Custom Tools",
            clientType: "Marketing Agency",
            tech: ["Next.js", "PostgreSQL", "Chart.js", "REST APIs"],
            outcome: "Cut reporting from 4 hours to 10 minutes per client per week.",
            color: "from-secondary/20 to-transparent",
            accent: "text-secondary"
        },
        {
            id: 4,
            title: "Lead Qualification Bot",
            category: "AI Agents",
            clientType: "Real Estate Brokerage",
            tech: ["Claude API", "Cal.com", "CRM Integration"],
            outcome: "3x more qualified leads booked per month, zero additional headcount.",
            color: "from-accent/20 to-transparent",
            accent: "text-accent"
        },
        {
            id: 5,
            title: "Inventory Tracker",
            category: "Custom Tools",
            clientType: "E-Commerce Brand",
            tech: ["React", "Supabase", "Twilio", "Shopify API"],
            outcome: "Eliminated stockouts, reduced excess inventory carrying cost by 30%.",
            color: "from-secondary/20 to-transparent",
            accent: "text-secondary"
        },
        {
            id: 6,
            title: "Employee Onboarding Flow",
            category: "Automation",
            clientType: "Logistics Company",
            tech: ["Zapier", "Google Workspace", "Slack API"],
            outcome: "Reduced IT setup from 2 days to 2 hours per new hire.",
            color: "from-accent/20 to-transparent",
            accent: "text-accent"
        }
    ];

    const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

    return (
        <div className="w-full bg-background min-h-screen pt-32 pb-40 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 relative z-20">
                    <h1 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter mb-8 leading-tight">
                        What We've <span className="font-serif italic text-white/50">Built.</span>
                    </h1>
                    <p className="text-xl text-text/60 leading-relaxed font-light">
                        Real automation projects delivering real, measurable results for small businesses.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2.5 rounded-full text-sm font-sans tracking-wide transition-all duration-300 ${activeFilter === filter
                                    ? 'bg-secondary text-white font-bold glow-indigo shadow-lg scale-105 border border-secondary/50'
                                    : 'bg-white/5 border border-white/10 text-text/70 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="glass-card rounded-[2rem] p-8 md:p-10 flex flex-col h-full group hover:-translate-y-2 transition-all duration-500 overflow-hidden relative cursor-crosshair border border-white/5 hover:border-white/10"
                        >
                            {/* Glow overlay */}
                            <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${project.color} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`}></div>

                            <div className="flex items-center gap-3 mb-8">
                                <span className={`text-xs font-mono uppercase px-3 py-1 bg-white/5 border border-white/10 rounded-full font-bold tracking-widest ${project.accent}`}>
                                    {project.category}
                                </span>
                                <span className="text-xs font-mono opacity-50 tracking-wider hidden sm:block">
                                    {project.clientType}
                                </span>
                            </div>

                            <h2 className="font-sans text-2xl font-bold mb-6 tracking-tight leading-snug group-hover:text-white transition-colors">
                                {project.title}
                            </h2>

                            <div className="mb-8 flex-grow">
                                <span className="text-xs font-mono tracking-widest uppercase opacity-40 mb-3 block">Outcome</span>
                                <p className="text-lg font-serif italic leading-relaxed text-white/90">
                                    "{project.outcome}"
                                </p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-white/10">
                                <span className="text-xs font-mono tracking-widest uppercase opacity-40 mb-3 block">Tech Stack</span>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] uppercase font-mono px-2 py-1 bg-white/5 rounded-md opacity-70 group-hover:opacity-100 transition-opacity">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center glass-card rounded-[3rem] p-16 max-w-4xl mx-auto border-secondary/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')] bg-cover opacity-[0.03] mix-blend-luminosity"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                    <Sparkles size={48} className="text-accent mx-auto mb-8 opacity-80 group-hover:scale-110 transition-transform duration-500" />
                    <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tighter mb-8 relative z-10 text-white">Ready to Build Something Like This?</h2>
                    <Link to="/contact" className="magnetic-button inline-flex px-10 py-5 rounded-full bg-white text-primary font-sans font-bold text-lg items-center gap-3 relative z-10 hover:bg-text transition-colors">
                        Book a Discovery Call
                        <ArrowRight size={20} />
                    </Link>
                </div>

            </div>
        </div>
    );
}
