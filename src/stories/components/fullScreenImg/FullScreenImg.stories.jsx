import React from 'react';
import {FullScreenImg} from './FullScreenImg';

export default {
    title: 'Components/FullScreenImg',
    component: FullScreenImg,
};

const Template = (args) => <FullScreenImg src={`https://picsum.photos/${args?.size || 200}`} {...args} />;

export const Default = Template.bind();
Default.args = {
    size: 200,
    value: 'lel'
};
