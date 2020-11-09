import React, { useRef, memo } from 'react';
import PropTypes from 'prop-types';

import useOnChangeCssVarEffect from 'core/hooks/useOnChangeCssVarEffect';
import useOnChangeDisabledEffect from 'core/hooks/useOnChangeDisabledEffect';
import useOnHover from 'core/hooks/useOnHover';
import useToggleAnimation from 'core/hooks/useToggleAnimation';

import './style/index.css';

const ID_EFFECT = 'glitch-clip__animation';

const ClipGlitch = ({
  children,
  disabled = false,
  duration,
  iterationCount,
  onHover = false,
  onMouseEnter,
  onMouseLeave,
  speed,
  ...rest
}) => {
  const clipAnimationRef = useRef(null);

  const toggleAnimation = useToggleAnimation({
    ref: clipAnimationRef,
    id: ID_EFFECT,
  });

  const { handleOnMouseEnter, handleOnMouseLeave } = useOnHover({
    callbackEvents: { onMouseEnter, onMouseLeave },
    onHover,
    toggleAnimation,
  });

  useOnChangeCssVarEffect({
    ref: clipAnimationRef,
    cssVariables: [
      ['--speed', speed],
      ['--iteration-count', iterationCount],
    ],
  });

  useOnChangeDisabledEffect(toggleAnimation, { disabled, onHover });

  return (
    <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} {...rest}>
      <div ref={clipAnimationRef}>
        {children}
      </div>
    </div>
  );
};

export default memo(ClipGlitch);

ClipGlitch.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  duration: PropTypes.string,
  iterationCount: PropTypes.string,
  onHover: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  speed: PropTypes.number,
};
