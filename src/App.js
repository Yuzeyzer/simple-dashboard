import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Manage from './pages/manage/index';

function App() {
  return (
    <div className='App'>
      <Header />
      <Sidebar />
      <Manage />
    </div>
  );
}

export default App;
