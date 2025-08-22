import React from 'react'

export default function CodeBtn({ link }) {
    return (
        <>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border px-3 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-xs w-fit bg-red-900 text-black-400"
            >
                Code
            </a>
        </>
    );
}