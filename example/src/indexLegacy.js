/* eslint import/no-unresolved: 0 */
import React, { useState } from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import VerticalTabs from './App/components/Navigation/Index';
import AppBar from './App/components/AppBar/Index';
import GlitchSquiggly from '../../src/GlitchSquiggly/Index';
import style from './style';

import SimpleAccordion from './App/components/Accordion';

const App = () => {
  const [isDisabledGlitch, setDisabledGlitch] = useState({
    main: false,
    text: false,
  });

  const handleToggleGlitch = (name) => () => {
    setDisabledGlitch((pre) => ({ ...pre, [name]: !isDisabledGlitch[name] }));
  };

  const [speed, setSpeed] = useState(3000);
  const [baseFrequency, setBaseFrequency] = useState(0.02);
  const [scaleNoise, setScaleNoise] = useState(5);
  const [isDisabled, setIsDisabled] = useState(false);

  const foo = () => {
    const newValue = speed + 100;
    setSpeed(null);
  };
  const bar = () => {
    const newValue = baseFrequency + 0.1;
    setBaseFrequency(newValue);
  };
  const baz = () => {
    const newValue = scaleNoise + 0.5;
    setScaleNoise(newValue);
  };

  const reset = () => {
    setSpeed(340);
    setBaseFrequency(0.02);
    setScaleNoise(5);
  };

  return (
    <main style={{ height: '100vh' }}>
      <CssBaseline />
      <AppBar />
      <SimpleAccordion />
      {/*     <Button variant="contained" color="primary">
        Hello World
      </Button>
      <button onClick={reset}>RESET</button>
      <button onClick={foo}>Slow down Speed</button>
      <button onClick={bar}>Increase scaleNoise</button>
      <button onClick={baz}>Increase baseFrequency</button>
      <button onClick={() => setIsDisabled(!isDisabled)}>Toggle Animation</button>

      <GlitchSquiggly disabled={isDisabled} duration={speed}>
        <h1 style={{ color: 'black' }}>hello</h1>
      </GlitchSquiggly>
      <h2 style={{ color: 'black' }}>hello</h2>
      <GlitchSquiggly onHover>
        <img
          style={style.portrait__img}
          alt="Image with glitch effect when hoover"
          src="https://raw.githubusercontent.com/sakalx/react-glitch-effect/master/example/src/static/img/secondary.jpg"
        />
      </GlitchSquiggly> */}

      {/* <Magic component="aside" style={style.title}> */}
      {/*  <div> */}
      {/*    <h5>hello</h5> */}
      {/*    <p> Hover this text</p> */}

      {/*  </div> */}
      {/* </Magic> */}
      {/* <Magic color1="red"> */}
      {/*  Boo */}
      {/* </Magic> */}

      {/*
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
*/}
      {/* <section style={style.row}> */}
      {/*  <GlitchText onHover component="h5" style={style.title}> */}
      {/*    Hover this text */}
      {/*  </GlitchText> */}
      {/* <GlitchClipEffect onHover> */}
      {/*  <figure> */}
      {/*    <figcaption style={style.portrait__title}> */}
      {/*      Hover me */}
      {/*    </figcaption> */}
      {/*    <img */}
      {/*      style={style.portrait__img} */}
      {/*      alt="Image with glitch effect when hoover" */}
      {/*      src="https://raw.githubusercontent.com/sakalx/react-glitch-effect/master/example/src/static/img/secondary.jpg" */}
      {/*    /> */}
      {/*  </figure> */}
      {/* </GlitchClipEffect> */}
      {/* </section> */}
    </main>
  );
};

render(<App />, document.getElementById('root'));
