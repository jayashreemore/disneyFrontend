import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import UserForm from './components/UserForm';
import Movies from './components/Movies';
import Princes from './components/Princes';
import Princesses from './components/Princesses';
import Login from './pages/Login';
import Register from './pages/Register';
import Review from './pages/Review';
import './App.css'


function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/princes' element={<Princes />}/>
            <Route path='/princesses' element={<Princesses />}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/userform' element={<UserForm/>}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/review' element={<Review />}/>
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;