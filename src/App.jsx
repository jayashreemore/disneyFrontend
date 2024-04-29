import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import User from './components/User';
import Movie from './components/Movie';
import Prince from './components/Prince';
import Princess from './components/Princess';
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
            <Route path="/search" element={<Search />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/prince' element={<Prince />}/>
            <Route path='/princess' element={<Princess />}/>
            <Route path='/movie' element={<Movie />}/>
            <Route path='/user' element={<User />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/review' element={<Review />}/>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;