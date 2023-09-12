import './App.css';
import './styles.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Faqs from './pages/Faqs';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Payment from './pages/Payment';
import AddStudentForm from "./components/AddStudentForm"

import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import StudentDashboard from './components/StudentDashboard';
import CreateCampaign from './components/CreateCampaign';
import Registration from './pages/Registration';
import UniversityDashboard from './components/UniversityDashboard';
import FundraiserDetails from './components/FundraiserDetails';

const App = () =>{
  return(
      <Router>
      
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/about' element={<About/>}></Route>
              <Route exact path='/faqs' element={<Faqs/>}></Route>
              <Route exact path='/login' element={<Login/>}></Route>
              <Route exact path='/signUp' element={<SignUp />}></Route>
              <Route exact path='/payment' element={<Payment />}></Route>
              <Route exact path='/addStudent' element={<AddStudentForm />}></Route>
              <Route exact path='/studentDashboard' element={<StudentDashboard />}></Route>
              <Route exact path='/createCampaign' element={<CreateCampaign />}></Route>
              <Route exact path='/registration' element={<Registration />}></Route>
              <Route exact path='/universityDashboard' element={<UniversityDashboard />}></Route>
              <Route exact path='/fundraiser' element={<FundraiserDetails />}></Route>
              
              

            </Routes>
         </Router>
    
  )
}
  // <Home />
  
export default App;
