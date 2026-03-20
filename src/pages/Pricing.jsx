import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Plus, Minus } from 'lucide-react';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 py-6 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-left focus:outline-none group"
            >
                <h4 className="font-sans font-bold text-lg group-hover:text-secondary transition-colors pr-8">{question}</h4>
                <div className="flex-shrink-0 text-text/50 group-hover:text-secondary transition-colors">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-text/60 leading-relaxed font-body">{answer}</p>
            </div>
        </div>
    );
};

export default function Pricing() {
    const faqs = [
        {
            q: "What counts as a project?",
            a: "A project is a self-contained automation deliverable — e.g., building a chatbot, automating an invoicing workflow, or creating an internal dashboard. Smaller tasks like tweaks and bug fixes don't count against your limit."
        },
        {
            q: "Can I change tiers?",
            a: "Absolutely. Upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle. We want to be a flexible partner as your needs evolve."
        },
        {
            q: "What's the onboarding process?",
            a: "We start with a 60-minute kickoff call to map out workflows. Within the first two weeks, we deliver your first active automation project to prove immediate value."
        },
        {
            q: "Do you work with businesses outside Auburn?",
            a: "Yes. While we love our local Auburn/Opelika businesses, we work with clients across the U.S. via Slack, video calls, and shared dashboards."
        },
        {
            q: "What if I need something not listed?",
            a: "Book a discovery call. We'll tell you honestly whether we can help. If we can't, we'll try to point you to someone who can."
        },
        {
            q: "How quickly can you start?",
            a: "Most clients are onboarded within one week. First deliverable within 2 weeks."
        }
    ];

    return (
        <div className="w-full bg-background min-h-screen pt-32 pb-40">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto px-6 mb-24 relative z-20">
                <span className="text-xs font-mono px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 inline-block tracking-wide uppercase text-accent">Pricing</span>
                <h1 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter mb-8 leading-tight">
                    Simple, Predictable <span className="font-serif italic text-white/50">Pricing.</span>
                </h1>
                <p className="text-xl text-text/60 leading-relaxed font-light">
                    No hourly billing. No surprise invoices. Just a monthly retainer and a team that keeps your automation running and improving.
                </p>
            </div>

            {/* Pricing Grid (Re-used architecture from Home) */}
            <section className="px-6 md:px-12 relative z-40 mb-40">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                        {/* Starter */}
                        <div className="glass-card rounded-[2.5rem] p-10 transform md:scale-95 text-center flex flex-col h-[520px]">
                            <h3 className="font-mono text-sm tracking-widest uppercase mb-4 opacity-70">Starter</h3>
                            <div className="text-4xl font-sans font-bold mb-4">$1,500<span className="text-lg font-normal opacity-50">/mo</span></div>
                            <p className="text-sm opacity-60 mb-8 leading-relaxed mb-auto">Perfect for businesses ready to dip their toes into automation with a focused monthly project.</p>

                            <ul className="text-sm text-left opacity-80 space-y-4 mb-8">
                                <li className="flex gap-3"><CheckCircle2 size={16} className="text-secondary shrink-0" /> 1 automation project/month</li>
                                <li className="flex gap-3"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Basic email and chat support</li>
                                <li className="flex gap-3"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Monthly check-in call</li>
                                <li className="flex gap-3"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Standard turnaround time</li>
                                <li className="flex gap-3"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Access to Horizon portal</li>
                            </ul>
                            <Link to="/contact" className="w-full py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-bold font-sans">Get Started</Link>
                        </div>

                        {/* Growth */}
                        <div className="bg-secondary/10 border-2 border-secondary/30 backdrop-blur-xl rounded-[3rem] p-12 relative shadow-[0_0_50px_-12px_rgba(99,102,241,0.25)] flex flex-col h-[600px] z-10 transform scale-100 hover:scale-[1.02] transition-transform duration-500">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-primary px-4 py-1.5 rounded-full text-xs font-bold font-sans tracking-wide">
                                Most Popular
                            </div>
                            <h3 className="font-mono text-sm tracking-widest uppercase mb-4 text-secondary font-bold text-center">Growth</h3>
                            <div className="text-5xl font-sans font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-secondary text-center">$3,000<span className="text-lg font-normal text-white/50">/mo</span></div>
                            <p className="text-sm text-text/70 mb-8 leading-relaxed mb-auto text-center">For businesses serious about scaling. Multiple projects, priority support, and weekly optimization.</p>

                            <ul className="text-sm text-left text-text/90 space-y-4 mb-8 bg-surface/50 p-6 rounded-3xl">
                                <li className="flex gap-3 font-medium"><CheckCircle2 size={18} className="text-accent shrink-0" /> 2–3 automation projects/month</li>
                                <li className="flex gap-3"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Priority support, fast response</li>
                                <li className="flex gap-3"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Weekly optimization calls</li>
                                <li className="flex gap-3"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Dedicated Slack channel</li>
                                <li className="flex gap-3"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Workflow monitoring and alerts</li>
                            </ul>
                            <Link to="/contact" className="w-full py-4 rounded-full bg-accent text-primary font-bold font-sans tracking-wide text-center glow-amber hover:scale-105 transition-transform">Start Growing</Link>
                        </div>

                        {/* Partner */}
                        <div className="glass-card rounded-[2.5rem] p-10 transform md:scale-95 text-center flex flex-col h-[520px]">
                            <h3 className="font-mono text-sm tracking-widest uppercase mb-4 opacity-70">Partner</h3>
                            <div className="text-4xl font-sans font-bold mb-4">$5,000+<span className="text-lg font-normal opacity-50">/mo</span></div>
                            <p className="text-sm opacity-60 mb-8 leading-relaxed mb-auto">An embedded automation partner for your team. Unlimited scope, SLA guarantees, and deep integration.</p>

                            <ul className="text-sm text-left opacity-80 space-y-4 mb-8">
                                <li className="flex gap-3"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Unlimited project scope</li>
                                <li className="flex gap-3"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Embedded team member feel</li>
                                <li className="flex gap-3"><CheckCircle2 size={16} className="text-secondary shrink-0" /> SLA-backed response times</li>
                                <li className="flex gap-3"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Custom integrations & APIs</li>
                                <li className="flex gap-3"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Proactive monitoring</li>
                            </ul>
                            <Link to="/contact" className="w-full py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-bold font-sans">Become a Partner</Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="px-6 md:px-12 max-w-3xl mx-auto">
                <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tighter mb-10 text-center">Frequently Asked Questions</h2>
                <div className="glass-card rounded-[2rem] p-8 md:p-12 border-white/5">
                    {faqs.map((faq, idx) => (
                        <FaqItem key={idx} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <div className="mt-32 text-center">
                <p className="text-lg text-text/60 mb-6">Still Have Questions?</p>
                <Link to="/contact" className="magnetic-button inline-flex px-8 py-4 rounded-full bg-white/10 text-text font-sans font-bold hover:bg-white/20 transition-colors">
                    Book a Free Discovery Call
                </Link>
            </div>

        </div>
    );
}
