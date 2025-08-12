import logo from './logo.svg';
import './App.scss';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

//imprt components
import Navigation from '../components/navigation/Navigation';
import Home from './home/Home';
import AboutUs from './about/AboutUs';
import OurServices from './services/OurServices';
import Login from './login/Login';
import Booking from './booking/Booking';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="App">
        <header className="App-header">

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/services' element={<OurServices />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/login' element={<Login />} />
          </Routes>

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
