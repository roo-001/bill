import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Stats Strip */}
      <div className="border-t border-b border-border-subtle grid grid-cols-1 md:grid-cols-3">
        <div className="p-12 md:px-[6vw] md:py-12 border-b md:border-b-0 md:border-r border-border-subtle text-center">
          <div className="font-serif text-[3rem] tracking-[-0.03em] text-green-primary">100%</div>
          <div className="text-[0.85rem] text-gray-muted mt-1">Equal split, every time</div>
        </div>
        <div className="p-12 md:px-[6vw] md:py-12 border-b md:border-b-0 md:border-r border-border-subtle text-center">
          <div className="font-serif text-[3rem] tracking-[-0.03em] text-green-primary">0</div>
          <div className="text-[0.85rem] text-gray-muted mt-1">Disputes left unresolved</div>
        </div>
        <div className="p-12 md:px-[6vw] md:py-12 text-center">
          <div className="font-serif text-[3rem] tracking-[-0.03em] text-green-primary">∞</div>
          <div className="text-[0.85rem] text-gray-muted mt-1">Members you can add</div>
        </div>
      </div>

      {/* Features */}
      <section className="px-[6vw] py-32" id="features">
        <div className="text-[0.78rem] font-medium tracking-[0.1em] uppercase text-green-primary mb-4">Features</div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] tracking-[-0.03em] leading-[1.1] max-w-[20ch]">
          Everything you need for shared living.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-16 border border-border-subtle rounded-xl overflow-hidden bg-border-subtle">
          {[
            { icon: "👥", title: "Member Management", desc: "Add or remove household members in seconds. Everyone gets a clear view of who's part of the pool." },
            { icon: "📋", title: "Expense Recording", desc: "Log any shared expense with a name and amount. BillBreak stores and organizes every entry automatically." },
            { icon: "⚡", title: "Auto-Split", desc: "Bills are instantly divided equally among all members. No manual math, no arguments about who owes what." },
            { icon: "📊", title: "Central Dashboard", desc: "A single view showing total expenses, per-person share, and every recorded bill — always up to date." },
            { icon: "🔒", title: "Transparent History", desc: "Every expense is logged with who added it and when. Full accountability, zero confusion." },
            { icon: "🛠️", title: "Lightweight & Fast", desc: "Built on Next.js — no bloat, no subscriptions. Just a simple tool that works." },
          ].map((feature, i) => (
            <div key={i} className="bg-white p-10 transition-colors hover:bg-cream">
              <div className="w-11 h-11 rounded-lg bg-green-pale flex items-center justify-center text-[1.2rem] mb-5">
                {feature.icon}
              </div>
              <h3 className="font-serif text-[1.2rem] mb-2 tracking-[-0.02em]">{feature.title}</h3>
              <p className="text-[0.9rem] text-gray-muted leading-[1.65]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="px-[6vw] py-32 bg-cream" id="how">
        <div className="text-[0.78rem] font-medium tracking-[0.1em] uppercase text-green-primary mb-4">How it works</div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] tracking-[-0.03em] leading-[1.1]">
          Up and running in minutes.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
          {[
            { num: "01", title: "Create your household", desc: "Set up BillBreak and give your household a name. Takes under a minute." },
            { num: "02", title: "Add members", desc: "Add everyone who shares expenses — family, roommates, or flatmates." },
            { num: "03", title: "Log expenses", desc: "Whenever a shared bill comes in, record it with a name and amount." },
            { num: "04", title: "See everyone's share", desc: "BillBreak automatically calculates and displays what each person owes." },
          ].map((step, i) => (
            <div key={i}>
              <div className="font-serif text-[3rem] text-border-subtle leading-none mb-4">{step.num}</div>
              <div className="h-[1px] bg-border-subtle w-full mb-3"></div>
              <h4 className="font-medium mb-2 text-[0.95rem]">{step.title}</h4>
              <p className="text-[0.85rem] text-gray-muted leading-[1.6]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-[6vw] py-40 text-center flex flex-col items-center">
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] tracking-[-0.03em] leading-[1.05] max-w-[18ch] mb-6">
          Ready to end the bill confusion?
        </h2>
        <p className="text-gray-muted text-[1rem] max-w-[40ch] mb-10 font-light">
          BillBreak is free, open, and ready to deploy. No subscriptions, no accounts — just clarity.
        </p>
        <Link href="/add-member" className="btn btn-primary text-[1rem] py-[0.9rem] px-8 rounded-lg no-underline">
          Get BillBreak →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-subtle p-12 md:px-[6vw] flex flex-col md:flex-row items-center justify-between gap-6 text-[0.82rem] text-gray-muted">
        <Link href="/" className="font-serif text-[1.1rem] text-black tracking-[-0.02em] no-underline">
          Bill<span className="text-green-primary">Break</span>
        </Link>
        <span>Built with Next.js · © 2025 BillBreak</span>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-black transition-colors no-underline">GitHub</Link>
          <Link href="#" className="hover:text-black transition-colors no-underline">Docs</Link>
          <Link href="#" className="hover:text-black transition-colors no-underline">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
