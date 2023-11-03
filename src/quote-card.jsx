import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteCard = () => {
  const [quote, setQuote] = useState('');
  const [character, setCharacter] = useState('');
  const [anime, setAnime] = useState('');
  const [imageURL, setImageURL] = useState('');

  const fetchQuote = () => {
    // Fetch a random quote, character, anime, and image from an API
    fetch('https://animechan.xyz/api/random')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setQuote(data.quote);
        setCharacter(data.character);
        setAnime(data.anime);
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
      });


    // Fetch a random image from another API
    

    fetch('https://api.waifu.pics/many/sfw/cuddle')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setImageURL('https://i.waifu.pics/Tj6Wzwo.png');
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="card">
      <img src={imageURL} className="card-img-top" alt="Random Image" />
      <div className="card-body">
        <h5 className="card-title">Random Quote</h5>
        <p className="card-text">"{quote}"</p>
        <p className="card-text">Character: {character}</p>
        <p className="card-text">Anime: {anime}</p>
        <button className="btn btn-primary" onClick={fetchQuote}>
          Get Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;


// mport axios from "axios";

// const getPokemon = async () => {
//   try {
//     const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
//     console.log(response.data.sprites.front_default);
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// };

// getPokemon();