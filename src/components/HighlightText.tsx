import { Typography } from '@material-tailwind/react';
import React from 'react';

function HighlightText({ text, highlightWords }) {
    const regex = new RegExp(`(${highlightWords.join('|')})`, 'gi');
    const parts = text.split(regex);

    return (
        <Typography variant='lead' color='white'>
            {parts.map((part, index) => 
                highlightWords.includes(part.toLowerCase()) ? 
                    <span key={index} className="bg-yellow-200 font-bold">{part}</span> : 
                    part
            )}
        </Typography>
    );
}

export { HighlightText };