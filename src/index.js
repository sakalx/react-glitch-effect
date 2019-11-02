import React, {useLayoutEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import './style.css';

function GlitchEffect({
                        children,
                        disabled = true,
                        duration = '3s',
                        iterationCount = 'infinite',
                        onHover = false,
                        onMouseEnter,
                        onMouseLeave,
                        ...rest
                      }) {
  const refGlitch = useRef(null);

  useLayoutEffect(() => {
    initCSSVariables();
  }, [duration, iterationCount]);

  useLayoutEffect(() => {
    !disabled && !onHover ? addGlitchEffect() : removeGlitchEffect();
  }, [disabled, onHover]);

  const initCSSVariables = () => {
    const style = refGlitch.current.style;

    style.setProperty('--duration-effect', duration);
    style.setProperty('--iteration-count', iterationCount);
  };

  const handleOnMouseEnter = () => {
    onMouseEnter && onMouseEnter();
    onHover && addGlitchEffect();
  };

  const handleOnMouseLeave = () => {
    onMouseLeave && onMouseLeave();
    onHover && removeGlitchEffect();
  };

  const addGlitchEffect = () => {
    refGlitch.current.classList.add('glitch');
  };

  const removeGlitchEffect = () => {
    refGlitch.current.classList.remove('glitch');
  };

  return (
      <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}{...rest}>
        <div className='glitch-variables' ref={refGlitch}>
          {children}
        </div>
      </div>
  );
}

export default GlitchEffect;

GlitchEffect.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  duration: PropTypes.string,
  iterationCount: PropTypes.string,
  onHover: PropTypes.bool,
  style: PropTypes.object,
};
