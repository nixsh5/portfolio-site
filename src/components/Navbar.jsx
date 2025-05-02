import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Typewriter } from "react-simple-typewriter";

function Navbar({ onContactClick }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Skills", href: "/skills" },
    ];

    // Helper for deciding Link vs <a>
    const NavLink = ({ link, onClick }) =>
        link.href.startsWith("/") ? (
            <Link
                to={link.href}
                className="bg-[#102820] px-4 py-1 text-xs font-semibold text-[#38FFB3] rounded hover:bg-[#38FFB3]/10 transition"
                onClick={onClick}
            >
                {link.name.toUpperCase()}
            </Link>
        ) : (
            <a
                href={link.href}
                className="bg-[#102820] px-4 py-1 text-xs font-semibold text-[#38FFB3] rounded hover:bg-[#38FFB3]/10 transition"
                onClick={onClick}
            >
                {link.name.toUpperCase()}
            </a>
        );

    return (
        <nav className="w-full bg-[#0B1512] px-4 py-0">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
                {/* Logo */}
                <span className="text-[#38FFB3] font-mono font-thin text-2xl tracking-wider">
                    <Typewriter
                        words={["@nixsh5"]}
                        cursor
                        cursorStyle="_"
                        typeSpeed={120}
                    />
                </span>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-3">
                    {navLinks.map(link => (
                        <NavLink key={link.name} link={link} />
                    ))}
                    <button
                        onClick={onContactClick}
                        className="bg-[#102820] px-4 py-1 text-xs font-semibold text-[#38FFB3] rounded hover:bg-[#38FFB3]/10 transition"
                        type="button"
                    >
                        CONTACT
                    </button>
                    <a
                        href="https://drive.google.com/file/d/1G-WjNgac0du-GprrliK_-9xLmBf62zNk/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#38FFB3] px-4 py-1 text-xs font-semibold text-[#0B1512] rounded hover:bg-[#38FFB3]/90 transition"
                        download
                    >
                        RESUME
                    </a>
                </div>

                {/* Hamburger (Mobile) */}
                <button
                    className="md:hidden p-2 rounded text-[#38FFB3] focus:outline-none"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <HamburgerMenuIcon className="w-7 h-7" />
                </button>
            </div>

            {/* Mobile Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 bg-[#0B1512] bg-opacity-95 flex flex-col">
                    <div className="flex items-center justify-between px-4 py-3">
                        <span className="text-[#38FFB3] font-mono font-thin text-2xl tracking-wider">
                            <Typewriter
                                words={["@nixsh5"]}
                                cursor
                                cursorStyle="_"
                                typeSpeed={120}
                            />
                        </span>
                        <button
                            className="p-2 rounded text-[#38FFB3] focus:outline-none"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <Cross2Icon className="w-7 h-7" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center space-y-4 mt-8">
                        {navLinks.map(link => (
                            <NavLink
                                key={link.name}
                                link={link}
                                onClick={() => setMenuOpen(false)}
                            />
                        ))}
                        <button
                            onClick={() => {
                                setMenuOpen(false);
                                onContactClick();
                            }}
                            className="w-full bg-[#102820] px-4 py-2 text-xs font-semibold text-[#38FFB3] rounded hover:bg-[#38FFB3]/10 transition text-center"
                            type="button"
                        >
                            CONTACT
                        </button>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#38FFB3] px-4 py-2 text-xs font-semibold text-[#0B1512] rounded hover:bg-[#38FFB3]/90 transition text-center"
                            download
                            onClick={() => setMenuOpen(false)}
                        >
                            RESUME
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
