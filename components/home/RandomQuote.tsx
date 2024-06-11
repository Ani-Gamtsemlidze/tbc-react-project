"use client";
import { useState } from "react";

const veganQuotes = [
  "The only thing we need to change about ourselves is our thinking that we need to consume animals to thrive.",
  "Being vegan is not about being perfect. It's about doing the best we can to reduce harm and live compassionately.",
  "Every time we sit down to eat, we have the opportunity to choose kindness, compassion, and respect for all living beings.",
  "Choosing a vegan lifestyle is not about deprivation, it's about abundance - abundant health, compassion, and joy.",
  // Add more quotes as needed
];

export default function RandomQuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState("");

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * veganQuotes.length);
    const randomQuote = veganQuotes[randomIndex];
    setCurrentQuote(randomQuote);
  };

  return (
    <div>
      <p>{currentQuote}</p>
      <button onClick={generateRandomQuote}>Choose Your Today Quote</button>
    </div>
  );
}
