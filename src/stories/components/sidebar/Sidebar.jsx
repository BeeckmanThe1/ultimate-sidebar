import React from 'react';
import PropTypes from "prop-types";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './_sidebar.css';
import classnames from 'classnames';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGem, faHeart} from '@fortawesome/free-solid-svg-icons'


/**
 * Ultimate sidebar:
 * Use as configureable drawer with
 * Inline mode and
 * window mode.
 */

export const Sidebar = ({displayLeft, fitContent, collapsed, isInline, sidebarWidth, collapsedWidth}) => {
    const className = classnames('ult-sidebar', {'ult-left-sidebar': displayLeft}, {'ult-right-sidebar': !displayLeft}, {'ult-fit-content': fitContent}, {'ult-stretched-sidebar': !fitContent}, {'ult-inline-sidebar': isInline}, {'ult-fixed-sidebar': !isInline});

    return <ProSidebar collapsedWidth={collapsedWidth} width={sidebarWidth} collapsed={collapsed} className={className} rtl={!displayLeft}>
        <Menu iconShape="square">
            <MenuItem icon={<FontAwesomeIcon icon={faGem}/>}>Dashboard</MenuItem>
            <SubMenu title="Components" icon={<FontAwesomeIcon icon={faHeart}/>}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
            </SubMenu>
        </Menu>
    </ProSidebar>
}

Sidebar.propTypes = {
    displayLeft: PropTypes.bool,
    fitContent: PropTypes.bool,
    collapsed: PropTypes.bool,
    isInline: PropTypes.bool
};
Sidebar.defaultProps = {
    displayLeft: true,
    fitContent: false,
    collapsed: false,
    isInline: false
};