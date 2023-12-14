import React from 'react';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';

interface IVideoCardProps {
    title: string;
    videoID: string;
}

function VideoCard({title, videoID}: IVideoCardProps): JSX.Element {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
      
    return (
        <Card 
            className="overflow-hidden h-full transition-all cursor-pointer hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-700/50"
            onClick={() => openInNewTab(`https://www.youtube.com/watch?v=${videoID}`)}
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    src={`https://img.youtube.com/vi/${videoID}/mqdefault.jpg`}
                    alt={`video ${title}`}
                    className='w-full h-auto'
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray">
                    {title}
                </Typography>
            </CardBody>
        </Card>
    );
}

export { VideoCard };