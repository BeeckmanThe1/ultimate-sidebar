import React, {useEffect, useState} from 'react';

import {FullScreenImg} from "../../components/fullScreenImg/FullScreenImg";
import SidebarWrapper, {SidebarTypes} from "../../components/sidebar/SidebarWrapper";
import {Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGem, faHeart} from "@fortawesome/free-solid-svg-icons";

export default {
    title: 'usecases/SideBarAtWork',
    argTypes: {
        type: {
            options: SidebarTypes,
            control: {type: 'select'}
        }
    }
};

//This menu can come from ant-design or pro-sidebar; it can be everything we want :-)
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

    useEffect(() => setType(args?.type),[args?.type])

    const togglePinnedState  = () => setType(prev => prev === SidebarTypes.drawer ? SidebarTypes["side-menu"] : SidebarTypes.drawer);
    const menu = <EpicMenu isPinned={type === SidebarTypes["side-menu"]} togglePinnedState={togglePinnedState}/>;

    const websiteQuote1 = 'Inspiring quote.';
    const websiteQuote2 = 'My bae told me to stop impersonating a flamingo. I had to put my foot down.';

    // Side bar menu is passed in a menu prop
    // the website/main-content is passed as children.
    // Maybe SidebarWrapper should be renamed to WebsiteLayout or Layout, since it contains the entire website

    return <SidebarWrapper {...{...args, type, menu }}>
        <SidebarWrapper.MainContentWrapper>
            <FullScreenImg src={'https://picsum.photos/1200'} value={websiteQuote1}/>
            <FullScreenImg src={'https://picsum.photos/1199'} value={websiteQuote2}/>
        </SidebarWrapper.MainContentWrapper>
    </SidebarWrapper>
}

export const Default = Template.bind();
Default.args = {
    type: SidebarTypes.drawer,
    displayLeft: true,
    fitContent: false,
    collapsed: false,
    sidebarWidth: 270,
    collapsedWidth: 80
};
