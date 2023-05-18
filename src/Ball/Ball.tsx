import React from 'react';

interface IBallProps extends React.PropsWithChildren{
  number: number;
  }

const Ball:React.FC<IBallProps> = props => {
  return (
    <div className="ball">
      <h1>{props.number}</h1>
    </div>
  );
};

export default Ball;
