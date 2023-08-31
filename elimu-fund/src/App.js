import './App.css';
import './styles.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Faqs from './pages/Faqs';
import About from './pages/About';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';


const App = () =>{
  return(
      <Router>
      <NavBar/>
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/about' element={<About/>}></Route>
              <Route exact path='/faqs' element={<Faqs/>}></Route>
              <Route exact path='/login' element={<Login/>}></Route>
            </Routes>
         </Router>
    
  )
}
  // <Home />
  
export default App;
