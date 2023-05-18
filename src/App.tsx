import React, {useState} from 'react';
import Ball from "./Ball/Ball";
import './App.css';

const App = () => {
  let arrayNumber:number[] = [];

  let getRandomIntInclusive = (min:number, max:number) => {
    min = Math.ceil(5);
    max = Math.floor(36);
    return Math.floor(Math.random() * (max - min + 1)) + min;
     };
  getRandomIntInclusive(5,36);

  while (arrayNumber.length !== 5){

    const randomNumber = getRandomIntInclusive(5,36);

    if (!arrayNumber.includes(randomNumber)) {
        arrayNumber.push(randomNumber);
    }
  }

  arrayNumber.sort(function(x,y) {
    return x-y
  });

  const [numbers, setNumbers] = useState<number[]>([0,0,0,0,0]);

  const changeNumber = () =>{
    setNumbers(arrayNumber)
  };

  return (
    <div className="App">
      <Ball number={numbers[0]}>
      </Ball>
      <Ball number={numbers[1]}>
      </Ball>
      <Ball number={numbers[2]}>
      </Ball>
      <Ball number={numbers[3]}>
      </Ball>
      <Ball number={numbers[4]}>
      </Ball>

      <div>
        <button onClick={changeNumber}>New Number</button>
      </div>

    </div>
  );
};

export default App;
