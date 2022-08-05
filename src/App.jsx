import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then(res => setJokes(res.data.jokes));
    }, []); 
  
    return (
      <div className="App">
        <header className="App-header">
            <h1>JOKE</h1>
            <p>
                {
                    jokes.map(j => <p key={j.id}>{j.joke}</p>)
                }
                {
                    jokes.map(u => <p key={u.id}>{u.setup}{u.delivery}</p>)
                }
            </p>

        </header>
      </div>
    );
  }
  
  export default App;