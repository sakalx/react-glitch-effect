export default `
import React, {useState} from 'react';
import GlitchText from 'react-glitch-effect/core/Text';

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
 
 /* props: 
 * color1: string,
 * color2: string,
 * component: string,
 * duration: number,
 * iterationCount: string,
 * disabled: bool,
 * onHover: bool,
 * */
`;
