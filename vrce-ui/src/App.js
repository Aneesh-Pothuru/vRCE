import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import { Navigation } from './components/navigation/navigation';
import { CardList } from './components/card-list/card-list';
import { DeploymentDetail } from './components/deployment-detail/deployment-detail';
import { AppContainer } from './App.styles';


const App = () => {

  const [ deployments, setDeployments ]  = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(deployments => setDeployments(deployments))
  }, []) 
 
  return (
    <AppContainer>
      <Navigation/>
      <Route exact path="/">
        <CardList deployments={deployments} />
      </Route>
      <Route exact path="/detail/:detailId" component={DeploymentDetail} />
    </AppContainer>
  );
}

export default App;
