import {Route,Routes,Link,BrowserRouter} from "react-router-dom";
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Container from "./components/layouts/Container";
import NavBar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Projects from "./components/pages/Projects";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container customClass='minHeight' > 
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} />
        </Routes>
     </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;