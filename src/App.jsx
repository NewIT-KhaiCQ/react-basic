import { useState } from 'react';
import './App.css'
import ColorBox from './components/ColorBox';
function App() {
  const colors = ['red', 'blue', 'green', 'black', 'gray'];
  const [currentColor, setCurrentColor] = useState('red');
  const handleChangeColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    setCurrentColor(colors[index]);
  }
  console.log(currentColor);
  
  return (
    <>
      <ColorBox color={currentColor} />
      <button onClick={handleChangeColor}>Click me!</button>
    </>
  )
}

export default App
