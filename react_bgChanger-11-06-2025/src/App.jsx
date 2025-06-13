import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState("olive");

  const [colorText, setColorText] = useState("Olive");
  const [cText, setcText] = useState("Purple");

  const changeColor = (bgColor, text, textColor) => {
    setColor(bgColor);
    setColorText(text); 
    setcText(textColor);
  };
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <h1 className='fixed top-2/5 left-195 text-5xl' style={{color: cText}}>{colorText}</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Button onClick={() => changeColor("Red", "Red", "Black")} bgColor="Red" btColorName="Red" btColor="White"/>
          <Button onClick={() => changeColor("Green", "Green", "White")} bgColor="green" btColorName="Green" btColor="White" />
          <Button onClick={() => changeColor("Blue", "Blue", "Lavender")} bgColor="Blue" btColorName="Blue" btColor="White" />
          <Button onClick={() => changeColor("Olive", "Olive", "Purple")} bgColor="Olive" btColorName="Olive" btColor="White" />
          <Button onClick={() => changeColor("Gray", "Gray", "Pink")} bgColor="Gray" btColorName="Gray" btColor="White" />
          <Button onClick={() => changeColor("Yellow", "Yellow", "Black")} bgColor="Yellow" btColorName="Yellow" />
          <Button onClick={() => changeColor("Pink", "Pink", "Gray")} bgColor="Pink" btColorName="Pink" />
          <Button onClick={() => changeColor("Purple", "Purple", "Olive")} bgColor="Purple" btColorName="Purple" btColor="White" />
          <Button onClick={() => changeColor("Lavender", "Lavender", "Blue")} bgColor="Lavender" btColorName="Lavender" />
          <Button onClick={() => changeColor("White", "White", "Green")} bgColor="White" btColorName="White" />
          <Button onClick={() => changeColor("Black", "Black", "Red")} bgColor="Black" btColorName="Black" btColor="White" />
        </div>
      </div>
    </div>
 
  )
}

export default App
