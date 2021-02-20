import React, { useRef, cloneElement, memo } from 'react';
import PropTypes from 'prop-types';

import useOnChangeAnimationEffect from '../../hooks/useOnChangeAnimationEffect';
import useOnChangeCssVarEffect from '../../hooks/useOnChangeCssVarEffect';
import useOnChangeDisabledEffect from '../../hooks/useOnChangeDisabledEffect';
import useOnHover from '../../hooks/useOnHover';
import useToggleAnimation from '../../hooks/useToggleAnimation';

const GlitchBase = ({
  children,
  disabled = false,
  duration = 1000,
  glitchId,
  iterationCount = 'infinite',
  onHover = false,
  onMouseEnter,
  onMouseLeave,
  restCssVarList = '[]',
  ...rest
}) => {
  const glitchAnimationRef = useRef(null);

  const toggleAnimation = useToggleAnimation(glitchAnimationRef, glitchId);

  const { handleOnMouseEnter, handleOnMouseLeave } = useOnHover({
    callbackEvents: { onMouseEnter, onMouseLeave },
    onHover,
    toggleAnimation,
  });

  useOnChangeDisabledEffect(toggleAnimation, { disabled, onHover });

  useOnChangeAnimationEffect(glitchAnimationRef, { iterationCount, duration });

  useOnChangeCssVarEffect(glitchAnimationRef, restCssVarList);

  return (
    <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} {...rest}>
      <div ref={glitchAnimationRef}>
        {Array.isArray(children)
          ? [children[0], cloneElement(children[1], { rootRef: glitchAnimationRef, key: 1 })]
          : children}
      </div>
    </div>
  );
};

export default memo(GlitchBase);

GlitchBase.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  duration: PropTypes.number,
  glitchId: PropTypes.string,
  iterationCount: PropTypes.string,
  onHover: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  restCssVarList: PropTypes.string,
};
