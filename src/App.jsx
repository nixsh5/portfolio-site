import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContactModal from "./components/ContactModal";
import SkillsPage from "./components/SkillsPage";
import ProjectsPage from "./components/ProjectsPage";
import AboutMe from "./components/AboutMe";

function App() {
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-[#0B1512] relative">
                <Navbar onContactClick={() => setContactOpen(true)} />
                <main className="flex-1 flex flex-col items-center w-full">
                    <Routes>
                        <Route
                            path="/"
                            element={<HeroSection onContactClick={() => setContactOpen(true)} />}
                        />
                        <Route path="/skills" element={<SkillsPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/about" element={<AboutMe />} />
                        {/* Add other routes as needed */}
                    </Routes>
                </main>
                <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
            </div>
        </Router>
    );
}

export default App;
