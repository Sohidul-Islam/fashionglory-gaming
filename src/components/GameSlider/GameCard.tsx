import React from "react";

interface GameCardProps {
  game: {
    title: string;
    imageUrl: string;
    provider?: string;
    isLive?: boolean;
    badge?: string;
  };
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="game-card">
      <div className="game-card-image-container">
        <img src={game.imageUrl} alt={game.title} className="game-card-image" />
        {game.badge && <span className="game-badge">{game.badge}</span>}
        {game.isLive && <span className="live-badge">LIVE</span>}
      </div>
      <div className="game-card-content">
        <h3 className="game-title">{game.title}</h3>
        {game.provider && <p className="game-provider">{game.provider}</p>}
      </div>
    </div>
  );
};
