import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Clock, ShieldCheck, Zap, ArrowRight, Activity, ArrowRightLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Header Words Fade In
            gsap.from(".header-word", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });

            // Counter animations for metrics
            const counters = document.querySelectorAll('.metric-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                gsap.to(counter, {
                    textContent: target,
                    duration: 3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: counter,
                        start: "top 80%"
                    },
                    snap: { textContent: 1 },
                    onUpdate: function () {
                        counter.innerHTML = Math.ceil(Number(this.targets()[0].textContent)) + (counter.getAttribute('data-suffix') || '');
                    }
                });
            });

            // Connecting lines animation in pipeline
            gsap.to(".pipeline-line", {
                scaleX: 1,
                transformOrigin: "left center",
                duration: 2.5,
                ease: "power2.inOut",
                stagger: 0.5,
                scrollTrigger: {
                    trigger: ".pipeline-container",
                    start: "top 60%"
                }
            });

            // Fall-in cards for Before/After
            gsap.from(".card-fall", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".card-fall-container",
                    start: "top 75%"
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-[#050508] min-h-screen pt-24 lg:pt-40 pb-24 lg:pb-40 overflow-x-hidden text-white font-sans">
            
            {/* Cinematic Header */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 text-center mb-20 lg:mb-40 relative z-10 flex flex-col gap-8 items-center">

                <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl lg:text-[7rem] leading-none mb-4 tracking-tighter flex flex-wrap justify-center gap-x-3 gap-y-2">
                    {"See Automation in ".split(" ").map((word, i) => (
                        <span key={i} className="header-word inline-block text-white/90 drop-shadow-lg">{word}</span>
                    ))}
                    <span className="header-word inline-block font-black text-amber-500 tracking-tight relative drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                        <span className="relative z-10 not-italic">Action.</span>
                        <span className="absolute bottom-2 left-0 w-full h-4 bg-amber-500/40 -z-10 rotate-1 blur-[1px]"></span>
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-text/50 font-light max-w-2xl leading-relaxed mt-6">
                    Stop hemorrhaging time to manual processes. Witness exactly how AI agents autonomously run entire business divisions.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Before vs After Section */}
                <div className="mb-20 lg:mb-40 space-y-32">
                    {/* Use Case 1 */}
                    <div className="card-fall-container">
                        <h2 className="text-3xl font-sans font-black mb-12 text-center tracking-tighter text-white/80">I. Lead Qualification Pipeline</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Before */}
                            <div className="card-fall bg-[#0a0505] rounded-[3rem] p-12 relative overflow-hidden group border border-red-500/10">
                                <div className="absolute top-8 right-8 text-red-500/30 font-serif italic text-3xl">Before</div>
                                <h3 className="font-sans font-black text-3xl mb-10 text-white/50 tracking-tighter">The Human Bottleneck</h3>
                                <ul className="space-y-6 font-mono text-sm opacity-60 mb-12 relative">
                                    <li className="flex items-center gap-4"><ArrowRight size={16} className="text-red-500/50" /> Lead submits form on site</li>
                                    <li className="flex items-center gap-4"><ArrowRight size={16} className="text-red-500/50" /> Email sits in SDR inbox for 6 hours</li>
                                    <li className="flex items-center gap-4"><ArrowRight size={16} className="text-red-500/50" /> Manual back-and-forth qualification</li>
                                    <li className="flex items-center gap-4 line-through opacity-40"><ArrowRight size={16} className="text-red-500/50" /> Lead inevitably goes cold</li>
                                </ul>
                                <div className="pt-8 border-t border-red-900/20">
                                    <span className="block text-xs font-mono uppercase tracking-widest text-red-500/80 mb-2">Pain Points</span>
                                    <span className="text-sm text-white/40">Inconsistent response SLA, dropping conversions, high labor cost.</span>
                                </div>
                            </div>

                            {/* After */}
                            <div className="card-fall bg-[#050a08] rounded-[3rem] p-12 relative overflow-hidden shadow-[0_0_60px_rgba(34,197,94,0.03)] border border-wa-green/10 transform transition-transform duration-700 hover:scale-[1.02] group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-wa-green/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-wa-green/20 transition-all duration-1000"></div>
                                <div className="absolute top-8 right-8 text-wa-green font-serif italic text-3xl drop-shadow-[0_0_10px_rgba(37,211,102,0.8)]">After</div>
                                <h3 className="font-sans font-black text-3xl mb-10 tracking-tighter text-white">The Horizon System</h3>
                                <ul className="space-y-6 font-mono text-sm text-white/80 mb-12">
                                    <li className="flex items-center gap-4"><Zap size={16} className="text-wa-green" /> <span className="text-white/60">Lead submits form on site</span></li>
                                    <li className="flex items-center gap-4"><Zap size={16} className="text-wa-green" /> <span className="text-white">AI Agent responds dynamically in <span className="text-wa-green font-bold">&lt;10 seconds</span></span></li>
                                    <li className="flex items-center gap-4"><Zap size={16} className="text-wa-green" /> <span className="text-white/90">AI qualifies via natural language</span></li>
                                    <li className="flex items-center gap-4"><Zap size={16} className="text-wa-green" /> <span className="text-wa-green bg-wa-green/10 px-3 py-1.5 rounded-md font-bold border border-wa-green/20 box-shadow-[0_0_10px_currentColor]">Meeting booked autonomously</span></li>
                                </ul>
                                <div className="pt-8 border-t border-wa-green/20">
                                    <span className="block text-xs font-mono uppercase tracking-widest text-wa-green mb-2 drop-shadow-md">Operational Win</span>
                                    <span className="text-sm text-white/70">100% SLA compliance, strictly qualified pipeline, infinite scale.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Use Case 2 */}
                    <div className="card-fall-container">
                        <h2 className="text-3xl font-sans font-black mb-12 text-center tracking-tighter text-white/80">II. Business Intelligence Reporting</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Before */}
                            <div className="card-fall bg-[#0a0505] rounded-[3rem] p-12 relative overflow-hidden group border border-red-500/10 min-h-[450px]">
                                <div className="absolute top-8 right-8 text-red-500/30 font-serif italic text-3xl">Before</div>
                                <h3 className="font-sans font-black text-3xl mb-10 text-white/50 tracking-tighter">Manual Extraction</h3>
                                
                                <div className="flex bg-white/[0.02] border border-white/5 rounded-2xl p-5 gap-4 items-center mb-4">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-mono opacity-40">1</div>
                                    <p className="font-mono text-sm opacity-60">Log into 5 disparate SaaS platforms</p>
                                </div>
                                <div className="flex bg-white/[0.02] border border-white/5 rounded-2xl p-5 gap-4 items-center mb-10">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-mono opacity-40">2</div>
                                    <p className="font-mono text-sm opacity-60">Export CSVs & manually parse into Excel sheets</p>
                                </div>

                                <div className="absolute bottom-12 left-12 right-12 pt-8 border-t border-red-900/20">
                                    <span className="block text-xs font-mono uppercase tracking-widest text-red-500/80 mb-2">Pain Points</span>
                                    <span className="text-sm text-white/40">4+ hours wasted weekly, highly error-prone data.</span>
                                </div>
                            </div>

                            {/* After */}
                            <div className="card-fall bg-[#05060a] rounded-[3rem] p-12 relative overflow-hidden shadow-[0_0_60px_rgba(24,119,242,0.03)] border border-fb-blue/10 transform transition-transform duration-700 hover:scale-[1.02] group min-h-[450px]">
                                <div className="absolute bottom-0 right-0 w-80 h-80 bg-fb-blue/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/3 group-hover:bg-fb-blue/20 transition-all duration-1000"></div>
                                <div className="absolute top-8 right-8 text-fb-blue font-serif italic text-3xl drop-shadow-[0_0_10px_rgba(24,119,242,0.8)]">After</div>
                                <h3 className="font-sans font-black text-3xl mb-10 tracking-tighter text-white">The Horizon System</h3>

                                <div className="flex bg-fb-blue/5 border border-fb-blue/20 rounded-2xl p-5 gap-5 items-center mb-4 backdrop-blur-md">
                                    <div className="w-10 h-10 rounded-full bg-fb-blue/20 border border-fb-blue/30 text-fb-blue flex items-center justify-center shadow-[0_0_15px_rgba(24,119,242,0.3)] shrink-0">
                                        <Activity size={18} />
                                    </div>
                                    <p className="font-mono text-sm text-white/90">Autonomous unified API layer extracts raw data instantly</p>
                                </div>

                                <div className="flex bg-fb-blue/5 border border-fb-blue/20 rounded-2xl p-5 gap-5 items-center mb-10 backdrop-blur-md">
                                    <div className="w-10 h-10 rounded-full bg-fb-blue/20 border border-fb-blue/30 text-fb-blue flex items-center justify-center shadow-[0_0_15px_rgba(24,119,242,0.3)] shrink-0">
                                        <Zap size={18} />
                                    </div>
                                    <p className="font-mono text-sm text-white/90">Real-time dynamic dashboards rendered with Zero human input</p>
                                </div>

                                <div className="absolute bottom-12 left-12 right-12 pt-8 border-t border-fb-blue/20">
                                    <span className="block text-xs font-mono uppercase tracking-widest text-fb-blue mb-2 drop-shadow-md">Operational Win</span>
                                    <span className="text-sm text-white/70">C-Suite has minute-by-minute accurate analytics constantly.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The AI Employee Section */}
                <section className="mb-20 lg:mb-40 max-w-5xl mx-auto text-center border-t border-white/5 pt-32">
                    <h2 className="font-sans text-5xl md:text-7xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 pb-2">The AI Employee</h2>
                    <p className="text-xl text-text/50 leading-relaxed font-light mb-20 max-w-2xl mx-auto">
                        We don't just build scripts. We build tireless, entirely digital team members that execute standard operating procedures perfectly.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {/* 24/7 block */}
                        <div className="bg-[#050508] border border-white/5 flex flex-col items-center justify-center rounded-[2.5rem] p-10 hover:border-white/20 transition-all duration-500 group relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-[2.5rem] pointer-events-none"></div>
                            <Clock size={28} className="text-white/20 mb-6 group-hover:text-white transition-colors duration-500" />
                            <div className="font-sans text-4xl font-black mb-2 text-white">24/7</div>
                            <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">Always On</div>
                        </div>
                        {/* Speed block */}
                        <div className="bg-[#050508] border border-white/5 flex flex-col items-center justify-center rounded-[2.5rem] p-10 hover:border-amber-500/30 transition-all duration-500 group relative shadow-[0_0_0_transparent] hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
                            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.02] to-transparent rounded-[2.5rem] pointer-events-none"></div>
                            <Zap size={28} className="text-amber-500/20 mb-6 group-hover:text-amber-500 transition-colors duration-500 drop-shadow-[0_0_10px_rgba(245,158,11,0)] group-hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]" />
                            <div className="font-sans text-4xl font-black mb-2 text-white">&lt;10s</div>
                            <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">Execution Time</div>
                        </div>
                        {/* Accuracy block */}
                        <div className="bg-[#050508] border border-white/5 flex flex-col items-center justify-center rounded-[2.5rem] p-10 hover:border-wa-green/30 transition-all duration-500 group relative shadow-[0_0_0_transparent] hover:shadow-[0_0_40px_rgba(37,211,102,0.1)]">
                            <div className="absolute inset-0 bg-gradient-to-b from-wa-green/[0.02] to-transparent rounded-[2.5rem] pointer-events-none"></div>
                            <ShieldCheck size={28} className="text-wa-green/20 mb-6 group-hover:text-wa-green transition-colors duration-500 drop-shadow-[0_0_10px_rgba(37,211,102,0)] group-hover:drop-shadow-[0_0_15px_rgba(37,211,102,0.8)]" />
                            <div className="font-sans text-4xl font-black mb-2 text-white">100%</div>
                            <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">Precision</div>
                        </div>
                        {/* Scalable block */}
                        <div className="bg-[#050508] border border-white/5 flex flex-col items-center justify-center rounded-[2.5rem] p-10 hover:border-fb-blue/30 transition-all duration-500 group relative shadow-[0_0_0_transparent] hover:shadow-[0_0_40px_rgba(24,119,242,0.1)]">
                            <div className="absolute inset-0 bg-gradient-to-b from-fb-blue/[0.02] to-transparent rounded-[2.5rem] pointer-events-none"></div>
                            <ArrowRightLeft size={28} className="text-fb-blue/20 mb-6 group-hover:text-fb-blue transition-colors duration-500 drop-shadow-[0_0_10px_rgba(24,119,242,0)] group-hover:drop-shadow-[0_0_15px_rgba(24,119,242,0.8)]" />
                            <div className="font-sans text-4xl font-black mb-2 text-white">∞</div>
                            <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">Scale</div>
                        </div>
                    </div>
                </section>

                {/* Automation Pipeline Section */}
                <div className="mb-20 lg:mb-40 pipeline-container relative z-10 bg-[#07070a] rounded-[3rem] p-12 md:p-20 border border-white/5 overflow-hidden text-center shadow-xl">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop')] opacity-[0.03] bg-cover mix-blend-screen pointer-events-none"></div>
                    <h2 className="font-sans text-5xl font-black tracking-tighter mb-6 text-white relative z-20">Pipeline Architecture</h2>
                    <p className="text-text/50 font-light text-xl mb-24 relative z-20 max-w-2xl mx-auto">Zero-touch data flow from initial external trigger to final analytical payload.</p>

                    <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 max-w-5xl mx-auto pb-10">
                        {/* Desktop connecting lines */}
                        <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-white/[0.03] -z-10">
                            <div className="pipeline-line absolute inset-0 bg-gradient-to-r from-ig-magenta via-tt-cyan to-wa-green scale-x-0 origin-left shadow-[0_0_15px_currentColor]"></div>
                        </div>

                        {/* Nodes */}
                        {[
                            { step: "01", title: "Trigger", desc: "Data ingestion via webhook", color: "ig-magenta" },
                            { step: "02", title: "Logic", desc: "LLM contextual parsing", color: "fb-blue" },
                            { step: "03", title: "Action", desc: "API payload execution", color: "tt-cyan" },
                            { step: "04", title: "Commit", desc: "Database/CRM master sync", color: "wa-green" }
                        ].map((node, i) => (
                            <div key={i} className="flex flex-col items-center relative w-52 group">
                                <div className={`w-28 h-28 rounded-full bg-[#050508] border-2 border-white/10 group-hover:border-${node.color} flex items-center justify-center transition-all duration-500 shadow-[0_0_0_transparent] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] mb-8 float-animation`}>
                                    <span className={`font-mono text-2xl font-black text-white/30 group-hover:text-${node.color} transition-colors duration-500`}>{node.step}</span>
                                </div>
                                <h4 className="font-sans font-black text-2xl mb-3 text-white">{node.title}</h4>
                                <p className="font-mono text-xs opacity-50 px-4 leading-relaxed">{node.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Metrics */}
                <div className="mb-20 lg:mb-40 pt-20">
                    <h2 className="font-sans text-4xl md:text-5xl font-black tracking-tighter mb-24 text-center text-white/50">Return On Investment</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center group border-r border-white/5 last:border-0 border-dashed">
                            <div className="text-5xl md:text-7xl lg:text-8xl font-black font-sans mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 inline-block drop-shadow-xl">
                                <span className="metric-number" data-target="20" data-suffix="+">0</span>
                            </div>
                            <p className="font-mono text-[10px] text-text/50 tracking-widest uppercase max-w-[120px] mx-auto">Hours saved weekly</p>
                        </div>
                        <div className="text-center group border-r border-white/5 last:border-0 border-dashed">
                            <div className="text-5xl md:text-7xl lg:text-8xl font-black font-sans mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 inline-block drop-shadow-xl">
                                <span className="metric-number" data-target="80" data-suffix="%">0</span>
                            </div>
                            <p className="font-mono text-[10px] text-text/50 tracking-widest uppercase max-w-[120px] mx-auto">Faster resolution</p>
                        </div>
                        <div className="text-center group border-r border-white/5 last:border-0 border-dashed">
                            <div className="text-5xl md:text-7xl lg:text-8xl font-black font-sans mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 inline-block drop-shadow-xl">
                                <span className="metric-number" data-target="3" data-suffix="x">0</span>
                            </div>
                            <p className="font-mono text-[10px] text-text/50 tracking-widest uppercase max-w-[120px] mx-auto">Pipeline Growth</p>
                        </div>
                        <div className="text-center group border-r border-white/5 last:border-0 border-dashed hidden md:block">
                            <div className="text-5xl md:text-7xl lg:text-8xl font-black font-sans mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 inline-block drop-shadow-xl">
                                <span className="metric-number" data-target="99" data-suffix=".9%">0</span>
                            </div>
                            <p className="font-mono text-[10px] text-text/50 tracking-widest uppercase max-w-[120px] mx-auto">System Uptime</p>
                        </div>
                    </div>
                </div>

                {/* Final Interactive Strip */}
                <div className="mt-20 text-center flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link to="/" className="inline-flex px-10 py-5 rounded-full bg-white text-black font-sans font-bold text-sm tracking-widest uppercase hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                        Launch Project Scoper
                    </Link>
                </div>

            </div>
        </div >
    );
}
