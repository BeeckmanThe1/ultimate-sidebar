import React, {useState} from 'react';
import {useDrag} from "@use-gesture/react";

export default {
    title: 'Components/Drag',
};

const Template = (args) => {
    const config = undefined;

    const [xValue, setXValue] = useState('0');
    const [yValue, setYValue] = useState('0');

    const bind = useDrag(state => {
        setXValue(state?.movement[0]);
        setYValue(state?.movement[1]);
    }, config);


    const styleObj = {
        border: 'solid black 2px',
        width: '120px',
        height: '120px',
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: '12px',
        transform: 'translate(-50%, -50%)',
        lineHeight: '100px',
        textAlign: 'center',
        whiteSpace: 'nowrap'
    };

    return <div {...bind()} style={styleObj}>({xValue} , {yValue})</div>
};

export const Default = Template.bind();
Default.args = {
    size: 200,
    value: 'lel'
};
