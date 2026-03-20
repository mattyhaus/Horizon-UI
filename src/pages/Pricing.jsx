import { useState, useEffect, useRef } from 'react';
import { Minus, Plus, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectScopingChat from '../components/ProjectScopingChat';

gsap.registerPlugin(ScrollTrigger);

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/5 py-8 last:border-0 group">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-left focus:outline-none"
            >
                <h4 className="font-sans font-black text-xl md:text-2xl text-white/70 group-hover:text-amber-500 transition-colors duration-500 tracking-tight pr-8">{question}</h4>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${isOpen ? 'bg-amber-500/10 border-amber-500/30 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : 'bg-white/5 border-white/10 text-white/50 group-hover:border-amber-500/20 group-hover:text-amber-500'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-text/50 leading-relaxed font-light text-lg md:text-xl pr-12">{answer}</p>
            </div>
        </div>
    );
};

export default function Pricing() {
    const containerRef = useRef(null);

    const faqs = [
        {
            q: "What constitutes a 'custom sprint'?",
            a: "A sprint is a rigorously scoped timeline—usually 2 to 4 weeks—where we architect, stress-test, and deploy a specific autonomous system or data pipeline directly into your infrastructure."
        },
        {
            q: "Are the scoping engine estimates guaranteed?",
            a: "Our engine analyzes historical build data to provide a highly accurate initial bracket. The final quote is firmly locked in during our 30-minute technical discovery protocol."
        },
        {
            q: "Do you charge licensing fees for the AI agents?",
            a: "No. You strictly own the infrastructure. You pay standard API usage costs (OpenAI, Anthropic, etc.) at cost, completely cutting out the middle-man markups traditional SaaS companies charge."
        },
        {
            q: "How fast can we deploy?",
            a: "Initial architecture mapping takes less than 24 hours. Full technical onboarding takes 1 week. First production-ready agent deployment generally occurs by week 3."
        }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".hero-slide", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.1
            });
            
            gsap.from(".faq-block", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                scrollTrigger: {
                    trigger: ".faq-block",
                    start: "top 80%"
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-[#050508] min-h-screen pt-40 pb-40 overflow-hidden font-sans text-white">
            
            {/* Cinematic Header Layer */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center mb-10 relative z-10 flex flex-col items-center">

                <h1 className="hero-slide font-serif italic text-6xl md:text-8xl lg:text-[7.5rem] leading-none mb-8 tracking-tighter drop-shadow-2xl flex flex-wrap justify-center gap-x-4 gap-y-2">
                    <span className="text-white/90">Scope</span>
                    <span className="font-black text-amber-500 tracking-tight relative drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                        <span className="relative z-10 not-italic">Dynamically.</span>
                        <span className="absolute bottom-2 left-0 w-full h-4 bg-amber-500/40 -z-10 rotate-1 blur-[1px]"></span>
                    </span>
                </h1>
                <p className="hero-slide text-xl md:text-2xl text-text/50 font-light max-w-2xl mx-auto leading-relaxed">
                    Bypass the bloated sales calls. Feed our engine your architecture requirements and get an instant capital estimate right now.
                </p>
            </div>

            {/* The Scoper Widget Area */}
            <section className="hero-slide relative z-40 w-full mb-40">
                <div className="max-w-7xl mx-auto w-full px-4 md:px-12">
                    <div className="bg-white/[0.01] backdrop-blur-3xl border border-white/5 shadow-2xl rounded-[3rem] p-6 md:p-12 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                        <ProjectScopingChat />
                    </div>
                </div>
            </section>

            {/* Premium FAQ Layout */}
            <section className="faq-block px-6 md:px-12 max-w-4xl mx-auto relative z-20">
                <div className="flex flex-col items-center text-center mb-16">
                    <Zap size={28} className="text-white/20 mb-6 drop-shadow-md" />
                    <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tighter text-white/90">Operational FAQ</h2>
                </div>
                
                <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-16 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="relative z-10">
                        {faqs.map((faq, idx) => (
                            <FaqItem key={idx} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
