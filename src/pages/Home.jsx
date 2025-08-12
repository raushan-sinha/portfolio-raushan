import RaushanImage from '../assets/Raushan-Image.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Home() {
    const introSection = {
        img: RaushanImage,
        alt: 'Raushan Sinha Image',
        name: 'Raushan Sinha',
        work: 'I build ',
        para: `Hello, I'm Raushan Sinha! A Frontend developer who builds frontend projects.`,
        status: 'Open to build interesting projects'
    };

    const location = { icon: <LocationOnIcon fontSize="small" />, address: 'Arrah, India' };

    const navbarLinks = [
        { href: '/', name: 'Home' },
        { href: '/about', name: 'About' },
        { href: '/projects', name: 'Projects' },
        { href: '/blog', name: 'Blog' },
        { href: '/contact', name: 'Contact' }
    ];

    return (
        <section className="bg-[#0f0f0f] text-white rounded-xl shadow-lg p-6 border-4 border-double border-sky-800 max-w-4xl w-full">
            {/* Top Section - Image, Name, Username */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                    <img
                        src={introSection.img}
                        alt={introSection.alt}
                        className="w-20 h-20 rounded-full object-cover border-2 border-gray-700"
                    />
                    <div>
                        <h1 className="text-sm font-mono font-bold">{introSection.name}</h1>
                        <div className="flex items-center gap-2 text-gray-400 mt-1">
                            {location.icon}
                            <span className="text-sm">{location.address}</span>
                        </div>
                    </div>
                </div>

                {/* Navbar Links */}
                <nav className="flex items-center gap-4 text-sm">
                    {navbarLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            className="hover:text-sky-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full font-mono"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Short Intro */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold">
                    {introSection.work}
                    <span className="text-sky-400 font-mono">Web Apps</span>
                </h2>
                <p className="text-gray-400 mt-1 font-mono">{introSection.para}</p>
            </div>

            {/* Status */}
            <div className="bg-[#1a1a1a] mt-4 px-3 py-2 rounded-lg flex justify-between items-center text-sm text-gray-400">
                <span>" I know how to use AI in Frontend Projects "</span>
                <span className="text-green-400">{introSection.status}</span>
            </div>
        </section>
    );
}
