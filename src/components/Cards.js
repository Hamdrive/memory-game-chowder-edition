const Cards = ({ updateScore, imgsrc }) => {
	return (
		<div>
			<img src={imgsrc} alt="" />
			<button onClick={updateScore}></button>
		</div>
	);
};

export default Cards