import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

const App = () => {

  const MEDIUM_VIOLET_RED = 'MediumVioletRed';
  const MIDNIGHT_BLUE = 'MidnightBlue';
  const GRAY = 'gray';

  const [ buttonColor, setButtonColor ] = useState(MEDIUM_VIOLET_RED);
  const newButtonColor = buttonColor === MEDIUM_VIOLET_RED ? MIDNIGHT_BLUE : MEDIUM_VIOLET_RED;
  const [ disabled, setDisabled ] = useState(false);

  
  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? GRAY : buttonColor }} 
        onClick={ () => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input 
        type="checkbox"
        id="disable-button-checkbox" 
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={ (event) => {
          setDisabled(event.target.checked);
         }
        }
      />
    </div>
  )
}

export default App;
