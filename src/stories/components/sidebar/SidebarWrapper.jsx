import React, {useEffect, useState} from 'react';
import {Sidebar} from "./Sidebar";

const MainContentWrapper = ({children}) => {
    return <aside>
        {children}
    </aside>
}

const SidebarWrapper = ({
                            children,
                            isInline,
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

    const inlineStyleObj = {
        display: 'grid',
        gridTemplateColumns: displayLeft ? gridTemplateColumns.join(' ') : gridTemplateColumns.reverse().join(' '),
    }

    return <div style={isInline ? inlineStyleObj : {}} className={'ult-sidebar-wrapper'}>
        {!displayLeft ? children : null}
        <Sidebar {...{
            isInline,
            sidebarWidth: collapsed ? collapsedWidth : sidebarWidth,
            collapsedWidth: collapsedWidth,
            displayLeft,
            collapsed, ...rest
        }}/>
        {displayLeft ? children : null}
    </div>
};

SidebarWrapper.propTypes = {
    isInline: false
};
SidebarWrapper.defaultProps = {
    isInline: false
};

SidebarWrapper.MainContentWrapper = MainContentWrapper;

export default SidebarWrapper;
