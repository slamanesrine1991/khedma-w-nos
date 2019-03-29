// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { logoutStudent } from "./actions/authAction";
// import { logoutCompany } from "./actions/authCompanyAction";
// import { clearCurrentProfileStudent } from "./actions/profileStudent";
// import { clearCurrentProfileCompany } from "./actions/profileCompanyAction";

// class Navbar extends Component {
//   onLogoutClick = (e) => {
//     e.preventDefault();
//     this.props.clearCurrentProfileStudent();
//     this.props.logoutStudent();
//   }

//   onLogoutCompanyClick = (event) => {
//     event.preventDefault();
//     this.props.clearCurrentProfileCompany();
//     this.props.logoutCompany();
//   }

//   render() {
//     const { isAuthenticated, student } = this.props.auth;
//     const { isAuthorize, company } = this.props.authCompany;
//     const authcompanyLinks = (
//       <ul className="navbar-nav ml-auto">
//         <li className="nav-item">
//           <a
//             href=""
//             onClick={this.onLogoutCompanyClick}
//             className="nav-link"
//           >
//             <img
//               className="rounded-circle"
//               src={company.avatar}
//               alt={company.name}
//               style={{ width: "25px", marginRight: "10px" }}
//             />
//             logoutCompany
//           </a>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/dashboardCompany">
//             Dashboard Company
//           </Link>
//         </li>
//       </ul>
//     );
//     const guestcompanyLinks = (
//       <ul className="navbar-nav ml-auto">
//         <li className="nav-item">
//           <Link className="nav-link" to="/registerCompany">
//             Sign Up Company
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/loginCompany">
//             Login Company
//           </Link>
//         </li>
//       </ul>
//     );
//     const authLinks = (
//       <ul className="navbar-nav ml-auto">
//         <li className="nav-item">
//           <a
//             href=""
//             onClick={this.onLogoutClick}
//             className="nav-link"
//           >
//             <img
//               className="rounded-circle"
//               src={student.avatar}
//               alt={student.name}
//               style={{ width: "25px", marginRight: "10px" }}
//             />
//             logout
//           </a>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/dashboard">
//             Dashboard
//           </Link>
//         </li>
//       </ul>
//     );
//     const guestLinks = (
//       <ul className="navbar-nav ml-auto">
//         <li className="nav-item">
//           <Link className="nav-link" to="/register">
//             --Sign Up
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/login">
//             --Login
//           </Link>
//         </li>
//       </ul>
//     );
//     return (
//       <div>
//         <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
//           <div className="container">
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#mobile-nav"
//             >
//               <span className="navbar-toggler-icon" />
//             </button>

//             <div className="collapse navbar-collapse" id="mobile-nav">
//               <ul className="navbar-nav mr-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/profiles-student">
//                     Students
//                   </Link>
//                 </li>
//               </ul>

//               <ul className="navbar-nav ml-auto">
//                 {/* <li className="nav-item">
//           <Link className="nav-link" to='/register'>Sign Up</Link>

//           </li>
//           <li className="nav-item">
//           <Link className="nav-link" to='/login'>Login</Link>

//           </li>
//           <li className="nav-item">
//           <Link className="nav-link" to='/loginCompany'>Login Entreprise</Link>

//           </li>
//           <li className="nav-item">
//           <Link className="nav-link" to='/registerCompany'>Sign up Entreprise</Link>

//           </li>*/}
//               </ul>
//               {isAuthenticated ? authLinks : guestLinks}
//               {isAuthorize ? authcompanyLinks : guestcompanyLinks}
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }
// // Navbar.propTypes = {
// //   logoutStudent: PropTypes.func.isRequired,
// //   auth: PropTypes.object.isRequired,
// //   authCompany: PropTypes.object.isRequired
// // };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   authCompany: state.authCompany
// });
// export default connect(
//   mapStateToProps,
//   {
//     logoutStudent,
//     logoutCompany,
//     clearCurrentProfileCompany,
//     clearCurrentProfileStudent
//   }
// )(Navbar);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutStudent } from "./actions/authAction";
import { logoutCompany } from "./actions/authCompanyAction";
import { clearCurrentProfileStudent } from "./actions/profileStudent";
import Button from "@material-ui/core/Button";
import { clearCurrentProfileCompany } from "./actions/profileCompanyAction";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfileStudent();
    this.props.logoutStudent();
  };

  onLogoutCompanyClick = event => {
    event.preventDefault();
    this.props.clearCurrentProfileCompany();
    this.props.logoutCompany();
  };

  render() {
    const { isAuthenticated, student } = this.props.auth;
    const { isAuthorize, company } = this.props.authCompany;
    const authcompanyLinks = (
      <div>
        <a href="" onClick={this.onLogoutCompanyClick} className="nav-link">
          {/* <img
            className="rounded-circle"
            src={company.avatar}
            alt={company.name}
            style={{ width: "25px", marginRight: "10px" }}
          /> */}
          logoutCompany
        </a>
        <Link className="nav-link" to="/dashboardCompany">
          Dashboard Company
        </Link>
      </div>
    );
    const guestcompanyLinks = (
      <div>
        <Link className="nav-link" to="/registerCompany">
          Sign Up Company
        </Link>
        <Link className="nav-link" to="/loginCompany">
          Login Company
        </Link>
      </div>
    );
    const authLinks = (
      <div>
        <a href="" onClick={this.onLogoutClick} className="nav-link">
          <img
            className="rounded-circle"
            src={student.avatar}
            alt={student.name}
            style={{ width: "25px", marginRight: "10px" }}
          />
          logout
        </a>
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
      </div>
    );
    const guestLinks = (
      <div>
        <Link className="nav-link" to="/register">
          Sign Up
        </Link>
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </div>
    );
    return (
      <div>
        <nav className="navbar-expand-sm">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/profiles-student">
                    Students
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto" />
              {isAuthenticated ? authLinks : guestLinks}
              {isAuthorize ? authcompanyLinks : guestcompanyLinks}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  authCompany: state.authCompany
});
export default connect(
  mapStateToProps,
  {
    logoutStudent,
    logoutCompany,
    clearCurrentProfileCompany,
    clearCurrentProfileStudent
  }
)(Navbar);
