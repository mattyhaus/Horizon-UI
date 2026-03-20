import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const storyRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".story-para", {
                scrollTrigger: {
                    trigger: storyRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            });
        }, storyRef);
        return () => ctx.revert();
    }, []);

    const differentiators = [
        { title: "Partnership, Not Projects", desc: "We don't do one-off gigs. We embed with your team on a retainer, learning your business deeply." },
        { title: "Results Over Complexity", desc: "We don't build automation for its own sake. Every project starts with a clear business goal." },
        { title: "Plain English, Always", desc: "We skip the jargon. We make sure you understand exactly what we're building and why." },
        { title: "Built to Last", desc: "We use modern, proven technology — not bleeding-edge experiments. Reliable, maintainable, scalable." }
    ];

    const stack = [
        { name: "Next.js", role: "Web Framework", url: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2688&auto=format&fit=crop" },
        { name: "Tailwind CSS", role: "Styling", url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop" },
        { name: "Claude AI", role: "AI Platform", url: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop" },
        { name: "Supabase", role: "Backend & Database", url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop" },
        { name: "Vercel", role: "Hosting & Deployment", url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop" },
        { name: "Custom Agents", role: "Automation", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" }
    ];

    return (
        <div className="w-full bg-background min-h-screen pt-32 pb-40">

            {/* Hero */}
            <div className="text-center max-w-4xl mx-auto px-6 mb-32 relative z-20">
                <span className="text-xs font-mono px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 inline-block tracking-wide uppercase text-accent">About Horizon</span>
                <h1 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter mb-8 leading-tight">
                    Bringing Modern Automation to <span className="font-serif italic text-white/50 block mt-2">Small Business.</span>
                </h1>
                <p className="text-xl text-text/60 leading-relaxed font-light max-w-3xl mx-auto">
                    We believe every small business deserves access to the same AI and automation tools that power Fortune 500 companies — without the Fortune 500 price tag.
                </p>
            </div>

            {/* Story Section */}
            <section ref={storyRef} className="px-6 md:px-12 max-w-4xl mx-auto mb-40">
                <h2 className="font-sans text-xl font-bold tracking-widest uppercase mb-12 text-secondary/80">Why Horizon Exists</h2>
                <div className="border-l-2 border-accent/30 pl-8 md:pl-12 space-y-8">
                    <p className="story-para text-xl md:text-2xl text-text/80 leading-relaxed font-light">
                        Auburn and Opelika are home to a growing community of ambitious small businesses and software companies. These teams are smart, driven, and ready to compete — but most don't have the bandwidth to build custom AI tools or automation in-house.
                    </p>
                    <p className="story-para text-xl md:text-2xl text-text/80 leading-relaxed font-light">
                        That's where Horizon comes in. We started with a simple observation: the tools that help large companies run lean are becoming accessible to everyone, but someone still needs to build, configure, and maintain them.
                    </p>
                    <p className="story-para text-xl md:text-2xl text-text/80 leading-relaxed font-light">
                        Horizon fills that gap. We work on retainer, not by the hour. We learn your business inside and out. And we build automation that actually fits your workflow.
                    </p>
                    <p className="story-para text-xl md:text-2xl text-text/80 leading-relaxed font-light text-white font-medium">
                        Based in Auburn, Alabama, we combine local roots with cutting-edge technology. We believe in face-to-face relationships, clear communication, and delivering results you can measure.
                    </p>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-40">
                <h2 className="font-sans text-4xl font-bold tracking-tighter mb-16 text-center">What Makes Us Different</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {differentiators.map((diff, i) => (
                        <div key={i} className="glass-card rounded-[2rem] p-10 hover:-translate-y-2 transition-transform duration-500 border border-white/5 hover:border-secondary/20 group">
                            <CheckCircle2 size={32} className="text-accent mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-2xl font-bold font-sans mb-4 group-hover:text-secondary transition-colors">{diff.title}</h3>
                            <p className="text-text/60 leading-relaxed text-lg">{diff.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stack */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-40">
                <h2 className="font-sans text-4xl font-bold tracking-tighter mb-16 text-center">Our Core Technology</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stack.map((item, i) => (
                        <div key={i} className="relative h-48 rounded-[2rem] overflow-hidden group shadow-2xl border border-white/10">
                            <img src={item.url} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent"></div>
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <span className="text-xs font-mono uppercase text-accent/80 font-bold mb-1 tracking-widest">{item.role}</span>
                                <h3 className="text-xl font-bold font-sans text-white group-hover:text-secondary transition-colors">{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <div className="text-center">
                <Link to="/contact" className="magnetic-button inline-flex px-10 py-5 rounded-full bg-accent text-primary font-sans font-bold text-lg glow-amber items-center gap-3">
                    Let's Talk About Your Business
                    <ArrowRight size={20} />
                </Link>
            </div>

        </div>
    );
}
