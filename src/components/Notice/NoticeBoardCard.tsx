import React, { useEffect, useRef, useState } from "react";
import "./NoticeBoardCard.scss";

// import { GameCard } from "../GameCard/GameCard";

// const crashGames = [
//   {
//     id: "1",
//     title: "Aviator",
//     imageUrl:
//       "https://images.unsplash.com/photo-1534951009808-766178b47a4f?auto=format&fit=crop&w=800&q=80",
//     provider: "Spribe",
//     badge: "EXCLUSIVE",
//   },
//   {
//     id: "2",
//     title: "Hyper Explorer",
//     imageUrl:
//       "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
//     provider: "Spribe",
//   },
 
// ];

interface Player {
  name: string;
  win: number;
  userId: string;
}

interface NoticeBoardProps {
  players: Player[]; // Array of player details
}

export const NoticeBoardCard: React.FC<NoticeBoardProps> = ({ players }) => {
  const [currentPlayers, setCurrentPlayers] = useState<Player[]>([]);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Duplicate players to create a seamless loop effect
    setCurrentPlayers([...players, ...players]);
  }, [players]);

  return (
  <div className="notice-board-card__container">
    <div>
        {/* {crashGames.map((game) => (
                     <GameCard game={game} />
         ))} */}
    </div>
      <div className="notice-board-card">
      <div className="notice-board-card__marquee" ref={marqueeRef}>
        {currentPlayers.map((player, index) => (
          <div className="notice-board-card__item" key={index}>
            <h3 className="player-name">{player.name}</h3>
            <p className="player-win">Win: ${player.win}</p>
            <p className="player-id">User ID: {player.userId}</p>
            <button className="play-button">Play</button>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};
