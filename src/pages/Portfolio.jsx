import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
    const containerRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'AI Agents', 'Automation', 'Custom Systems'];

    const projects = [
        {
            id: 1,
            title: "Autonomous Support Matrix",
            category: "AI Agents",
            client: "Enterprise SaaS",
            tech: ["Claude Opus", "Superbase", "React"],
            outcome: "Routed 80% of human ticket volume autonomously with zero hallucination events.",
            color: "fb-blue",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Financial Processing Pipeline",
            category: "Automation",
            client: "Logistics Firm",
            tech: ["Python", "Document AI", "webhooks"],
            outcome: "Completely eradicated manual invoice entry, recovering 40 hours per week.",
            color: "wa-green",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Dynamic C-Suite Dashboards",
            category: "Custom Systems",
            client: "Global Agency",
            tech: ["Next.js", "PostgreSQL", "Tailwind"],
            outcome: "Condensed 5 disparate tracking platforms into a single real-time executive pane.",
            color: "tt-cyan",
            image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2546&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Inbound Lead Arbitrage",
            category: "AI Agents",
            client: "Real Estate Brokerage",
            tech: ["OpenAI", "Zapier", "Twilio"],
            outcome: "Tripled booked appointments through sub-10 second SMS qualification flows.",
            color: "ig-magenta",
            image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".hero-word", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.1
            });

            // Parallax image reveals
            const galleryPanels = gsap.utils.toArray(".gallery-panel");
            galleryPanels.forEach((panel) => {
                const image = panel.querySelector(".parallax-img");
                gsap.fromTo(image, 
                    { scale: 1.2, yPercent: -10 },
                    {
                        scale: 1,
                        yPercent: 10,
                        ease: "none",
                        scrollTrigger: {
                            trigger: panel,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            });

        }, containerRef);
        return () => ctx.revert();
    }, [activeFilter]); // Re-run when filter changes to bind new elements

    return (
        <div ref={containerRef} className="w-full bg-[#050508] min-h-screen pt-40 pb-40 px-6 md:px-12 overflow-hidden font-sans text-white">
            
            {/* Cinematic Header */}
            <div className="max-w-6xl mx-auto text-center mb-32 relative z-20 flex flex-col items-center">

                <h1 className="font-serif italic text-6xl md:text-8xl lg:text-[8rem] tracking-tighter mb-8 leading-none flex flex-wrap justify-center gap-x-4">
                    {"Architectural ".split(" ").map((word, i) => (
                        <span key={i} className="hero-word inline-block drop-shadow-lg">{word}</span>
                    ))}
                    <span className="hero-word inline-block font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 not-italic">
                        Proof.
                    </span>
                </h1>
                <p className="hero-word text-xl md:text-2xl text-text/50 font-light max-w-2xl leading-relaxed mt-4">
                    Strictly quantified ROI. Real engineering projects deployed into high-stakes production environments.
                </p>
            </div>

            {/* Aesthetic Filters */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-32">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-500 backdrop-blur-md border ${
                            activeFilter === filter
                                ? 'bg-white text-black font-bold border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                                : 'bg-white/[0.02] border-white/10 text-white/50 hover:bg-white/[0.05] hover:text-white'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Massive Gallery Layout */}
            <div className="max-w-7xl mx-auto flex flex-col gap-32 mb-40">
                {filteredProjects.map((project, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <div key={project.id} className={`gallery-panel flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}>
                            
                            {/* Cinematic Image Frame */}
                            <div className="w-full lg:w-[60%] h-[50dvh] lg:h-[70dvh] relative overflow-hidden rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-1000"></div>
                                <div className="parallax-img w-full h-full">
                                    <img 
                                        src={project.image} 
                                        className="w-full h-full object-cover origin-center opacity-80 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0"
                                        alt={project.title}
                                    />
                                </div>
                                {/* Internal Project Tag overlay */}
                                <div className="absolute top-8 left-8 z-20 font-mono text-[10px] tracking-widest uppercase bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-white/80">
                                    Project {String(project.id).padStart(3, '0')}
                                </div>
                            </div>

                            {/* Typography / Data Block */}
                            <div className="w-full lg:w-[40%] flex flex-col justify-center">
                                <span className={`text-[10px] font-mono tracking-widest uppercase mb-6 drop-shadow-md`}>
                                    <span className={`inline-block w-2 h-2 rounded-full mr-3 animate-pulse bg-${project.color} border border-current shadow-[0_0_10px_currentColor]`}></span>
                                    {project.category} // {project.client}
                                </span>
                                
                                <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 leading-[1.1] text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/40 transition-all duration-700">
                                    {project.title}
                                </h2>

                                <div className="border-l border-white/10 pl-6 mb-10">
                                    <p className="font-serif italic text-2xl text-white/70 leading-relaxed mb-8">
                                        "{project.outcome}"
                                    </p>
                                    
                                    <div className="flex flex-col gap-3">
                                        <span className="text-[10px] font-mono tracking-widest uppercase text-white/30">Infrastructure Stack</span>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="text-xs font-sans px-3 py-1.5 bg-white/[0.03] border border-white/5 rounded-lg text-white/60">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <button className="self-start font-sans font-bold text-sm tracking-widest uppercase flex items-center gap-3 hover:gap-6 transition-all duration-300 text-white group/btn">
                                    Read Engineering Brief
                                    <ArrowUpRight size={18} className="text-white/50 group-hover/btn:text-white" />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom CTA Block */}
            <div className="max-w-5xl mx-auto">
                <div className="w-full bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden group hover:border-white/10 transition-colors duration-700">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover opacity-5 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-1000"></div>
                    
                    <Sparkles size={40} className="text-white/30 mx-auto mb-10 group-hover:text-white transition-colors duration-700" />
                    <h2 className="font-sans text-5xl md:text-7xl font-black tracking-tighter mb-8 relative z-10 text-white">Deploy Similar Architecture.</h2>
                    <p className="text-xl text-white/50 font-light mb-16 relative z-10 max-w-2xl mx-auto">We engineer identical robust infrastructure directly into your company's processes.</p>
                    
                    <Link to="/contact" className="inline-flex px-12 py-6 rounded-full bg-white text-black font-sans font-bold text-sm tracking-widest uppercase relative z-10 hover:scale-[1.03] active:scale-95 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                        Book a Discovery Call
                    </Link>
                </div>
            </div>

        </div>
    );
}
