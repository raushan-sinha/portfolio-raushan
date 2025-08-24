import React from 'react'

export default function ReadBtn({ link }) {
    return (
        <>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border px-3 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-xs w-fit bg-blue-500/20 text-green-400"
            >
                Read
            </a>
        </>
    );
}