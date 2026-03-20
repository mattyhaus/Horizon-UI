import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, ArrowRight, Zap, Target, Combine } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef(null);
    const storyRef = useRef(null);

    const differentiators = [
        { title: "Retainer-Based Partnership", desc: "We don't do one-off gig work. We embed permanently directly into your Slack instance as an operational arm of your company.", icon: <CheckCircle2 size={24} /> },
        { title: "Pure Operational ROI", desc: "We refuse to build automation for its own sake. Every architectural sprint begins by mapping direct bottom-line revenue recovery.", icon: <Target size={24} /> },
        { title: "Surgical Implementation", desc: "We bypass the jargon and bloat. Our scoping documents are engineered for speed, clarity, and instant deployment.", icon: <Zap size={24} /> },
        { title: "Agnostic Infrastructure", desc: "We don't force proprietary software. We build on top of your existing tools using bulletproof open-source standards.", icon: <Combine size={24} /> }
    ];

    const stack = [
        { name: "React / Typescript", role: "Frontend Architecture", url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop" },
        { name: "Node.js / Python", role: "Backend Processing", url: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop" },
        { name: "LLM Infrastructure", role: "Cognitive Engine", url: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop" }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Hero words
            gsap.from(".hero-word", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.1
            });

            // Manifesto Words
            gsap.from(".manifesto-word", {
                scrollTrigger: {
                    trigger: storyRef.current,
                    start: "top 75%",
                },
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.03,
                ease: "power2.out"
            });
            
            // Stack Panels Parallax
            gsap.utils.toArray('.stack-panel').forEach(panel => {
                 gsap.fromTo(panel, 
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: panel, start: "top 85%" } }
                 )
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const manifestoText = "The tools that help Fortune 500 companies run hyper-lean are finally accessible to everyone. But somebody still needs to architect, configure, and maintain them.";

    return (
        <div ref={containerRef} className="w-full bg-[#030305] min-h-screen pt-24 lg:pt-40 pb-24 lg:pb-40 overflow-hidden font-sans text-white">
            
            {/* Cinematic Header Layer */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center mb-20 lg:mb-40 relative z-20 flex flex-col items-center">

                <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl lg:text-[7.5rem] leading-[1.1] mb-8 tracking-tighter drop-shadow-2xl flex flex-wrap justify-center gap-x-3 gap-y-2">
                    {"Rebuilding the".split(" ").map((word, i) => (
                        <span key={i} className="hero-word inline-block text-white/90 drop-shadow-lg">{word}</span>
                    ))}
                    <span className="hero-word inline-block font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 not-italic pr-4">
                        Modern
                    </span>
                    <span className="hero-word inline-block text-white/90">Workforce.</span>
                </h1>
                <p className="hero-word text-xl md:text-2xl text-text/50 font-light max-w-2xl mx-auto leading-relaxed">
                    We embed deeply into your operations to systematically replace repetitive human labor with flawless digital infrastructure.
                </p>
            </div>

            {/* The Manifesto Section */}
            <section ref={storyRef} className="max-w-5xl mx-auto px-6 md:px-12 mb-20 lg:mb-40 relative z-20">
                <h2 className="font-mono text-xs uppercase tracking-widest text-white/30 mb-8 block text-center">The Manifesto</h2>
                <div className="text-center max-w-4xl mx-auto">
                    <p className="font-sans font-light text-3xl md:text-5xl lg:text-5xl leading-[1.4] tracking-tight flex flex-wrap justify-center gap-x-3 gap-y-2">
                        {manifestoText.split(" ").map((word, i) => (
                            <span key={i} className="manifesto-word inline-block text-white/80">{word}</span>
                        ))}
                    </p>
                    <div className="mt-20 w-full h-[60dvh] rounded-[3rem] bg-[#0a0505] border border-red-500/20 relative overflow-hidden group shadow-[0_0_50px_rgba(239,68,68,0.05)]">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542044896582-841f3e79bc20?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-overlay group-hover:scale-105 transition-transform duration-[20s]"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030305] to-transparent"></div>
                        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end border-t border-red-500/20 pt-6">
                            <span className="font-mono text-[10px] tracking-widest uppercase text-red-500/80">Corporate Hub</span>
                            <span className="font-serif italic text-2xl text-white/70">Auburn, Alabama</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="px-6 md:px-12 max-w-6xl mx-auto mb-20 lg:mb-40 relative z-20">
                <div className="text-center mb-24">
                    <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">Operational Ethos</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {differentiators.map((diff, i) => (
                        <div key={i} className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 hover:-translate-y-2 transition-transform duration-500 hover:border-white/20 group relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-1000 pointer-events-none"></div>
                            <div className="text-white/30 mb-8 group-hover:text-white transition-colors duration-500">
                                {diff.icon}
                            </div>
                            <h3 className="text-3xl font-black font-sans mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/40 transition-all duration-500 tracking-tight">{diff.title}</h3>
                            <p className="text-text/50 leading-relaxed text-lg font-light">{diff.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Tech Stack */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 lg:mb-40">
                <h2 className="font-sans text-xs font-mono uppercase tracking-widest text-center text-white/30 mb-16">Infrastructure Stack</h2>
                <div className="flex flex-col gap-6">
                    {stack.map((item, i) => (
                        <div key={i} className="stack-panel relative h-40 md:h-64 w-full rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5 hover:border-white/20 transition-colors duration-500 cursor-crosshair">
                            <img src={item.url} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000 mix-blend-luminosity grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#030305] via-[#030305]/80 to-transparent"></div>
                            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center">
                                <span className="text-[10px] font-mono uppercase text-white/40 font-bold mb-3 tracking-widest">{item.role}</span>
                                <h3 className="text-4xl md:text-6xl font-black font-sans text-white group-hover:text-tt-cyan transition-colors duration-500 tracking-tighter drop-shadow-md">{item.name}</h3>
                            </div>
                            <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-4 group-hover:translate-x-0">
                                <ArrowRight size={32} className="text-white/50" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final Interactive Strip */}
            <div className="mt-20 text-center flex flex-col items-center justify-center">
                <Link to="/" className="inline-flex px-12 py-6 rounded-full bg-white text-black font-sans font-bold text-sm tracking-widest uppercase hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                    Try the Project Scoper
                </Link>
            </div>

        </div>
    );
}
