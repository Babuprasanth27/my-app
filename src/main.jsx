import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import { SnackbarProvider } from 'notistack';
import { UserProvider } from './components/UserContext.jsx';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';


AOS.init({
  duration: 1000, // Duration of the animation in milliseconds
  once: false, // Whether animation should happen only once - while scrolling down
});
ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <React.StrictMode>
  <BrowserRouter>
  <SnackbarProvider
  maxSnack={3} 
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  autoHideDuration={3000} 
>
<UserProvider>
  <App />
  </UserProvider>
</SnackbarProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
