import React, { useContext } from 'react';
import  styled  from 'styled-components';
import { Moon } from 'heroicons-react';
import ThemeContext from './ThemeContext';

const StyledLabel = styled.label`
input{
    position: fixed;
    left: -999999px;
}
input ~ div{
    width: 30 px;
    height: 16px;
    background: #eee;
    border-radius: 8px;
    position: relative;
}
svg{
  height: 14px;
  color: #fff;
  background-color: #ccc;
  border-radius: 7px;
  position: absoulute;
  top: 1px;
  left: 1px;
  transition: all .4s ease ;
}
input:checked ~ div{
  background: #668;
  svg{
    background-color: #224;
    left: 15px;
  }
}
`;

const Toggler = () => {
  const theme=useContext(ThemeContext);
  return (
    <StyledLabel>
        <input type="checkbox" checked={theme.darkMode}
         onChange={()=>theme.setDarkMode(oldValue=>!oldValue)}/>
        <div>
        <Moon/>
        </div>
        </StyledLabel>
  );
}

export default Toggler;