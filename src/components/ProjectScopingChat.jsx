import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

export default function ProjectScopingChat() {
    // Start with an empty chat log since the prompt is now a header!
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (messages.length > 0) {
            scrollToBottom();
        }
    }, [messages, isTyping]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput('');
        setIsTyping(true);

        // Simulate AI thinking and quoting
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                content: "That's a solid use case.\n\nBased on similar systems we've built, a project like that typically lands between $2,500 and $4,500 flat, depending on the exact integrations needed.\n\nReady to nail down the exact scope?",
                showAction: true
            }]);
        }, 1500);
    };

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col font-sans relative py-12">
            
            {/* Dynamic Interactive Header */}
            <div className={`w-full flex flex-col items-center justify-center text-center px-4 transition-all duration-700 ${messages.length > 0 ? 'mb-6 scale-95 opacity-80' : 'mb-6 mt-2'}`}>
                <p className="text-base md:text-lg text-text/70 max-w-2xl font-sans font-medium tracking-wide">
                    Our architecture engine will instantly scope out a concrete estimate right here.
                </p>
            </div>

            {/* Chat Area - dynamically pushes the page down as it fills */}
            {messages.length > 0 && (
                <div className="flex flex-col gap-8 w-full px-2 lg:px-0 mb-8 pt-4">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`w-full flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
                            <div className={`flex flex-col gap-4 ${msg.role === 'user' ? 'max-w-[85%] sm:max-w-[75%]' : 'w-full'}`}>
                                
                                {/* Seamless bubbles */}
                                {msg.role === 'assistant' ? (
                                    <div className="text-2xl md:text-3xl font-light text-white/90 leading-snug border-l-4 border-fb-blue pl-6 md:pl-8 py-2 whitespace-pre-wrap">
                                        {msg.content}
                                    </div>
                                ) : (
                                    <div className="p-4 sm:p-5 rounded-[2rem] rounded-tr-sm text-base md:text-lg leading-relaxed bg-white/10 text-white backdrop-blur-md border border-white/10 whitespace-pre-wrap float-right w-fit shadow-lg ml-auto">
                                        {msg.content}
                                    </div>
                                )}
                                
                                {/* Action Button inside message */}
                                {msg.showAction && (
                                    <div className="pl-6 md:pl-8 mt-2">
                                        <button className="px-8 py-4 bg-fb-blue hover:bg-white hover:text-black text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(24,119,242,0.3)] hover:scale-105 active:scale-95 border border-fb-blue hover:border-white">
                                            Book Discovery Call
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    
                    {isTyping && (
                        <div className="w-full flex justify-start animate-in fade-in duration-300">
                            <div className="border-l-4 border-fb-blue pl-6 md:pl-8 py-4 flex items-center gap-3 h-12">
                                <span className="w-2.5 h-2.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            )}

            {/* Input Area - Ultra minimal, snaps right under header initially */}
            <div className="relative z-10 w-full mt-auto px-2 lg:px-0">
                <form onSubmit={handleSend} className="relative flex items-center w-full">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="E.g. I need a Custom CRM that automatically texts inbound leads..."
                        className="w-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-2xl py-6 pl-6 pr-20 text-base lg:text-lg text-white placeholder-text/30 outline-none focus:border-fb-blue/50 focus:bg-white/5 focus:ring-1 focus:ring-fb-blue/50 transition-all shadow-inner"
                    />
                    <button 
                        type="submit"
                        disabled={!input.trim() || isTyping}
                        className="absolute right-4 p-3 text-white/40 hover:text-fb-blue transition-colors disabled:opacity-30 flex items-center justify-center cursor-pointer"
                    >
                        <Send size={24} className="translate-x-[1px] translate-y-[1px]" />
                    </button>
                </form>
                <div className="text-center mt-6 text-[10px] text-text/40 font-mono tracking-wide">
                    All quotes are strictly estimates and will be finalized based on further interaction with the team.
                </div>
            </div>

        </div>
    );
}
