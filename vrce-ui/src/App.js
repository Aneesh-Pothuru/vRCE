import React, { useEffect, useState } from 'react';
import { Navigation } from './components/navigation/navigation';
import { CardList } from './components/card-list/card-list';
import './App.css';


const App = () => {

  const [ deployments, setDeployments ]  = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(deployments => setDeployments(deployments))
  }, []) 

  return (
    <div className="App">
      <Navigation/>
      <CardList deployments={deployments} />
    </div>
  );
}

export default App;
