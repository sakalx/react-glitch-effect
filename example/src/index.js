import React, {useState} from 'react';
import {render} from 'react-dom';
import GlitchEffect from '../../src';

const App = () => {
  const [isDisabled, setDisabled] = useState(false);

  const handleToggleGlitch = () => {
    setDisabled(!isDisabled);
  };

  return (
      <div style={styles.wrap}>
        <GlitchEffect disabled={isDisabled} style={styles.wallpaper}>
          <img style={styles.wallpaper__img}
               alt='Background image with glitch effect'
               src={'https://raw.githubusercontent.com/sakalx/react-glitch-effect/master/static/img/store-1245758_1920.jpg'}/>
        </GlitchEffect>

        <button style={styles.button__toggle} onClick={handleToggleGlitch}>
          Toggle
        </button>

        <GlitchEffect disabled={isDisabled} duration='1s' style={styles.title}>
          <h1>Glitch Effect</h1>
        </GlitchEffect>

        <GlitchEffect onHover={true}>
          <figure>
            <figcaption style={styles.portrait__title}>
              Hover me
            </figcaption>
            <img style={styles.portrait__img}
                 alt='Image with glitch effect when hoover'
                 src={'https://raw.githubusercontent.com/sakalx/react-glitch-effect/master/static/img/oldtimer-1245746_1920.jpg'}/>
          </figure>
        </GlitchEffect>
      </div>
  );
};

const styles = {
  wrap: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
  },
  wallpaper: {
    position: 'absolute',
    zIndex: -1,
  },
  wallpaper__img: {
    height: '100vh',
    width: '100vw',
  },
  title: {
    alignSelf: 'center',
    fontSize: 34,
  },
  portrait__img: {
    border: '5px solid #fff',
    borderRadius: '3%',
    cursor: 'pointer',
    height: 'auto',
    width: '25vw',
  },
  portrait__title: {
    fontSize: 34,
    fontWeight: 500,
    textShadow: '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)',
  },
  button__toggle: {
    alignSelf: 'flex-end',
    background: 'rgba(255,255, 255, 0)',
    borderRadius: 8,
    color: '#fff',
    cursor: 'pointer',
    fontSize: 24,
    margin: 15,
    outline: 'none',
    padding: 2,
    textShadow: '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)',
    width: 125,
  },

};

render(<App/>, document.getElementById('root'));
