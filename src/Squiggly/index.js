import React, {useLayoutEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import SvgFilters from "./components/SvgFilters";

import './style/index.css';

function Squiggly({
                      children,
                      disabled = false,
                      duration,
                      iterationCount,
                      onHover = false,
                      onMouseEnter,
                      onMouseLeave,
                      ...rest
                  }) {

    return (
        <div id='squiggly-container'>
            {children}
            <SvgFilters/>
        </div>
    );
}

export default Squiggly;

Squiggly.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    duration: PropTypes.string,
    iterationCount: PropTypes.string,
    onHover: PropTypes.bool,
    style: PropTypes.object,
};
