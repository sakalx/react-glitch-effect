import React, {useRef, memo} from 'react';
import PropTypes from 'prop-types';

import useOnChangeDisabledEffect from '../hooks/useOnChangeDisabledEffect';
import useOnHover from '../hooks/useOnHover';
import useToggleAnimation from '../hooks/useToggleAnimation';
import useOnChangeCssVariablesEffect from './hooks/useOnChangeCssVariablesEffect'

import SvgFilters from "./components/SvgFilters";

import './style/index.css';

const ID_EFFECT = 'squiggly__animation';

const SquigglyEffect = ({
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
                        }) => {
    const squigglyAnimationRef = useRef(null);

    const toggleAnimation = useToggleAnimation({ref: squigglyAnimationRef, id: ID_EFFECT});

    const {handleOnMouseEnter, handleOnMouseLeave} = useOnHover({
        callbackEvents: {onMouseEnter, onMouseLeave},
        onHover,
        toggleAnimation,
    });

    useOnChangeCssVariablesEffect(squigglyAnimationRef, {iterationCount, speed});
    useOnChangeDisabledEffect(toggleAnimation, {disabled, onHover});

    return (
        <div {...rest}>
            <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} ref={squigglyAnimationRef}>
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
