import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock, Calendar, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <div className="w-full bg-background min-h-screen pt-32 pb-40 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <h1 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter mb-8 leading-tight">
                        Let's Talk <span className="font-serif italic text-white/50 block mt-2">Automation.</span>
                    </h1>
                    <p className="text-xl text-text/60 leading-relaxed font-light">
                        Whether you have a specific project in mind or just want to explore what AI can do for your business, we'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column - Contact Form */}
                    <div>
                        <div className="glass-card rounded-[2.5rem] p-10 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden bg-surface/80">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none"></div>

                            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono tracking-widest uppercase opacity-60 ml-2">Full Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-text placeholder:text-text/30 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-colors" placeholder="Jane Doe" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono tracking-widest uppercase opacity-60 ml-2">Email Address</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-text placeholder:text-text/30 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-colors" placeholder="jane@company.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono tracking-widest uppercase opacity-60 ml-2">Company Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-text placeholder:text-text/30 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-colors" placeholder="Acme Corp" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono tracking-widest uppercase opacity-60 ml-2">Budget Range</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-text focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-colors appearance-none cursor-pointer">
                                        <option value="" disabled selected className="text-background">Select a projected monthly budget...</option>
                                        <option value="under-1500" className="text-background">Under $1,500/mo (Exploring options)</option>
                                        <option value="1500-3000" className="text-background">$1,500 – $3,000/mo (Starter)</option>
                                        <option value="3000-5000" className="text-background">$3,000 – $5,000/mo (Growth)</option>
                                        <option value="over-5000" className="text-background">$5,000+/mo (Partner)</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono tracking-widest uppercase opacity-60 ml-2">Message</label>
                                    <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-text placeholder:text-text/30 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-colors resize-none" placeholder="Tell us about the manual tasks eating up your team's time..."></textarea>
                                </div>

                                <button type="submit" className="w-full py-5 mt-4 rounded-2xl bg-secondary hover:bg-white text-white hover:text-primary font-bold font-sans tracking-wide glow-indigo transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12 flex flex-col justify-center">

                        {/* Contact Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Mail size={20} className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold mb-1 opacity-70 uppercase tracking-wider text-xs">Email</h4>
                                    <a href="mailto:hello@horizonautomation.com" className="text-lg hover:text-secondary transition-colors font-medium">hello@horizonautomation.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <MapPin size={20} className="text-secondary" />
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold mb-1 opacity-70 uppercase tracking-wider text-xs">Location</h4>
                                    <p className="text-lg font-medium">Auburn, Alabama</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 sm:col-span-2">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Clock size={20} className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold mb-1 opacity-70 uppercase tracking-wider text-xs">Response Time</h4>
                                    <p className="text-lg font-medium">Within 1 business day</p>
                                </div>
                            </div>
                        </div>

                        <hr className="border-white/10" />

                        {/* Schedule Card placeholder */}
                        <div className="bg-[#151522] border border-secondary/20 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent"></div>
                            <Calendar size={40} className="text-secondary mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110" />
                            <h3 className="font-sans text-xl font-bold mb-2 text-white relative z-10">Schedule a Discovery Call</h3>
                            <p className="font-mono text-xs opacity-50 relative z-10">[Cal.com scheduling widget coming soon]</p>
                        </div>

                        <hr className="border-white/10" />

                        {/* What to Expect */}
                        <div>
                            <h3 className="font-sans text-2xl font-bold tracking-tighter mb-8">What to Expect</h3>
                            <div className="space-y-6">
                                <div className="flex gap-6 group">
                                    <div className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center font-mono text-secondary font-bold shrink-0 shadow-lg group-hover:scale-110 transition-transform">1</div>
                                    <div>
                                        <h4 className="font-bold font-sans text-lg mb-1">We review your message</h4>
                                        <p className="text-text/60 leading-relaxed text-sm">We'll review your current setup and determine if we're technically equipped to help you.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center font-mono text-secondary font-bold shrink-0 shadow-lg group-hover:scale-110 transition-transform">2</div>
                                    <div>
                                        <h4 className="font-bold font-sans text-lg mb-1">Discovery call</h4>
                                        <p className="text-text/60 leading-relaxed text-sm">A 30-minute conversation to dig deep into your bottlenecks and map out potential automation.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center font-mono text-accent font-bold shrink-0 shadow-lg group-hover:scale-110 transition-transform">3</div>
                                    <div>
                                        <h4 className="font-bold font-sans text-lg mb-1">Custom proposal</h4>
                                        <p className="text-text/60 leading-relaxed text-sm">You receive a clear proposal with ROI projections, timeline, and exactly what we'll build.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
