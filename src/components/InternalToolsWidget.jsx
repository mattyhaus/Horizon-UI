import { useEffect, useRef } from 'react';
import { Users, Server, Workflow, CheckCircle, Clock, Bot } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InternalToolsWidget() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cols = gsap.utils.toArray('.tool-column');
            // Stagger slide-in from the right
            gsap.fromTo(cols,
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2, // Fly in one by one
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%", // Triggers slightly after the parent row
                        toggleActions: "play none none reverse" 
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full min-h-[350px] flex gap-4 lg:gap-6 items-stretch justify-center relative overflow-visible p-2">
            
            {/* Column 1: Custom CRM */}
            <div className="tool-column flex-1 flex flex-col bg-gradient-to-br from-slate-200/10 to-slate-400/5 backdrop-blur-md border border-slate-300/20 rounded-[2rem] p-5 shadow-[0_10px_40px_-15px_rgba(255,255,255,0.1)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                {/* Silver sheen */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-center gap-2 mb-6 relative z-10">
                    <Bot size={16} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase mb-0.5 leading-tight">Custom AI Agents Built For You</span>
                </div>
                
                {/* Mock AI Agent UI */}
                <div className="flex flex-col gap-2.5 relative z-10 h-full mt-1">
                    {/* Agent Status */}
                    <div className="w-full flex items-center justify-between bg-black/40 p-2.5 rounded-lg border border-white/5 shadow-inner">
                        <div className="flex items-center gap-2.5">
                            <div className="w-2 h-2 rounded-full bg-wa-green animate-pulse shadow-[0_0_8px_rgba(37,211,102,0.8)]"></div>
                            <span className="text-[9px] font-mono text-white/70 uppercase tracking-wider font-bold">Agent-01 Active</span>
                        </div>
                        <div className="w-6 h-1.5 bg-slate-500 rounded"></div>
                    </div>
                    
                    {/* Agent Terminal Window */}
                    <div className="flex-grow bg-white/[0.02] border border-white/5 rounded-xl p-3.5 flex flex-col gap-2.5 relative overflow-hidden shadow-inner">
                        {/* Lines of processing */}
                        <div className="w-3/4 h-1.5 bg-slate-400/50 rounded"></div>
                        <div className="w-full h-1.5 bg-slate-400/30 rounded"></div>
                        <div className="w-5/6 h-1.5 bg-slate-400/30 rounded"></div>
                        
                        {/* Action execution */}
                        <div className="w-1/2 h-1.5 bg-fb-blue/70 rounded mt-3 shadow-[0_0_8px_rgba(24,119,242,0.6)]"></div>
                        <div className="w-full h-1.5 bg-fb-blue/40 rounded"></div>
                        
                        {/* Glowing cursor bar at bottom */}
                        <div className="absolute bottom-3 left-3 w-1/4 h-1 bg-wa-green/60 animate-pulse shadow-[0_0_10px_rgba(37,211,102,0.8)] rounded"></div>
                    </div>
                </div>
            </div>

            {/* Column 2: Data Warehouse */}
            <div className="tool-column flex-1 flex flex-col bg-gradient-to-br from-zinc-200/10 to-zinc-400/5 backdrop-blur-md border border-zinc-300/20 rounded-[2rem] p-5 shadow-[0_10px_40px_-15px_rgba(255,255,255,0.1)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-center gap-2 mb-6 relative z-10">
                    <Server size={16} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase mb-0.5 leading-tight">Smart Data & Custom CRM</span>
                </div>
                
                {/* Mock DB UI */}
                <div className="flex flex-col gap-2.5 relative z-10 h-full mt-2">
                    {/* Glowing Grid element */}
                    <div className="grid grid-cols-3 gap-1.5 w-full mb-3">
                        {[1,2,3,4,5,6,7,8,9].map((i) => (
                            <div key={i} className={`h-4 rounded border border-white/5 ${i%3===0 ? 'bg-zinc-300/40 shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'bg-black/40'}`}></div>
                        ))}
                    </div>
                    {/* Data Rows */}
                    {[1,2,3,4].map((i) => (
                        <div key={i} className="flex justify-between items-center bg-black/30 p-2.5 rounded-lg border border-white/5">
                            <div className="flex gap-2.5">
                                <div className="w-2 h-2 rounded-sm bg-zinc-400"></div>
                                <div className="w-10 h-2 bg-zinc-600 rounded"></div>
                            </div>
                            <div className="w-4 h-2 bg-zinc-500 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Column 3: Automation Logic */}
            <div className="tool-column flex-1 flex flex-col bg-gradient-to-br from-gray-200/10 to-gray-400/5 backdrop-blur-md border border-gray-300/20 rounded-[2rem] p-5 shadow-[0_10px_40px_-15px_rgba(255,255,255,0.1)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-center gap-2 mb-6 relative z-10">
                    <Workflow size={16} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase mb-0.5 leading-tight">Upgrade Your Technology</span>
                </div>
                
                {/* Mock Modernized Stack */}
                <div className="flex flex-col flex-grow gap-3 relative z-10 w-full mt-2 justify-center">
                    {/* Mini Website */}
                    <div className="w-full bg-black/40 border border-white/10 rounded-lg overflow-hidden flex flex-col hover:border-fb-blue/40 transition-colors shadow-inner">
                        {/* Browser controls */}
                        <div className="w-full h-4 bg-white/5 flex items-center px-2 gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-yt-red/80"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-wa-green/80"></div>
                        </div>
                        {/* Hero content */}
                        <div className="p-3 flex flex-col gap-2.5">
                            <div className="w-16 h-2 bg-fb-blue/70 rounded shadow-[0_0_8px_rgba(24,119,242,0.5)]"></div>
                            <div className="w-full h-8 bg-white/[0.03] rounded border border-white/5"></div>
                            <div className="flex gap-2">
                                <div className="w-1/2 h-10 bg-white/[0.03] rounded border border-white/5"></div>
                                <div className="w-1/2 h-10 bg-white/[0.03] rounded border border-white/5"></div>
                            </div>
                        </div>
                    </div>

                    {/* Legacy Internal Software (e.g. Old Inventory App) */}
                    <div className="w-full bg-gray-500/10 border border-gray-600/30 rounded-lg p-3 relative overflow-hidden">
                        <div className="flex items-center gap-2 mb-3 border-b border-gray-600/30 pb-2">
                            <div className="w-3 h-3 bg-gray-500/40 rounded-sm"></div>
                            <div className="w-12 h-1.5 bg-gray-400 rounded"></div>
                        </div>
                        <div className="flex flex-col gap-2 opacity-60">
                            <div className="grid grid-cols-4 gap-1.5">
                                <div className="h-1 bg-gray-500 rounded col-span-2"></div>
                                <div className="h-1 bg-gray-500 rounded col-span-1"></div>
                                <div className="h-1 bg-gray-500 rounded col-span-1"></div>
                            </div>
                            <div className="grid grid-cols-4 gap-1.5">
                                <div className="h-1 bg-gray-500 rounded col-span-2"></div>
                                <div className="h-1 bg-gray-500 rounded col-span-1"></div>
                                <div className="h-1 bg-gray-500 rounded col-span-1"></div>
                            </div>
                            <div className="grid grid-cols-4 gap-1.5 mb-2">
                                <div className="h-1 bg-gray-500 rounded col-span-2"></div>
                                <div className="h-1 bg-gray-500 rounded col-span-1"></div>
                                <div className="h-1 bg-gray-500 rounded col-span-1"></div>
                            </div>
                        </div>
                        {/* Status notification */}
                        <div className="absolute bottom-2 right-2 flex items-center justify-center p-1 bg-ig-magenta/20 border border-ig-magenta/40 rounded scale-90">
                            <span className="text-[8px] uppercase tracking-widest font-black text-ig-magenta drop-shadow-[0_0_5px_rgba(193,53,132,0.8)]">Legacy System</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
