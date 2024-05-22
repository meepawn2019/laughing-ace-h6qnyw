// useScores.ts
import { useState, useEffect } from "react";

interface Streamer {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
}

const useScores = (initialData: Streamer[]) => {
  const [data, setData] = useState<Streamer[]>(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData
          .map((streamer) => ({
            ...streamer,
            score: streamer.score + Math.floor(Math.random() * 1000),
          }))
          .sort((a, b) => b.score - a.score)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return data;
};

export default useScores;
