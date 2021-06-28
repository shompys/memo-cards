import React, { useState, useEffect } from 'react';

const Card = ({id, name, image, handleClick, resetCard,reset, setReset}) => {
    
    const [isCardFaceDown, setIsCardFaceDown] = useState(true);
    
    const handle = () => {
        
        setIsCardFaceDown(false);

        handleClick({id, name, image}, isCardFaceDown);

    }

    useEffect(() => {
        
        setTimeout(() => {
            if(resetCard.includes(id)) return setIsCardFaceDown(true);
        },1000)
        
    }, [resetCard, id])

    useEffect(() => {
        
        if(reset) {
             setIsCardFaceDown(true)
             setReset(false)
        }
        
    }, [reset, setReset])
    
    return(
        <div className="card">
         {!isCardFaceDown ?
        
            <div className="front" onClick={handle}>

                <img src={image} alt={name}/>
                <span className="name-card"> { name } </span>

            </div>

            : 

            <div className="back" onClick={handle}>
                <img src="https://media.ambito.com/p/e36e8e53c7abba996531db19942b4527/adjuntos/239/imagenes/038/786/0038786610/rick-and-morty.jpg" alt="rick and morty"/>
            </div>
        }
        </div>

    )
}

export default Card;