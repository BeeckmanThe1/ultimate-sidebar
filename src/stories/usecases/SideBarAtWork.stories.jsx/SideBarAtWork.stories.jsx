import React from 'react';

import {FullScreenImg} from "../../components/fullScreenImg/FullScreenImg";
import SidebarWrapper from "../../components/sidebar/SidebarWrapper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'usecases/SideBarAtWork',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SidebarWrapper {...args}>
    <SidebarWrapper.MainContentWrapper>
        <FullScreenImg src={'https://picsum.photos/1200'} value={'Inspiring quote'}/>
        <FullScreenImg src={'https://picsum.photos/1199'}
                       value={'My bae told me to stop impersonating a flamingo. I had to put my foot down. '}/>
    </SidebarWrapper.MainContentWrapper>
</SidebarWrapper>

export const Default = Template.bind();
Default.args = {
    displayLeft: true,
    fitContent: false,
    collapsed: false,
    isInline: false,
    sidebarWidth: 270,
    collapsedWidth: 80,
};
