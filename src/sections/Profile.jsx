import LocationOnIcon from '@mui/icons-material/LocationOn';
import RaushanImage from '../assets/Raushan-Image.jpg';
import SocialIcons from '../components/SocialIcons';
import { DarkMode, Sunny } from '@mui/icons-material';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Profile() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <section className="rounded-xl shadow-lg p-6 border-4 border-double border-sky-800 w-full">
            <div className="flex flex-row justify-between sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                    <img src={RaushanImage} alt="Raushan Sinha Image" className="w-20 h-20 rounded-full object-cover border-2 border-gray-700" />

                    <div>
                        <p className="text-lg font-mono font-bold">
                            Raushan Sinha
                        </p>

                        <div className="flex items-center gap-2 text-gray-400 mt-1">
                            <LocationOnIcon fontSize="small" />

                            <span className="text-sm">
                                Arrah, India
                            </span>
                        </div>
                    </div>
                </div>

                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='cursor-pointer'>
                    {theme === 'dark' ? <Sunny /> : <DarkMode />}
                </button>
            </div>

            <div className="mt-4">
                <h2 className="text-lg font-semibold">
                    I build {" "}

                    <span className="text-sky-400 font-mono">
                        Web Apps
                    </span>
                </h2>

                <p className="text-gray-400 mt-1 font-mono">
                    Hello, I'm Raushan Sinha! A Frontend developer who builds frontend projects.
                </p>
            </div>

            <div className="mt-4">
                <SocialIcons />
            </div>

            <div className="border-2 border-amber-400 mt-4 px-3 py-2 rounded-lg flex lg:justify-between items-center text-sm text-gray-400 flex-col lg:flex-row w-full gap-4">
                <div className="flex flex-row gap-1">
                    <span className='text-amber-600 text-base'>*</span>
                    <span className="text-amber-600">
                        Working on Web & AI
                    </span>
                </div>

                <div className='flex flex-row justify-center items-center gap-0.5'>
                    <span className='text-green-600 text-base'>#</span>
                    <span className="text-green-600">
                        Open to contribute in companies / startups project
                    </span>
                </div>
            </div>
        </section>
    );
}