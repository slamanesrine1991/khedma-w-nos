import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginCompany} from '../../actions/authCompanyAction';
import TextFieldGroup from '../common/TextFieldGroup'
class LoginCompany extends Component {
    constructor(){
        super();
        this.state={
            email:'',
           
            password:'',
            errors:{}
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    componentDidMount(){
      if (this.props.authCompany.isAuthorize) {
        this.props.history.push('/dashboardCompany');
      }
    }
    
   componentWillReceiveProps(nextProps) {
          if (nextProps.authCompany.isAuthorize) {
            this.props.history.push('/dashboardCompany');
          }
      
          if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
          }
        }
        onSubmit(e){
          e.preventDefault();
         
          const companyData={
             
              email:this.state.email,
            
              password:this.state.password
          }
           this.props.loginCompany(companyData);
      }
    onChange(e){this.setState({[e.target.name]:e.target.value})}
  render() {
    const {errors}=this.state;
    return (
        <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your entreprise account</p>
              <form noValidate onSubmit={this.onSubmit}>
              <TextFieldGroup
              placeholder = "Email address"
              name = "email"
              type = "email"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
              />
               <TextFieldGroup
              placeholder = "Password"
              name = "password"
              type = "password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
              />
               
               
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
LoginCompany.propTypes = {
  loginCompany: PropTypes.func.isRequired,
  authCompany: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  authCompany: state.authCompany,
  errors: state.errors
});
export default connect(mapStateToProps, { loginCompany }) (LoginCompany);



