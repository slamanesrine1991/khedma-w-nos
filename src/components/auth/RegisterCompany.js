import React, { Component } from "react";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import { registerCompany } from "../../actions/authCompanyAction";
class RegisterCompany extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      password: "",
      password2: "",

      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit(e) {
    e.preventDefault();

    const newCompany = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      password2: this.state.password2
    };

    // axios.post('/api/companyRegister',newCompany)
    // .then(res=>console.log(res.data))
    // .catch(err=>this.setState({errors:err.response.data}))
    this.props.registerCompany(newCompany, this.props.history);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Creer votre espace Entreprise</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextFieldGroup
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    error={errors.name}
                  />

                  <TextFieldGroup
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    error={errors.email}
                  />
                  <TextFieldGroup
                    placeholder="Adresse"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    error={errors.address}
                  />
                  <TextFieldGroup
                    placeholder="Phone"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                    error={errors.phoneNumber}
                  />
                  <TextFieldGroup
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    error={errors.password}
                  />
                  <TextFieldGroup
                    placeholder="Confirm Password"
                    name="password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.handleChange}
                    error={errors.password2}
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
RegisterCompany.propTypes = {
  registerCompany: PropTypes.func.isRequired,
  authCompany: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authCompany: state.authCompany,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerCompany }
)(withRouter(RegisterCompany));
