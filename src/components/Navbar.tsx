"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6vw] py-6 bg-[rgba(250,250,248,0.9)] backdrop-blur-[12px] border-bottom border-border-subtle">
            <Link href="/" className="font-serif text-[1.4rem] text-black tracking-[-0.02em] no-underline">
                Bill<span className="text-green-primary">Break</span>
            </Link>
            <ul className="hidden md:flex list-none gap-10 items-center">
                <li>
                    <Link href="/#features" className="text-gray-muted text-[0.9rem] font-normal tracking-[0.01em] transition-colors hover:text-black no-underline">
                        Features
                    </Link>
                </li>
                <li>
                    <Link href="/add-expense" className="text-gray-muted text-[0.9rem] font-normal tracking-[0.01em] transition-colors hover:text-black no-underline">
                        Expenses
                    </Link>
                </li>
                <li>
                    <Link href="/add-member" className="btn btn-primary no-underline">
                        Get Started
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
