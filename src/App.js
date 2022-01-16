import {FullScreenImg} from "./stories/components/fullScreenImg/FullScreenImg";
import SidebarWrapper from "./stories/components/sidebar/SidebarWrapper";

import {SidebarTypes} from "./stories/components/sidebar/SidebarWrapper";
import {Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGem, faHeart} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const menu = <Menu iconShape="square">
    <MenuItem icon={<FontAwesomeIcon icon={faGem}/>}>Dashboard</MenuItem>
    <SubMenu title="Components" icon={<FontAwesomeIcon icon={faHeart}/>}>
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
    </SubMenu>
</Menu>

function App() {
    return (
        <div className="App">
            <SidebarWrapper menu={menu} displayLeft={true} type={SidebarTypes["side-menu"]}>
                <SidebarWrapper.MainContentWrapper>
                    <FullScreenImg src={'https://picsum.photos/1200'} value={'lel'}/>
                    <FullScreenImg src={'https://picsum.photos/1199'} value={'lal'}/>
                </SidebarWrapper.MainContentWrapper>
            </SidebarWrapper>
        </div>
    );
}

export default App;
