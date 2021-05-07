import { useState } from 'react';
import './App.css';

const App = () => {

  const red = 'red';
  const blue = 'blue';

  const [ buttonColor, setButtonColor ] = useState(red);
  const newButtonColor = buttonColor === red ? blue : red;
 
  const [ disabled, setDisabled ] = useState(false);

  
  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }} 
        onClick={ () => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input 
        type="checkbox"
        id="enable-button-checkbox" 
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={ (event) => {
          setDisabled(event.target.checked)
         }
        }
      />
    </div>
  )
}

export default App;
