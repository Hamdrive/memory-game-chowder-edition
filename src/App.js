
// List of stuff to implement:
// 1. A div that displays 3 random images and asks to click on an image user hasnt seen before
// 2. If user has clicked before, game ends/score resets
// 3. If user has not clicked before, remember current clicked image and load another 3 random images
// 4. Once all images have been clicked once, end game with congrats 
// 5. display current score and best score



import './App.css';
import ScoreCounter from "./components/ScoreCounter";
import Cards from "./components/Cards"

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
      <Cards />
    </div>
  );
}

export default App;
