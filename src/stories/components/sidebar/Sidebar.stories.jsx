import React from 'react';
import {Sidebar} from './Sidebar';

export default {
    title: 'Components/Sidebar',
    component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind();
Default.args = {
    displayLeft: 'true'
};

export const RightSidebar = Template.bind();
RightSidebar.args = {
    displayLeft: false
};
