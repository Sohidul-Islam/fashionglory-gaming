import "./App.css";
import "swiper/swiper-bundle.css";
// import "swiper/css/effect-fade";

import "./components/GameSlider/GameSlider.scss";
import "./components/GameSlider/SliderHeader.scss";
import { GameSlider } from "./components/GameSlider/GameSlider";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { FAQ } from "./components/FAQ/FAQ";
import { Footer } from "./components/Footer/Footer";
import { TopBar } from "./components/Navbar/Topbar";
import { NoticeBoard } from "./components/Notice/NoticeBoard";
import { NoticeBoardCard } from "./components/Notice/NoticeBoardCard";

function App() {
  const crashGames = [
    {
      id: "1",
      title: "Aviator",
      imageUrl:
        "https://images.unsplash.com/photo-1534951009808-766178b47a4f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
      badge: "EXCLUSIVE",
    },
    {
      id: "2",
      title: "Hyper Explorer",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "3",
      title: "Mriya",
      imageUrl:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "4",
      title: "Magnify Man",
      imageUrl:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "5",
      title: "Long Ball",
      imageUrl:
        "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "6",
      title: "Lucky Crumbling",
      imageUrl:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "7",
      title: "Space Runner",
      imageUrl:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
      badge: "NEW",
    },
    {
      id: "8",
      title: "Cyber Racer",
      imageUrl:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "9",
      title: "Dragon's Lair",
      imageUrl:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
      badge: "HOT",
    },
    {
      id: "10",
      title: "Neon Blast",
      imageUrl:
        "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "11",
      title: "Quantum Quest",
      imageUrl:
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "12",
      title: "Retro Pixel",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
      badge: "POPULAR",
    },
  ];

  const slotGames = [
    {
      id: "s1",
      title: "Golden Dynasty",
      imageUrl:
        "https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?auto=format&fit=crop&w=800&q=80",
      provider: "Pragmatic Play",
      badge: "NEW",
    },
    {
      id: "s2",
      title: "Aztec Treasures",
      imageUrl:
        "https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?auto=format&fit=crop&w=800&q=80",
      provider: "Playtech",
    },
    {
      id: "s3",
      title: "Mystic Forest",
      imageUrl:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
      provider: "NetEnt",
      badge: "HOT",
    },
    {
      id: "1",
      title: "Aviator",
      imageUrl:
        "https://images.unsplash.com/photo-1534951009808-766178b47a4f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
      badge: "EXCLUSIVE",
    },
    {
      id: "2",
      title: "Hyper Explorer",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "3",
      title: "Mriya",
      imageUrl:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "4",
      title: "Magnify Man",
      imageUrl:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "5",
      title: "Long Ball",
      imageUrl:
        "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "6",
      title: "Lucky Crumbling",
      imageUrl:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "7",
      title: "Space Runner",
      imageUrl:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
      badge: "NEW",
    },
    {
      id: "8",
      title: "Cyber Racer",
      imageUrl:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "9",
      title: "Dragon's Lair",
      imageUrl:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
      badge: "HOT",
    },
    {
      id: "10",
      title: "Neon Blast",
      imageUrl:
        "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "11",
      title: "Quantum Quest",
      imageUrl:
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "12",
      title: "Retro Pixel",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
      badge: "POPULAR",
    },
    // Add more slot games as needed
  ];

  const liveGames = [
    {
      id: "l1",
      title: "VIP Blackjack",
      imageUrl:
        "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=800&q=80",
      provider: "Evolution",
      badge: "LIVE",
      isLive: true,
    },
    {
      id: "l2",
      title: "Lightning Roulette",
      imageUrl:
        "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=800&q=80",
      provider: "Evolution",
      isLive: true,
    },
    {
      id: "1",
      title: "Aviator",
      imageUrl:
        "https://images.unsplash.com/photo-1534951009808-766178b47a4f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
      badge: "EXCLUSIVE",
    },
    {
      id: "2",
      title: "Hyper Explorer",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "3",
      title: "Mriya",
      imageUrl:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "4",
      title: "Magnify Man",
      imageUrl:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "5",
      title: "Long Ball",
      imageUrl:
        "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "6",
      title: "Lucky Crumbling",
      imageUrl:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "7",
      title: "Space Runner",
      imageUrl:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
      badge: "NEW",
    },
    {
      id: "8",
      title: "Cyber Racer",
      imageUrl:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "9",
      title: "Dragon's Lair",
      imageUrl:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
      badge: "HOT",
    },
    {
      id: "10",
      title: "Neon Blast",
      imageUrl:
        "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "11",
      title: "Quantum Quest",
      imageUrl:
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "12",
      title: "Retro Pixel",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
      badge: "POPULAR",
    },
    // Add more live games...
  ];

  const popularGames = [
    {
      id: "p1",
      title: "Mega Fortune",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      provider: "NetEnt",
      badge: "POPULAR",
    },
    {
      id: "p2",
      title: "Book of Ra",
      imageUrl:
        "https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?auto=format&fit=crop&w=800&q=80",
      provider: "Novomatic",
    },
    {
      id: "1",
      title: "Aviator",
      imageUrl:
        "https://images.unsplash.com/photo-1534951009808-766178b47a4f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
      badge: "EXCLUSIVE",
    },
    {
      id: "2",
      title: "Hyper Explorer",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "3",
      title: "Mriya",
      imageUrl:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "4",
      title: "Magnify Man",
      imageUrl:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "5",
      title: "Long Ball",
      imageUrl:
        "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "6",
      title: "Lucky Crumbling",
      imageUrl:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "7",
      title: "Space Runner",
      imageUrl:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
      badge: "NEW",
    },
    {
      id: "8",
      title: "Cyber Racer",
      imageUrl:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "9",
      title: "Dragon's Lair",
      imageUrl:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
      badge: "HOT",
    },
    {
      id: "10",
      title: "Neon Blast",
      imageUrl:
        "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "11",
      title: "Quantum Quest",
      imageUrl:
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "12",
      title: "Retro Pixel",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
      badge: "POPULAR",
    },
    {
      id: "1",
      title: "Aviator",
      imageUrl:
        "https://images.unsplash.com/photo-1534951009808-766178b47a4f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
      badge: "EXCLUSIVE",
    },
    {
      id: "2",
      title: "Hyper Explorer",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "3",
      title: "Mriya",
      imageUrl:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "4",
      title: "Magnify Man",
      imageUrl:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "5",
      title: "Long Ball",
      imageUrl:
        "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "6",
      title: "Lucky Crumbling",
      imageUrl:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "7",
      title: "Space Runner",
      imageUrl:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
      badge: "NEW",
    },
    {
      id: "8",
      title: "Cyber Racer",
      imageUrl:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "9",
      title: "Dragon's Lair",
      imageUrl:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
      badge: "HOT",
    },
    {
      id: "10",
      title: "Neon Blast",
      imageUrl:
        "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "11",
      title: "Quantum Quest",
      imageUrl:
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "12",
      title: "Retro Pixel",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
      badge: "POPULAR",
    },
    // Add more popular games...
  ];

  const newGames = [
    {
      id: "n1",
      title: "Cyber Punk",
      imageUrl:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      provider: "Pragmatic Play",
      badge: "NEW",
    },
    {
      id: "n2",
      title: "Space Wars",
      imageUrl:
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80",
      provider: "NetEnt",
      badge: "NEW",
    },
    {
      id: "1",
      title: "Aviator",
      imageUrl:
        "https://images.unsplash.com/photo-1534951009808-766178b47a4f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
      badge: "EXCLUSIVE",
    },
    {
      id: "2",
      title: "Hyper Explorer",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "3",
      title: "Mriya",
      imageUrl:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "4",
      title: "Magnify Man",
      imageUrl:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "5",
      title: "Long Ball",
      imageUrl:
        "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "6",
      title: "Lucky Crumbling",
      imageUrl:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "7",
      title: "Space Runner",
      imageUrl:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
      badge: "NEW",
    },
    {
      id: "8",
      title: "Cyber Racer",
      imageUrl:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "9",
      title: "Dragon's Lair",
      imageUrl:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
      badge: "HOT",
    },
    {
      id: "10",
      title: "Neon Blast",
      imageUrl:
        "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
    },
    {
      id: "11",
      title: "Quantum Quest",
      imageUrl:
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80",
      provider: "1xGames",
    },
    {
      id: "12",
      title: "Retro Pixel",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      provider: "Spribe",
      badge: "POPULAR",
    },
    // Add more new games...
  ];

  const notices = [
    "Notice 1: Upcoming meeting on Monday at 10 AM.",
    "Notice 2: Office will remain closed on Friday.",
    "Notice 3: Submit your project report by tomorrow.",
    "Notice 4: Annual Sports Day is scheduled for next month.",
  ];

  const players = [
    { name: "John Doe", win: 1588, userId: "user123" },
    { name: "Jane Smith", win: 2045, userId: "user456" },
    { name: "Mike Johnson", win: 899, userId: "user789" },
    { name: "Alice Brown", win: 1450, userId: "user321" },
    { name: "Chris Green", win: 1700, userId: "user654" },
    { name: "Chris Green", win: 1700, userId: "user654" },
    { name: "Chris Green", win: 1700, userId: "user654" },
    { name: "Chris Green", win: 1700, userId: "user654" },
    { name: "Chris Green", win: 1700, userId: "user654" },
    { name: "Chris Green", win: 1700, userId: "user654" },
    { name: "Chris Green", win: 1700, userId: "user654" },
    { name: "Chris Green", win: 1700, userId: "user654" },
  ];

  return (
    <>
      <div className="navbar-container">
        <TopBar />
        <Navbar />
      </div>
      <div className="app-container">
        <Hero />
        <div className="notice-section">
          <NoticeBoard notices={notices} />
          <NoticeBoardCard players={players} />
        </div>
        <GameSlider title="CRASH GAMES" games={crashGames} />
        <GameSlider title="POPULAR SLOTS" games={slotGames} />
        <GameSlider title="LIVE CASINO" games={liveGames} />
        <GameSlider title="TRENDING NOW" games={popularGames} />
        <GameSlider title="NEW RELEASES" games={newGames} />
        <GameSlider title="EXCLUSIVE GAMES" games={newGames} />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}

export default App;
