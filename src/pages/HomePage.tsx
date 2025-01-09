import React from "react";
import { GameSlider } from "../components/GameSlider/GameSlider";

const HomePage: React.FC = () => {
  const crashGames = [
    {
      id: "1",
      title: "Aviator",
      imageUrl: "/games/aviator.jpg",
      provider: "Spribe",
      badge: "Popular",
    },
    // Add more games...
  ];

  const slotGames = [
    {
      id: "1",
      title: "Gates of Olympus",
      imageUrl: "/games/gates-olympus.jpg",
      provider: "Pragmatic Play",
    },
    // Add more games...
  ];

  const liveGames = [
    {
      id: "1",
      title: "Lightning Roulette",
      imageUrl: "/games/lightning-roulette.jpg",
      provider: "Evolution",
      isLive: true,
    },
    // Add more games...
  ];

  return (
    <div className="home-page">
      <GameSlider title="Crash Games" games={crashGames} />
      <GameSlider title="Popular Slots" games={slotGames} />
      <GameSlider title="Live Casino" games={liveGames} />
    </div>
  );
};

export default HomePage;
