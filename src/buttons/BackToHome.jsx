import React from 'react'
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function BackToHome() {
    const navigate = useNavigate();

    return (
        <>
            <div className='flex flex-row items-center gap-1 bg-[#101923] max-w-fit px-2 py-2 m-4 hover:scale-105 transition-transform cursor-pointer fixed border border-solid border-cyan-600 rounded-lg' onClick={() => navigate(-1)}>
                <KeyboardBackspaceIcon className='text-cyan-400 text-2xl' />
                <Home className='text-cyan-400 text-2xl' />
            </div>
        </>
    );
}