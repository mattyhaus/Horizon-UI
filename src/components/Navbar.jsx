import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const links = [
        { name: 'Services', path: '/services' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' }
    ];

    return (
        <>
            <header
                className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isScrolled
                        ? 'bg-background/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] py-3 px-6'
                        : 'bg-transparent py-4 px-4'
                    }`}
            >
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-text tracking-tight z-50 relative group">
                        Horizon<span className="text-secondary ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-8">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={`text-sm tracking-wide font-medium transition-colors hover:-translate-y-[1px] inline-block ${location.pathname === link.path ? 'text-secondary' : 'text-text/70 hover:text-text'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/contact"
                            className="px-6 py-2.5 rounded-full bg-fb-blue text-white font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] glow-fb relative overflow-hidden group"
                        >
                            <span className="relative z-10">Book a Call</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden z-50 text-text/80 hover:text-text transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-30 bg-background/95 backdrop-blur-2xl transition-opacity duration-300 md:hidden flex flex-col items-center justify-center ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <ul className="flex flex-col items-center gap-5 sm:gap-8 text-xl sm:text-2xl font-serif italic text-text/80">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={location.pathname === link.path ? 'text-secondary not-italic font-sans font-bold' : 'hover:text-text'}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            to="/contact"
                            className="px-8 py-3 rounded-full bg-fb-blue text-white font-sans font-bold tracking-wide mt-4 inline-block shadow-[0_0_30px_-5px_rgba(24,119,242,0.5)]"
                        >
                            Book a Call
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
