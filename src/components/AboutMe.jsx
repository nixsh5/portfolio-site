import React from "react";
import Starfield from "react-starfield";
import myPhoto from '../components/photo.jpg';
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaRedditAlien, FaStackOverflow, FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export default function AboutMe() {
    return (
        <div className="min-h-screen bg-[#0B1512] p-12 flex flex-col items-center relative overflow-hidden">
            <Starfield
                starCount={8000}
                starColor={[56, 255, 179]}
                speedFactor={0.04}
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
            <div className="relative z-10 w-full max-w-5xl bg-[#101a17]/70 backdrop-blur-lg border border-[#222c3c] rounded-xl p-12 shadow-lg flex flex-col items-center">
                <img
                    src={myPhoto}
                    alt="Nish Deshmukh"
                    className="w-36 h-36 rounded-full mb-6 border-6 border-[#38FFB3] object-cover"
                />
                <h1 className="text-4xl font-mono text-[#38FFB3] mb-4">
                    <Typewriter
                        words={["About Me"]}
                        cursor
                        cursorStyle="_"
                        typeSpeed={120}
                    />
                </h1>
                <p className="text-gray-200 font-mono text-xl mb-6 text-center">
                    Hello! I’m <span className="text-[#38FFB3] font-bold">Nish Deshmukh</span>, an enthusiastic Android and web developer with a strong interest in building engaging mobile applications and modern websites. I enjoy collaborating on innovative projects and am always eager to learn new technologies and best practices in software development.
                </p>
                <p className="text-gray-200 font-mono text-xl mb-6 text-center">
                    I am currently expanding my expertise in backend development and the MERN stack, and I’m passionate about creating robust, user-friendly solutions. I believe in continuous learning and enjoy tackling complex technical challenges.
                </p>
                <p className="text-gray-400 font-mono text-lg mb-4 text-center">
                    Fun fact: I can solve over 15 different types of Rubik’s cubes and puzzles!
                </p>
                <div className="flex flex-wrap justify-center gap-8 mt-4">
                    <a href="https://linkedin.com/in/nishdeshmukh" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-[#38FFB3] hover:text-[#0077B5] transition text-3xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://reddit.com/user/XpuppeteerX" target="_blank" rel="noopener noreferrer" title="Reddit" className="text-[#38FFB3] hover:text-[#FF4500] transition text-3xl">
                        <FaRedditAlien />
                    </a>
                    <a href="https://stackoverflow.com/users/30393099" target="_blank" rel="noopener noreferrer" title="Stack Overflow" className="text-[#38FFB3] hover:text-[#FE7A16] transition text-3xl">
                        <FaStackOverflow />
                    </a>
                    <a href="https://x.com/nixsh5" target="_blank" rel="noopener noreferrer" title="X (Twitter)" className="text-[#38FFB3] hover:text-black transition text-3xl">
                        <FaXTwitter />
                    </a>
                    <a href="mailto:nishdeshmukh2004@gmail.com" title="Email" className="text-[#38FFB3] hover:text-[#D14836] transition text-3xl">
                        <FiMail />
                    </a>
                </div>
            </div>
        </div>
    );
}
