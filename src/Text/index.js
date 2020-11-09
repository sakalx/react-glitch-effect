import React, { useLayoutEffect, useRef, createElement } from 'react'
import PropTypes from 'prop-types'

import './style.css'

function Text({
  children,
  color1,
  color2,
  component = 'span',
  disabled = false,
  duration,
  iterationCount,
  onHover = false,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) {
  const refTextGlitch = useRef(null)

  useLayoutEffect(() => {
    refTextGlitch.current.classList.add('_s-glitch-text-variables')
  }, [])

  useLayoutEffect(() => {
    initCSSVariables()
  }, [color1, color2, duration, iterationCount])

  useLayoutEffect(() => {
    !disabled && !onHover ? addGlitchEffect() : removeGlitchEffect()
  }, [disabled, onHover])

  const addGlitchEffect = () => {
    refTextGlitch.current.classList.add('_s-glitch-text')
  }

  const removeGlitchEffect = () => {
    refTextGlitch.current.classList.remove('_s-glitch-text')
  }

  const initCSSVariables = () => {
    const style = refTextGlitch.current.style

    color1 && style.setProperty('--_s-color-text-effect-1', color1)
    color2 && style.setProperty('--_s-color-text-effect-2', color2)
    duration && style.setProperty('_s-duration-text-effect', duration)
    iterationCount &&
      style.setProperty('_s-iteration-text-effect-count', iterationCount)
  }

  const handleOnMouseEnter = () => {
    onMouseEnter && onMouseEnter()
    onHover && addGlitchEffect()
  }

  const handleOnMouseLeave = () => {
    onMouseLeave && onMouseLeave()
    onHover && removeGlitchEffect()
  }

  return createElement(
    component,
    {
      ...rest,
      ref: refTextGlitch,
      onMouseEnter: handleOnMouseEnter,
      onMouseLeave: handleOnMouseLeave,
    },
    children,
  )
}

export default Text

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color1: PropTypes.string,
  color2: PropTypes.string,
  component: PropTypes.string,
  disabled: PropTypes.bool,
  duration: PropTypes.string,
  iterationCount: PropTypes.string,
  onHover: PropTypes.bool,
}
