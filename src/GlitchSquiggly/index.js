import React, { memo } from 'react';
import PropTypes from 'prop-types';

import GlitchBase from '../__core__/components/GlitchBase';
import SvgFilters from './components/SvgFilters';

import './style/index.css';

const GLITCH_ID = 'glitch-squiggly';

const GlitchSquiggly = ({
  baseFrequency = 0.02,
  children,
  duration = 340,
  scaleNoise = 5,
  ...rest
}) => (
  <GlitchBase duration={duration} glitchId={GLITCH_ID} {...rest}>
    <>{children}</>
    <SvgFilters baseFrequency={baseFrequency} scaleNoise={scaleNoise} />
  </GlitchBase>
);

export default memo(GlitchSquiggly);

GlitchSquiggly.propTypes = {
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
