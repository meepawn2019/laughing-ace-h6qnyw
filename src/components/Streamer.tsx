// Streamer.tsx
import React from "react";
import { StreamerContainer } from "./styles";

interface StreamerProps {
  streamer: {
    userID: string;
    displayName: string;
    picture: string;
    score: number;
  };
  position: number;
  previousPosition: number;
}

const Streamer: React.FC<StreamerProps> = ({
  streamer,
  position,
  previousPosition,
}) => {
  console.log(position - previousPosition);
  return (
    <StreamerContainer
      position={position}
      previousPosition={previousPosition}
      isTop={position === 0}
      isEven={position % 2 === 0}
    >
      <img src={streamer.picture} alt={streamer.displayName} />
      <div>{streamer.displayName}</div>
      <div className="score">{streamer.score.toLocaleString()} points</div>
    </StreamerContainer>
  );
};

export default Streamer;
