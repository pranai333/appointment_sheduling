import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import Login from './login';
import Info from './Info';
import Logorreg from './logorreg';
import Register from './Register';
import Para1 from './Para1';
import Speciality from './Speciality';
import Treat from './Treat';
import Appointment from './Appointment'
import About from './About';
import Features from './Features';
import Treatment from './Treatment';
import Copyright from './Copyright';
import Marque from './Marquee';
import Flowname from './Flowname';
import Blackbox from './Blackbox';
import Responsenavbar from './Responsenavbar';
import Doctorlogin from './Doctorlogin';
import Doctoropenpage from './Doctoropenpage';
import Doctorregister from './Doctorregister';
import Doctotalpage from './Doctotalpage';
import Adjustpvn from './Adjustpvn';
<<<<<<< HEAD
import AppointmentForm from './Appointment';

=======
import MyAppointments from './myappointments';
>>>>>>> a5c2eecb8f280a3e0b4eb987ed41fb3c23109ce4



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navbar />
  <Home />
  <Speciality/>
  <Marque/>
  <About/>
  <Features/>
  <Para1/>
<<<<<<< HEAD
  <Doctoropenpage/>
  <AppointmentForm/>
  <Doctotalpage/>


=======
  <Treat/>
  <Treatment/>
  <MyAppointments/>
  <Appointment/>
  <Info/>
  
>>>>>>> a5c2eecb8f280a3e0b4eb987ed41fb3c23109ce4
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
