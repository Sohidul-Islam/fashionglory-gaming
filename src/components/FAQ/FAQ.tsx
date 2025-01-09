import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./FAQ.scss";

interface FAQItem {
  question: string;
  answer: string;
}
// this faq

const faqData: FAQItem[] = [
  {
    question: "How to play casino online?",
    answer:
      "To play at GloryBet, you need to register with the company, top up your balance, select the game you are interested in and specify the amount of your bet. After that, start making spins, and if they are successful, you can earn. You can play at any time of the day.",
  },
  {
    question: "Is Online GloryBet Safe?",
    answer:
      "Yes, GloryBet has a license that allows it to legally provide all services. The audience of the office is also constantly increasing. It is the best proof that users believe that they can not only make spins, but also earn money with this brand.",
  },
  {
    question: "Is GloryBet trusted?",
    answer:
      "Yes, as thousands of satisfied customers have made sure of it. GloryBet always fully fulfills its obligations. The brand values its reputation, so it tries to offer clients the best terms of cooperation. The company always pays bonuses in full, does not create obstacles when conducting transactions.",
  },
  {
    question: "What games are available?",
    answer:
      "We offer a wide variety of games including slots, live casino games, table games, and exclusive titles. Our collection features games from top providers like Evolution Gaming, NetEnt, and Pragmatic Play.",
  },
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="section-title">GLORYBET ONLINE CASINO</h2>
        <div className="faq-grid">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <FaChevronDown className="faq-icon" />
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
