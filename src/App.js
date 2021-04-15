
// List of stuff to implement:
// 1. A div that displays 3 random images and asks to click on an image user hasnt seen before
// 2. If user has clicked before, game ends/score resets
// 3. If user has not clicked before, remember current clicked image and load another 3 random images
// 4. Once all images have been clicked once, end game with congrats 
// 5. display current score and best score

// Proposed flow:
// 1. create App.js, and components: scorecard.js, card.js, carddeck.js
// 2. In App:
//   a. create states for currentscore and bestscore (and maybe for length of carddeck)
//   b. while the score < cardeck length, generate block of text for game title and intro, and call components scorecard and card
//   c. implement methods to change score (both increase and clear)
// 3. In Scorecard:
//   a. from App, pass the current and best score values to component
//   b. inside component, return div showing both the scores
// 4. In CardDeck:
//   a. create states for generatedcards, userseencards, numberofcards (and maybe for images local src)
//   b. implement method that generates 3 random numbers equal to the indexes of the Cards, shuffle the 3 values (try with sort or Fisher-Yates method), 
//   and pass tomethod of generatedcards state
//   c. implement a useEffect that mounts component on load.
//   d. also implement method/useEffect to grab the image local src and pass to method of images state
//   e. also implement method to check if card clicked is stored in userseencards var, else append to it using userseencards state method
//   f. in return method, map through the generated cards array and call Card component, passing the imgsrc, generated card index, and cardclicked method
// 5. In Card:
//   a. inside component use image tag to generate image with imgsrc, and pass click handler to pass to userseencards method



import './App.css';
import ScoreCounter from "./components/ScoreCounter";
import Cards from "./components/Cards"
import { useEffect } from 'react'

function App() {
  return (
    <div className="App">
      <div className="Title">
        <p>Game Of Thrones Memory Game</p>
      </div>
      <div className="GameDescription">
        <p>Click on the Character that you have'nt seen before!</p>
      </div>
      {/* <ScoreCounter /> */}
      <div className="Cards">
        <Cards />
      </div>
    </div>
  );
}

export default App;
