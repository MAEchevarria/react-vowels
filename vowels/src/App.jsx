import { useState } from 'react';
import OutputLabel from './components/OutputLabel';
import InputButton from './components/InputButton';
import './App.css';


function App() {
  // use [] to track word history ?
  const [word, setWord] = useState('');

  const handleSubmit = (userWord) => {
    setWord(userWord)
    }

  return (
    <div>
      <h2>Enter a word. Any word</h2>
      <InputButton handleSubmit={handleSubmit}/>
      <OutputLabel word={word}/>
    </div>
  );
}

export default App
