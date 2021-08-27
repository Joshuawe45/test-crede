import React ,{useState} from 'react';
import Flascardlist from './Flascardlist';
import './App.css'
function App() {

  const [flashcards,setFlashcards]=useState(FLASHCARDS)
  return (
    <>
    <div class="header">
    <h1 className="heading"> AWS Cloud Assement Matrix</h1>
    </div>
    <div className="container">
   <Flascardlist flashcards={flashcards}/>
   </div>
   </>
  )
}

const FLASHCARDS=[
  {
    id:1,
    question: "Ec2",
    logo: '4',
    options:[
      ' sads djsaldjlksa djlksajdlksaj',
      ' dsadsadjsakjdklsa jdlksajlkdjsalk',
      'sa djlkjaslkdjas dlsakjdlksajldksa djsalkd',
      'as'
    ]
  },
  
  {
    id:2,
    question: "What is your age",
    logo: '5',
    options:[
      'a',
      'b',
      'c',
      'd'
    ]
  },
  {
    id:2,
    question: "What is your age",
    logo: '5',
    options:[
      'a',
      'b',
      'c',
      'd',
      ''
    ]
  }
  

]
export default App;
