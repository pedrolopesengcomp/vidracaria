import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Competition from "./components/pages/Competition";
import About from "./components/pages/About";
import NavBar from './components/NavBar';

function App() {
  return (
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/sobre-nos" element={<About />}/>
          <Route path="/servicos" element={<Competition />}/>
          <Route path="/contato" element={<Contact />}/>
        </Routes>
      </Router>
  );
}

export default App;
