import React, {useState} from 'react';
import {render} from 'react-dom';
import GlitchClipEffect from '../../src/Clip';
import GlitchText from '../../src/Text';

import style from './style';

const App = () => {
  const [isDisabledGlitch, setDisabledGlitch] = useState({
    main: false,
    text: false,
  });

  const handleToggleGlitch = name => () => {
    setDisabledGlitch(pre => ({...pre, [name]: !isDisabledGlitch[name]}));
  };
//
  return (
      <main style={style.wrap}>
        <GlitchClipEffect disabled={isDisabledGlitch.main} style={style.wallpaper}>
          <img style={style.wallpaper__img}
               alt='Background image with glitch effect'
               src='https://raw.githubusercontent.com/sakalx/react-glitch-effect/master/example/src/static/img/main.jpg'/>
        </GlitchClipEffect>

        <div style={style.row}>
          <section>
            <button style={style.button__toggle} onClick={handleToggleGlitch('text')}>
              TOGGLE TEXT GLITCH
            </button>
            <GlitchText disabled={isDisabledGlitch.text} component='h1' style={style.title}>
              Text Glitch
            </GlitchText>
          </section>

          <button style={style.button__toggle} onClick={handleToggleGlitch('main')}>
            TOGGLE MAIN GLITCH
          </button>
        </div>
        <GlitchClipEffect disabled={isDisabledGlitch.main} duration='1s' style={style.title}>
          <h1 style={{margin: 24}}>Glitch</h1>
        </GlitchClipEffect>

        <section style={style.row}>
          <GlitchText onHover={true} component='h5' style={style.title}>
            Hover this text
          </GlitchText>
          <GlitchClipEffect onHover={true}>
            <figure>
              <figcaption style={style.portrait__title}>
                Hover me
              </figcaption>
              <img style={style.portrait__img}
                   alt='Image with glitch effect when hoover'
                   src='https://raw.githubusercontent.com/sakalx/react-glitch-effect/master/example/src/static/img/secondary.jpg'/>
            </figure>
          </GlitchClipEffect>
        </section>
      </main>
  );
};

render(<App/>, document.getElementById('root'));
