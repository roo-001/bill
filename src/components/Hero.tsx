"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-[6vw] pt-32 pb-24 relative">
            <div className="inline-flex items-center gap-2 bg-green-pale text-green-primary text-[0.8rem] font-medium tracking-[0.06em] uppercase px-[0.9rem] py-[0.35rem] rounded-[100px] mb-8 w-fit animate-[fadeUp_0.6s_ease_both]">
                ✦ Household Finance Made Easy
            </div>

            <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] leading-[1.05] tracking-[-0.03em] max-w-[14ch] animate-[fadeUp_0.6s_0.1s_ease_both]">
                Split bills, <em className="italic text-green-primary not-italic">not</em> friendships.
            </h1>

            <p className="mt-6 text-[1.15rem] text-gray-muted max-w-[48ch] font-light leading-[1.7] animate-[fadeUp_0.6s_0.2s_ease_both]">
                BillBreak keeps every shared expense transparent and fair — for families, roommates, and everyone in between.
            </p>

            <div className="mt-10 flex gap-4 items-center flex-wrap animate-[fadeUp_0.6s_0.3s_ease_both]">
                <Link href="/add-member" className="btn btn-primary text-[1rem] py-[0.9rem] px-8 rounded-lg no-underline">
                    Start for free →
                </Link>
                <Link href="#how" className="btn btn-outline text-[1rem] py-[0.9rem] px-8 rounded-lg no-underline">
                    See how it works
                </Link>
            </div>

            {/* Dashboard Preview - Simplified for now */}
            <div className="mt-24 animate-[fadeUp_0.8s_0.4s_ease_both]">
                <div className="bg-cream border border-border-subtle rounded-2xl p-8 max-w-[780px] shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                    <div className="flex items-center gap-2 mb-6 text-gray-muted text-[0.78rem]">
                        <div className="flex gap-2">
                            <div className="w-[10px] h-[10px] rounded-full bg-[#ff6b6b]"></div>
                            <div className="w-[10px] h-[10px] rounded-full bg-[#ffd93d]"></div>
                            <div className="w-[10px] h-[10px] rounded-full bg-[#6bcb77]"></div>
                        </div>
                        <span className="ml-2">BillBreak Dashboard — Demo</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white border border-border-subtle rounded-lg p-4">
                            <div className="text-[0.72rem] text-gray-muted uppercase tracking-[0.05em] mb-1">Total Expenses</div>
                            <div className="font-serif text-[1.7rem] text-black tracking-[-0.02em]">₹14,320</div>
                        </div>
                        <div className="bg-white border border-border-subtle rounded-lg p-4">
                            <div className="text-[0.72rem] text-gray-muted uppercase tracking-[0.05em] mb-1">Members</div>
                            <div className="font-serif text-[1.7rem] text-black tracking-[-0.02em]">4</div>
                        </div>
                        <div className="bg-white border border-border-subtle rounded-lg p-4">
                            <div className="text-[0.72rem] text-gray-muted uppercase tracking-[0.05em] mb-1">Per Person</div>
                            <div className="font-serif text-[1.7rem] text-green-primary tracking-[-0.02em]">₹3,580</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
