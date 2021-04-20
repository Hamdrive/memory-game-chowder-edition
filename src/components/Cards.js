const Cards = ({ cardClickHandle, imgsrc, cardnumber }) => {
	return (
		<img
			className="mt-8 ml-4 mr-4"
			src={imgsrc}
			alt=""
			onClick={() => cardClickHandle(cardnumber)}
		/>
	);
};

export default Cards