import MenuBookIcon from '@mui/icons-material/MenuBook';
import EastIcon from '@mui/icons-material/East';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ReadBtn from '../buttons/ReadBtn';
import blogData from '../data/blogsData';

export default function Blog() {
    //todo: Icon & Heading -
    const header = [
        {
            icon: <MenuBookIcon fontSize='medium' />,
            heading: 'Blogs',
            arrowIcon: <EastIcon fontSize='medium' />
        }
    ];

    return (
        <>
            <section className='bg-[#0f0f0f] text-white rounded-xl shadow-lg p-6 border-4 border-double border-sky-800 w-min flex flex-col gap-4 h-83 overflow-y-auto scrollbar-custom'>
                {
                    header.map((item, idx) => (
                        <header className='flex flex-row items-center gap-50' key={idx}>
                            <div className='flex flex-row items-center gap-2'>
                                <div className="blogIcon bg-slate-700 rounded-md p-2">{item.icon}</div>
                                <div className="heading text-2xl font-mono">{item.heading}</div>
                            </div>
                            <div>
                                <div className="arrowIcon hover:bg-amber-900 p-1 rounded-md">{item.arrowIcon}</div>
                            </div>
                        </header>
                    ))
                }

                {/* Blogs Card */}

                {
                    blogData.map((item, idx) => (
                        <div className="flex flex-col items-start gap-8 bg-slate-700 p-2 rounded-lg" key={idx}>
                            <div className='flex flex-col items-center gap-4' >
                                <div className='flex flex-row gap-4'>
                                    <div>
                                        <TextSnippetIcon />
                                    </div>
                                    <div className="flex flex-col items-start gap-2">
                                        <div>
                                            <h2 className='font-mono text-base underline underline-offset-4'>{item.title}</h2>
                                            <p className='text-sm font-sans'>{item.info}</p>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <ReadBtn link={item.link} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </section >
        </>
    );
}