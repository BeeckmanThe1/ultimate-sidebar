import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './_sidebar.css';
import classnames from 'classnames';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGem, faHeart} from '@fortawesome/free-solid-svg-icons'
import {SidebarTypes} from "./SidebarWrapper";
import {useDrag} from "@use-gesture/react";


/**
 * Ultimate sidebar:
 * Use as configureable drawer with
 * Inline mode and
 * window mode.
 */

export const Sidebar = ({displayLeft, fitContent, collapsed, type, sidebarWidth, collapsedWidth, menu, resizeSidebar}) => {

    const asideClass = classnames('ult-aside', {'ult-left-aside': displayLeft}, {'ult-right-aside': !displayLeft});
    const sidebarClass = classnames('ult-sidebar', {'ult-left-sidebar': displayLeft}, {'ult-right-sidebar': !displayLeft}, {'ult-fit-content': fitContent}, {'ult-stretched-sidebar': !fitContent}, {'ult-side-menu': type === SidebarTypes["side-menu"]}, {'ult-drawer': type === SidebarTypes.drawer});

    const config = undefined;
    const bind = useDrag(state => {
        resizeSidebar(state?.movement?.[0]);
    }, config);

    return <aside className={asideClass}>
        <div {...bind()} className={'col-resizer'}/>
        <ProSidebar collapsedWidth={collapsedWidth} width={sidebarWidth} collapsed={collapsed} className={sidebarClass}
                    rtl={!displayLeft}>
            {menu}
        </ProSidebar>
    </aside>
}

Sidebar.propTypes = {
    displayLeft: PropTypes.bool,
    fitContent: PropTypes.bool,
    collapsed: PropTypes.bool,
};
Sidebar.defaultProps = {
    displayLeft: true,
    fitContent: false,
    collapsed: false
};