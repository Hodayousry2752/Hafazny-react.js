import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route,Routes} from 'react-router-dom';
import Home from './Home/Home';
// import $ from 'jquery';


function App() {
  return (
    <>
    <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        
        
    </Routes>
      
    </>
  );
}

export default App;