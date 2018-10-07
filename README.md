# React glitch-effect-component
 ________________________________________________________
**[DEMO](**[DEMO](https://sakalx.github.io/Navigate-Dots)**)**

>Note that the CSS clip-path property does not work in IE or Edge

 ________________________________________________________
 ________________________________________________________

#### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| **disabled** | `boolean` | *false* | you secret password for encrypting / decrypting  |
| **duration** | `string` | *3s* | is should do decryption |
| **iterationCount** | `string` | *infinite* | is should do decryption |
| **onHover** | `boolean` | *false* | is should do decryption |
 ________________________________________________________
 ________________________________________________________
 
 ### Example
  ```javascript
  import React from 'react';
  import GlitchEffect from 'react-glitch-effect';
  
  class MyComponen extends React.Component {
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

class MyComponen extends React.Component {
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

class MyComponen extends React.Component {
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