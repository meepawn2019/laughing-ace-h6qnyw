// Leaderboard.tsx
import React from "react";
import { initialData } from "../../data"; // Import the updated data
import { LeaderboardContainer } from "./styles";
import Streamer from "../Streamer";
import useScores from "../../hooks/useScores";

const Leaderboard: React.FC = () => {
  const { data, previousData } = useScores(initialData);

  const getPreviousPosition = (userID: string): number => {
    return previousData.findIndex((streamer) => streamer.userID === userID);
  };

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
