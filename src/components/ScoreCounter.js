const ScoreCounter = ({currentScore, bestScore}) =>{
    return (
		<div className="text-2xl font-sans">
			<div className="currentscore">
				<p>Current Score: {currentScore}</p>
			</div>

			<div className="bestscore">
				<p>Best Score: {bestScore}</p>
			</div>
		</div>
	);
}

export default ScoreCounter