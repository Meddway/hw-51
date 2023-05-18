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

  let i = 0;
  while (i<6){
    arrayNumber.push(getRandomIntInclusive(5,36));
    i++
  }

  let newArrayNumber = arrayNumber;
  newArrayNumber.sort(function(x,y) {
    return x-y
  });

  let [numbers, setNumbers] = useState<number[]>([]);

  const changeNumber = () =>{
    setNumbers([])
  };

  return (
    <div className="App">
      <Ball number={newArrayNumber[0]}>
      </Ball>
      <Ball number={newArrayNumber[1]}>
      </Ball>
      <Ball number={newArrayNumber[2]}>
      </Ball>
      <Ball number={newArrayNumber[3]}>
      </Ball>
      <Ball number={newArrayNumber[4]}>
      </Ball>
      <Ball number={newArrayNumber[5]}>
      </Ball>

      <div>
        <button onClick={changeNumber}>New Number</button>
      </div>

    </div>
  );
};

export default App;
