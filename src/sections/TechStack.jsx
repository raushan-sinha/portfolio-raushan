import CodeIcon from '@mui/icons-material/Code';
import { codingTools } from '../data/techStacksData';

export default function TechStack() {
    return (
        <aside className="p-6 lg:w-80 flex flex-col gap-1rounded-xl shadow-lg border-4 border-double border-sky-800 w-full">
            <div className="header flex items-center gap-2 mb-4">
                <div className="bg-slate-700 text-white rounded-md p-2">
                    <CodeIcon fontSize="medium" />
                </div>

                <div className="heading text-2xl font-mono">
                    Tech Stack
                </div>
            </div>

            {codingTools.map((category) => (
                <div className="mb-4" key={category.id}>
                    <p className="font-sans text-lg mb-2 font-bold">
                        {category.heading}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {category.tools.map((tool, i) => (
                            <span key={i} className="bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-mono hover:bg-sky-600 focus:outline-2 focus:outline-offset-2 focus:outline-sky-500 active:bg-sky-7000">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </aside>
    );
}