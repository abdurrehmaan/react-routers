import logo from './logo.svg';
import './App.css';
// Components
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import Profile from './component/About/Profile';
import Adress from './component/About/Adress';
import User from './component/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'about'} element={<About />} >
          <Route path={'profile'} element={<Profile />} />
          <Route path={'address'} element={<Adress />} />
        </Route>
        <Route path={'contact'} element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path={"user/:name"} element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
