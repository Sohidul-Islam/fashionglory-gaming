import React from "react";

interface SliderHeaderProps {
  title: string;
  showAll?: boolean;
}

export const SliderHeader: React.FC<SliderHeaderProps> = ({
  title,
  showAll,
}) => {
  return (
    <div className="slider-header">
      <h2 className="slider-title">{title}</h2>
      {showAll && (
        <button
          className="show-all-button"
          onClick={() => console.log("Show all clicked")}
        >
          Show All
        </button>
      )}
    </div>
  );
};
