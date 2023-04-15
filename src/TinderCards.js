import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"

function TinderCards() {
    
  const [character, setPeople] = useState([
    {
        name: 'Elon Musk',
        url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
    },
    {
        name: 'Naredra Modi',
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Official_Photograph_of_Prime_Minister_Narendra_Modi_Potrait.png"
    },
    {
        name: 'Valadimir Putin',
        url: "https://upload.wikimedia.org/wikipedia/commons/4/47/Vladimir_Putin_17-11-2021_%28cropped%29.jpg"
    },
    {
        name: 'Andrew Tate',
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Andrew_Tate_on_%27Anything_Goes_With_James_English%27_in_2021.jpg"
    }

  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    
  }

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  }
   return <div className = "tinderCards">

            <div className ="tinderCards__cardContainer">
            {character.map((character) => (
                <TinderCard 
                className="swipe" 
                key={character.name} 
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir,character.name)}
                onCardLeftScreen={() => outOfFrame(character.name)}>

                <div style={{backgroundImage: `url(${character.url})`}} className='card'>

                <h3>{character.name}</h3>
                </div>


                
            

                </TinderCard>
        ))}

            </div>
    
        
    </div>
  
}

export default TinderCards