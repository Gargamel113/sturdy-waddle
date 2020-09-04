import React, { Component } from 'react';
import Word from './Word';

class Words extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasPassed: false,
      currentWord: "Banana",
      passedWord: "",
      words: [],
    }
  }

  render() {
    const randomWord = () => {
      return Math.floor(Math.random() * this.state.words.length);
    }

    const wordDone = () => {
      this.setState({ currentWord: this.state.words[randomWord()] })
    }

    const wordPassed = () => {
      this.setState({
        hasPassed: true,
        passedWord: this.state.currentWord
      });
      wordDone();
    }

    const wordGoback = () => {
      if (this.state.hasPassed) {
        let current = this.state.currentWord;
        let passed = this.state.passedWord;
        this.setState({
          passedWord: current,
          currentWord: passed
        });
      }
    }

    return (
      <>
        <Word
          word={this.state.currentWord}
          wordDone={wordDone}
          wordPassed={this.state.hasPassed ? () => { console.log("Passed") } : wordPassed}
          wordGoback={wordGoback}
        />
      </>
    )
  }

  componentDidMount() {
    fetch("http://localhost:8080/words/")
    .then((res) => res.json())
    .then(data => {
      this.setState({words: data[0].Animals})
    });
  }
}

export default Words;