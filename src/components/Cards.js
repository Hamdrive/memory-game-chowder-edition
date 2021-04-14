import React from "react"

const characterCards = [
  { id: 1, imgsrc: "../assets/Arya_Stark.jpg", isClicked: false },
  { id: 2, imgsrc: "../assets/Bran_Stark.jpeg", isClicked: false },
  { id: 3, imgsrc: "../assets/Brienne_of_Tarth.jpg", isClicked: false },
  { id: 4, imgsrc: "../assets/Cat_Stark.png", isClicked: false },
  { id: 5, imgsrc: "../assets/Cersei_Lannister.jpg", isClicked: false },
  { id: 6, imgsrc: "../assets/Daenerys_Targaryen.jpg", isClicked: false },
  { id: 7, imgsrc: "../assets/Davos_Seaworth.jpg", isClicked: false },
  { id: 8, imgsrc: "../assets/Jaime_Lannister.jpg", isClicked: false },
  { id: 9, imgsrc: "../assets/Joffrey_Baratheon.jpg", isClicked: false },
  { id: 10, imgsrc: "../assets/Jon_Snow.png", isClicked: false },
  { id: 11, imgsrc: "../assets/Jorah_Mormont.jpg", isClicked: false },
  { id: 12, imgsrc: "../assets/Margaery_Tyrell.jpg", isClicked: false },
  { id: 13, imgsrc: "../assets/Melisandre.jpg", isClicked: false },
  { id: 14, imgsrc: "../assets/Missandie.png", isClicked: false },
  { id: 15, imgsrc: "../assets/Ned_Stark.jpg", isClicked: false },
  { id: 16, imgsrc: "../assets/Petyr_Baelish.jpg", isClicked: false },
  { id: 17, imgsrc: "../assets/Ramsay_Bolton.jpg", isClicked: false },
  { id: 18, imgsrc: "../assets/Robb_Stark.jpg", isClicked: false },
  { id: 19, imgsrc: "../assets/Robert_Baratheon.jpg", isClicked: false },
  { id: 20, imgsrc: "../assets/Samwell_Tarly.jpg", isClicked: false },
  { id: 21, imgsrc: "../assets/Sansa_Stark.jpg", isClicked: false },
  { id: 22, imgsrc: "../assets/Stannis_Baratheon.jpeg", isClicked: false },
  { id: 23, imgsrc: "../assets/The_Hound.jpg", isClicked: false },
  { id: 24, imgsrc: "../assets/Theon_Greyjoy.jpg", isClicked: false },
  { id: 25, imgsrc: "../assets/Tommen_Baratheon.jpg", isClicked: false },
  { id: 26, imgsrc: "../assets/Tormund_Giantsbane.jpg", isClicked: false },
  { id: 27, imgsrc: "../assets/Tyrion_Lannister.jpg", isClicked: false },
  { id: 28, imgsrc: "../assets/Tywin_Lannister.jpg", isClicked: false },
  { id: 29, imgsrc: "../assets/Varys.jpg", isClicked: false },
];

const getCard = () =>{
    const randomImgId = (Math.floor(Math.random() * 29))
    return characterCards[randomImgId].imgsrc;
}


const Cards = () => {
    // const imageId = getCard();
    // console.log(characterCards[imageId]);
    return (
      <div>
        <img
          src={getCard()}
          alt=""
          style={{ width: "220px", height: "327px" }}></img>
        <img
          src={getCard()}
          alt=""
          style={{ width: "220px", height: "327px" }}></img>
        <img
          src={getCard()}
          alt=""
          style={{ width: "220px", height: "327px" }}></img>
      </div>
    );

}

export default Cards;