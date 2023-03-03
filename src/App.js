
import './App.css';
import Login from './component/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './component/dashbord';
import Button from './component/button';
import Cards from './component/card';
import UtilitiesColor from './component/utilities-color';
import UtilitiesBorder from './component/utilities-border';
import UtilitiesAnimation from './component/utilities-animation';
import Other from './component/other';
import Register from "./component/register";
import ForgotPassword from "./component/forget-password";
import ErrorPage from "./component/404";
import Blank from './component/blank';
// import Chart from './component/chart';
import '../src/vendor/fontawesome-free/css/all.min.css'
import "../src/css/sb-admin-2.min.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashbord' element={<Dashboard />} />
        <Route path="/button" element={<Button />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/color" element={<UtilitiesColor />} />
        <Route path="/borders" element={<UtilitiesBorder />} />
        <Route path="/animations" element={<UtilitiesAnimation />} />
        <Route path="/other" element={<Other />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/errorpage" element={<ErrorPage />} />
        <Route path="/Blank" element={<Blank />} />
        {/* <Route path="/Chart" element={<Chart />} /> */}
        </Routes >
    </BrowserRouter>
  )
}

export default App;
