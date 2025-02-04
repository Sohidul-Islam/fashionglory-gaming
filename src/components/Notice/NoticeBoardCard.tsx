import React from "react";
import { FaTrophy, FaPlay } from "react-icons/fa";
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

interface NoticeBoardCardProps {
  players: Player[];
}

export const NoticeBoardCard: React.FC<NoticeBoardCardProps> = ({
  players,
}) => {
  return (
    <div className="winners-board">
      <div
        className="winners-content"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <div
          className="winner-label"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <FaTrophy
            className="trophy-icon"
            style={{ color: "white", fontSize: "20px" }}
          />
          <p className="md:hidden" style={{ color: "white", fontSize: "1rem" }}>
            Recent Winners
          </p>
        </div>
        <div className="marquee-container">
          <div className="marquee">
            {[...players, ...players].map((player, index) => (
              <div key={player.userId + index} className="winner-item">
                <div className="winner-rank">
                  #{(index % players.length) + 1}
                </div>
                <div className="winner-info">
                  <span className="winner-name">{player.name}</span>
                  <span className="winner-amount">
                    ৳{player.win.toLocaleString()}
                  </span>
                </div>
                <button className="play-button">
                  <FaPlay className="play-icon" />
                  <span>Play</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
