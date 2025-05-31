import React, { useState } from 'react';

const words = [
  { en: 'Hello', de: 'Hallo' },
  { en: 'Dog', de: 'der Hund' },
  { en: 'Bread', de: 'das Brot' }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [mode, setMode] = useState('ENtoDE');

  const current = words[index];
  const front = mode === 'ENtoDE' ? current.en : current.de;
  const back = mode === 'ENtoDE' ? current.de : current.en;
  
    console.log("DEBUG typeof front:", typeof front, front);
    console.log("DEBUG typeof back:", typeof back, back);
  
  const nextCard = () => {
    setIndex((index + 1) % words.length);
    setShowTranslation(false);


  };
  

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4">German Flashcard Game</h1>
      <div onClick={() => setShowTranslation(!showTranslation)} className="cursor-pointer p-6 border border-gray-300 rounded-xl">
        {showTranslation ? back : front}
      </div>
      <button onClick={nextCard} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl">Next</button>
    </div>
  );
}
