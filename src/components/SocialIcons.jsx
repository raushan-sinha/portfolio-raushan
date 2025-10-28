import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, LogoDev as LogoDevIcon, Reddit as RedditIcon, X as XIcon } from '@mui/icons-material';
import { socialLinks } from '../data/socialLinksData';

export default function SocialIcons() {
    return (
        <div className="flex flex-row items-center gap-4">
            <GitHubIcon fontSize="medium" onClick={() => window.open(socialLinks.github)} className="cursor-pointer hover:text-gray-500 transition-colors duration-300" />

            <LinkedInIcon fontSize="medium" onClick={() => window.open(socialLinks.linkedIn)} className="cursor-pointer hover:text-blue-500 transition-colors duration-300" />

            <LogoDevIcon fontSize="medium" onClick={() => window.open(socialLinks.dev)} className="cursor-pointer hover:text-amber-500 transition-colors duration-300" />

            <RedditIcon fontSize="medium" onClick={() => window.open(socialLinks.reddit)} className="cursor-pointer hover:text-green-500 transition-colors duration-300" />

            <XIcon fontSize="medium" onClick={() => window.open(socialLinks.x)} className="cursor-pointer hover:text-red-500 transition-colors duration-300" />
        </div>
    );
}