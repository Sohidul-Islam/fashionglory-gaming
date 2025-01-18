import React, { useEffect, useRef, useState } from "react";
import "./NoticeBoard.scss";

interface NoticeBoardProps {
  notices: string[]; // Array of notices
}

export const NoticeBoard: React.FC<NoticeBoardProps> = ({ notices }) => {
  const [currentNotices, setCurrentNotices] = useState<string[]>([]);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Duplicate notices to create a seamless loop effect
    setCurrentNotices([...notices, ...notices]);
  }, [notices]);

  return (
    <div className="notice-board">
      <div className="notice-board__marquee" ref={marqueeRef}>
        {currentNotices.map((notice, index) => (
          <div className="notice-board__item" key={index}>
            {notice}
          </div>
        ))}
      </div>
    </div>
  );
};
