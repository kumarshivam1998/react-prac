import  {createGlobalStyle}  from 'styled-components';
import Toggler from './Toggler';
import ThemeContext from './ThemeContext';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
body{
background-color: ${props => props.darkMode ? '#334':'#eef'};
color: ${props => props.darkMode ? '#eee':'#222'};
}
`;



function App() {
  const [darkMode ,setDarkMode]= useState( false );
   return (
   <div>
    <ThemeContext.Provider value={{darkMode ,setDarkMode}}>
      <GlobalStyle darkmode={darkMode}/>
    <h3>Dark mode : </h3>
     <Toggler/>
     </ThemeContext.Provider>
   </div>
  );
}

export default App;
