import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingChat() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Panel */}
            <div
                ref={containerRef}
                className={`absolute bottom-16 right-0 w-80 mb-4 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                    }`}
            >
                <div className="glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <div className="bg-secondary/20 p-4 border-b border-white/10 flex justify-between items-center">
                        <h3 className="font-sans font-bold text-text">Chat with Horizon AI</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-text/70 hover:text-text transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>
                    <div className="p-5 h-64 bg-surface/90 flex flex-col-reverse">
                        <div className="flex gap-3 mt-auto">
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                <span className="font-sans font-bold text-xs">AI</span>
                            </div>
                            <div className="bg-white/5 rounded-2xl rounded-tl-sm p-3 text-sm text-text/90 shadow-sm border border-white/5">
                                Hi! I'm Horizon's AI assistant. How can I help you learn about our automation services?
                            </div>
                        </div>
                    </div>
                    <div className="p-3 bg-surface border-t border-white/10">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                disabled
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-text placeholder:text-text/40 focus:outline-none focus:border-secondary/50 disabled:opacity-50"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 relative glow-indigo"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>
        </div>
    );
}
