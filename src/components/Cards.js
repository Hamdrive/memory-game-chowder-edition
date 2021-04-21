const Cards = ({ cardClickHandle, imgsrc, cardnumber }) => {
	return (
		<img
			className="w-56 h-56  ml-4 mr-4 mb-4 cursor-pointer border-8 border-gray-800 rounded-2xl transform transition duration-350 hover:scale-110 "
			src={imgsrc}
			alt=""
			onClick={() => cardClickHandle(cardnumber)}
		/>
	);
};

export default Cards