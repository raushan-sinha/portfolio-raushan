import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { socialLinks } from '../data/socialLinksData';

export default function Contact() {
    //todo: Icon & Heading -
    const header = [
        {
            icon: <ChatBubbleIcon fontSize='medium' />,
            heading: 'Contact'
        }
    ];

    return (
        <>
            <section className='bg-[#0f0f0f] text-white rounded-xl shadow-lg p-6 border-4 border-double border-sky-800 min-w-min flex flex-col gap-4 h-48 overflow-y-auto'>
                {/* Header */}
                {
                    header.map((item, idx) => (
                        <header className='flex flex-row items-center' key={idx}>
                            <div className='flex flex-row items-center gap-2'>
                                <div className="folderIcon bg-slate-700 rounded-md p-2">{item.icon}</div>
                                <div className="heading text-2xl font-mono">{item.heading}</div>
                            </div>
                        </header>
                    ))
                }

                <div className='flex flex-row items-center gap-50'>
                    {/* Queries & Email */}
                    <div className='flex flex-row items-center gap-4'>
                        <div>
                            <Button variant="outlined" className='whitespace-nowrap'> Collaborate with Me</Button>
                        </div>
                        <div>
                            <Button variant="outlined" color="error" onClick={() => window.open(socialLinks.email)} className='whitespace-nowrap'>Email Me</Button>
                        </div>
                    </div>
                    {/* Social Connect */}
                    <div className="flex flex-row items-center gap-4">
                        <div className='whitespace-nowrap font-mono'>
                            Follow & Connect:
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <InstagramIcon
                                fontSize='medium'
                                onClick={() => window.open(socialLinks.instagram)}
                                className="cursor-pointer hover:text-sky-500 transition-colors duration-300"
                            />
                            <FacebookIcon
                                fontSize='medium'
                                onClick={() => window.open(socialLinks.facebook)}
                                className="cursor-pointer hover:text-sky-500 transition-colors duration-300"
                            />
                            <WhatsAppIcon
                                fontSize='medium'
                                onClick={() => window.open(socialLinks.whatsapp)}
                                className="cursor-pointer hover:text-sky-500 transition-colors duration-300"
                            />
                            <TelegramIcon
                                fontSize='medium'
                                onClick={() => window.open(socialLinks.telegram)}
                                className="cursor-pointer hover:text-sky-500 transition-colors duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}