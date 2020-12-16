import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Manage from './pages/manage/index';
import axios from 'axios';

function App() {
  const [munarbek, setMunarbek] = React.useState([]);
  React.useEffect(async () => {
    await axios
      .get(`http://localhost:3000/database.json`)
      .then((atati) => atati)
      .then(({ data }) => setMunarbek(data.users));
  }, []);
  return (
    <div className='App'>
      <Header />
      <Sidebar />
      <Manage data={munarbek} />
    </div>
  );
}

export default App;
