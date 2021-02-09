export default `
import React from 'react';
import GlitchClip from 'react-glitch-effect/core/Clip';

const MyComponent = () => {
    return (
      <GlitchClip onHover={true}>
        <h1>Glitch</h1>
      </GlitchClip>
    )
}
 
 /* props: 
 * duration: number,
 * iterationCount: string,
 * disabled: bool,
 * onHover: bool,
 * */
`;
