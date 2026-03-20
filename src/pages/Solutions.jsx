import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Clock, ShieldCheck, Zap, ArrowRight, Activity, ArrowRightLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
    useEffect(() => {
        let ctx = gsap.context(() => {
            // Counter animations for metrics
            const counters = document.querySelectorAll('.metric-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                gsap.to(counter, {
                    textContent: target,
                    duration: 2,
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
                duration: 2,
                ease: "power2.inOut",
                stagger: 0.5,
                scrollTrigger: {
                    trigger: ".pipeline-container",
                    start: "top 70%"
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full bg-background min-h-screen pt-32 pb-40 px-6 md:px-12 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-32 relative z-20">
                    <span className="text-xs font-mono px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 inline-block tracking-wide uppercase text-accent">See the Difference</span>
                    <h1 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter mb-8 leading-tight">
                        See AI Automation in <span className="font-serif italic text-white/50 block mt-2">Action.</span>
                    </h1>
                    <p className="text-xl text-text/60 leading-relaxed font-light">
                        Stop losing time to repetitive tasks. See how AI agents and automation transform the way small businesses operate.
                    </p>
                </div>

                {/* Before vs After Section */}
                <div className="mb-40 space-y-24">

                    {/* Comparison 1: Lead Handling */}
                    <div>
                        <h2 className="text-3xl font-sans font-bold mb-10 text-center tracking-tight">Use Case 1: Lead Handling</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Before */}
                            <div className="bg-red-950/20 border border-red-900/40 rounded-[2rem] p-10 relative overflow-hidden glass-card group">
                                <div className="absolute top-0 right-0 bg-red-500/10 px-4 py-1 rounded-bl-3xl rounded-tr-[2rem] text-red-400 font-mono text-xs uppercase tracking-widest font-bold">Before</div>
                                <h3 className="font-serif italic text-3xl mb-8 text-white/80">The Old Way</h3>
                                <ul className="space-y-4 font-mono text-sm opacity-60 mb-10 relative">
                                    <li className="flex items-center gap-3">Lead submits form <ArrowRight size={14} /></li>
                                    <li className="flex items-center gap-3">Email sits in inbox for hours <ArrowRight size={14} /></li>
                                    <li className="flex items-center gap-3">Manual qualification questions <ArrowRight size={14} /></li>
                                    <li className="flex items-center gap-3">Calendar back-and-forth <ArrowRight size={14} /></li>
                                    <li className="flex items-center gap-3 line-through opacity-50">Lead goes cold</li>
                                </ul>
                                <div className="absolute bottom-10 left-10 right-10 flex gap-4 text-xs font-sans text-red-300 border-t border-red-900/30 pt-6">
                                    <span className="font-medium">Pain points:</span>
                                    <span>Slow response, Missed leads, Inconsistent experience.</span>
                                </div>
                            </div>

                            {/* After */}
                            <div className="bg-[#0c1611]/80 border border-green-900/40 rounded-[2rem] p-10 relative overflow-hidden glass-card shadow-[0_0_50px_rgba(34,197,94,0.05)] transform hover:scale-[1.02] transition-transform duration-500">
                                <div className="absolute top-0 right-0 bg-green-500/20 px-4 py-1 rounded-bl-3xl rounded-tr-[2rem] text-green-400 font-mono text-xs uppercase tracking-widest font-bold">After</div>
                                <h3 className="font-sans font-bold text-3xl mb-8 text-white group-hover:text-green-400 transition-colors">The Horizon Way</h3>
                                <ul className="space-y-4 font-mono text-sm text-green-100/80 mb-10">
                                    <li className="flex items-center gap-3 text-white">Lead submits form <ArrowRight size={14} className="text-green-500" /></li>
                                    <li className="flex items-center gap-3 text-white">AI responds in <span className="font-bold text-green-400 text-base border-b border-green-500/50 pb-0.5">&lt;10s</span> <ArrowRight size={14} className="text-green-500" /></li>
                                    <li className="flex items-center gap-3 text-white">AI qualifies via natural conversation <ArrowRight size={14} className="text-green-500" /></li>
                                    <li className="flex items-center gap-3 text-white">AI books directly to calendar <ArrowRight size={14} className="text-green-500" /></li>
                                    <li className="flex items-center gap-3 text-green-400 font-bold bg-green-500/10 px-3 py-1 rounded-md max-w-max">Rep joins prepared to close</li>
                                </ul>
                                <div className="absolute bottom-10 left-10 right-10 flex gap-4 text-xs font-sans text-green-300/80 border-t border-green-900/40 pt-6 items-center">
                                    <span className="font-bold tracking-wide uppercase text-green-500">Benefits:</span>
                                    <span className="font-medium text-[13px]">Instant response, 24/7 coverage, Higher conversion rates.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comparison 2: Report Gen */}
                    <div>
                        <h2 className="text-3xl font-sans font-bold mb-10 text-center tracking-tight">Use Case 2: Report Generation</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Before */}
                            <div className="bg-red-950/20 border border-red-900/40 rounded-[2rem] p-10 relative overflow-hidden glass-card group h-[420px]">
                                <div className="absolute top-0 right-0 bg-red-500/10 px-4 py-1 rounded-bl-3xl rounded-tr-[2rem] text-red-400 font-mono text-xs uppercase tracking-widest font-bold">Before</div>
                                <h3 className="font-serif italic text-3xl mb-8 text-white/80">The Old Way</h3>
                                <div className="flex bg-white/5 rounded-xl p-4 gap-4 items-center mb-6">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-mono opacity-50">1</div>
                                    <p className="font-mono text-sm opacity-60">Log into 5 different platforms</p>
                                </div>
                                <div className="flex bg-white/5 rounded-xl p-4 gap-4 items-center mb-6">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-mono opacity-50">2</div>
                                    <p className="font-mono text-sm opacity-60">Export CSVs & Copy-paste into template</p>
                                </div>
                                <div className="absolute bottom-10 left-10 right-10 flex gap-4 text-xs font-sans text-red-300 border-t border-red-900/30 pt-6">
                                    <span className="font-medium">Pain points:</span>
                                    <span>4+ hours weekly, Error-prone, Data is immediately outdated.</span>
                                </div>
                            </div>

                            {/* After */}
                            <div className="bg-secondary/10 border border-secondary/30 rounded-[2rem] p-10 relative overflow-hidden glass-card shadow-[0_0_50px_rgba(99,102,241,0.05)] transform hover:scale-[1.02] transition-transform duration-500 h-[420px]">
                                <div className="absolute top-0 right-0 bg-secondary/20 px-4 py-1 rounded-bl-3xl rounded-tr-[2rem] text-secondary font-mono text-xs uppercase tracking-widest font-bold">After</div>
                                <h3 className="font-sans font-bold text-3xl mb-8 text-white group-hover:text-secondary transition-colors">The Horizon Way</h3>

                                <div className="flex bg-secondary/10 border border-secondary/20 rounded-xl p-4 gap-4 items-center mb-4 backdrop-blur-md">
                                    <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-mono shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                        <Activity size={16} />
                                    </div>
                                    <p className="font-mono text-sm text-white font-medium">Auto-pulls data via API</p>
                                </div>

                                <div className="flex bg-secondary/10 border border-secondary/20 rounded-xl p-4 gap-4 items-center mb-4 backdrop-blur-md">
                                    <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-mono shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                        <Zap size={16} />
                                    </div>
                                    <p className="font-mono text-sm text-white font-medium">Dashboard updates real-time, zero effort</p>
                                </div>

                                <div className="absolute bottom-10 left-10 right-10 flex gap-4 text-xs font-sans text-indigo-300/90 border-t border-secondary/30 pt-6 items-center">
                                    <span className="font-bold tracking-wide uppercase text-secondary">Benefits:</span>
                                    <span className="font-medium text-[13px]">Real-time data, 10 minutes vs 4 hours, Zero human error.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The AI Employee Section */}
                <section className="mb-40 max-w-5xl mx-auto text-center">
                    <Bot size={64} className="text-secondary mx-auto mb-8 opacity-90 drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
                    <h2 className="font-sans text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-white">The AI Employee</h2>
                    <p className="text-xl text-text/60 leading-relaxed font-light mb-16 max-w-2xl mx-auto">
                        Think of AI agents as tireless team members who handle the repetitive work, so your human team can focus on strategy and relationships.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        <div className="glass-card rounded-[2rem] p-8 text-center border-white/5 hover:border-secondary/20 transition-colors group">
                            <Clock size={24} className="text-secondary mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="font-sans text-3xl font-black mb-1 text-white">24/7</div>
                            <div className="font-mono text-xs uppercase tracking-widest opacity-50">Always On</div>
                        </div>
                        <div className="glass-card rounded-[2rem] p-8 text-center border-white/5 hover:border-accent/20 transition-colors group">
                            <Zap size={24} className="text-accent mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="font-sans text-3xl font-black mb-1 text-white">&lt;10s</div>
                            <div className="font-mono text-xs uppercase tracking-widest opacity-50">Response Time</div>
                        </div>
                        <div className="glass-card rounded-[2rem] p-8 text-center border-white/5 hover:border-green-500/20 transition-colors group">
                            <ShieldCheck size={24} className="text-green-500 mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="font-sans text-3xl font-black mb-1 text-white">100%</div>
                            <div className="font-mono text-xs uppercase tracking-widest opacity-50">Consistency</div>
                        </div>
                        <div className="glass-card rounded-[2rem] p-8 text-center border-white/5 hover:border-blue-500/20 transition-colors group">
                            <ArrowRightLeft size={24} className="text-blue-500 mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="font-sans text-2xl font-black mb-1 text-white tracking-widest">Always</div>
                            <div className="font-mono text-xs uppercase tracking-widest opacity-50">Learning</div>
                        </div>
                    </div>
                </section>

                {/* Automation Pipeline Section */}
                <div className="mb-40 pipeline-container relative z-10 glass-card rounded-[3rem] p-10 md:p-16 border-white/10 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none"></div>
                    <h2 className="font-sans text-4xl font-bold tracking-tighter mb-4 text-white relative z-20">How a Pipeline Works</h2>
                    <p className="text-text/60 mb-20 relative z-20">From trigger to completion, completely hands-free.</p>

                    <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 max-w-4xl mx-auto">
                        {/* Desktop connecting lines */}
                        <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-0.5 bg-white/10 -z-10">
                            <div className="pipeline-line absolute inset-0 bg-gradient-to-r from-secondary via-accent to-green-500 scale-x-0 origin-left"></div>
                        </div>

                        {/* Stepper Node 1 */}
                        <div className="flex flex-col items-center gap-6 relative w-48">
                            <div className="w-24 h-24 rounded-[1.5rem] bg-background border-2 border-secondary flex items-center justify-center transform hover:scale-110 transition-transform shadow-[0_0_30px_rgba(99,102,241,0.3)] shrink-0">
                                <span className="font-mono text-xl font-bold text-secondary">01</span>
                            </div>
                            <div>
                                <h4 className="font-sans font-bold text-lg mb-2 text-white">Trigger</h4>
                                <p className="font-mono text-xs opacity-60">Form submission, email, webhook, schedule</p>
                            </div>
                        </div>

                        {/* Stepper Node 2 */}
                        <div className="flex flex-col items-center gap-6 relative w-48">
                            <div className="w-24 h-24 rounded-[1.5rem] bg-background border-2 border-secondary flex items-center justify-center transform hover:scale-110 transition-transform shadow-[0_0_30px_rgba(99,102,241,0.3)] shrink-0">
                                <span className="font-mono text-xl font-bold text-secondary">02</span>
                            </div>
                            <div>
                                <h4 className="font-sans font-bold text-lg mb-2 text-white">Processing</h4>
                                <p className="font-mono text-xs opacity-60">LLM evaluates, extracts, and analyzes data</p>
                            </div>
                        </div>

                        {/* Stepper Node 3 */}
                        <div className="flex flex-col items-center gap-6 relative w-48">
                            <div className="w-24 h-24 rounded-[1.5rem] bg-background border-2 border-accent flex items-center justify-center transform hover:scale-110 transition-transform shadow-[0_0_30px_rgba(245,158,11,0.3)] shrink-0">
                                <span className="font-mono text-xl font-bold text-accent">03</span>
                            </div>
                            <div>
                                <h4 className="font-sans font-bold text-lg mb-2 text-white">Action</h4>
                                <p className="font-mono text-xs opacity-60">Update CRM, book meeting, send emails</p>
                            </div>
                        </div>

                        {/* Stepper Node 4 */}
                        <div className="flex flex-col items-center gap-6 relative w-48">
                            <div className="w-24 h-24 rounded-[1.5rem] bg-background border-2 border-green-500 flex items-center justify-center transform hover:scale-110 transition-transform shadow-[0_0_30px_rgba(34,197,94,0.3)] shrink-0">
                                <span className="font-mono text-xl font-bold text-green-500">04</span>
                            </div>
                            <div>
                                <h4 className="font-sans font-bold text-lg mb-2 text-white">Report</h4>
                                <p className="font-mono text-xs opacity-60">Log results, update dashboard, notify team</p>
                            </div>
                        </div>

                    </div>

                    <p className="text-secondary/80 font-mono text-sm uppercase tracking-widest mt-20 relative z-20">This entire pipeline runs automatically.</p>
                </div>

                {/* Metrics */}
                <div className="mb-40 border-t border-white/10 pt-32">
                    <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tighter mb-20 text-center text-white">Results That Speak for Themselves</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black font-sans mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 group-hover:scale-110 transition-transform duration-500 inline-block">
                                <span className="metric-number" data-target="20" data-suffix="+">0</span>
                            </div>
                            <p className="font-mono text-xs text-text/60 tracking-widest uppercase leading-relaxed max-w-[150px] mx-auto">Hours saved per week</p>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black font-sans mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 group-hover:scale-110 transition-transform duration-500 inline-block">
                                <span className="metric-number" data-target="80" data-suffix="%">0</span>
                            </div>
                            <p className="font-mono text-xs text-text/60 tracking-widest uppercase leading-relaxed max-w-[150px] mx-auto">Faster response times</p>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black font-sans mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 group-hover:scale-110 transition-transform duration-500 inline-block">
                                <span className="metric-number" data-target="3" data-suffix="x">0</span>
                            </div>
                            <p className="font-mono text-xs text-text/60 tracking-widest uppercase leading-relaxed max-w-[150px] mx-auto">More leads qualified</p>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black font-sans mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 group-hover:scale-110 transition-transform duration-500 inline-block">
                                <span className="metric-number" data-target="99" data-suffix=".9%">0</span>
                            </div>
                            <p className="font-mono text-xs text-text/60 tracking-widest uppercase leading-relaxed max-w-[150px] mx-auto">Uptime Reliability</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link to="/contact" className="magnetic-button inline-flex px-10 py-5 rounded-full bg-accent text-primary font-sans font-bold text-lg glow-amber items-center gap-3 w-full md:w-auto justify-center">
                        Ready to Automate?
                        <ArrowRight size={20} />
                    </Link>
                    <Link to="/portfolio" className="inline-flex px-10 py-5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors font-sans font-bold text-lg w-full md:w-auto justify-center">
                        See Our Work
                    </Link>
                </div>

            </div>
        </div >
    );
}
