import { useState } from 'react';
import './App.css';

const App = () => {

  const red = 'red';
  const blue = 'blue';

  const [buttonColor, setButtonColor] = useState(red);
  const newButtonColor = buttonColor === red ? blue : red;

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }} 
        onClick={ () => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" />

    </div>
  )
}

export default App;
