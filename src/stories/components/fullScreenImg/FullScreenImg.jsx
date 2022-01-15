import React from 'react';
import './_fullScreenImg.css';

export const FullScreenImg = ({src, value}) => {
    return <div className={'ult-fullscreen-img-wrapper'}>
        <img src={src}/>
        <div className={'ult-text-wrapper'}>"{value}"</div>
    </div>
};