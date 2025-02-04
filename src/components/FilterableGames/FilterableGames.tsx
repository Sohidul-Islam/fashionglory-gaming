import React, { useState } from "react";
import { cn } from "../../lib/utils";
import "./FilterableGames.scss";
import cricket from "../../assets/MenuIcon/cricketball.png";
import crash from "../../assets/MenuIcon/casino.png";
import casino from "../../assets/MenuIcon/casino.png";
import slot from "../../assets/MenuIcon/slots.png";

interface Game {
  id: string;
  title: string;
  imageUrl: string;
  provider?: string;
  category: string;
  isLive?: boolean;
  badge?: string;
}

interface FilterableGamesProps {
  games: Game[];
}

export const FilterableGames: React.FC<FilterableGamesProps> = ({ games }) => {
  const [selectedCategory, setSelectedCategory] = useState("sports");

  const categories = [
    { id: "sports", label: "Sports", icon: cricket, className: "bg-sports" },
    { id: "crash", label: "Crash", icon: crash, className: "bg-crash" },
    { id: "casino", label: "Casino", icon: casino, className: "bg-casino" },
    { id: "slot", label: "Slot", icon: slot, className: "bg-slots" },
    { id: "arcade", label: "Arcade", icon: casino, className: "bg-arcade" },
    { id: "lottery", label: "Lottery", icon: casino, className: "bg-lottery" },
    { id: "fishing", label: "Fishing", icon: casino, className: "bg-fishing" },
    {
      id: "promotion",
      label: "Promotion",
      icon: casino,
      className: "bg-promotion",
    },
    { id: "table", label: "Table", icon: casino, className: "bg-table" },
  ];

  const filteredGames = games.filter((game) => {
    const matchesCategory = game.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="filterable-games block md:hidden">
      <div className="games-header">
        <div className="filter-controls">
          <div className="category-tabs flex gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "!flex-1 min-w-[100px]  rounded-none bg-transparent flex flex-col gap-2 items-center justify-center",
                  selectedCategory === category.id &&
                    "active bg-[#0436A1] focus-visible:outline-none"
                )}
                onClick={() => setSelectedCategory(category.id)}
              >
                <img src={category.icon} alt={category.label} />
                <div
                  className={cn(
                    "px-[17px] py-[5px] text-sm cursor-pointer rounded-md",
                    category.className
                  )}
                >
                  {category.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-1">
        {filteredGames.map((game) => (
          <div
            className="gap-1 flex flex-col justify-center items-center bg-[#0436A1] p-[10px] "
            key={game.id}
          >
            <img src={cricket} className="w-[30px] h-[30px]" alt={game.title} />
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2 w-full">
                <p className="text-white text-sm truncate w-full">
                  {game.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <PlayButton /> */}
    </div>
  );
};
