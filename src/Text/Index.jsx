import React, { createElement, memo } from 'react';
import PropTypes from 'prop-types';

import GlitchBase from 'core/components/GlitchBase';

import './style/index.css';

const GLITCH_ID = 'glitch-text';

const GlitchText = ({
  children,
  color1 = 'rgba(77, 171, 245, .5)',
  color2 = 'rgba(245, 0, 87, .3)',
  duration = 2000,
  component = 'span',
  ...rest
}) => (
  <GlitchBase
    duration={duration}
    glitchId={GLITCH_ID}
    restCssVarList={JSON.stringify([
      ['--text-shadow-color-1', color1],
      ['--text-shadow-color-2', color2],
    ])}
    {...rest}
  >
    {createElement(component, null, children)}
  </GlitchBase>
);

export default memo(GlitchText);

GlitchText.propTypes = {
  children: PropTypes.node.isRequired,
  color1: PropTypes.string,
  color2: PropTypes.string,
  component: PropTypes.string,
  disabled: PropTypes.bool,
  duration: PropTypes.number,
  iterationCount: PropTypes.string,
  onHover: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};
