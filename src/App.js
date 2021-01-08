import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Manage from './pages/manage/index';
import Dashboard from './pages/dashboard';
import Products from './pages/products';
import Profile from './pages/profile';

// React-router-dom
// npm install react-router-dom
// npm install axios

function App() {
  return (
    <div className='App'>
      <Header />
      <Sidebar />
      <Route exact path='/' component={Dashboard} />
      <Route path='/users' component={Manage} />
      <Route path='/products' component={Products} />
      <Route path='/profile' component={Profile} />
    </div>
  );
}

export default App;
