import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentStudent, logoutStudent } from "./actions/authAction";
import { clearCurrentProfileCompany } from "./actions/profileCompanyAction";
import { setCurrentCompany, logoutCompany } from "./actions/authCompanyAction";
import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import LoginCompany from "./components/auth/LoginCompany";
import RegisterCompany from "./components/auth/RegisterCompany";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardCompany from "./components/dashboard/DashboardCompany";
import { clearCurrentProfileStudent } from "./actions/profileStudent";
import PrivateRoute from "./components/common/PrivateRoute";
import PrivateRouteCompany from "./components/common/PrivateRouteCompany";
import CreateStudentProfile from "./components/createStudentProfile/CreateStudentProfile";
import EditStudentProfile from "./components/editStudentProfile/EditStudentProfile";
import AddExperience from "./components/add-credentials/AddExperience";
import AddEducation from "./components/add-credentials/AddEducation";
import ProfilesStudent from "./components/profiles-student/ProfilesStudent";
import ProfileStudent from "./components/profile-student/ProfileStudent";
import CreateCompanyProfile from "./components/createCompanyProfile/CreateCompanyProfile";
import AddOffre from "./components/add-offre/AddOffre";

import PrimarySearchAppBar from "./components/navBar";
import Homepage from "./components/Homepage";
import OfferDashboard from "./components/offerDashboard";
import JobPresentation from "./components/jobPresentation";
import { fetchOffers, fetchCompanies, fetchApplied } from "./actions/actions";

import ProfilesCompany from "./components/profiles-company/ProfilesCompany";
import EditCompanyProfile from "./components/editCompanyProfile/EditCompanyProfile";
import ProfileCompany from "./components/profile-company/ProfileCompany";

import RegisterAdmin from "./components/auth/RegisterAdmin";
import LoginAdmin from "./components/auth/LoginAdmin";
import DashboardAdmin from "./components/dashboard/DashboardAdmin";
import {
  setCurrentAdmin,
  logoutAdmin,
  clearCurrentAdmin
} from "./actions/authAdminAction";
import PrivateRouteAdmin from "./components/common/PrivateRouteAdmin";

//check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  if (decoded.type === "student") {
    store.dispatch(setCurrentStudent(decoded));
  }
  if (decoded.type === "company") {
    store.dispatch(setCurrentCompany(decoded));
  }

  //admin
  if (decoded.type === "admin") {
    store.dispatch(setCurrentAdmin(decoded));
  }
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime && decoded.type === "student") {
    // Logout user
    store.dispatch(logoutStudent());
    //  Clear current Profile
    store.dispatch(clearCurrentProfileStudent());
    // Redirect to login
    window.location.href = "/login";
  }
  if (decoded.exp < currentTime && decoded.type === "company") {
    // Logout user
    store.dispatch(logoutCompany());
    //  Clear current Profile
    store.dispatch(clearCurrentProfileCompany());
    // Redirect to login
    window.location.href = "/loginCompany";
  }
  //admin
  if (decoded.exp < currentTime && decoded.type === "admin") {
    // Logout user
    store.dispatch(logoutAdmin());
    //  Clear current Profile
    store.dispatch(clearCurrentAdmin());
    // Redirect to login
    window.location.href = "/login-admin";
  }
}

class App extends Component {
  componentDidMount() {
    this.props.fetchOffers();
    this.props.fetchCompanies();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <PrimarySearchAppBar />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/loginCompany" component={LoginCompany} />
            <Route
              exact
              path="/studentprofile/:handle"
              component={ProfileStudent}
            />
            <Route
              exact
              path="/job-offers/:id"
              render={props => <JobPresentation id={props.match.params.id} />}
            />
            <Route exact path="/" render={() => <Homepage />} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/create-student-profile"
                component={CreateStudentProfile}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/edit-profile-student"
                component={EditStudentProfile}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
            </Switch>
            <Route exact path="/registerCompany" component={RegisterCompany} />
            <Switch>
              <PrivateRouteCompany
                exact
                path="/dashboardCompany"
                component={DashboardCompany}
              />
            </Switch>
            <Switch>
              <PrivateRouteCompany
                exact
                path="/create-company-profile"
                component={CreateCompanyProfile}
              />
            </Switch>
            <Switch>
              <PrivateRouteCompany
                exact
                path="/add-offre"
                component={AddOffre}
              />
            </Switch>
            <Switch>
              <PrivateRouteCompany
                exact
                path="/edit-profile-company"
                component={EditCompanyProfile}
              />
            </Switch>
              <Route
                exact
                path="/companyprofile/:handle"
                component={ProfileCompany}
              />
            <Switch>
              <PrivateRouteAdmin
                exact
                path="/profiles-company"
                component={ProfilesCompany}
              />
            </Switch>
            <Switch>
              <PrivateRouteAdmin
                exact
                path="/dashboardAdmin"
                component={DashboardAdmin}
              />
            </Switch>
            <Switch>
              <PrivateRouteAdmin
                exact
                path="/profiles-student"
                component={ProfilesStudent}
              />
            </Switch>
            <Route exact path="/register-admin" component={RegisterAdmin} />
            <Route exact path="/login-admin" component={LoginAdmin} />
            <Route exact path="/job-offers" component={OfferDashboard} />
          </div>
        </div>
        {/* <footer className="bg-dark text-white mt-5 p-4 text-center">
            Copyright {new Date().getFullYear()}
          </footer> */}
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchOffers: () => {
    dispatch(fetchOffers());
  },
  fetchCompanies: () => {
    dispatch(fetchCompanies());
  }
});

const ConnectedApp = connect(
  null,
  mapDispatchToProps
)(App);

export default ConnectedApp;
