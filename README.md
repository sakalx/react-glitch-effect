# React glitch-effect-component
 ________________________________________________________
[DEMO](https://sakalx.github.io/react-glitch-effect/)

 ________________________________________________________
 ________________________________________________________

 ________________________________________________________
## Glitch

#### Props

| Name | Type | Default |
| --- | --- | --- |
| **disabled** | `boolean` | *false* |
| **duration** | `string` | *3s* |
| **iterationCount** | `string` | *infinite* |
| **onHover** | `boolean` | *false* 
 ________________________________________________________
 ________________________________________________________
 
 ### Example Functional component
   ```javascript
   import React, {useState} from 'react';
   import GlitchEffect from 'react-glitch-effect';
   
const MyComponent = () => {
  const [isDisabled, setDisabled] = useState(false);

  const handleToggleGlitch = () => {
    setDisabled(!isDisabled);
  };

  return (
    <div>
        <button onClick={handleToggleGlitch}>TOGGLE EFFECT</button>
        <GlitchEffect disabled={isDisabled}>
          <h1>Glitch</h1>
        </GlitchEffect>
    </div>
  )
};
```

 ### Example Class component
   ```javascript
   import React from 'react';
   import GlitchEffect from 'react-glitch-effect';

   class MyComponent extends React.Component {
     render() {
       return (
         <GlitchEffect>
           <h1>Glitch</h1>
         </GlitchEffect>
       )
     }
   }
   ```
   
### Example with hover
```javascript
import React from 'react';
import GlitchEffect from 'react-glitch-effect';

class MyComponent extends React.Component {
  render() {
    return (
      <GlitchEffect onHover={true}>
        <h1>Glitch</h1>
      </GlitchEffect>
    )
  }
}
```

### Example toggle effect
```javascript
import React from 'react';
import GlitchEffect from 'react-glitch-effect';

class MyComponent extends React.Component {
    state = {
      disabled: false,
    };
    
    handleToggleGlitch = () => {
      this.setState(state => ({disabled: !state.disabled}))
    };
    
    render() {
        return (
         <GlitchEffect disabled={this.state.disabled}>
            <div>
                <button onClick={this.handleToggleGlitch}>
                  Toggle
                </button>
                <h1>Glitch</h1>
            </div>
        </GlitchEffect>
        )
    }
}
```
 ________________________________________________________
## Text Glitch

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
 
### Example Text Glitch
```javascript
import React, {useState} from 'react';
import TextGlitch from 'react-glitch-effect/Text';

 const MyComponent = () => {
   const [isDisabled, setDisabled] = useState(false);
 
   const handleToggleGlitch = () => {
     setDisabled(!isDisabled);
   };
 
   return (
     <div>
         <button onClick={handleToggleGlitch}>TOGGLE EFFECT</button>
         <TextGlitch component='h1' disabled={isDisabled}>
           Glitch
         </TextGlitch>
     </div>
   )
 };
```
