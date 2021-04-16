import React, { useEffect, useState } from "react";
import Cards from "./Cards"

const CardDeck = ({ updateScore, cardDeckSize }) => {
	const [generatedCards, setGeneratedCards] = useState([]);
	const [userSeenCards, setUserSeenCards] = useState([]);
	const [numberOfCards, setNumberOfCards] = useState([]);

    //Generate array with value of all cards for getting random cards and API
    const allCardsIndex = Array(cardDeckSize).fill().map((_, index) => index + 1);

	//Prepare array of random indexes for character API call
	const generatedRandomCards = () => {
        
        console.log(allCardsIndex)
		let newCardIndexs = [];

		for (let i = 0; i < 3; i++) {
            let randomIndex = Math.random()
        }
	};

    //Update user seen cards
	const cardClickHandle = (id) => {};

    //Mount component on load
    useEffect(()=>{
        generatedRandomCards()
    })

	//Obtain characters image from API
	//Try to also implement JS api (https://github.com/afuh/rick-and-morty-api-node)
    useEffect(async () =>{
            const result = await fetch("https://rickandmortyapi.com/api/character/");
        }
    ,[generatedCards])





	return (
		<div>
			<Cards updateScore={updateScore} />
		</div>
	);
};

export default CardDeck;
