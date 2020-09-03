import React, { useState } from 'react';
import Word from './Word';
import WordList from './WordList';

const Words = () => {
  const [hasPassed, setHasPassed] = useState(false);

  const randomWord = () => {
    return Math.floor(Math.random() * animals.length);
  }

  const wordDone = () => {
    setWord(animals[randomWord()]);
  }

  const wordPassed = () => {
    setHasPassed(true);
    setPassedWord(currentWord);
    wordDone();
  }

  const wordGoback = () => {
    if (hasPassed) {
      setPassedWord(currentWord);
      setWord(passedWord);
    }
  }

  const animals = WordList();
  const [currentWord, setWord] = useState(animals[randomWord()]);
  const [passedWord, setPassedWord] = useState("");

  return (
    <>
      <Word
        word={currentWord}
        wordDone={wordDone}
        wordPassed={hasPassed ? () => { console.log("Passed") } : wordPassed}
        wordGoback={wordGoback}
      />
    </>
  )
}

export default Words;