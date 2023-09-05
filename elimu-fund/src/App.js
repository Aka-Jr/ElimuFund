import './App.css';
import './styles.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Faqs from './pages/Faqs';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Payment from './pages/Payment';

import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';


const App = () =>{
  return(
      <Router>
      <NavBar/>
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/about' element={<About/>}></Route>
              <Route exact path='/faqs' element={<Faqs/>}></Route>
              <Route exact path='/login' element={<Login/>}></Route>
              <Route exact path='/signUp' element={<SignUp />}></Route>
              <Route exact path='/payment' element={<Payment />}></Route>

            </Routes>
         </Router>
    
  )
}
  // <Home />
  
export default App;
