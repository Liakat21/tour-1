import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';




import Login from './component/Login/Login';
import Packages from './component/AllPackages/Packages';
import initializeAuthenticatin from './component/Firebase/firebase.initialize';
import Review from './component/Review/Review';
import Addpackage from './component/AddPackage/Addpackage';
import AboutUs from './component/AboutUs/AboutUs';



initializeAuthenticatin();







function App() {
  return (
    <div>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/packages">
            <Packages></Packages>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/about us">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="/Addpackage">
            <Addpackage></Addpackage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>


    </div>


  );
}

export default App;

