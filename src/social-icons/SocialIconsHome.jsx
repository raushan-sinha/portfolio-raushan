import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import RedditIcon from '@mui/icons-material/Reddit';
import XIcon from '@mui/icons-material/X';
import { socialLinks } from '../data/socialLinksData';

export default function SocialIconsHome() {

    return (
        <div className="flex flex-row items-center gap-4">
            <GitHubIcon
                fontSize='medium'
                onClick={() => window.open(socialLinks.github)}
                className="cursor-pointer hover:text-gray-500 transition-colors duration-300"
            />
            <LinkedInIcon
                fontSize='medium'
                onClick={() => window.open(socialLinks.linkedIn)}
                className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
            />
            <LogoDevIcon
                fontSize='medium'
                onClick={() => window.open(socialLinks.dev)}
                className="cursor-pointer hover:text-amber-500 transition-colors duration-300"
            />
            <RedditIcon
                fontSize='medium'
                onClick={() => window.open(socialLinks.reddit)}
                className="cursor-pointer hover:text-green-500 transition-colors duration-300"
            />
            <XIcon
                fontSize='medium'
                onClick={() => window.open(socialLinks.x)}
                className="cursor-pointer hover:text-red-500 transition-colors duration-300"
            />
        </div>

    );
}