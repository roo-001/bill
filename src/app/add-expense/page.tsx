"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function AddExpense() {
    const [members] = useState([
        { id: 1, name: "Arjun Mehta", avatar: "👨" },
        { id: 2, name: "Priya Sharma", avatar: "👩" },
        { id: 3, name: "Rahul Nair", avatar: "🧑" },
        { id: 4, name: "Nisha Kapoor", avatar: "👵" },
    ]);

    const [expenses, setExpenses] = useState([
        { id: 1, title: "Electricity Bill", amount: 2400, paid_by: 1, icon: "⚡" },
        { id: 2, title: "Grocery Run", amount: 3200, paid_by: 2, icon: "🛒" },
        { id: 3, title: "Internet & Cable", amount: 1800, paid_by: 3, icon: "🌐" },
    ]);

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [paidBy, setPaidBy] = useState("");
    const [selectedCategory, setSelectedCategory] = useState({ icon: "🏠", label: "Rent" });
    const [toast, setToast] = useState("");

    const categories = [
        { icon: "🏠", label: "Rent" },
        { icon: "⚡", label: "Utilities" },
        { icon: "🛒", label: "Groceries" },
        { icon: "🍕", label: "Food" },
        { icon: "🌐", label: "Internet" },
        { icon: "📦", label: "Other" },
    ];

    const handleAddExpense = () => {
        if (!title || !amount || !paidBy) return;

        const newExpense = {
            id: Date.now(),
            title,
            amount: parseFloat(amount),
            paid_by: parseInt(paidBy),
            icon: selectedCategory.icon,
        };

        setExpenses([newExpense, ...expenses]);
        setToast(`"${title}" added — ₹${parseFloat(amount).toLocaleString()} split 4 ways`);

        // Reset
        setTitle("");
        setAmount("");
        setPaidBy("");
        setTimeout(() => setToast(""), 3000);
    };

    const totalHouseholdExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    const splitPreviewAmount = amount ? parseFloat(amount) / members.length : 0;

    return (
        <main className="min-h-screen pt-24 pb-12">
            <Navbar />

            <div className="max-w-[1100px] mx-auto w-full p-8 md:p-12 flex flex-col md:flex-row gap-12 items-start">

                {/* FORM COLUMN */}
                <div className="flex-[0_0_440px] w-full animate-[fadeUp_0.5s_ease_both]">
                    <div className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-green-primary mb-2">Expenses</div>
                    <h1 className="font-serif text-[2.2rem] tracking-[-0.03em] leading-[1.1] mb-2">Add an expense</h1>
                    <p className="text-[0.9rem] text-gray-muted mb-10 font-light leading-[1.6]">
                        Record a shared bill. It will be split equally among all household members.
                    </p>

                    <div className="bg-white border border-border-subtle rounded-[14px] p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                        {/* Category Chips */}
                        <div className="mb-6">
                            <label className="block text-[0.82rem] font-medium text-black mb-3">Category</label>
                            <div className="flex flex-wrap gap-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat.label}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-3.5 py-1.5 rounded-full border-1.5 text-[0.8rem] transition-all flex items-center gap-1.5 ${selectedCategory.label === cat.label
                                                ? "bg-green-pale border-green-primary text-green-primary font-medium"
                                                : "bg-white border-border-subtle text-gray-muted hover:border-green-light hover:text-black"
                                            }`}
                                    >
                                        <span>{cat.icon}</span> {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Title input */}
                        <div className="mb-6">
                            <label className="block text-[0.82rem] font-medium text-black mb-2">
                                Expense Title <span className="text-green-primary ml-0.5">*</span>
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder={`e.g. ${selectedCategory.label} Bill`}
                                className="w-full p-3 border-2 border-border-subtle rounded-lg text-[0.92rem] outline-none focus:border-green-light transition-all"
                            />
                        </div>

                        {/* Amount input */}
                        <div className="mb-6">
                            <label className="block text-[0.82rem] font-medium text-black mb-2">
                                Amount <span className="text-green-primary ml-0.5">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-muted font-medium">₹</span>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="0.00"
                                    className="w-full pl-8 pr-4 py-3 border-2 border-border-subtle rounded-lg text-[0.92rem] outline-none focus:border-green-light transition-all"
                                />
                            </div>
                        </div>

                        {/* Paid By select */}
                        <div className="mb-6 relative">
                            <label className="block text-[0.82rem] font-medium text-black mb-2">Paid by <span className="text-green-primary ml-0.5">*</span></label>
                            <select
                                value={paidBy}
                                onChange={(e) => setPaidBy(e.target.value)}
                                className="w-full p-3 border-2 border-border-subtle rounded-lg text-[0.92rem] outline-none appearance-none bg-white focus:border-green-light"
                            >
                                <option value="">— Select member —</option>
                                {members.map(m => (
                                    <option key={m.id} value={m.id}>{m.avatar} {m.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Split Preview */}
                        <div className="bg-cream border border-border-subtle rounded-xl p-5 mb-8">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[0.78rem] font-medium text-gray-muted uppercase tracking-wider">⚡ Auto-split preview</span>
                                <span className="font-serif text-green-primary">₹{amount ? parseFloat(amount).toLocaleString() : "—"}</span>
                            </div>

                            <div className="flex flex-col gap-2.5">
                                {amount ? members.map(m => (
                                    <div key={m.id} className="flex items-center justify-between text-[0.84rem]">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-green-pale flex items-center justify-center text-[0.75rem]">{m.avatar}</div>
                                            <span>{m.name} {m.id === parseInt(paidBy) && <span className="text-[#e8a020] text-[0.7rem]">(paid)</span>}</span>
                                        </div>
                                        <span className="text-green-primary font-medium">₹{splitPreviewAmount.toLocaleString()}</span>
                                    </div>
                                )) : (
                                    <div className="text-[0.82rem] text-gray-muted text-center py-1">Enter an amount to preview the split.</div>
                                )}
                            </div>
                        </div>

                        <button onClick={handleAddExpense} className="btn btn-primary w-full py-3.5 justify-center">
                            ➕ Add Expense
                        </button>
                        <Link href="/" className="btn btn-outline w-full py-3 mt-3 justify-center text-gray-muted no-underline">
                            Cancel
                        </Link>
                    </div>
                </div>

                {/* EXPENSES COLUMN */}
                <div className="flex-1 w-full animate-[fadeUp_0.5s_0.15s_ease_both]">
                    <div className="flex items-center justify-between mb-6">
                        <div className="font-serif text-[1.35rem] tracking-[-0.02em]">Recent Expenses</div>
                        <div className="bg-green-pale text-green-primary text-[0.78rem] font-medium px-3 py-1 rounded-full">
                            {expenses.length} expense{expenses.length !== 1 ? "s" : ""}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        {expenses.length === 0 ? (
                            <div className="text-center py-16 px-8 text-gray-muted border-2 border-dashed border-border-subtle rounded-xl">
                                <div className="text-[2.5rem] mb-3">📋</div>
                                <div className="text-[0.9rem] leading-relaxed">No expenses yet.<br />Add your first shared bill.</div>
                            </div>
                        ) : (
                            expenses.map((exp, i) => {
                                const payer = members.find(m => m.id === exp.paid_by);
                                return (
                                    <div key={exp.id} className="bg-white border border-border-subtle rounded-xl p-5 transition-all hover:border-green-light hover:shadow-sm animate-[slideIn_0.35s_ease_both]" style={{ animationDelay: `${i * 0.05}s` }}>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-[38px] h-[38px] rounded-lg bg-green-pale flex items-center justify-center text-[1.1rem] shrink-0">
                                                    {exp.icon || "📦"}
                                                </div>
                                                <div>
                                                    <div className="font-medium text-[0.93rem]">{exp.title}</div>
                                                    <div className="text-[0.75rem] text-gray-muted">Paid by {payer ? `${payer.avatar} ${payer.name}` : "Unknown"}</div>
                                                </div>
                                            </div>
                                            <div className="font-serif text-[1.2rem] text-black tracking-[-0.02em]">
                                                ₹{exp.amount.toLocaleString()}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between pt-3 border-t border-border-subtle">
                                            <div className="flex -space-x-1">
                                                {members.map(m => (
                                                    <div key={m.id} className="w-[22px] h-[22px] rounded-full bg-cream border-[1.5px] border-white flex items-center justify-center text-[0.65rem]">
                                                        {m.avatar}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="text-[0.78rem] text-green-primary font-medium">
                                                ₹{(exp.amount / members.length).toLocaleString()} per person
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>

                    <div className="mt-5 bg-cream border border-border-subtle rounded-xl p-5 flex justify-between items-center shadow-sm">
                        <span className="text-[0.85rem] text-gray-muted">Total household expenses</span>
                        <span className="font-serif text-[1.5rem] tracking-[-0.02em] text-black">
                            ₹{totalHouseholdExpenses.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>

            {/* TOAST */}
            <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full text-[0.88rem] flex items-center gap-2 transition-transform duration-300 z-[200] whitespace-nowrap ${toast ? "translate-y-0" : "translate-y-24"}`}>
                ✅ {toast}
            </div>

            <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </main>
    );
}
