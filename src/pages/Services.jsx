import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bot, GitBranch, LayoutPanelLeft, LineChart, Play, Maximize2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Tailwind purge safelist proxy via object mapping
const colorMap = {
    'fb-blue': { to: 'to-fb-blue', text: 'text-fb-blue', bg: 'bg-fb-blue', border: 'border-fb-blue', hoverBorder: 'hover:border-fb-blue/30' },
    'tt-cyan': { to: 'to-tt-cyan', text: 'text-tt-cyan', bg: 'bg-tt-cyan', border: 'border-tt-cyan', hoverBorder: 'hover:border-tt-cyan/30' },
    'ig-magenta': { to: 'to-ig-magenta', text: 'text-ig-magenta', bg: 'bg-ig-magenta', border: 'border-ig-magenta', hoverBorder: 'hover:border-ig-magenta/30' },
    'wa-green': { to: 'to-wa-green', text: 'text-wa-green', bg: 'bg-wa-green', border: 'border-wa-green', hoverBorder: 'hover:border-wa-green/30' }
};

// Placeholder Component for future videos/widgets
const MediaPlaceholder = ({ colorKey }) => {
    const cmap = colorMap[colorKey];

    return (
        <div className={`w-full h-full min-h-[400px] rounded-[2rem] bg-black/40 backdrop-blur-md border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group ${cmap.hoverBorder} transition-colors duration-700 shadow-[0_0_30px_rgba(255,255,255,0.01)]`}>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 ${cmap.bg} opacity-5 rounded-full blur-[60px] group-hover:opacity-20 transition-opacity duration-1000`}></div>
            <Play size={32} className={`${cmap.text} opacity-40 mb-4 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 drop-shadow-lg`} />
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/30 group-hover:text-white/80 transition-colors">Awaiting Media Payload</span>
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Maximize2 size={16} className={`${cmap.text} opacity-50`} />
            </div>
            
            {/* Corner wireframe accents */}
            <div className={`absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:${cmap.border} group-hover:opacity-50 transition-colors`}></div>
            <div className={`absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:${cmap.border} group-hover:opacity-50 transition-colors`}></div>
        </div>
    );
};

export default function Services() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Stacking Cards Fly-In Logic (Copied natively from Home.jsx)
            const featureRows = gsap.utils.toArray(".feature-row-animate");
            featureRows.forEach((row, i) => {
                const fromRight = (i % 2 === 1); // Alternate slide direction
                gsap.fromTo(row,
                    { 
                        x: fromRight ? 150 : -150, 
                        opacity: 0 
                    },
                    {
                        x: 0,
                        opacity: 1,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: row,
                            start: "top 85%",
                            end: "top 45%",
                            scrub: 1
                        }
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const services = [
        {
            id: "ai-agents",
            title: "AI Agent Development",
            colorKey: "fb-blue",
            icon: <Bot className="w-7 h-7 text-fb-blue drop-shadow-[0_0_10px_rgba(24,119,242,0.8)]" />,
            description: "We build intelligent agents that handle conversations, qualify leads, answer questions, and manage scheduling — entirely autonomously without human bottlenecks.",
        },
        {
            id: "workflow-automation",
            title: "Workflow Automation",
            colorKey: "tt-cyan",
            icon: <GitBranch className="w-7 h-7 text-tt-cyan drop-shadow-[0_0_10px_rgba(45,212,191,0.8)]" />,
            description: "Stop copying data between apps. Stop manually sending follow-ups. We connect your tools into hyper-efficient pipelines that systematically run themselves.",
        },
        {
            id: "custom-tools",
            title: "Internal Systems",
            colorKey: "ig-magenta",
            icon: <LayoutPanelLeft className="w-7 h-7 text-ig-magenta drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" />,
            description: "Off-the-shelf software never fits perfectly. We architect bespoke admin dashboards, client portals, and dynamic resource management arrays.",
        },
        {
            id: "consulting",
            title: "Operations Consulting",
            colorKey: "wa-green",
            icon: <LineChart className="w-7 h-7 text-wa-green drop-shadow-[0_0_10px_rgba(37,211,102,0.8)]" />,
            description: "Not sure where to start? We dynamically map your bottlenecks and generate a zero-fluff blueprint mapping direct, measurable automation ROI.",
        }
    ];

    return (
        <div ref={containerRef} className="w-full bg-[#0a0a0f] min-h-screen pt-24 lg:pt-40 pb-24 lg:pb-40 overflow-hidden font-sans text-white">
            
            {/* Cinematic Header */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 text-center mb-20 lg:mb-40 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">

                <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl lg:text-[7.5rem] leading-none mb-8 tracking-tighter drop-shadow-2xl">
                    Engineered to <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 not-italic">Scale.</span>
                </h1>
                <p className="text-xl md:text-2xl text-text/50 font-light max-w-2xl mx-auto leading-relaxed">
                    Four core infrastructure pillars designed to completely eradicate manual, repetitive data labor from your operational overhead.
                </p>
            </div>

            {/* Alternating Services Rows using Home.jsx layout logic */}
            <div className="flex flex-col gap-12 lg:gap-24 lg:gap-16 lg:gap-32 w-full max-w-7xl mx-auto px-6 md:px-12 mb-20 lg:mb-40">
                {services.map((svc, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={svc.id} className="feature-row-animate grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                            
                            {/* Text Block */}
                            <div className={`flex flex-col justify-center h-full min-h-[350px] ${!isEven ? 'lg:order-2' : ''}`}>
                                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 shadow-lg">
                                    {svc.icon}
                                </div>
                                <h3 className={`font-sans text-4xl md:text-6xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white ${colorMap[svc.colorKey].to}`}>
                                    {svc.title}
                                </h3>
                                <p className="text-text/70 text-lg md:text-2xl leading-relaxed font-light">{svc.description}</p>
                                
                                <div className="mt-10 flex flex-col gap-4 border-l border-white/10 pl-6 py-2">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-1.5 h-1.5 rounded-full ${colorMap[svc.colorKey].bg} opacity-80 shadow-[0_0_8px_currentColor]`}></div>
                                        <span className="text-sm font-mono text-text/60 uppercase tracking-wider">Full Data Integration</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-1.5 h-1.5 rounded-full ${colorMap[svc.colorKey].bg} opacity-80 shadow-[0_0_8px_currentColor]`}></div>
                                        <span className="text-sm font-mono text-text/60 uppercase tracking-wider">Zero Maintenance Deployments</span>
                                    </div>
                                </div>
                            </div>

                            {/* Media / Widget Placeholder */}
                            <div className={`hidden lg:flex w-full items-center justify-center p-2 min-h-[400px] ${!isEven ? 'lg:order-1' : ''}`}>
                                <MediaPlaceholder colorKey={svc.colorKey} />
                            </div>

                        </div>
                    );
                })}
            </div>

            {/* Bottom Horizon Strip CTA */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mt-20">
                <div className="w-full bg-[#050508] border border-white/5 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden flex flex-col items-center shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-fb-blue/5 to-transparent pointer-events-none"></div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 drop-shadow-xl">Ready to upgrade your stack?</h2>
                    <p className="text-lg md:text-xl text-text/50 max-w-2xl mx-auto mb-12 font-light">
                        Our architecture engine is standing by to quote your custom build directly on the homepage in under two minutes.
                    </p>
                    <Link to="/" className="px-10 py-5 rounded-full bg-white text-black font-sans font-bold text-sm tracking-widest uppercase hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                        Launch Project Scoper
                    </Link>
                </div>
            </div>

        </div>
    );
}
