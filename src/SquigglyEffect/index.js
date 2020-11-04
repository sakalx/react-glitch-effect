import React, {useRef, memo} from 'react';
import PropTypes from 'prop-types';

import useToggleAnimation from '../hooks/useToggleAnimation';
import useOnChangeCssVariablesEffect from './hooks/useOnChangeCssVariablesEffect'

import SvgFilters from "./components/SvgFilters";

import './style/index.css';

const ID_EFFECT = 'squiggly__animation';

function SquigglyEffect({
                            baseFrequency = 0.02,
                            children,
                            disabled = false,
                            iterationCount,
                            onHover = false,
                            onMouseEnter,
                            onMouseLeave,
                            scaleNoise = 5,
                            speed,
                            ...rest
                        }) {
    const squigglyContainerRef = useRef(null)

    useOnChangeCssVariablesEffect(squigglyContainerRef, {iterationCount, speed})

    return (
        <div {...rest}>
            <div id='squiggly__container' ref={squigglyContainerRef}>
                {children}
                <SvgFilters baseFrequency={baseFrequency} scaleNoise={scaleNoise}/>
            </div>
        </div>
    );
}

export default memo(SquigglyEffect);

SquigglyEffect.propTypes = {
    baseFrequency: PropTypes.number,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    iterationCount: PropTypes.string,
    onHover: PropTypes.bool,
    scaleNoise: PropTypes.number,
    speed: PropTypes.number,
};
