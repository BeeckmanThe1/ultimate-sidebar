import React from 'react';
import PropTypes from "prop-types";

/**
 * Ultimate sidebar:
 * Use as drawer
 * Inline mode
 * window mode
 */
export const Sidebar = ({value}) => {
    return <h1>{value}</h1>
}

Sidebar.propTypes = {
    /**
     * Blebs
     */
    test: PropTypes.bool
};
Sidebar.defaultProps = {};