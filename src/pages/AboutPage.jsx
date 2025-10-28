import { aboutData } from '../data/aboutData';
import BackToHome from '../components/BackToHome';

export default function AboutPage() {
    return (
        <>
            <BackToHome />

            <div className="bg-[#101923] text-white min-h-screen flex items-center justify-center px-6 py-20">
                <div className="max-w-5xl w-full bg-[#1a2537] rounded-2xl shadow-lg p-8 md:p-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-8 text-center">
                        About Me
                    </h1>

                    <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed text-justify">
                        Hi, I’m <span className="text-cyan-400 font-semibold">Raushan Sinha</span>,
                        a passionate <span className="text-cyan-400 font-semibold">Frontend Developer </span>
                        focused on creating responsive, user-friendly, and visually appealing web applications.
                        I specialize in technologies like
                        <span className="text-cyan-400"> HTML, CSS, JavaScript, React, Bootstrap </span>
                        and <span className="text-cyan-400">Tailwind CSS</span>.
                    </p>

                    <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed text-justify">
                        I hold a <span className="text-cyan-400">Bachelor’s degree in Computer Applications (BCA) </span>
                        from <span className="text-cyan-400">Veer Kunwar Singh University</span>.
                        Throughout my journey, I’ve worked on multiple projects ranging from responsive websites
                        to AI-based assistants, continuously enhancing my technical knowledge and creativity.
                    </p>

                    <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed text-justify">
                        My focus is on writing clean, optimized, and scalable code while building
                        seamless user interfaces. I’m always eager to learn new technologies and
                        evolve with the latest industry trends to deliver high-quality digital experiences.
                    </p>

                    <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed text-justify">
                        Outside of coding, I enjoy <span className="text-cyan-400">playing cricket</span>,
                        exploring emerging tech, and sharing developer resources through my platform,
                        <span className="text-cyan-400"> CodeTech Lab</span>.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 text-gray-200">
                        {aboutData.map((item) => (
                            <div className="bg-[#131b28] p-5 rounded-xl border border-cyan-600 shadow-md" key={item.id}>
                                <h3 className="text-lg font-semibold text-cyan-400 mb-2">{item.title}</h3>
                                <p className="text-sm md:text-base">
                                    {item.skills}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}