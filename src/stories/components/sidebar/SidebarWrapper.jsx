import React, {useEffect, useState} from 'react';
import {Sidebar} from "./Sidebar";

const MainContentWrapper = ({children}) => {
    return <aside>
        {children}
    </aside>
}

const SidebarWrapper = ({children, isInline, sidebarWidth: newSidebarWidth, displayLeft, collapsed, ...rest}) => {
    const defaultCollapsedWidth = 80;
    const defaultSidebarWidth = 270;

    const [sidebarWidth, setSidebarWidth] = useState(defaultSidebarWidth);

    useEffect(() => {
        setSidebarWidth(newSidebarWidth)
    }, [newSidebarWidth])
    useEffect(() => {
        setSidebarWidth(collapsed ? defaultCollapsedWidth : newSidebarWidth)
    }, [collapsed])

    const gridTemplateColumns = [`${sidebarWidth}px`, 'auto'];

    const inlineStyleObj = {
        display: 'grid',
        gridTemplateColumns: displayLeft ? gridTemplateColumns.join(' ') : gridTemplateColumns.reverse().join(' '),
    }

    return <div style={isInline ? inlineStyleObj : {}} className={'ult-sidebar-wrapper'}>
        {!displayLeft ? children : null}
        <Sidebar {...{isInline, sidebarWidth, displayLeft, collapsed, ...rest}}/>
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
