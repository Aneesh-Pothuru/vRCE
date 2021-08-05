import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import { Navigation } from './components/navigation/navigation';
import { CardList } from './components/card-list/card-list';
import { DeploymentDetail } from './components/deployment-detail/deployment-detail';
import { Paginate } from './components/paginate/paginate'
import { AppContainer, PaginationContainer } from './App.styles';

const App = () => {

  const [ deployments, setDeployments ]  = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage, setPostsPerPage ] = useState(10);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(deployments => setDeployments(deployments))
  }, []) 
 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = deployments.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <AppContainer>
      <Navigation/>
      <Route exact path="/">
        <PaginationContainer>
          <Paginate postsPerPage={postsPerPage} totalPosts={deployments.length} paginate={paginate} />
        </PaginationContainer>
        <CardList deployments={currentPosts} />
        <PaginationContainer>
          <Paginate postsPerPage={postsPerPage} totalPosts={deployments.length} paginate={paginate} />
        </PaginationContainer>
      </Route>
      <Route exact path="/detail/:detailId" component={DeploymentDetail} />
    </AppContainer>
  );
}

export default App;
