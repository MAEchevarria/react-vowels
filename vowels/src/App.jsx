import { useState } from 'react'
import './App.css'


function App() {
  const [word, setWord] = useState('');
  // use [] to track word history ?

  const handleSubmit = () => {
    let userInput = document.getElementById('user-input')
    if (userInput) {
      // need .value
      setWord(userInput.value)
    }
  }
  // using a form for submit
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`The word you entered was: ${word}`);
  // }

  return (
    <div>
      <h2>Enter a word. Any word</h2>
      <input id='user-input' type="text" placeholder='Enter word' />
      <button onClick={handleSubmit}>Submit</button>
      <p>The submitted word is: {word}</p>
    </div>
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <label>Enter a word: 
    //       <input type="text" value={word} onChange={(e) => setWord(e.target.value)}/>
    //     </label>
    //     <input type="submit"/>
    //   </form>
    // </div>
  );
}

export default App
