import React, { Component } from 'react'
import axios from 'axios';
import classnames from 'classnames';
class RegisterCompany extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            address:'',
            phoneNumber:'',
            password:'',
            password2:'',
            
            errors:{}
        };
      
        this.onSubmit=this.onSubmit.bind(this);
    
    }
   
   onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
 }
   onSubmit(e){
       e.preventDefault();
      
       const newCompany={
           name:this.state.name,
           email:this.state.email,
           address:this.state.address,
           phoneNumber:this.state.phoneNumber,
           password:this.state.password,
           password2:this.state.password2
       };
        
        axios.post('/api/companyRegister',newCompany)
        .then(res=>console.log(res.data)) 
        .catch(err=>this.setState({errors:err.response.data}))
   }
  render() {
    const {errors}=this.state;
    return (
        <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Creer votre espace Entreprise</p>
              <form noValidate onSubmit={this.onSubmit } >
                <div className="form-group">
                  <input type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.name
                    })}
                  placeholder="Name" 
                  name="name" required onChange={this.onChange}
                  value={this.state.name}/>
                   {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
              
                <div className="form-group">
                  <input type="email" 
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.email
                  })}
                  placeholder="Email Address" 
                  name="email" value={this.state.email} onChange={this.onChange}/>
                 {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input type="text" 
                   className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.address
                  })}
                  placeholder="Adresse" name="address" value={this.state.address} onChange={this.onChange}/>
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>
                <div className="form-group">
                  <input type="text" 
                   className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.phoneNumber
                  })}
                   placeholder="Téléphone" 
                  name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange}/>
                   {errors.phoneNumber && (
                    <div className="invalid-feedback">{errors.phoneNumber}</div>
                  )}
                </div>
                <div className="form-group">
                  <input type="password" 
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.password
                  })}
                   placeholder="Password"
                   name="password"  value={this.state.password} onChange={this.onChange}/>
                    {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input type="password" 
                   className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.password2
                  })} 
                  placeholder="Confirm Password" 
                  name="password2"  value={this.state.password2} onChange={this.onChange}/>
                   {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default RegisterCompany;