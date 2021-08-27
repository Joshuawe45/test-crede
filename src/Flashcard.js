import React ,{useState} from 'react';

export default function Flascard({flashcard}) {
  // setting the value to flase
    const [flip,setFlip]=useState(false)

    
    return (
        <div 
        className={`card ${flip ? 'flip':''}`}
        onClick={()=>setFlip(!flip)}
        >

            <div className="front ">
{flashcard.question}
<div className="box-logo">
<img 
width="120px"
      src={flashcard.logo}
      alt="new"
      />

</div>

            </div>
            <div className="back">
            <div className="flashcard-options" >
          {flashcard.options.map(option => {
            return <div className="flashcard-option" 
            key={option}>{option}</div>
          })}
        </div></div>
           {/* {flip ? flashcard.answer:flashcard.question} */}
        </div>
    )
}
