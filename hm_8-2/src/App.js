import './App.css';
import GetData from './components/GetData';
import GetError from './components/GetError';
import GetLoading from './components/GetLoading';

function App() {
  return(<>
    <GetData />
    <GetLoading />
    <GetError />
    
  </>)
}

export default App;
