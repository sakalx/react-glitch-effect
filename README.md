# React glitch-effect-components
 ________________________________________________________
[DEMO](https://sakalx.github.io/react-glitch-effect/)
 ________________________________________________________
 ________________________________________________________


## Squiggly Glitch Component
`import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';`

#### Props
| Name | Type | Default |
| --- | --- | --- |
| **disabled** | `boolean` | *false* |
| **duration** | `string` | *3s* |
| **iterationCount** | `string` | *infinite* |
| **onHover** | `boolean` | *false*
| **baseFrequency** | `number` | *0.02*
| **scaleNoise** | `number` | *5*
 ________________________________________________________
 ________________________________________________________

### Example Squiggly glitch effect component
 ```javascript
import React, { useState } from 'react';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';

const MyComponent = () => {
  const [isDisabled, setDisabled] = useState(false);

  const handleToggleGlitch = () => {
    setDisabled(!isDisabled);
  };

  return (
    <div>
      <button onClick={handleToggleGlitch}>TOGGLE EFFECT</button>

      <GlitchSquiggly disabled={isDisabled}>
        <h1>GlitchSquiggly</h1>
      </GlitchSquiggly>
    </div>
  )
};
 ```

 ________________________________________________________
 ________________________________________________________


## Clip Glitch Component
`import GlitchClip from 'react-glitch-effect/core/GlitchClip';`

#### Props
| Name | Type | Default |
| --- | --- | --- |
| **disabled** | `boolean` | *false* |
| **duration** | `string` | *3s* |
| **iterationCount** | `string` | *infinite* |
| **onHover** | `boolean` | *false* 
 ________________________________________________________
 ________________________________________________________
 
### Example Clip glitch effect component
 ```javascript
 import React from 'react';
 import GlitchClip from 'react-glitch-effect/core/GlitchClip';
 
const MyComponent = () => {
    return (
      <GlitchClip>
        <h1>Glitch</h1>
      </GlitchClip>
    )
 }
 ```

### Manually trigger example Clip glitch effect component
```javascript
import React, {useState} from 'react';
import GlitchClip from 'react-glitch-effect/core/Clip';
   
const MyComponent = () => {
  const [isDisabled, setDisabled] = useState(false);

  const handleToggleGlitch = () => {
    setDisabled(!isDisabled);
  };

  return (
    <div>
        <button onClick={handleToggleGlitch}>TOGGLE EFFECT</button>
        <GlitchClip disabled={isDisabled}>
          <h1>Glitch</h1>
        </GlitchClip>
    </div>
  )
};
```

### Example Clip glitch effect with on hover
```javascript
import React from 'react';
import GlitchClip from 'react-glitch-effect/core/Clip';

const MyComponent = () => {
    return (
      <GlitchClip onHover={true}>
        <h1>Glitch</h1>
      </GlitchClip>
    )
}
```

 ________________________________________________________
 ________________________________________________________
 
## Text Glitch Component
`import GlitchText from 'react-glitch-effect/core/GlitchText';`

#### Props
| Name | Type | Default |
| --- | --- | --- |
| **component** | `string` | *span* 
| **color1** | `string` | *rgba(77, 171, 245, .5)* 
| **color2** | `string` | *rgba(245, 0, 87, .3)* 
| **disabled** | `boolean` | *false* |
| **duration** | `string` | *2s* |
| **iterationCount** | `string` | *infinite* |
| **onHover** | `boolean` | *false* 
 ________________________________________________________
 ________________________________________________________
 
### Example Text glitch effect component
```javascript
import React, {useState} from 'react';
import GlitchText from 'react-glitch-effect/core/GlitchText';

 const MyComponent = () => {
   const [isDisabled, setDisabled] = useState(false);
 
   const handleToggleGlitch = () => {
     setDisabled(!isDisabled);
   };
 
   return (
     <div>
         <button onClick={handleToggleGlitch}>TOGGLE EFFECT</button>
         <GlitchText component='h1' disabled={isDisabled}>
           Glitch
         </GlitchText>
     </div>
   )
 };
```
