import React, { useState } from 'react';
import Word from './Word';
import WordList from './WordList';

const Words = () => {

  const randomWord = () => {
    return Math.floor(Math.random() * animals.length);
  }

  const wordDone = () => {
    setWord(animals[randomWord()]);
  }

  const wordPassed = () => {
    setPassedWord(currentWord);
    wordDone();
  }

  const wordGoback = () => {
    setPassedWord(currentWord);
    setWord(passedWord);
  }
  
  const animals = WordList();
  const [currentWord, setWord] = useState(animals[randomWord()]);
  const [passedWord, setPassedWord] = useState("");

  return (
    <>
      <Word word={currentWord} />
      <div>
        <button onClick={wordGoback}>go back</button>
        <button onClick={wordPassed}>pass word</button>
        <button onClick={wordDone}>cleared</button>
      </div>
    </>
  )
}

export default Words;