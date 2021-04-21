const ClearScore = ({resetScore}) => {
    return (
		<div className="bg-blue-400 hover:bg-blue-500 font-serif font-medium w-56 px-9 py-3 mt-3 text-3xl rounded-3xl transform transition duration-350 hover:scale-110">
			<button onClick={() => resetScore()}> Clear Score</button>
		</div>
	);
}

export default ClearScore;