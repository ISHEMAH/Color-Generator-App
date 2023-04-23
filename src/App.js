import Square from './Square';
import Input from './Input';
import { useState } from 'react';

function App() {
  const [colorValue,setColorValue] = useState('')
  const [hexValue,setHexValue] = useState('')
  const [isDarkText,setIsDarkText] = useState(false)
  return (
    <div className="App"
    >
      <Square 
      hexValue={hexValue}
      colorValue={colorValue}
      isDarkText={isDarkText}
      />
      <Input
        colorValue={colorValue}
        setColorValue = {setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;

