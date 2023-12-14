import React from 'react';
import { Card } from '@material-tailwind/react';

interface IVideoCardProps {
    title: string;
    videoID: string;
}

function VideoCardMobile({title, videoID}: IVideoCardProps): JSX.Element {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
      
    return (
        <Card 
            className="h-[15rem] bg-cover bg-no-repeat overflow-hidden transition-all cursor-pointer hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-700/50 bg-white"
            onClick={() => openInNewTab(`https://www.youtube.com/watch?v=${videoID}`)}
            style={{ backgroundImage: `url(https://img.youtube.com/vi/${videoID}/mqdefault.jpg)`}}
        >
            <div className='w-full h-2'>

            </div>
        </Card>
    );
}

export { VideoCardMobile };
