import React from "react";
import { FaBullhorn } from "react-icons/fa";
import "./NoticeBoard.scss";

interface NoticeBoardProps {
  notices: {
    badge?: string;
    notice: string;
  }[]; // Array of notices
}

export const NoticeBoard: React.FC<NoticeBoardProps> = ({ notices }) => {
  return (
    <div className="notice-board">
     
      <div className="notice-content">
      <FaBullhorn className="notice-icon" style={{color:"#2EF5FF"}} />
        <div className="marquee-container">
          <div className="marquee">
            {[...notices, ...notices].map((notice, index) => (
              <div key={index} className="notice-item">
                <div className="notice-info">
                  {notice.badge ? (
                    <span className="notice-badge pulse">{notice.badge}</span>
                  ) : (
                    <span className="notice-dot"></span>
                  )}
                  <p>{notice.notice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
