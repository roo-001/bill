"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const TOTAL_EXPENSES = 14320;

export default function AddMember() {
    const [members, setMembers] = useState([
        { id: 1, name: "Arjun Mehta", role: "Admin", avatar: "👨" },
        { id: 2, name: "Priya Sharma", role: "Member", avatar: "👩" },
        { id: 3, name: "Rahul Nair", role: "Member", avatar: "🧑" },
        { id: 4, name: "Nisha Kapoor", role: "Guest", avatar: "👵" },
    ]);

    const [name, setName] = useState("");
    const [role, setRole] = useState("Member");
    const [email, setEmail] = useState("");
    const [selectedAvatar, setSelectedAvatar] = useState("🧑");
    const [error, setError] = useState("");
    const [toast, setToast] = useState("");

    const avatars = ["🧑", "👩", "👨", "🧒", "👴", "👵", "🧑‍💻", "🧑‍🍳"];

    const showToast = (msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(""), 3000);
    };

    const handleAddMember = () => {
        if (!name.trim()) {
            setError("Please enter a name.");
            return;
        }

        const newMember = {
            id: Date.now(),
            name,
            role,
            avatar: selectedAvatar,
        };

        setMembers([...members, newMember]);
        showToast(`${name} added to household!`);

        // Reset form
        setName("");
        setRole("Member");
        setEmail("");
        setError("");
    };

    const removeMember = (id: number) => {
        setMembers(members.filter(m => m.id !== id));
    };

    const perPersonShare = members.length > 0 ? Math.round(TOTAL_EXPENSES / members.length) : 0;

    return (
        <main className="min-h-screen pt-24">
            <Navbar />

            <div className="max-w-[1100px] mx-auto w-full p-8 md:p-12 flex flex-col md:flex-row gap-12 items-start">

                {/* FORM COLUMN */}
                <div className="flex-[0_0_420px] w-full animate-[fadeUp_0.5s_ease_both]">
                    <div className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-green-primary mb-2">Members</div>
                    <h1 className="font-serif text-[2.2rem] tracking-[-0.03em] leading-[1.1] mb-2">Add a member</h1>
                    <p className="text-[0.9rem] text-gray-muted mb-10 font-light leading-[1.6]">
                        Add everyone who shares household expenses. Each member will have bills split equally.
                    </p>

                    <div className="bg-white border border-border-subtle rounded-[14px] p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                        {/* Avatar Picker */}
                        <div className="mb-6">
                            <label className="block text-[0.82rem] font-medium text-black mb-3">Choose an avatar</label>
                            <div className="flex gap-2 flex-wrap">
                                {avatars.map(emoji => (
                                    <button
                                        key={emoji}
                                        onClick={() => setSelectedAvatar(emoji)}
                                        className={`w-11 h-11 rounded-full border-2 flex items-center justify-center text-[1.3rem] transition-all bg-cream hover:border-green-light hover:scale-105 ${selectedAvatar === emoji ? "border-green-primary bg-green-pale shadow-[0_0_0_3px_rgba(82,183,136,0.2)]" : "border-border-subtle"
                                            }`}
                                    >
                                        {emoji}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Name input */}
                        <div className="mb-6">
                            <label className="block text-[0.82rem] font-medium text-black mb-2">
                                Full Name <span className="text-green-primary ml-0.5">*</span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g. Arjun Mehta"
                                className={`w-full p-3 border-2 rounded-lg text-[0.92rem] outline-none transition-all ${error ? "border-[#c0392b] bg-[#fde8e8]/10" : "border-border-subtle focus:border-green-light focus:shadow-[0_0_0_3px_rgba(82,183,136,0.12)]"
                                    }`}
                            />
                            {error && <div className="text-[0.76rem] text-[#c0392b] mt-1.5">{error}</div>}
                        </div>

                        {/* Role select */}
                        <div className="mb-6 relative">
                            <label className="block text-[0.82rem] font-medium text-black mb-2">Role</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full p-3 border-2 border-border-subtle rounded-lg text-[0.92rem] outline-none appearance-none bg-white focus:border-green-light"
                            >
                                <option value="Member">Member</option>
                                <option value="Admin">Admin</option>
                                <option value="Guest">Guest</option>
                            </select>
                            <div className="text-[0.76rem] text-gray-muted mt-1.5">Admins can add and remove members.</div>
                        </div>

                        <button onClick={handleAddMember} className="btn btn-primary w-full py-3.5 mt-2 justify-center">
                            <span>➕</span> Add Member
                        </button>
                        <Link href="/" className="btn btn-outline w-full py-3 mt-3 justify-center text-gray-muted no-underline">
                            Cancel
                        </Link>
                    </div>
                </div>

                {/* MEMBERS COLUMN */}
                <div className="flex-1 w-full animate-[fadeUp_0.5s_0.15s_ease_both]">
                    <div className="flex items-center justify-between mb-6">
                        <div className="font-serif text-[1.35rem] tracking-[-0.02em]">Current Members</div>
                        <div className="bg-green-pale text-green-primary text-[0.78rem] font-medium px-3 py-1 rounded-full">
                            {members.length} member{members.length !== 1 ? "s" : ""}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        {members.length === 0 ? (
                            <div className="text-center py-16 px-8 text-gray-muted border-2 border-dashed border-border-subtle rounded-xl">
                                <div className="text-[2.5rem] mb-3">👥</div>
                                <div className="text-[0.9rem] leading-relaxed">No members yet.<br />Add your first household member.</div>
                            </div>
                        ) : (
                            members.map((m, i) => (
                                <div key={m.id} className="bg-white border border-border-subtle rounded-xl p-4 flex items-center gap-4 transition-all hover:border-green-light hover:shadow-sm animate-[slideIn_0.35s_ease_both]" style={{ animationDelay: `${i * 0.05}s` }}>
                                    <div className="w-[42px] h-[42px] rounded-full bg-green-pale flex items-center justify-center text-[1.3rem] shrink-0">
                                        {m.avatar}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-[0.95rem]">{m.name}</div>
                                        <div className="text-[0.75rem] text-gray-muted">{m.role}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-serif text-[1.1rem] text-green-primary tracking-[-0.02em]">
                                            ₹{perPersonShare.toLocaleString()}
                                        </div>
                                        <div className="text-[0.7rem] text-gray-muted mt-0.5">owes</div>
                                    </div>
                                    <button onClick={() => removeMember(m.id)} className="text-border-subtle hover:text-[#c0392b] hover:bg-[#fde8e8] p-1.5 rounded transition-colors ml-2">
                                        ✕
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="mt-5 bg-cream border border-border-subtle rounded-xl p-5 flex justify-between items-center shadow-sm">
                        <span className="text-[0.85rem] text-gray-muted">Per person share (₹14,320 total)</span>
                        <span className="font-serif text-[1.5rem] tracking-[-0.02em] text-black">
                            ₹{perPersonShare.toLocaleString()}
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
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
        </main>
    );
}
