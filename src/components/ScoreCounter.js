const ScoreCounter = ({currentScore, bestScore}) =>{
    return (
		<div className="flex flex-col items-center text-2xl font-serif font-medium rounded-xl border-8 border-gray-800 p-8 bg-white w-3/12">
			<div className="w-9/12 -mt-4 mb-2">
				<p>Current Score: {currentScore}</p>
			</div>

			<div className="w-9/12 -mb-4">
				<p>Best Score: {bestScore}</p>
			</div>
		</div>
	);
}

export default ScoreCounter