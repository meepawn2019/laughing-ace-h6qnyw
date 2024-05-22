// App.jsx
import React from "react";
import Leaderboard from "./components/Leaderboard";
import { AppContainer } from "./styles"; // Assuming you have a styled component for app-wide styles

const App = () => {
  return (
    <AppContainer>
      <h1>Streamer Leaderboard</h1>
      <Leaderboard />
    </AppContainer>
  );
};

export default App;
