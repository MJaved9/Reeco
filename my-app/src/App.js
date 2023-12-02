import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import HeaderSection from './Components/HeaderSection';
import StatusSection from './Components/StatusSection';
import TableSection from './Components/TableSection';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeaderSection/>
      <div className='container'>
        <StatusSection/>
        <TableSection/>
      </div>
    </div>
  );
}

export default App;
