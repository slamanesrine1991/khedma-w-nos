import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';

import {connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup'
import {registerAdmin} from '../../actions/authAdminAction';
class RegisterAdmin extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            lastName:'',
            email:'',
            birthDate:'',
            password:'',
            
            errors:{}
        };
       
        this.onSubmit=this.onSubmit.bind(this);
    
    }
  
   handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
 }
   onSubmit(e){
       e.preventDefault();
      
       const newAdmin={
           name:this.state.name,
           lastname:this.state.lastName,
           email:this.state.email,
           birthDate:this.state.birthDate,
           password:this.state.password,
           password2:this.state.password2
       };
       //afficher l'historique 
       this.props.registerAdmin(newAdmin, this.props.history)
     
   }
   componentWillReceiveProps(nextProps){
     if(nextProps.errors) {
       this.setState({errors:nextProps.errors})
     }
   }
  render() {

    const {errors}=this.state;
 
    return (
        <div className="register">
        
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Admin account</p>
              <form noValidate onSubmit={this.onSubmit }  >

              <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  error={errors.name}
                />
                 <TextFieldGroup
                  placeholder="LastName"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  error={errors.lastName}
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
                  placeholder="Birthday date"
                  name="birthDate"
                  type="date"
                  value={this.state.birthDate}
                  onChange={this.handleChange}
                  error={errors.birthDate}
            
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
                                            
                <input type="submit" className="btn btn-info btn-block " value="Valider" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
RegisterAdmin.propTypes={
  registerAdmin: PropTypes.func.isRequired,
  authAdmin: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps=(state)=>({
  authAdmin:state.authAdmin,
  errors:state.errors
})
export default connect(mapStateToProps,{registerAdmin})(withRouter(RegisterAdmin));