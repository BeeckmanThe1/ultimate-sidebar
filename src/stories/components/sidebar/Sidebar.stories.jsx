import React from 'react';
import {Sidebar} from './Sidebar';

export default {
    title: 'Components/Sidebar',
    component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind();
Default.args = {
    displayLeft: true,
    fitContent: false,
    collapsed: false
};

export const RightSidebar = Template.bind();
RightSidebar.args = {
    ...Default.args,
    displayLeft: false
};
