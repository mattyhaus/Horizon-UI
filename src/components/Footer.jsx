import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#0a0a14] text-text/70 rounded-t-[4xl] md:rounded-t-[6xl] pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
            {/* Subtle organic noise texture in footer */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-3xl font-sans font-bold text-text mb-4 inline-block tracking-tighter">
                            Horizon<span className="text-secondary">.</span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-8 max-w-xs">
                            Your automation team on retainer. AI agents, workflow automation, and custom tools for small businesses.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-sans font-bold text-text mb-6">Services</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link to="/services" className="hover:text-secondary transition-colors">AI Agents</Link></li>
                            <li><Link to="/services" className="hover:text-secondary transition-colors">Automation</Link></li>
                            <li><Link to="/services" className="hover:text-secondary transition-colors">Custom Tools</Link></li>
                            <li><Link to="/services" className="hover:text-secondary transition-colors">Consulting</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-sans font-bold text-text mb-6">Company</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link to="/about" className="hover:text-secondary transition-colors">About</Link></li>
                            <li><Link to="/portfolio" className="hover:text-secondary transition-colors">Portfolio</Link></li>
                            <li><Link to="/pricing" className="hover:text-secondary transition-colors">Pricing</Link></li>
                            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-sans font-bold text-text mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><span className="opacity-50 cursor-not-allowed hidden md:inline-block">Blog (Coming Soon)</span></li>
                            <li><Link to="/pricing" className="hover:text-secondary transition-colors">FAQ</Link></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
                        </ul>

                        <div className="mt-8 pt-8 border-t border-white/10 hidden md:block">
                            <p className="font-mono text-xs opacity-60">HQ: Auburn, Alabama</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono opacity-60">
                    <p>© {new Date().getFullYear()} Horizon. All rights reserved.</p>
                    <p className="md:hidden">HQ: Auburn, Alabama</p>
                </div>
            </div>
        </footer>
    );
}
