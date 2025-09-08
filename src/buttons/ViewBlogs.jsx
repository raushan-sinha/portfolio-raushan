import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ViewBlogs() {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" className="w-full text-center !text-amber-300">View Blogs</Button>
            </Stack>
        </>
    );
}