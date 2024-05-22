// Leaderboard.tsx
import React, { useState, useEffect, useTransition } from "react";
import { initialData } from "../../data"; // Import the updated data
import { LeaderboardContainer } from "./styles";
import Streamer from "../Streamer";

const Leaderboard: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [previousData, setPreviousData] = useState(initialData);

  const getPreviousPosition = (userID: string) => {
    return previousData.findIndex((streamer) => streamer.userID === userID);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousData(data);
      setData((prevData) =>
        [...prevData]
          .map((streamer) => ({
            ...streamer,
            // Random if this streamer will gain points or not
            score: streamer.score + (Math.random() > 0.5 ? Math.floor(Math.random() * 3000) : 0),
          }))
          .sort((a, b) => b.score - a.score)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <LeaderboardContainer>
      {data.slice(0, 10).map((streamer, index) => (
        <Streamer
          key={streamer.userID}
          streamer={streamer}
          position={index}
          previousPosition={getPreviousPosition(streamer.userID)}
        />
      ))}
    </LeaderboardContainer>
  );
};

export default Leaderboard;
