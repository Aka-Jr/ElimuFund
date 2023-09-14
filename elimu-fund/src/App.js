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
import AdminDashboard from './AdminDashboard/AdminDashboard';
import DashboardContent from './AdminDashboard/DashboardContent';
import UsersContent from './AdminDashboard/UsersContent';
import ReportsContent from './AdminDashboard/ReportsContent';
import CampaignsContent from './AdminDashboard/CampaignsContent';
import DonationsContent from './AdminDashboard/DonationsContent';
import DisbursementContent from './AdminDashboard/DisbursementContent';
import EnquiriesContent from './AdminDashboard/EnquiriesContent';

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
              <Route path='/admin' element={<AdminDashboard />} />

              {/* AdminDashboard */}
              <Route path="/admin/dashboard" element={<DashboardContent />} />
              <Route path="/admin/users" element={<UsersContent />} />
              <Route path="/admin/reports" element={<ReportsContent />} />
              <Route path="/admin/campaigns" element={<CampaignsContent />} />
              <Route path="/admin/donations" element={<DonationsContent />} />
              <Route path="/admin/disbursement" element={<DisbursementContent />} />
              <Route path="/admin/enquiries" element={<EnquiriesContent />} />
              

            </Routes>
         </Router>
    
  )
}


  // <Home />
  
export default App;
