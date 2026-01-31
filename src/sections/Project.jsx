import { useNavigate } from 'react-router-dom';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { projectData } from '../data/projectsData';

export default function Project() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/projectPage");
    };

    return (
        <section className="scroll-container rounded-xl shadow-lg p-6 border-4 border-double border-sky-800 lg:w-min flex flex-col gap-4 h-78 overflow-y-auto w-full">
            <header className="flex flex-row items-center lg:gap-50 justify-between">
                <div className="flex flex-row items-center gap-2">
                    <div className="bg-slate-700 text-white rounded-md p-2">
                        <AccountTreeIcon fontSize="medium" />
                    </div>

                    <div className="text-2xl font-mono">
                        Projects
                    </div>
                </div>

                <div className="hover:bg-amber-900 p-1 rounded-md" onClick={handleNavigate}>
                    <EastIcon fontSize="medium" />
                </div>
            </header>

            {projectData.map((card, idx) => (
                <div className="flex lg:flex-row items-center gap-4 bg-slate-700 text-white p-4 rounded-lg flex-col" key={idx}>
                    <img src={card.projectImage} alt={card.alt} className="w-30 h-15 object-cover" />

                    <div className="flex flex-col items-start gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 className="font-mono text-base underline underline-offset-4">
                                {card.heading}
                            </h2>

                            <p className="text-sm font-sans">
                                {card.description}
                            </p>
                        </div>

                        <div className="flex flex-row justify-center gap-4 w-full">
                            <a href={card.viewLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border px-3 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-xs w-fit bg-green-500/20 text-green-400">
                                View
                            </a>

                            <a href={card.codeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border px-3 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-xs w-fit bg-red-900 text-black-400">
                                Code
                            </a>
                        </div>
                    </div>
                </div>
            ))}


            <Stack direction="row" spacing={2}>
                <Button variant="outlined" className="w-full text-center text-amber-300" onClick={handleNavigate}>
                    View Projects
                </Button>
            </Stack>
        </section>
    );
}