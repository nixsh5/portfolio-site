import React from "react";
import BlockProgressBar from "./BlockProgressBar";
import Starfield from "react-starfield";
import { skillCategories } from "./skillsData";
import {Typewriter} from "react-simple-typewriter";

export default function SkillsPage() {
    return (
        <div className="min-h-screen bg-[#0B1512] p-8 flex flex-col items-center">
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

            <h1 className="text-4xl font-mono text-[#38FFB3] mb-8">
                <Typewriter
                    words={["My Skills"]}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                />
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
                {skillCategories.map(cat => (
                    <div
                        key={cat.category}
                        className="bg-[#101a17] border border-[#222c3c] rounded-lg p-12 w-full min-h-[420px] shadow-md flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center mb-4">
                                <span className="text-xl mr-2">{cat.icon}</span>
                                <h2 className="text-lg font-bold text-[#38FFB3] font-mono">{cat.category}</h2>
                            </div>
                            {cat.skills.map(skill => (
                                <div key={skill.name} className="mb-4">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-[#38FFB3] font-mono text-base px-2 py-1">
                                            {skill.name}
                                        </span>
                                        <span className="text-[#38FFB3] font-mono text-base px-2 py-1">
                                            {skill.value}%
                                        </span>
                                    </div>
                                    <BlockProgressBar value={skill.value} color="#38FFB3" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
