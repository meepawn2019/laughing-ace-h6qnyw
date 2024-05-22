// Leaderboard.tsx
import React, { useState, useEffect } from "react";
import Streamer from "./Streamer";
import { initialData } from "../data"; // Import the updated data
import { LeaderboardContainer } from "./styles";

const Leaderboard: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [previousData, setPreviousData] = useState(initialData);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setPreviousData(data);
  //       setData((prevData) =>
  //         [...prevData]
  //           .map((streamer) => ({
  //             ...streamer,
  //             score: streamer.score + Math.floor(Math.random() * 5000),
  //           }))
  //           .sort((a, b) => b.score - a.score)
  //       );
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, [data]);

  const getPreviousPosition = (userID: string) => {
    return previousData.findIndex((streamer) => streamer.userID === userID);
  };

  const onClickBtn = () => {};

  return (
    <>
      <button></button>
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
    </>
  );
};

export default Leaderboard;
