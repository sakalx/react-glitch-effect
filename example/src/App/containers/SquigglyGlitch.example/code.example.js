export default `
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
 
 /* props: 
 * baseFrequency: number,
 * scaleNoise: number,
 * duration: number,
 * iterationCount: string,
 * disabled: bool,
 * onHover: bool,
 * */
`;
