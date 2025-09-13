import TechStack from "./pages/TechStack";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Main Layout */}
                <Route
                    path="/"
                    element={
                        <div className="flex min-h-screen bg-black text-white px-10 py-8 gap-4">
                            {/* Sidebar */}
                            <aside className="w-min flex-shrink-0 ml-4">
                                <div className="bg-[#0f0f0f] rounded-xl shadow-lg border border-gray-800">
                                    <TechStack />
                                </div>
                            </aside>

                            {/* Main Content */}
                            <main className="flex-1 flex flex-col gap-4">
                                {/* Home */}
                                <section className="bg-[#0f0f0f] rounded-xl shadow-lg border border-gray-800">
                                    <Home />
                                </section>

                                <div className="flex flex-row items-center gap-4">
                                    {/* Project */}
                                    <section className="bg-[#0f0f0f] rounded-xl shadow-lg border border-gray-800 w-min">
                                        <Project />
                                    </section>

                                    {/* Blog */}
                                    <section className="bg-[#0f0f0f] rounded-xl shadow-lg border border-gray-800 w-min">
                                        <Blog />
                                    </section>
                                </div>

                                {/* Contact */}
                                <section className="bg-[#0f0f0f] rounded-xl shadow-lg border border-gray-800">
                                    <Contact />
                                </section>
                            </main>
                        </div>
                    }
                />

                {/* Project Page → standalone (no sidebar, no home/blog/contact) */}
                <Route path="/projectPage" element={<ProjectPage />} />
            </Routes>
        </BrowserRouter>
    );
}