import React, { useState } from "react";

function ContactModal({ open, onClose }) {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc_si-6PSLv3zk1StjRvJUYmt0HBj1O23u4KmdQazhlrKM7Ig/formResponse";
        const params = new URLSearchParams({
            "entry.1783252897": form.name,
            "entry.671003680": form.email,
            "entry.237137396": form.message,
        });
        fetch(`${formUrl}?${params.toString()}`, {
            method: "GET",
            mode: "no-cors",
        });
        alert("Message sent! Thank you for contacting me.");
        setForm({ name: "", email: "", message: "" });
        onClose();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/30 backdrop-blur-md"
                onClick={onClose}
                aria-label="Close modal"
            />
            <div className="relative bg-[#101a17] rounded-2xl shadow-lg p-8 w-full max-w-md z-10">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-[#38FFB3] text-2xl hover:text-[#2ad89c] transition"
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-xl font-mono text-center text-[#38FFB3] mb-4">Contact Me</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="px-4 py-2 rounded bg-[#18221f] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#38FFB3]"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="px-4 py-2 rounded bg-[#18221f] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#38FFB3]"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="px-4 py-2 rounded bg-[#18221f] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#38FFB3] min-h-[100px]"
                    />
                    <button
                        type="submit"
                        className="bg-[#38FFB3] text-[#0B1512] font-mono font-bold px-6 py-2 rounded hover:bg-[#2ad89c] transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactModal;
