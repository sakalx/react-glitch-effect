import React from 'react';
import {render} from 'react-dom';
import GlitchEffect from '../../src';

class App extends React.Component {

  state = {
    disabled: true,
  };

  handleToggleGlitch = () => {
    this.setState(state => ({disabled: !state.disabled}))
  };


  render() {
    const {disabled} = this.state;

    return (
      <div>
        <GlitchEffect  disabled={false} style={{background: 'green'}}>
          <div>
            <h1>Hello from My Component</h1><h1>Hello from My Component</h1><h1>Hello from My Component</h1><h1>Hello from My Component</h1><h1>Hello from My Component</h1>
            <img src={}/>
          </div>
        </GlitchEffect>
        <GlitchEffect duration="5s" disabled={false} className="foo">
          <h2 align="center">Foo Bar Baz</h2>
        </GlitchEffect>

        <button onClick={this.handleToggleGlitch}>Toggle</button>
      </div>
    )
  }
}

render(<App/>, document.getElementById("root"));