import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import {logoutStudent} from '../../actions/authAction' 
import {clearCurrentProfileStudent} from '../../actions/profileStudent' 
 class Navbar extends Component {

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfileStudent();
    this.props.logoutStudent();
  }

  render() {
    const { isAuthenticated, student } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav ml-auto">
      
      <li className="nav-item">
     
     <a href=""  onClick={this.onLogoutClick.bind(this)} className="nav-link">
     <img className="rounded-circle"
     src={student.avatar} alt={student.name} style={{width:'25px',marginRight:'10px'}}/>
     logout
     </a>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>
    )
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
      <Link className="nav-link" to='/register'>--Sign Up</Link>
 
      </li>
      <li className="nav-item">
      <Link className="nav-link" to='/login'>--Login</Link>
     
      </li>
      </ul>
    )
    return (
      <div>
         <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="landing.html">DevConnector</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="profiles.html"> Developers
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link className="nav-link" to='/register'>Sign Up</Link>
     
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/login'>Login</Link>
         
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/loginEntreprise'>Login Entreprise</Link>
         
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/registerEntreprise'>Sign up Entreprise</Link>
         
          </li>
          
        </ul>
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    </div>
  </nav>
      </div>
    )
  }
}
Navbar.propTypes = {
  logoutStudent: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
auth : state.auth
});
export default connect(mapStateToProps, { logoutStudent , clearCurrentProfileStudent })(Navbar);