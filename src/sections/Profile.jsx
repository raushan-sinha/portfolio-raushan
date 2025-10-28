import LocationOnIcon from '@mui/icons-material/LocationOn';
import RaushanImage from '../assets/Raushan-Image.jpg';
import SocialIcons from '../components/SocialIcons';

export default function Profile() {
    const navbarLinks = [
        { href: "/", name: "Home |" },
        { href: "/aboutPage", name: "About |" },
        { href: "/projectPage", name: "Projects |" },
        { href: "/blogPage", name: "Blog |" },
        { href: "/contactPage", name: "Contact" }
    ];

    return (
        <section className="bg-[#0f0f0f] text-white rounded-xl shadow-lg p-6 border-4 border-double border-sky-800 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
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

                {/* <nav className="flex items-center gap-4 text-sm">
                    {navbarLinks.map((link, idx) => (
                        <a key={idx} href={link.href} className="hover:text-sky-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full font-mono">
                            {link.name}
                        </a>
                    ))}
                </nav> */}
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

            <div className="bg-[#1a1a1a] mt-4 px-3 py-2 rounded-lg flex lg:justify-between items-center text-sm text-gray-400 flex-col lg:flex-row w-full gap-4">
                <span className="text-amber-500">
                    Building something bigger than their Imagination
                </span>

                <span className="text-green-400">
                    Open to contribute in interesting project
                </span>
            </div>
        </section>
    );
}