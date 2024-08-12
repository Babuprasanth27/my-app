// import React from "react";
// import Login from "./components/login";
// import SignUp from "./components/signup";
// import Navbar from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";
// // import Service from "./components/Services";
// // import ContactPage from "./components/ContactUs";
// // import SubscriptionPlans from "./components/subcription";
// import Landingpage from "./Pages/Landingpage";
// import HirePage from "./Pages/HirePage";
// import SubcriptionPage from "./Pages/SubcriptionPage";
// import ContactUsPage from "./Pages/ContactUsPage";
// import NavbarService from "./components/serviceProvider/NavbarService";
// import Blog from "./components/Blog";
// // import NavbarService from "./components/NavbarService";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//       <Route path="/" element={<Landingpage/>}/>
//        <Route path="/signup" element={<SignUp/>}/>
//         <Route path="/login" element={<Login/>}/>
//         <Route path="/Hire" element={<HirePage/>}/>
//         <Route path="/Blog" element={<Blog/>}/>
//         <Route path="/ContactUs" element = {<ContactUsPage/>} />
//         <Route path="/Subcription" element = {<SubcriptionPage/>}/>
     
//       </Routes>
      
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
import Navbar from './components/Navbar';
import Landingpage from './Pages/Landingpage';
import HirePage from './Pages/HirePage';
import SubcriptionPage from './Pages/SubcriptionPage';
import ContactUsPage from './Pages/ContactUsPage';
import Blog from './components/Blog';
import ServiceLanding from './components/serviceProvider/ServiceLanding';
// import DashboardPage from './components/serviceProvider/DashboardPage';
import SupportPage from './components/serviceProvider/Support';
import BookServices from './components/Book';
import Booking from './components/BookingPage';
import ServicesPage from './components/serviceProvider/ServicesPage';
import DashboardPage from './components/serviceProvider/DashboardPage';
import ManageService from './components/serviceProvider/ManageService';
import EmployeeRegistrationModal from './components/EmployeeRegistrationmodel';
import SummaryPage from './components/BookingPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Hire" element={<HirePage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path="/Subcription" element={<SubcriptionPage />} />
        <Route path="/Book" element={<BookServices />} />
        <Route path="/ServiceLanding" element={<ServiceLanding />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path="/support" element={<SupportPage />} />
        <Route path="/Booking" element={<Booking/>}/>
        <Route path='/manageService' element={<ManageService/>}/>
        <Route path='/book' element={<SummaryPage/>}/>
     
      </Routes>
    </div>
  );
};

export default App;
