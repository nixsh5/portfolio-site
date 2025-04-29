import React from "react";
import GithubProjects from "../components/GithubProjects";
import Starfield from "react-starfield";
import {Typewriter} from "react-simple-typewriter";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-[#0B1512] p-8 flex flex-col items-center relative overflow-hidden">
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
            <h1 className="text-4xl font-mono text-[#38FFB3] mb-8 z-10">
                <Typewriter
                words={["My Projects"]}
                cursor
                cursorStyle="_"
                typeSpeed={80}
            />
            </h1>
            <div className="w-full z-10">
                <GithubProjects />
            </div>
        </div>
    );
}
