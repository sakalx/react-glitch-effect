import React, { memo } from 'react';
import PropTypes from 'prop-types';

import GlitchBase from 'core/components/GlitchBase';
import SvgFilters from './components/SvgFilters';

import './style/index.css';

const ID_ANIMATION_EFFECT = 'glitch-squiggly__animation';

const SquigglyGlitch = ({
  baseFrequency = 0.02,
  children,
  duration = 340,
  scaleNoise = 5,
  ...rest
}) => (
  <GlitchBase duration={duration} idAnimation={ID_ANIMATION_EFFECT} {...rest}>
    {children}
    <SvgFilters baseFrequency={baseFrequency} scaleNoise={scaleNoise} />
  </GlitchBase>
);

export default memo(SquigglyGlitch);

SquigglyGlitch.propTypes = {
  baseFrequency: PropTypes.number,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  duration: PropTypes.number,
  iterationCount: PropTypes.string,
  onHover: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  scaleNoise: PropTypes.number,
};
