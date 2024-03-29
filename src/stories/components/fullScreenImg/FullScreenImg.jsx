import React from 'react';
import './_fullScreenImg.css';

export const FullScreenImg = ({src, value}) => {
    return <div className={'ult-fullscreen-img-wrapper'}>
        <img style={{pointerEvents: 'none'}} src={src}/>
        <div className={'ult-text-wrapper'}>"{value}"</div>
    </div>
};