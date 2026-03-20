import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2, CheckCircle2, Zap, ArrowRight, ArrowUpRight } from 'lucide-react';
import InteractiveGraphWidget from '../components/InteractiveGraphWidget';
import LeadDatabaseWidget from '../components/LeadDatabaseWidget';
import InternalToolsWidget from '../components/InternalToolsWidget';
import ProjectScopingChat from '../components/ProjectScopingChat';

gsap.registerPlugin(ScrollTrigger);

// --- Micro-UI Components ---

const DiagnosticShuffler = () => {
    const [cards, setCards] = useState([
        { id: 1, title: 'Customer Support Bot', active: true, color: 'bg-ig-magenta/20 border-ig-magenta/30' },
        { id: 2, title: 'Lead Qualification Agent', active: false, color: 'bg-white/5 border-white/10' },
        { id: 3, title: 'Scheduling Assistant', active: false, color: 'bg-white/5 border-white/10' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newArr = [...prev];
                const last = newArr.pop();
                newArr.unshift(last);
                return newArr.map((c, i) => ({
                    ...c,
                    active: i === 0,
                    color: i === 0 ? 'bg-ig-magenta/20 border-ig-magenta/30' : 'bg-white/5 border-white/10'
                }));
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-48 w-full flex items-center justify-center pointer-events-none perspective-1000">
            {cards.map((card, index) => {
                const isTop = index === 0;
                return (
                    <div
                        key={card.id}
                        className={`absolute w-[90%] left-[5%] rounded-2xl p-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] border shadow-xl backdrop-blur-md ${card.color}`}
                        style={{
                            transform: `translateY(${index * 15 - 10}px) scale(${1 - index * 0.05})`,
                            zIndex: 10 - index,
                            opacity: 1 - index * 0.3
                        }}
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-sans font-bold text-sm">{card.title}</span>
                            <div className={`w-2 h-2 rounded-full ${isTop ? 'bg-green-500 animate-pulse-slow shadow-[0_0_10px_rgba(34,197,94,0.6)]' : 'bg-white/20'}`}></div>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full mt-3 overflow-hidden">
                            <div className={`h-full bg-ig-magenta/80 rounded-full transition-all duration-[3000ms] ease-linear ${isTop ? 'w-full' : 'w-0'}`} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const TelemetryTypewriter = () => {
    const messages = [
        "→ Lead captured from web form...",
        "→ CRM updated, pipeline stage: Qualified",
        "→ Follow-up email sent automatically",
        "→ Invoice generated and tracked",
        "→ Weekly report compiled and delivered"
    ];
    const [currentMsgIdx, setCurrentMsgIdx] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout;
        if (isTyping) {
            if (displayedText.length < messages[currentMsgIdx].length) {
                timeout = setTimeout(() => {
                    setDisplayedText(messages[currentMsgIdx].slice(0, displayedText.length + 1));
                }, Math.random() * 30 + 20); // random typing speed
            } else {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 2000); // pause at end
            }
        } else {
            setDisplayedText('');
            setCurrentMsgIdx((prev) => (prev + 1) % messages.length);
            setIsTyping(true);
        }
        return () => clearTimeout(timeout);
    }, [displayedText, isTyping, currentMsgIdx]);

    return (
        <div className="w-full h-48 bg-[#0a0a0f] rounded-2xl p-4 border border-white/5 font-mono text-xs shadow-inner flex flex-col pointer-events-none">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                <span className="opacity-50">terminal.sh</span>
                <div className="flex items-center gap-2 text-[10px] text-wa-green">
                    <div className="w-1.5 h-1.5 rounded-full bg-wa-green animate-pulse-slow shadow-[0_0_8px_rgba(37,211,102,0.8)]"></div>
                    Live Feed
                </div>
            </div>
            <div className="flex-1 opacity-80 text-text/90 tracking-tight leading-relaxed">
                {messages.map((msg, idx) => {
                    if (idx < currentMsgIdx) {
                        return <div key={idx} className="mb-2 opacity-40">{msg}</div>;
                    }
                    if (idx === currentMsgIdx) {
                        return (
                            <div key={idx} className="mb-2 text-wa-green break-all">
                                {displayedText}
                                <span className="inline-block w-1.5 h-3.5 bg-wa-green ml-1 -mb-1 animate-pulse"></span>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

const CursorProtocolScheduler = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const [activeDay, setActiveDay] = useState(-1);
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Loop animation
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Reset
            tl.set(cursorRef.current, { x: 0, y: 150, opacity: 0, scale: 1 });
            tl.call(() => setActiveDay(-1));

            // Enter
            tl.to(cursorRef.current, { x: 40, y: 80, opacity: 1, duration: 0.8, ease: "power2.out" });

            // Move to Tuesday (idx 2)
            tl.to(cursorRef.current, { x: 120, y: 30, duration: 0.6, ease: "power2.inOut", delay: 0.2 });

            // Click
            tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
            tl.call(() => setActiveDay(2));
            tl.to(cursorRef.current, { scale: 1, duration: 0.1 });

            // Move to Save button
            tl.to(cursorRef.current, { x: 200, y: 110, duration: 0.7, ease: "power2.inOut", delay: 0.5 });

            // Click Save
            tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
            // Button react (handled via state if we wanted, but let's just fade out)
            tl.to(cursorRef.current, { scale: 1, duration: 0.1 });

            // Fade out
            tl.to(cursorRef.current, { opacity: 0, y: "+=30", duration: 0.4, delay: 0.3 });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-48 w-full bg-[#0a0a0f]/50 rounded-2xl p-5 border border-white/5 flex flex-col justify-between pointer-events-none overflow-hidden">
            <div className="grid grid-cols-7 gap-1">
                {days.map((day, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 text-xs font-mono">
                        <span className="opacity-40">{day}</span>
                        <div className={`w-full aspect-square rounded-md transition-colors duration-300 border ${activeDay === idx ? 'bg-li-blue/40 border-li-blue/60 shadow-[0_0_15px_rgba(0,119,181,0.5)]' : 'bg-white/5 border-white/10'
                            }`}></div>
                    </div>
                ))}
            </div>

            <div className="self-end mt-6 bg-li-blue/20 text-li-blue border border-li-blue/30 px-4 py-1.5 rounded-lg text-xs font-bold font-sans">
                Save Pipeline
            </div>

            <div ref={cursorRef} className="absolute top-0 left-0 w-6 h-6 z-10 filter drop-shadow-lg">
                <MousePointer2 className="text-white fill-white w-5 h-5 -rotate-12" />
            </div>
        </div>
    );
};


// --- Main Home Page Component ---

export default function Home() {
    const heroRef = useRef(null);
    const heroTextRef = useRef(null);
    const featuresRef = useRef(null);
    const philosophyRef = useRef(null);
    const protocolContainerRef = useRef(null);
    const heroVideoRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Hero Animation Opening Sequence
            gsap.from(".hero-element", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.2
            });

            // 2. Setup Philosophy Scroll
            gsap.from(".philosophy-word", {
                scrollTrigger: {
                    trigger: philosophyRef.current,
                    start: "top 70%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.04,
                ease: "power2.out"
            });

            // 3. Stacking Cards Fly-In
            const featureRows = gsap.utils.toArray(".feature-row-animate");
            featureRows.forEach((row, i) => {
                const fromRight = (i === 1); // Row 2 flies in from right
                gsap.fromTo(row,
                    { 
                        x: fromRight ? 150 : -150, 
                        opacity: 0 
                    },
                    {
                        x: 0,
                        opacity: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: row,
                            start: "top 85%",
                            end: "top 45%",
                            scrub: 1
                        }
                    }
                );
            });

        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full bg-background overflow-x-hidden">

            {/* 1. HERO SECTION - "The Opening Shot" */}
            <section
                ref={heroRef}
                className="relative h-[100dvh] w-full flex items-end pb-[15vh] px-6 md:px-16"
            >
                {/* Background Video & Gradient */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
                    <div 
                        className="absolute inset-0 w-full h-full object-cover" 
                        style={{ 
                            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
                            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)'
                        }}
                    >
                        <video
                            ref={heroVideoRef}
                            src="/hero-hq.mp4#t=2"
                            autoPlay
                            muted
                            playsInline
                            onEnded={() => {
                                if (heroVideoRef.current) {
                                    heroVideoRef.current.currentTime = 2;
                                    heroVideoRef.current.play();
                                }
                            }}
                            className="w-full h-full object-cover opacity-50 contrast-[1.15] saturate-[1.2] brightness-110"
                        />
                    </div>
                </div>

                {/* Content */}
                <div ref={heroTextRef} className="relative z-20 max-w-4xl pt-32">
                    <h1 className="hero-element font-sans font-bold leading-none tracking-tighter mb-2">
                        <span className="block text-4xl md:text-5xl lg:text-7xl mb-2">Stop Doing Manually</span>
                        <span className="block font-serif italic text-5xl md:text-6xl lg:text-8xl w-full">
                            What AI <span className="text-gradient font-black">Can Do in Seconds.</span>
                        </span>
                    </h1>

                    <p className="hero-element text-lg md:text-xl text-text/70 mt-8 mb-10 max-w-2xl leading-relaxed">
                        Horizon develops comprehensive systems for marketing, CRM management, and GTM research—equipping you with lead databases and internal tech tools so you can focus on scaling your vision.
                    </p>

                    <div className="hero-element flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="magnetic-button px-8 py-4 rounded-full bg-fb-blue text-white font-sans font-bold text-base glow-fb flex items-center justify-center gap-2 group">
                            Book a Discovery Call
                            <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/portfolio" className="magnetic-button px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-text font-sans font-bold text-base flex items-center justify-center gap-2 hover:border-tt-cyan hover:text-tt-cyan transition-colors">
                            See What We Build
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. FEATURES - "Interactive Functional Artifacts" */}
            <section ref={featuresRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20 bg-background">
                <div className="flex flex-col gap-12 lg:gap-12 lg:gap-24 w-full">
                    {/* Row 1 */}
                    <div className="feature-row-animate grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        {/* Headers 1: GTM & Venture Exploration */}
                        <div className="flex flex-col justify-center h-full min-h-[350px]">
                            <h3 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-fb-blue">GTM & Venture Exploration</h3>
                            <p className="text-text/70 text-lg md:text-2xl leading-relaxed">We analyze markets, map out go-to-market strategies, and build comprehensive lead databases to validate and launch your new ventures.</p>
                        </div>
                        {/* Interactive Lead Database Widget */}
                        <div className="hidden lg:flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 w-full min-h-[350px] p-2">
                            <LeadDatabaseWidget />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="feature-row-animate grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        {/* Interactive Graph Widget */}
                        <div className="hidden lg:flex items-center justify-center p-2 order-2 lg:order-1">
                            <InteractiveGraphWidget />
                        </div>
                        {/* Headers 2: Content & Marketing */}
                        <div className="flex flex-col justify-center h-full min-h-[350px] order-1 lg:order-2">
                            <h3 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-ig-magenta">Content & Marketing</h3>
                            <p className="text-text/70 text-lg md:text-2xl leading-relaxed">From automated content creation engines to targeted marketing workflows, we build the systems that put your brand in front of the right eyes.</p>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="feature-row-animate grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        {/* Headers 3: Tech & Internal Tools */}
                        <div className="flex flex-col justify-center h-full min-h-[350px]">
                            <h3 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-wa-green">Tech & Internal Tools</h3>
                            <p className="text-text/70 text-lg md:text-2xl leading-relaxed">We overhaul your technology stack, design bespoke CRMs, and develop internal business tools that perfectly align with your operations.</p>
                        </div>
                        {/* Internal Tools Columns */}
                        <div className="hidden lg:flex items-center justify-center w-full min-h-[350px]">
                            <InternalToolsWidget />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PROJECT SCOPING - "The Interactive Estimate Engine" */}
            <section ref={philosophyRef} className="relative pt-24 lg:pt-40 pb-32 w-full bg-[#050508] overflow-hidden">
                {/* Parallax organic texture */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-fixed"></div>

                <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center justify-center">
                    <h2 className="font-serif italic text-5xl md:text-7xl lg:text-[6rem] leading-tight flex flex-wrap justify-center gap-x-4 gap-y-2">
                        {"Describe your project ".split(" ").map((word, i) => (
                            <span key={`word-${i}`} className="philosophy-word inline-block text-white/90 drop-shadow-md">{word}</span>
                        ))}
                        <span className="philosophy-word inline-block font-black text-amber-500 tracking-tight relative drop-shadow-[0_0_30px_rgba(245,158,11,0.4)] pl-2">
                            <span className="relative z-10">below.</span>
                            <span className="absolute bottom-2 left-0 w-full h-4 bg-amber-500/40 -z-10 rotate-1 blur-[1px]"></span>
                        </span>
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto relative z-20 mt-12 w-full">
                    <ProjectScopingChat />
                </div>
            </section>

        </div>
    );
}
