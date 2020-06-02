import React, {useState} from 'react';
import Profile from './components/Profile';

function App() {

  const [name, changeName] = useState('');

  const handleEvent = evt => {
    changeName(evt.target.value);
  }

  return (
    <div className="App">
      <h1>Bienvenidos al curso de React Hooks <span style={{color: 'red'}}>{name}</span></h1>
      <input type="text" value={name} onChange={handleEvent}/>
      <Profile attr={name}/>
    </div>
  );
}

export default App;
