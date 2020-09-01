import React, { useState } from 'react';

const Word = (props) => {
  const animals = ["dog", "cat", "zebra", "mouse", "horse", "snake", "tiger", "lion"];

  const [word, setWord] = useState(animals[Math.floor(Math.random() * animals.length)]);

  function handleClick() {
    const randomWord = animals[Math.floor(Math.random() * animals.length)];
    setWord(randomWord);
  }
  
  return <>{ word }</>
}

export default Word;