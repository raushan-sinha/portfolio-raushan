import { useNavigate } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EastIcon from '@mui/icons-material/East';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { blogData } from '../data/blogsData';

export default function Blog() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/blogPage");
    }

    return (
        <section className="scroll-container rounded-xl shadow-lg p-6 border-4 border-double border-sky-800 flex flex-col gap-4 h-78 overflow-y-auto lg:w-min w-full">
            <header className="flex flex-row items-center lg:gap-60 justify-between">
                <div className="flex flex-row items-center gap-2">
                    <div className="bg-slate-700 text-white rounded-md p-2">
                        <MenuBookIcon fontSize="medium" />
                    </div>

                    <div className="text-2xl font-mono">
                        Blogs
                    </div>
                </div>

                <div className="hover:bg-amber-900 p-1 rounded-md" onClick={handleNavigate}>
                    <EastIcon fontSize="medium" />
                </div>
            </header>

            {blogData.map((item, idx) => (
                <div className="flex flex-col items-start gap-8 bg-slate-700 text-white p-2 rounded-lg" key={idx}>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-row gap-4">
                            <TextSnippetIcon />

                            <div className="flex flex-col items-start gap-2">
                                <h2 className="font-mono text-base underline underline-offset-4">
                                    {item.title}
                                </h2>

                                <p className="text-sm font-sans">
                                    {item.info}
                                </p>

                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border px-3 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-xs w-fit bg-blue-500/20 text-green-400">
                                    Read
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <Stack direction="row" spacing={2}>
                <Button variant="outlined" className="w-full text-center text-amber-600!" onClick={handleNavigate}>
                    View Blogs
                </Button>
            </Stack>
        </section>
    );
}