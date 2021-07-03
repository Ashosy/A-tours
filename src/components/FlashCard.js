import React, {useState} from 'react'

function FlashCard({flashcard}) {
    const [flip, setFlip] = useState(false)
    return (

        <>
        <div
        className = {`card ${flip ? 'flip' : '' }`} 
        onClick = {() => setFlip(!flip)}>

            <div className = "front">
                 {flip ? flashcard.answer : flashcard.question}
            </div>
            <div className = "back">
                {flashcard.answer}
            </div>
        </div>
        </>

    )
}

export default FlashCard
