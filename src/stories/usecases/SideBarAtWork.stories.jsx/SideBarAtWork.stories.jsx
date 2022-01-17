import React, {useState} from 'react';

import {FullScreenImg} from "../../components/fullScreenImg/FullScreenImg";
import SidebarWrapper, {SidebarTypes} from "../../components/sidebar/SidebarWrapper";
import {Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGem, faHeart} from "@fortawesome/free-solid-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'usecases/SideBarAtWork'/*,
    argTypes: {
        type: {
            options: SidebarTypes,
            control: {type: 'select'}
        }
    }*/
};

const EpicMenu = ({togglePinnedState, isPinned}) => {
    return <Menu iconShape="square">
        <MenuItem icon={<FontAwesomeIcon icon={faGem}/>}>Dashboard</MenuItem>
        <SubMenu title="Components" icon={<FontAwesomeIcon icon={faHeart}/>}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
        </SubMenu>
        <button onClick={togglePinnedState}>{isPinned ? 'Unpin me' : 'Pin me'}</button>
    </Menu>
}

const Template = (args) => {

    const [type, setType] = useState(SidebarTypes.drawer);

    return <SidebarWrapper {...{
        ...args,
        type,
        menu: <EpicMenu isPinned={type === SidebarTypes["side-menu"]}
                        togglePinnedState={() => setType(prev => prev === SidebarTypes.drawer ? SidebarTypes["side-menu"] : SidebarTypes.drawer)
                        }/>
    }}>
        <SidebarWrapper.MainContentWrapper>
            <FullScreenImg src={'https://picsum.photos/1200'} value={'Inspiring quote.'}/>
            <FullScreenImg src={'https://picsum.photos/1199'}
                           value={'My bae told me to stop impersonating a flamingo. I had to put my foot down.'}/>
        </SidebarWrapper.MainContentWrapper>
    </SidebarWrapper>
}

export const Default = Template.bind();
Default.args = {
    /*type: SidebarTypes.drawer,*/
    displayLeft: true,
    fitContent: false,
    collapsed: false,
    sidebarWidth: 270,
    collapsedWidth: 80,
};
