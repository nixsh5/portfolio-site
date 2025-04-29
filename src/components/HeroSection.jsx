import React from "react";
import Starfield from "react-starfield";
import { FaGithub, FaLinkedin, FaRedditAlien, FaStackOverflow, FaXTwitter } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { FiMail } from "react-icons/fi";

function HeroSection({ onContactClick }) {
    return (
        <section
            id="home"
            className="relative bg-[#0B1512] min-h-[100vh] flex flex-col justify-center items-center px-4 py-12 overflow-hidden"
        >
            <Starfield
                starCount={13000}
                starColor={[56, 255, 179]}
                speedFactor={0.05}
                backgroundColor="#0B1512"
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-mono font-thin tracking-wider text-center text-[#38FFB3] mb-6">
                    <Typewriter
                        words={["Nish Deshmukh"]}
                        cursor
                        cursorStyle="_"
                        typeSpeed={60}
                    />
                </h1>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {["Android [Java/Kotlin]", "Python", "Node.js", "React.js", "Google Cloud Platform"].map(skill => (
                        <span
                            key={skill}
                            className="text-[#38FFB3] font-mono text-base px-2 py-1 rounded bg-[#101a17] bg-opacity-70"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
                <div className="flex gap-6 mb-10">
                    <button
                        onClick={onContactClick}
                        className="px-8 py-3 rounded-full border-2 border-[#38FFB3] text-[#38FFB3] font-semibold text-lg hover:bg-[#38FFB3] hover:text-[#0B1512] transition"
                    >
                        Contact Me
                    </button>
                    <a
                        href="/projects"
                        className="px-8 py-3 rounded-full border-2 border-[#38FFB3] text-[#38FFB3] font-semibold text-lg hover:bg-[#38FFB3] hover:text-[#0B1512] transition"
                    >
                        View Projects
                    </a>
                </div>
                <div className="flex flex-wrap justify-center gap-8 mt-4">
                    <a href="https://linkedin.com/in/nishdeshmukh" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-[#38FFB3] hover:text-[#0077B5] transition text-4xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/nixsh5" target="_blank" rel="noopener noreferrer" title="Github" className="text-[#38FFB3] hover:text-[#FFFFFF] transition text-4xl">
                        <FaGithub />
                    </a>
                    <a href="https://x.com/nixsh5" target="_blank" rel="noopener noreferrer" title="X (Twitter)" className="text-[#38FFB3] hover:text-black transition text-4xl">
                        <FaXTwitter />
                    </a>
                    <a href="mailto:nishdeshmukh2004@gmail.com" title="Email" className="text-[#38FFB3] hover:text-[#D14836] transition text-4xl">
                        <FiMail />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
