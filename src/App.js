import Header from './components/header';
import Form from './components/form';
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
