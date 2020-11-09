import React, { useRef, memo } from 'react';
import PropTypes from 'prop-types';

import useOnChangeCssVarEffect from 'core/hooks/useOnChangeCssVarEffect';
import useOnChangeDisabledEffect from 'core/hooks/useOnChangeDisabledEffect';
import useOnHover from 'core/hooks/useOnHover';
import useToggleAnimation from 'core/hooks/useToggleAnimation';

import SvgFilters from './components/SvgFilters';

import './style/index.css';

const ID_EFFECT = 'glitch-squiggly__animation';

const SquigglyGlitch = ({
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

  const toggleAnimation = useToggleAnimation({
    ref: squigglyAnimationRef,
    id: ID_EFFECT,
  });

  const { handleOnMouseEnter, handleOnMouseLeave } = useOnHover({
    callbackEvents: { onMouseEnter, onMouseLeave },
    onHover,
    toggleAnimation,
  });

  useOnChangeCssVarEffect({
    ref: squigglyAnimationRef,
    cssVariables: [
      ['--speed', `${speed}ms`],
      ['--iteration-count', iterationCount],
    ],
  });

  useOnChangeDisabledEffect(toggleAnimation, { disabled, onHover });

  return (
    <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} {...rest}>
      <div ref={squigglyAnimationRef}>
        {children}
        <SvgFilters baseFrequency={baseFrequency} scaleNoise={scaleNoise} />
      </div>
    </div>
  );
};

export default memo(SquigglyGlitch);

SquigglyGlitch.propTypes = {
  baseFrequency: PropTypes.number,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  iterationCount: PropTypes.string,
  onHover: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  scaleNoise: PropTypes.number,
  speed: PropTypes.number,
};
