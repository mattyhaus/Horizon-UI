import { useEffect, useRef } from 'react';
import { Mail, MapPin, Clock, Calendar, ArrowRight, Zap, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".hero-word", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.1
            });
            
            gsap.from(".slide-up-form", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.4
            });

            const steps = gsap.utils.toArray(".timeline-step");
            steps.forEach((step, i) => {
                gsap.from(step, {
                    x: -30,
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.6 + (i * 0.2),
                    ease: "power2.out"
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-[#030305] min-h-screen pt-24 lg:pt-40 pb-24 lg:pb-40 px-6 md:px-12 font-sans text-white overflow-hidden relative">
            
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542044896582-841f3e79bc20?q=80&w=2670&auto=format&fit=crop')] bg-cover opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-12 lg:gap-24">

                {/* Left Column - Typography & Info */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">

                    <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 leading-[1.1] flex flex-col">
                        <span className="hero-word text-white/90">Let's Talk</span>
                        <span className="hero-word font-black text-transparent bg-clip-text bg-gradient-to-r from-ig-magenta to-fb-blue not-italic drop-shadow-xl self-start pb-2">Automation.</span>
                    </h1>
                    <p className="hero-word text-xl text-text/50 font-light leading-relaxed mb-16 max-w-lg">
                        Bypass the generic sales team. Speak directly with the architectural engineers who will be building your infrastructure.
                    </p>

                    <div className="hero-word grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                        <div className="flex flex-col gap-3 group">
                            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 shadow-lg group-hover:border-tt-cyan/30 transition-colors">
                                <Mail size={20} className="text-white/30 group-hover:text-tt-cyan transition-colors" />
                            </div>
                            <div>
                                <h4 className="font-mono font-bold mb-1 opacity-40 uppercase tracking-widest text-[10px]">Direct Comms</h4>
                                <a href="mailto:hello@horizonautomation.com" className="text-base text-white/80 hover:text-tt-cyan transition-colors font-medium">hello@horizonautomation.com</a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 group">
                            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 shadow-lg group-hover:border-fb-blue/30 transition-colors">
                                <MapPin size={20} className="text-white/30 group-hover:text-fb-blue transition-colors" />
                            </div>
                            <div>
                                <h4 className="font-mono font-bold mb-1 opacity-40 uppercase tracking-widest text-[10px]">Headquarters</h4>
                                <p className="text-base text-white/80 font-medium">Auburn, Alabama</p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="hero-word border-l border-white/10 pl-8 space-y-10 relative">
                        <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-ig-magenta/50 via-fb-blue/50 to-transparent"></div>
                        
                        <div className="timeline-step relative">
                            <div className="absolute -left-[45px] top-1 w-4 h-4 rounded-full bg-[#030305] border-2 border-ig-magenta flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-ig-magenta rounded-full animate-pulse shadow-[0_0_10px_currentColor]"></div>
                            </div>
                            <h4 className="font-bold font-sans text-xl mb-2 text-white">System Audit</h4>
                            <p className="text-white/50 leading-relaxed text-sm font-light">We evaluate your current tech stack bottlenecks to confirm structural viability.</p>
                        </div>
                        <div className="timeline-step relative">
                            <div className="absolute -left-[45px] top-1 w-4 h-4 rounded-full bg-[#030305] border-2 border-fb-blue flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-fb-blue rounded-full shadow-[0_0_10px_currentColor]"></div>
                            </div>
                            <h4 className="font-bold font-sans text-xl mb-2 text-white">Discovery Call</h4>
                            <p className="text-white/50 leading-relaxed text-sm font-light">A hyper-focused 30-minute technical brief mapping out ROI deployment timelines.</p>
                        </div>
                        <div className="timeline-step relative">
                            <div className="absolute -left-[45px] top-1 w-4 h-4 rounded-full bg-[#030305] border-2 border-tt-cyan flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-tt-cyan rounded-full shadow-[0_0_10px_currentColor]"></div>
                            </div>
                            <h4 className="font-bold font-sans text-xl mb-2 text-white">Architectural Proposal</h4>
                            <p className="text-white/50 leading-relaxed text-sm font-light">Delivery of the final execution contract detailing immediate infrastructure builds.</p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Massive Form / Calendar Portal */}
                <div className="w-full lg:w-[55%] relative">
                    <div className="slide-up-form bg-[#0a0508] border border-white/5 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden backdrop-blur-3xl group h-full flex flex-col hover:border-white/10 transition-colors duration-700">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-ig-magenta/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-ig-magenta/10 transition-colors duration-1000"></div>

                        {/* Embed Placeholder */}
                        <div className="w-full mb-12 bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-inner group/embed cursor-crosshair">
                            <div className="absolute inset-0 bg-gradient-to-tr from-ig-magenta/[0.03] to-fb-blue/[0.03]"></div>
                            <Calendar size={32} className="text-white/20 mb-4 group-hover/embed:text-ig-magenta transition-colors duration-500 group-hover/embed:scale-110" />
                            <h3 className="font-sans text-lg font-black tracking-tight text-white/80 group-hover/embed:text-white transition-colors duration-500 relative z-10">Awaiting Calendar Payload</h3>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 drop-shadow-md">Embed Cal.com Matrix Here</p>
                        </div>

                        <div className="flex items-center gap-6 mb-10 w-full opacity-50">
                            <div className="h-px bg-white/10 flex-grow"></div>
                            <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">Or Submit Query</span>
                            <div className="h-px bg-white/10 flex-grow"></div>
                        </div>

                        <form className="relative z-10 space-y-6 flex-grow flex flex-col" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-mono tracking-widest uppercase text-white/40 ml-2">Commander Name</label>
                                    <input type="text" className="w-full bg-[#030305] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-ig-magenta/50 focus:shadow-[0_0_20px_rgba(236,72,153,0.1)] transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-mono tracking-widest uppercase text-white/40 ml-2">Transmission Email</label>
                                    <input type="email" className="w-full bg-[#030305] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-ig-magenta/50 focus:shadow-[0_0_20px_rgba(236,72,153,0.1)] transition-all" placeholder="john@domain.com" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-mono tracking-widest uppercase text-white/40 ml-2">Capital Allocation</label>
                                <div className="relative">
                                    <select className="w-full bg-[#030305] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-ig-magenta/50 focus:shadow-[0_0_20px_rgba(236,72,153,0.1)] transition-all appearance-none cursor-pointer">
                                        <option value="" disabled selected className="text-[#030305]">Select operational budget threshold...</option>
                                        <option value="under-1500" className="text-[#030305]">Under $1,500/mo (Exploring scope)</option>
                                        <option value="1500-3000" className="text-[#030305]">$1,500 – $3,000/mo (Standard Integration)</option>
                                        <option value="3000-5000" className="text-[#030305]">$3,000 – $5,000/mo (Heavy Infrastructure)</option>
                                        <option value="over-5000" className="text-[#030305]">$5,000+/mo (Embedded Partnership)</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                        ▼
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6 flex-grow">
                                <label className="text-[10px] font-mono tracking-widest uppercase text-white/40 ml-2">System Parameters</label>
                                <textarea rows="5" className="w-full bg-[#030305] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-ig-magenta/50 focus:shadow-[0_0_20px_rgba(236,72,153,0.1)] transition-all resize-none h-full" placeholder="Define the manual bottlenecks stalling your company..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-5 rounded-2xl bg-white hover:bg-transparent border border-white hover:border-ig-magenta text-black hover:text-ig-magenta font-black font-sans tracking-wide transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] uppercase text-sm mt-auto shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
