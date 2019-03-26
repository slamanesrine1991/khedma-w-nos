import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import{Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentStudent, logoutStudent } from './actions/authAction';

import './App.css';
import Landing from './components/layaout/Landing'
import Footer from './components/layaout/Footer'
import Navbar from './components/layaout/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import LoginCompany from './components/auth/LoginCompany'
import RegisterCompany from './components/auth/RegisterCompany'
import Dashboard from './components/dashboard/Dashboard'
import DashboardCompany from './components/dashboard/DashboardCompany'
import { clearCurrentProfileStudent } from './actions/profileStudent';
import PrivateRoute from './components/common/PrivateRoute';
import PrivateRouteCompany from './components/common/PrivateRouteCompany';
import CreateStudentProfile from './components/createStudentProfile/CreateStudentProfile'
import EditStudentProfile from './components/editStudentProfile/EditStudentProfile'
import AddExperience from './components/add-credentials/AddExperience'
import AddEducation from './components/add-credentials/AddEducation';
import ProfilesStudent from './components/profiles-student/ProfilesStudent'
import ProfileStudent from './components/profile-student/ProfileStudent'
import CreateCompanyProfile from './components/createCompanyProfile/CreateCompanyProfile'
//check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentStudent(decoded));
   // Check for expired token
   const currentTime = Date.now() / 1000;
  //  if (decoded.exp < currentTime) {
  //    // Logout user
  //    store.dispatch(logoutStudent());
  //    //  Clear current Profile
  //    store.dispatch(clearCurrentProfileStudent());
  //    // Redirect to login
  //    window.location.href = '/login';
  //  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
     
       <Navbar/>
     
       <Route exact path='/' component={Landing}/>
      <div className="container">
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/loginCompany" component={LoginCompany}/>
      <Route exact path="/profiles-student" component={ProfilesStudent}/>
      <Route exact path="/studentprofile/:handle" component={ProfileStudent}/>
      <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      </Switch>
      <Switch>
      <PrivateRoute exact path="/create-student-profile" component={CreateStudentProfile}/>
      </Switch>
      <Switch>
      <PrivateRoute exact path="/edit-profile-student" component={EditStudentProfile}/>
      </Switch>
      <Switch>
      <PrivateRoute exact path="/add-experience" component={AddExperience}/>
      </Switch>
      <Switch>
      <PrivateRoute exact path="/add-education" component={AddEducation}/>
      </Switch>
      <Route exact path="/registerCompany" component={RegisterCompany}/>
      <Switch>
      <PrivateRouteCompany exact path="/dashboardCompany" component={DashboardCompany}/>
      </Switch>
      <Switch>
      <PrivateRouteCompany exact path="/create-company-profile" component={CreateCompanyProfile}/>
      </Switch>
      </div>
      
       <Footer/>
      </div>
     </Router> 
     </Provider>
    );
  }
}

export default App;
