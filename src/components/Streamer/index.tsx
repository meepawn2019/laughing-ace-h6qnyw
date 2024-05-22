// Streamer.tsx
import React, { useEffect, useState } from "react";
import { StreamerContainer, NameContainer } from "./styles";

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
  const [count, setCount] = useState<number>(streamer.score);

  useEffect(() => {
    let start: number = count;
    const end: number = streamer.score;
    const change: number = end - start;
    if (change === 0) return;

    const totalDuration: number = 1000;
    const incrementTime: number = Math.floor(totalDuration / change);

    const timer: NodeJS.Timeout = setInterval(() => {
      start += 50;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [streamer.score]);

  return (
    <StreamerContainer
      position={position}
      previousPosition={previousPosition}
      isTop={position === 0}
      isEven={position % 2 === 0}
    >
      <NameContainer>
        <img src={streamer.picture || 'https://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=identicon'} alt={streamer.displayName} />
        <div>{streamer.displayName}</div>
      </NameContainer>
      <div className="score" style={{ padding: '0 20px'}}>{`${count} pts`}</div>
    </StreamerContainer>
  );
};

export default Streamer;
