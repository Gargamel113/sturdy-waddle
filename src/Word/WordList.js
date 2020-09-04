//KOMMER ATT HÄMTAS FRÅN DATABAS NÄR BASEN ÄR KLAR  
const WordList = async () => {
  const API_URL = "http://localhost:8080/words/";
  const animals = await fetch(API_URL).then(res => res.json()).then(data => {return data[0].Animals});
  
  return animals;
}

export default WordList;