import FolderIcon from '@mui/icons-material/Folder';
import EastIcon from '@mui/icons-material/East';
import ProjectImage1 from '../assets/ProjectImage-1.png';

export default function Project() {
    //todo: Icon & Heading -
    const header = [
        {
            icon: <FolderIcon fontSize='medium' />,
            heading: 'Projects',
            arrowIcon: <EastIcon fontSize='medium' />
        }
    ];

    //todo: Project Card - 1
    const project1 = [
        {
            projectImage: ProjectImage1,
            alt: 'Project Image 1',
            heading: 'VirtuoX - AI Assistant',
            para: 'VirtuoX is an advanced virtual assistant powered by speech recognition and synthesis technology.',
            viewBtn: 'View'
        }
    ];

    return (
        <>
            <section className='bg-[#0f0f0f] text-white rounded-xl shadow-lg p-6 border-4 border-double border-sky-800 min-w-min flex flex-col items-center gap-4'>
                {/* Header */}
                {
                    header.map((item, idx) => (
                        <header className='flex flex-row items-center gap-50' key={idx}>
                            <div className='flex flex-row items-center gap-2'>
                                <div className="folderIcon bg-slate-700 rounded-md p-2">{item.icon}</div>
                                <div className="heading text-2xl font-mono">{item.heading}</div>
                            </div>
                            <div>
                                <div className="arrowIcon hover:bg-amber-900 p-1 rounded-md">{item.arrowIcon}</div>
                            </div>
                        </header>
                    ))
                }

                {/* Projects Cards */}
                {/* Card - 1 */}
                {
                    project1.map((card, idx) => (
                        <div className="card-1 flex flex-row items-center gap-4 bg-slate-700 p-2 rounded-lg" key={idx}>
                            {/* Image Project */}
                            <div className="image-box">
                                <img src={card.projectImage} alt={card.alt} className='w-30 h-15 object-cover' />
                            </div>
                            {/* Short info */}
                            <div className='flex flex-col items-start gap-4'>
                                <div className="short-info">
                                    <h2 className='font-mono text-lg underline underline-offset-4'>{card.heading}</h2>
                                    <p className='text-sm'>{card.para}</p>
                                </div>
                                {/* Preview Button */}
                                <button className="btn !bg-amber-300 hover:!bg-amber-200 text-black border-none">
                                    {card.viewBtn}
                                </button>
                            </div>
                        </div>
                    ))
                }

            </section>
        </>
    );
}