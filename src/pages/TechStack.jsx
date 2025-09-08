import CodeIcon from '@mui/icons-material/Code';

export default function TechStack() {
    const heading = 'Tech Stack';

    //todo: Frontend Tools & heading
    const frontendTools = [
        {
            heading: 'Frontend Development',
            tools: ['JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3']
        }
    ];

    //todo: Languages 
    const languages = [
        {
            heading: 'Programming Languages',
            lang: ['C', 'C++', 'Java', 'JavScript']
        }
    ];

    //todo: Version Control
    const versionCtrl = [
        {
            heading: 'Version Control',
            tools: ['Git', 'GitHub']
        }
    ];

    //todo: Coding IDE & AI Tools
    const code_AiTools = [
        {
            heading: 'Coding IDE & AI Tools',
            tools: ['VS Code', 'Cursor', 'GitHub Copilot', 'ChatGPT', 'Claude', 'Grok', 'DeepSeek', 'Replit']
        }
    ];

    return (
        <>
            {/* Header */}
            <div className="text-white">
                <aside className="sidebar bg-[#0f0f0f] border-4 border-double border-sky-800 h-210 p-6 rounded-lg w-80 flex flex-col gap-1">
                    <div className="header flex items-center gap-2 mb-4">
                        <div className="icon-box bg-slate-700 rounded-md p-2">
                            <CodeIcon fontSize="medium" />
                        </div>
                        <div className="heading text-2xl font-mono">{heading}</div>
                    </div>

                    {/* Frontend Tools */}
                    {frontendTools.map((category, idx) => (
                        <div className="tech-stacks mb-4" key={idx}>
                            <p className="font-sans text-lg mb-2 font-bold">{category.heading}</p>
                            <div className="toolsName flex flex-wrap gap-2">
                                {category.tools.map((tool, i) => (
                                    <span
                                        key={i}
                                        className="tools bg-slate-800 px-3 py-1 rounded-full text-sm font-mono hover:bg-sky-600 focus:outline-2 focus:outline-offset-2 focus:outline-sky-500 active:bg-sky-7000"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/*Programming Languages */}
                    {languages.map((category, idx) => (
                        <div className="tech-stacks mb-4" key={idx}>
                            <p className="font-sans text-lg mb-2 font-bold">{category.heading}</p>
                            <div className="toolsName flex flex-wrap gap-2">
                                {category.lang.map((tool, i) => (
                                    <span
                                        key={i}
                                        className="tools bg-slate-800 px-3 py-1 rounded-full text-sm font-mono hover:bg-sky-600 focus:outline-2 focus:outline-offset-2 focus:outline-sky-500 active:bg-sky-700"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Version Control */}
                    {versionCtrl.map((category, idx) => (
                        <div className="tech-stacks mb-4" key={idx}>
                            <p className="font-sans text-lg mb-2 font-bold">{category.heading}</p>
                            <div className="toolsName flex flex-wrap gap-2">
                                {category.tools.map((tool, i) => (
                                    <span
                                        key={i}
                                        className="tools bg-slate-800 px-3 py-1 rounded-full text-sm font-mono hover:bg-sky-600 focus:outline-2 focus:outline-offset-2 focus:outline-sky-500 active:bg-sky-700"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Coding IDE & AI Tools */}
                    {code_AiTools.map((category, idx) => (
                        <div className="tech-stacks mb-4" key={idx}>
                            <p className="font-sans text-lg mb-2 font-bold">{category.heading}</p>
                            <div className="toolsName flex flex-wrap gap-2">
                                {category.tools.map((tool, i) => (
                                    <span
                                        key={i}
                                        className="tools bg-slate-800 px-3 py-1 rounded-full text-sm font-mono hover:bg-sky-600 focus:outline-2 focus:outline-offset-2 focus:outline-sky-500 active:bg-sky-700"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </aside>
            </div>
        </>
    );
}