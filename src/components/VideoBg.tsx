import React from 'react';

const YouTubeBackground = ({ videoId }) => {
    const src = `https://www.youtube.com/embed/${videoId}?controls=0&rel=0&playsinline=1&enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${videoId}`;

    return (
        <iframe
            src={src}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Vídeo"
            className="fixed right-0 bottom-0 w-auto min-w-full min-h-full z-[-1]"
        />
    );
};

export default YouTubeBackground;
