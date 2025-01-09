import React from "react";
import { FaPlay } from "react-icons/fa";
import "./GameCard.scss";

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
        <div className="hover-overlay">
          <div className="play-button-wrapper">
            <div className="play-button">
              <div className="ripple"></div>
              <div className="ripple ripple-2"></div>
              <div className="play-icon-container">
                <FaPlay className="play-icon" />
                <svg className="progress-ring" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" />
                </svg>
              </div>
            </div>
            <span className="play-text">PLAY NOW</span>
          </div>
        </div>
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
