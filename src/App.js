import ScoreCounter from "./components/ScoreCounter";
import CardDeck from "./components/CardDeck";
import ClearScoreButton from "./components/ClearScoreButton"
import { useState } from "react";
import "./styles.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const cardDeckSize = 30;
  const maxPlay = 15;

  const updateScore = () =>{
    let addScore = currentScore;
	  addScore++;

	  setCurrentScore(addScore);
  }

  const resetScore = () =>{
    setBestScore(currentScore);
    setCurrentScore(0);
  }


	return (
		<div className="bg-lab min-h-screen">
			{currentScore < maxPlay ? (
				<>
					<div className="flex flex-col justify-items-center items-center h-screen bg-white bg-opacity-50">
						<div className="text-7xl font-serif mt-8 mb-4 font-semibold">
							<p>Rick And Morty Memory Game</p>
						</div>
						<div className="text-4xl font-serif mt-4 mb-3 font-semibold">
							<p>Choose the character you have'nt seen.</p>
						</div>
						<ScoreCounter
							currentScore={currentScore}
							bestScore={bestScore}
						/>

						<CardDeck
							cardDeckSize={cardDeckSize}
							updateScore={updateScore}
							resetScore={resetScore}
						/>
						<ClearScoreButton resetScore={resetScore} className="flex justify-items-center"/>
					</div>
				</>
			) : (
				<>
					<div className="flex flex-col justify-items-center items-center h-screen bg-white bg-opacity-50">
						<div className="text-7xl font-serif mt-8 mb-4 font-semibold">
							<p>Rick And Morty Memory Game</p>
						</div>
						<div className="flex text-6xl font-serif mt-40 mb-6 font-semibold">
							<p>Congratulations! You got all the characters!</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
