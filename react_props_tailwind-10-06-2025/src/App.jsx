import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let cardData = {
    username: "Dominic",
    price: 0.01,
    price_tag: "Price",
    userid: 345
  }

  let newArry = [1, 2, 3, 4, 5]
  return (
    <>
      <h1 className="bg-green-200 text-5xl text-center p-4 font-mono text-black">
        Tailwind
      </h1>
      <div className="card-main flex">
        <Card username="Jony Doe" userID="348" price="0.5" sumOject={cardData}/>
        <Card username="Alex Doe"  price="0.1" sumArry={newArry}/>
      </div>
    </>
  );
}

export default App;
