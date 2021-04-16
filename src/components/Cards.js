const Cards = ({ cardClickHandle, imgsrc, cardnumber }) => {
	return (
		<div>
			{/* {console.log(cardnumber)} */}
			<img src={imgsrc} alt="" onClick={() => cardClickHandle(cardnumber)} />
		</div>
	);
};

export default Cards