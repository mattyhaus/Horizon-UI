import { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

export default function InteractiveGraphWidget() {
    const [automationEnabled, setAutomationEnabled] = useState(true);

    // SVG Line Paths (ViewBox Width: 500, Height: 200)
    const manualLine = "M 0 180 C 150 175, 350 170, 500 160";
    
    // The "Off" state just slightly paces above manual
    const autoLineOff = "M 0 180 C 150 170, 350 160, 500 145";
    // The "On" state rockets the trajectory
    const autoLineOn = "M 0 180 C 150 170, 280 40, 500 15";

    const getAreaPath = (line) => `${line} L 500 200 L 0 200 Z`;

    const currentAutoLine = automationEnabled ? autoLineOn : autoLineOff;
    const currentAutoArea = getAreaPath(currentAutoLine);

    // Animated Metric Values
    const [metric, setMetric] = useState(1024);
    
    useEffect(() => {
        // Animate counter efficiently without heavy libraries
        const target = automationEnabled ? 14820 : 1024;
        const duration = 1000;
        const steps = 60;
        const stepTime = duration / steps;
        let current = metric;
        const diff = target - current;
        
        const timer = setInterval(() => {
            current += diff / steps;
            if ((diff > 0 && current >= target) || (diff < 0 && current <= target)) {
                current = target;
                clearInterval(timer);
            }
            setMetric(Math.floor(current));
        }, stepTime);

        return () => clearInterval(timer);
    }, [automationEnabled]);

    return (
        <div className="w-full flex flex-col group h-full">
            <div className="flex-grow flex flex-col justify-between bg-surface/30 backdrop-blur-md rounded-[2rem] border border-white/5 overflow-hidden">
                
                {/* Header & Metrics */}
                <div className="p-6 md:p-8 flex justify-between items-start z-10">
                    <div>
                        <h4 className="font-sans font-bold text-white text-lg tracking-tight mb-1">Growth Trajectory</h4>
                        <div className="flex items-center gap-2">
                            <Activity size={14} className={automationEnabled ? "text-ig-magenta" : "text-text/40"} />
                            <span className="font-mono text-sm text-text/60">Live Analytics</span>
                        </div>
                    </div>
                    <div className="text-right flex flex-col items-end">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-text/40 mb-1">Monthly Impressions</span>
                        <div className="font-sans font-black text-3xl tracking-tighter text-white">
                            {metric.toLocaleString()}
                        </div>
                        <div className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors duration-500 mt-2 ${automationEnabled ? "bg-ig-magenta/20 text-ig-magenta" : "bg-white/5 text-text/40"}`}>
                            {automationEnabled ? "↑ 840% Growth" : "↑ 4% Growth"}
                        </div>
                    </div>
                </div>

                {/* Graph Visualization */}
                <div className="relative w-full h-[220px] -mt-10">
                    {/* Legend */}
                    <div className="absolute top-10 left-6 z-20 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${automationEnabled ? "bg-ig-magenta shadow-[0_0_10px_rgba(193,53,132,1)]" : "bg-text/30"}`}></div>
                            <span className="text-[10px] uppercase tracking-widest font-mono text-text/50">Automated Funnel</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-text/20"></div>
                            <span className="text-[10px] uppercase tracking-widest font-mono text-text/40">Manual Process</span>
                        </div>
                    </div>

                    <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="magentaGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#C13584" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#C13584" stopOpacity="0.0" />
                            </linearGradient>
                        </defs>

                        {/* Grid Lines */}
                        <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4,4" />
                        <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4,4" />
                        <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4,4" />

                        {/* Manual Graph */}
                        <path 
                            d={manualLine} 
                            fill="none" 
                            stroke="rgba(255,255,255,0.15)" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeDasharray="4,4"
                        />

                        {/* Automated Graph Area */}
                        <path 
                            d={currentAutoArea} 
                            fill={automationEnabled ? "url(#magentaGradient)" : "transparent"} 
                            className="transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        />
                        
                        {/* Automated Graph Line */}
                        <path 
                            d={currentAutoLine} 
                            fill="none" 
                            stroke={automationEnabled ? "#C13584" : "rgba(255,255,255,0.3)"} 
                            strokeWidth="3" 
                            strokeLinecap="round"
                            className={`transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${automationEnabled ? 'drop-shadow-[0_0_12px_rgba(193,53,132,0.6)]' : ''}`}
                        />
                    </svg>
                </div>
            </div>

            {/* Interactive Dashboard Controls */}
            <div className="mt-4 flex p-2 bg-[#0a0a0f] border border-white/10 rounded-2xl gap-2 z-20">
                <button 
                    onClick={() => setAutomationEnabled(false)}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-mono tracking-wide uppercase transition-all duration-300 ${!automationEnabled ? 'bg-white/10 text-white shadow-inner' : 'text-text/40 hover:text-white/80 hover:bg-white/5'}`}
                >
                    Standard
                </button>
                <button 
                    onClick={() => setAutomationEnabled(true)}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-mono tracking-wide uppercase transition-all duration-300 ${automationEnabled ? 'bg-ig-magenta text-white shadow-[0_0_20px_rgba(193,53,132,0.4)]' : 'text-text/40 hover:text-white/80 hover:bg-white/5'}`}
                >
                    Automated
                </button>
            </div>
        </div>
    );
}
