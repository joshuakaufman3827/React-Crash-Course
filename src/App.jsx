import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/about.jsx';
import Contact from './Pages/Contact.jsx';
import Nav from './components/nav.jsx';
import Users from './Pages/users.jsx';

function App() {
  return (
      <Router>
        <nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/:name" element={<Users />} />

        </Routes>
      </Router>   
  )     
}

export default App;
