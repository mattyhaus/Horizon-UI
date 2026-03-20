import { useState, useRef } from 'react';
import { Database, Search, Download, RefreshCw, CheckCircle } from 'lucide-react';

export default function LeadDatabaseWidget() {
    const [isExtracting, setIsExtracting] = useState(false);
    
    // Massive initial array of mock leads
    const [leads, setLeads] = useState([
        { id: 1, name: "Sarah Jenkins", company: "TechFlow", title: "CEO", email: "sarah@techflow.io", phone: "+1 (415) 555-0192", status: "Verified" },
        { id: 2, name: "Marcus Rivera", company: "DataSync", title: "VP Marketing", email: "m.rivera@datasync.co", phone: "+1 (917) 555-0841", status: "Enriching..." },
        { id: 3, name: "Emily Wong", company: "ScaleAI", title: "Founder", email: "emily@scale.ai", phone: "+1 (650) 555-0111", status: "Verified" },
        { id: 4, name: "Jason Miller", company: "CloudNet", title: "Director Ops", email: "jason.m@cloudnet.dev", phone: "+1 (512) 555-0294", status: "Verified" },
        { id: 5, name: "Amanda Torres", company: "FinSight", title: "CMO", email: "atorres@finsight.com", phone: "+1 (312) 555-0773", status: "Verified" },
        { id: 6, name: "David Chen", company: "Lumina", title: "Head of Growth", email: "david@lumina.io", phone: "+1 (206) 555-0455", status: "Verified" },
        { id: 7, name: "Jessica L.", company: "FlowGen", title: "Director Sales", email: "jess@flowgen.com", phone: "+1 (801) 555-0211", status: "Verified" },
    ]);

    const scrollRef = useRef(null);

    const runExtraction = () => {
        if (isExtracting) return;
        setIsExtracting(true);
        
        let passes = 0;
        const interval = setInterval(() => {
            passes++;
            
            if (passes % 5 === 0) {
                // Dynamically build random variations so it looks convincing
                const companyList = ["Vertex", "NovaTech", "Synergy", "Acme Corp"];
                const titleList = ["RevOps Lead", "CEO", "VP Sales", "Growth Lead"];
                const newLeads = [
                    { 
                        id: Date.now(), 
                        name: `Alex K.`, 
                        company: companyList[Math.floor(Math.random()*companyList.length)], 
                        title: titleList[Math.floor(Math.random()*titleList.length)], 
                        email: `alex.k@${companyList[Math.floor(Math.random()*companyList.length)].toLowerCase()}.io`, 
                        phone: "+1 (404) 555-0982", 
                        status: "Verified" 
                    },
                    { 
                        id: Date.now()+1, 
                        name: `Jordan P.`, 
                        company: companyList[Math.floor(Math.random()*companyList.length)], 
                        title: titleList[Math.floor(Math.random()*titleList.length)], 
                        email: `j.p@${companyList[Math.floor(Math.random()*companyList.length)].toLowerCase()}.com`, 
                        phone: "+1 (718) 555-1102", 
                        status: "Verified" 
                    },
                ];
                
                // Add to the top of the spreadsheet
                setLeads(prev => [...newLeads, ...prev].slice(0, 50)); 
                
                // Keep scroll position anchored nicely or let it push down
            }

            if (passes >= 20) {
                clearInterval(interval);
                setIsExtracting(false);
            }
        }, 150);
    };

    return (
        <div className="w-full h-full min-h-[350px] flex flex-col bg-[#050508] border border-white/5 rounded-2xl overflow-hidden font-sans group relative shadow-[0_0_50px_-15px_rgba(24,119,242,0.15)]">
            
            {/* Spreadsheet Toolbar */}
            <div className="px-4 py-3 border-b border-white/10 bg-[#0a0a0f] flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                    <Database size={14} className="text-fb-blue" />
                    <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded px-2.5 py-1.5 shadow-inner">
                        <Search size={12} className="text-text/40" />
                        <span className="text-[10px] font-mono text-text/60">SELECT * FROM leads WHERE target="SaaS"</span>
                        <span className="ml-2 flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fb-blue opacity-50"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-fb-blue opacity-70"></span>
                        </span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button 
                        onClick={runExtraction}
                        disabled={isExtracting}
                        className={`flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded transition-colors ${isExtracting ? 'bg-fb-blue/20 text-fb-blue cursor-not-allowed' : 'bg-fb-blue text-white hover:bg-white hover:text-black shadow-[0_0_15px_rgba(24,119,242,0.4)]'}`}
                    >
                        <RefreshCw size={12} className={isExtracting ? "animate-spin" : ""} />
                        Live Extract
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase rounded transition-colors shadow-sm">
                        <Download size={12} />
                        CSV
                    </button>
                </div>
            </div>

            {/* Spreadsheet Header Row */}
            <div className="flex w-full px-4 py-2 bg-[#050508] border-b border-white/10 text-[10px] font-mono text-text/40 uppercase tracking-widest font-bold z-10 shadow-sm">
                <div className="w-[18%]">Name</div>
                <div className="w-[18%]">Company</div>
                <div className="w-[18%]">Title</div>
                <div className="w-[20%]">Email</div>
                <div className="w-[15%]">Phone</div>
                <div className="w-[11%]">Status</div>
            </div>

            {/* Spreadsheet Body (Scrollable table rows) */}
            <div 
                ref={scrollRef}
                className="flex flex-col flex-grow overflow-y-auto overflow-x-hidden bg-[#020202]"
                style={{ maxHeight: '280px', scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}
            >
                {leads.map((lead, i) => (
                    <div 
                        key={lead.id} 
                        className="flex w-full px-4 py-2.5 border-b border-white/5 text-xs text-text/80 hover:bg-white/[0.04] transition-colors cursor-default"
                        style={{ animation: 'fadeIn 0.3s ease-out' }}
                    >
                        <div className="w-[18%] font-medium text-white truncate pr-2">{lead.name}</div>
                        <div className="w-[18%] truncate pr-2">{lead.company}</div>
                        <div className="w-[18%] text-text/60 truncate pr-2">{lead.title}</div>
                        <div className="w-[20%] font-mono text-[10px] text-fb-blue truncate flex items-center pr-2 opacity-80">{lead.email}</div>
                        <div className="w-[15%] font-mono text-[10px] text-text/50 flex items-center pr-2">{lead.phone}</div>
                        <div className="w-[11%] flex items-center">
                            {lead.status === "Verified" ? (
                                <span className="flex items-center gap-1.5 text-[10px] text-wa-green/80 font-mono tracking-wide">
                                    <CheckCircle size={10} /> Valid
                                </span>
                            ) : (
                                <span className="flex items-center gap-1.5 text-[10px] text-text/40 font-mono tracking-wide">
                                    <RefreshCw size={10} className="animate-spin" /> Enriching
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Subtle trailing gradient to indicate depth/more rows */}
            <div className="absolute left-0 bottom-0 w-full h-8 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none z-20"></div>

            {/* Inline CSS animation for the rows dropping in */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-4px) bg-[#1877f2]/10; }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
