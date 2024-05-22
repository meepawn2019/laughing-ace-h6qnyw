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
  const [previousData, setPreviousData] = useState<Streamer[]>(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousData(data);
      setData((prevData: Streamer[]) =>
        [...prevData]
          .map((streamer: Streamer) => ({
            ...streamer,
            // Random if this streamer will gain points or not
            score: streamer.score + (Math.random() > 0.5 ? Math.floor(Math.random() * 3000) : 0),
          }))
          .sort((a: Streamer, b: Streamer) => b.score - a.score)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  return { data, previousData };
};
export default useScores;
