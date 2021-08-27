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
width="70px"
      src="https://voicefoundry.com/wp-content/uploads/2018/09/feature-aws.jpg"
      alt="new"
      />

</div>

            </div>
            <div className="back">
            <div className="flashcard-options" >
          {flashcard.options.map(option => {
            return <div className="flashcard-option" style={{'border': '1px solid black', padding: '5px'}}
            key={option}>{option}</div>
          })}
        </div></div>
           {/* {flip ? flashcard.answer:flashcard.question} */}
        </div>
    )
}
