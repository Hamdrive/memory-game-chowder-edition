const ScoreCounter = ({currentScore, bestScore}) =>{
    return (
		<div className="flex flex-col items-center text-2xl font-sans rounded-xl border-4 border-gray-800 p-8 bg-white w-3/12">
			<div className="w-8/12 -mt-2 mb-4">
				<p>Current Score: {currentScore}</p>
			</div>

			<div className="w-8/12 -mb-2">
				<p>Best Score: {bestScore}</p>
			</div>
		</div>
	);
}

export default ScoreCounter