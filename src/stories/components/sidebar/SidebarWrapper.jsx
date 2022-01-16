import React, {useEffect, useState} from 'react';
import {Sidebar} from "./Sidebar";
import PropTypes from "prop-types";

const MainContentWrapper = ({children}) => {
    return <main>
        {children}
    </main>
}

const SidebarWrapper = ({
                            children,
                            type,
                            sidebarWidth: newSidebarWidth,
                            collapsedWidth: newCollapsedWidth,
                            displayLeft,
                            collapsed,
                            ...rest
                        }) => {
    const defaultCollapsedWidth = 80;
    const defaultSidebarWidth = 270;

    const [sidebarWidth, setSidebarWidth] = useState(defaultSidebarWidth);
    const [collapsedWidth, setCollapsedWidth] = useState(defaultCollapsedWidth);

    const [currentSidebarWidth, setCurrentSidebarWidth] = useState();

    useEffect(() => {
        setSidebarWidth(newSidebarWidth)
    }, [newSidebarWidth])
    useEffect(() => {
        setCollapsedWidth(newCollapsedWidth)
    }, [newCollapsedWidth])
    useEffect(() => {
        setCurrentSidebarWidth(collapsed ? collapsedWidth : sidebarWidth);
    }, [collapsed, collapsedWidth, sidebarWidth]);

    const gridTemplateColumns = [`${currentSidebarWidth}px`, 'auto'];

    const sideMenuStyleObj = {
            display: 'grid',
            gridTemplateColumns: displayLeft ? gridTemplateColumns.join(' ') : gridTemplateColumns.reverse().join(' '),
    }

    const colResizer = <div>
        lel
    </div>

    return <div style={type === SidebarTypes["side-menu"] ? sideMenuStyleObj : {}} className={'ult-sidebar-wrapper'}>

        {!displayLeft ? children : null}

        <Sidebar {...{
            type,
            sidebarWidth,
            collapsedWidth,
            displayLeft,
            collapsed,
            resizeSidebar: increment => setSidebarWidth(defaultSidebarWidth + increment * (displayLeft ? 1 : -1)),
            ...rest
        }}/>



        {displayLeft ? children : null}

    </div>
};

export const SidebarTypes = {
    'side-menu': 0,
    'drawer': 1
}

SidebarWrapper.propTypes = {
    type: PropTypes.oneOf(Object.values(SidebarTypes))
};
SidebarWrapper.defaultProps = {
    type: SidebarTypes.drawer
};

SidebarWrapper.MainContentWrapper = MainContentWrapper;

export default SidebarWrapper;
