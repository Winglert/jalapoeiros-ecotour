// Router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// CSS
import 'rsuite/dist/styles/rsuite-default.css'; // RSuite
import 'react-multi-carousel/lib/styles.css'; // Carousel Multiple Items <3
import GlobalStyle from './styles/global' // Personal
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Guides from './pages/Guides';
import Guide from './pages/Guide';
import Attractions from './pages/Attractions';
import Contact from './pages/Contact';
import Tips from './pages/Tips';
import Error404 from './pages/Error404';

const Routes: React.FC = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
          <Footer />
          <Copyright />
        </Route>
        <Route exact path="/sobre">
          <Header />
          <About />
          <Footer />
          <Copyright />
        </Route>
        <Route exact path="/roteiros">
          <Header />
          <Guides />
          <Footer />
          <Copyright />
        </Route>
        <Route exact path="/roteiro/:id">
          <Header />
          <Guide />
          <Footer />
          <Copyright />
        </Route>
        <Route exact path="/pontos-turisticos">
          <Header />
          <Attractions />
          <Footer />
          <Copyright />
        </Route>
        <Route exact path="/contato">
          <Header />
          <Contact />
          <Copyright />
        </Route>
        <Route exact path="/o-que-levar">
          <Header />
          <Tips />
          <Footer />
          <Copyright />
        </Route>
        <Route path="*">
           <Error404 />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes