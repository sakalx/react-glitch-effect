import React, { useLayoutEffect, createElement, memo } from 'react';
import PropTypes from 'prop-types';

import GlitchBase from 'core/components/GlitchBase';

import './style/index.css';

const ID_ANIMATION_EFFECT = 'glitch-text';

const GlitchText = ({
  children,
  color1 = 'rgba(77, 171, 245, .5)',
  color2 = 'rgba(245, 0, 87, .3)',
  duration = 2000,
  component = 'span',
  ...rest
}) => {
  console.log(33333);

  useLayoutEffect(() => {
    const foo = document.getElementById(ID_ANIMATION_EFFECT);

    foo?.style.setProperty('--_s-color-text-effect-1', color1);

    console.log(foo);
  }, [color1]);

  return (
    <GlitchBase duration={duration} idAnimation={ID_ANIMATION_EFFECT} {...rest}>
      {createElement(component, null, children)}
    </GlitchBase>
  );
};
//   --_s-color-text-effect-1: rgba(77, 171, 245, .5);
//   --_s-color-text-effect-2: rgba(245, 0, 87, .3);

// useLayoutEffect(() => {
//   ref.current?.style.setProperty(key, value);
// }, [color1]);
//
// useLayoutEffect(() => {
//   cssVarList.forEach(([key, value]) => {
//     ref.current?.style.setProperty(key, value);
//   });
// }, [color2]);

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
