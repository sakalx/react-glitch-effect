import React, {memo} from 'react';
import PropTypes from 'prop-types';

import SvgFilters from "./components/SvgFilters";

import './style/index.css';

function SquigglyEffect({
                            baseFrequency = 0.02,
                            children,
                            disabled = false,
                            onHover = false,
                            onMouseEnter,
                            onMouseLeave,
                            scaleNoise = 5,
                            speed = 0.34,
                            ...rest
                        }) {

    return (
        <div id='squiggly__container'>
            {children}
            <SvgFilters baseFrequency={baseFrequency} scaleNoise={scaleNoise}/>
        </div>
    );
}

export default memo(SquigglyEffect);

SquigglyEffect.propTypes = {
    baseFrequency: PropTypes.number,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onHover: PropTypes.bool,
    scaleNoise: PropTypes.number,
    speed: PropTypes.number,
};
