import React from "react";
import { FaBullhorn, FaPlay } from "react-icons/fa";
import "./NoticeBoard.scss";

interface NoticeBoardProps {
  notices: string[]; // Array of notices
}

export const NoticeBoard: React.FC<NoticeBoardProps> = ({ notices }) => {
  return (
    <div className="notice-board">
      <div className="notice-header">
        <FaBullhorn className="notice-icon" />
        <h3>Announcements</h3>
      </div>
      <div className="notice-content">
        <div className="marquee-container">
          <div className="marquee">
            {[...notices, ...notices].map((notice, index) => (
              <div key={index} className="notice-item">
                <div className="notice-info">
                  <span className="notice-badge pulse">NEW</span>
                  <p>{notice}</p>
                </div>
                <button className="play-button">
                  <FaPlay className="play-icon" />
                  <span>Play Now</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
