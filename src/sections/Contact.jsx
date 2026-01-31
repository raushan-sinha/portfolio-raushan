import { useNavigate } from 'react-router-dom';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { socialLinks } from '../data/socialLinksData';

export default function Contact() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/contactPage");
    };

    return (
        <section className="rounded-xl shadow-lg p-6 border-4 border-double border-sky-800 min-w-min flex flex-col gap-4 h-fit">
            <header className="flex flex-row items-center gap-2">
                <div className="folderIcon bg-slate-700 text-white rounded-md p-2">
                    <ChatBubbleIcon fontSize="medium" />
                </div>

                <div className="heading text-2xl font-mono">
                    Contact
                </div>
            </header>

            <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-50">
                <div className="flex flex-row items-center gap-4 flex-wrap">
                    <Button variant="outlined" className="whitespace-nowrap" onClick={handleNavigate}>
                        Collaborate with Me
                    </Button>

                    <Button variant="outlined" color="error" onClick={() => window.open(socialLinks.email)} className="whitespace-nowrap">
                        Email Me
                    </Button>
                </div>

                <div className="flex flex-row items-center gap-4 flex-wrap">
                    <div className="whitespace-nowrap font-mono">
                        Follow & Connect:
                    </div>

                    <div className="flex flex-row items-center gap-4">
                        <InstagramIcon fontSize="medium" onClick={() => window.open(socialLinks.instagram)} className="cursor-pointer hover:text-sky-500 transition-colors duration-300" />

                        <FacebookIcon fontSize="medium" onClick={() => window.open(socialLinks.facebook)} className="cursor-pointer hover:text-sky-500 transition-colors duration-300" />

                        <WhatsAppIcon fontSize="medium" onClick={() => window.open(socialLinks.whatsapp)} className="cursor-pointer hover:text-sky-500 transition-colors duration-300" />

                        <TelegramIcon fontSize="medium" onClick={() => window.open(socialLinks.telegram)} className="cursor-pointer hover:text-sky-500 transition-colors duration-300" />
                    </div>
                </div>
            </div>
        </section>
    );
}