import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const variables = {
  'duration': '--duration-effect',
  'iterationCount': '--iteration-count',
};

class GlitchEffect extends React.Component {

  componentDidMount() {
    this.initVariables();

    if (!this.props.onHover && !this.props.disabled) {
      this.toggleGlitchEffect()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.disabled !== prevProps.disabled) {
      this.toggleGlitchEffect()
    }
  }

  initVariables = () => {
    Object.entries(this.props).forEach(([key, value]) => {
      if (!!variables[key]) {
        this.setGlitchVariable(variables[key], value)
      }
    });
  };

  setGlitchVariable = (key, value) => {
    this.refGlitch.style.setProperty(key, value);
  };

  toggleGlitchEffect = () => {
    this.refGlitch.classList.toggle('glitch');
  };

  handleHover = () => {
    if (!!this.props.onHover) {
      this.toggleGlitchEffect()
    }
  };

  render() {
    const {
      className = null,
      style = null,
    } = this.props;

    return (
      <div
        className={className}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        style={style}
      >
        <div
          className='glitch-variables'
          ref={refGlitch => this.refGlitch = refGlitch}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default GlitchEffect;

GlitchEffect.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  duration: PropTypes.string,
  iterationCount: PropTypes.number,
  onHover: PropTypes.bool,
  style: PropTypes.object,
};