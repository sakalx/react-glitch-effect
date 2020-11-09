import React, { memo } from 'react';
import PropTypes from 'prop-types';

import GlitchBase from 'core/components/GlitchBase';

import './style/index.css';

const ID_ANIMATION_EFFECT = 'glitch-clip__animation';

const ClipGlitch = ({
  children,
  duration = 3000,
  ...rest
}) => (
  <GlitchBase duration={duration} idAnimation={ID_ANIMATION_EFFECT} {...rest}>
    {children}
  </GlitchBase>
);

export default memo(ClipGlitch);

ClipGlitch.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  duration: PropTypes.number,
  iterationCount: PropTypes.string,
  onHover: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};
