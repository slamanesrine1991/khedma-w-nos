import React, { Component } from 'react'
import axios from 'axios';
import classnames from 'classnames';
class Register extends Component {
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
      
       const newStudent={
           name:this.state.name,
           lastname:this.state.lastName,
           email:this.state.email,
           birthDate:this.state.birthDate,
           password:this.state.password,
           password2:this.state.password2
       };
       axios.post('/api/studentRegister',newStudent)
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
              <p className="lead text-center">Create your Student account</p>
              <form noValidate onSubmit={this.onSubmit }  >
                <div className="form-group">
                  <input type="text" 
                   className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.name
                  })}
                placeholder="Name" 
                  name="name" required onChange={this.handleChange}
                  value={this.state.name}/>
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>


                <div className="form-group">
                  <input type="text" 
                   className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.lastname
                  })}
                  placeholder="Last Name" 
                  name="lastName"  onChange={this.handleChange}
                  value={this.state.lastName}/>
                   {errors.lastname && (
                    <div className="invalid-feedback">{errors.lastname}</div>
                  )}
                </div>


                <div className="form-group">
                  <input type="email"
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.email
                  })}
                   placeholder="Email Address" name="email"
                    value={this.state.email} 
                   onChange={this.handleChange}/>
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input type="date"
                   className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.birthDate
                  })}
                   placeholder="Birthday date" name="birthDate" value={this.state.birthDate} onChange={this.handleChange}/>
                 {errors.birthDate && (
                    <div className="invalid-feedback">{errors.birthDate}</div>
                  )}
                </div>
                <div className="form-group">
                  <input type="password" 
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.password
                  })}
                  placeholder="Password" name="password"  value={this.state.password} onChange={this.handleChange}/>
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
                  name="password2"  value={this.state.password2} onChange={this.handleChange}/>
                  {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                
                <input type="submit" className="btn btn-info btn-block " value="Valider" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Register;