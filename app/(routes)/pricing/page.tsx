import Header from "../_common/header";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
    return (
        <div className="w-full min-h-screen bg-background relative overflow-hidden flex flex-col">
            <Header />

            <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 relative z-10">

                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointing-events-none -z-10" />

                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Simple, Transparent <span className="text-primary">Pricing</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Choose the plan that fits your needs. No hidden fees. Cancel anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">

                    {/* Free Plan */}
                    <div className="relative group rounded-3xl border bg-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="mb-4">
                            <h3 className="text-lg font-medium text-muted-foreground">Starter</h3>
                            <div className="flex items-baseline gap-1 mt-2">
                                <span className="text-4xl font-bold">$0</span>
                                <span className="text-muted-foreground">/month</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Perfect for hobbyists and experimentation.</p>
                        </div>
                        <Button variant="outline" className="w-full mb-8">Get Started</Button>
                        <ul className="space-y-3 text-sm">
                            <li className="flex gap-3"><CheckIcon className="w-5 h-5 text-primary" /> 3 Projects</li>
                            <li className="flex gap-3"><CheckIcon className="w-5 h-5 text-primary" /> 10 AI Generations/mo</li>
                            <li className="flex gap-3"><CheckIcon className="w-5 h-5 text-primary" /> Standard Support</li>
                        </ul>
                    </div>

                    {/* Pro Plan (Popular) */}
                    <div className="relative group rounded-3xl border border-primary bg-card p-8 shadow-xl scale-105 z-20">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Most Popular
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-medium text-primary">Pro</h3>
                            <div className="flex items-baseline gap-1 mt-2">
                                <span className="text-5xl font-bold">$29</span>
                                <span className="text-muted-foreground">/month</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">For serious designers and developers.</p>
                        </div>
                        <Button className="w-full mb-8" size="lg">Upgrade to Pro</Button>
                        <ul className="space-y-3 text-sm">
                            <li className="flex gap-3"><CheckIcon className="w-5 h-5 text-primary" /> Unlimited Projects</li>
                            <li className="flex gap-3"><CheckIcon className="w-5 h-5 text-primary" /> Unlimited AI Generations</li>
                            <li className="flex gap-3"><CheckIcon className="w-5 h-5 text-primary" /> Priority Support</li>
                            <li className="flex gap-3"><CheckIcon className="w-5 h-5 text-primary" /> Export to React/Tailwind</li>
                            <li className="flex gap-3"><CheckIcon className="w-5 h-5 text-primary" /> Advanced Themes</li>
                        </ul>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="relative group rounded-3xl border bg-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="mb-4">
                            <h3 className="text-lg font-medium text-muted-foreground">Enterprise</h3>
                            <div className="flex items-baseline gap-1 mt-2">
                                <span className="text-4xl font-bold">$99</span>
                                <span className="text-muted-foreground">/month</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">For teams and large organizations.</p>
                        </div>
                        <Button variant="outline" className="w-full mb-8">Contact Sales</Button>
                        <ul className="space-y-3 text-sm">
                            <li className="flex gap-3"><CheckIcon className="w-5 h-5 text-primary" /> Everything in Pro</li>
                            <li className="flex gap-3"><CheckIcon className="w-5 h-5 text-primary" /> Team Collaboration</li>
                            <li className="flex gap-3"><CheckIcon className="w-5 h-5 text-primary" /> Dedicated Account Manager</li>
                            <li className="flex gap-3"><CheckIcon className="w-5 h-5 text-primary" /> SSO & Audit Logs</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PricingPage;
