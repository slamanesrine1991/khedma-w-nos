import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter,Link } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';

import InputGroup from '../common/InputGroup';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty'

import { createProfileCompany ,getCurrentProfileCompany} from '../../actions/profileCompanyAction';

 class CreateProfileCompany extends Component {
  constructor(props) {
     super(props);
     this.state = {
        displaySocialInputs: false,
        handle: '',
        website: '',
        location: '',       
        errors: {},
        twitter: '',
       facebook: '',
       linkedin: '',
       youtube: '',
       instagram: '',
       category:'',
       description:'',
     };
     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   }
  componentDidMount (){
      this.props.getCurrentProfileCompany();
       }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if(nextProps.profileCompany.profileCompany){
        const profileCompany = nextProps.profileCompany 
console.log(profileCompany.handle)
      profileCompany.website = !isEmpty(profileCompany.website) ? profileCompany.website : '';
      profileCompany.location = !isEmpty(profileCompany.location) ? profileCompany.location : '';
      
      profileCompany.social = !isEmpty(profileCompany.social) ? profileCompany.social : {};
      profileCompany.twitter = !isEmpty(profileCompany.social.twitter)
        ? profileCompany.social.twitter
        : '';
      profileCompany.facebook = !isEmpty(profileCompany.social.facebook)
        ? profileCompany.social.facebook
        : '';
      profileCompany.linkedin = !isEmpty(profileCompany.social.linkedin)
        ? profileCompany.social.linkedin
        : '';
      profileCompany.youtube = !isEmpty(profileCompany.social.youtube)
        ? profileCompany.social.youtube
        : '';
      profileCompany.instagram = !isEmpty(profileCompany.social.instagram)
        ? profileCompany.social.instagram
        : '';
 // Set component fields state
 this.setState({
    handle: profileCompany.profileCompany.handle,
    category:profileCompany.profileCompany.category,
       description:profileCompany.profileCompany.description,
    website: profileCompany.profileCompany.website,
    location:profileCompany.profileCompany.location,
    twitter: profileCompany.profileCompany.twitter,
    facebook:profileCompany.profileCompany.facebook,
    linkedin: profileCompany.profileCompany.linkedin,
    youtube: profileCompany.profileCompany.youtube
  });

    }
  }
  onSubmit(e) {
    e.preventDefault();
    const profileCompanyData = {
      handle: this.state.handle,
      description: this.state.description,
      website: this.state.website,
      location: this.state.location,
      category: this.state.category,
    
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };
    this.props.createProfileCompany(profileCompanyData, this.props.history)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
//console.log(profileCompanyData)
   render() {
    const { errors, displaySocialInputs } = this.state;
    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <InputGroup
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
             <div className="col-md-8 m-auto">
             <Link to="/dashboardCompany" className="btn btn-light">
                Go Back
              </Link>
               <h1 className="display-4 text-center">Edit Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL. Your full name, company name, nickname"
                />
                              
                
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Could be your own website or a company one"
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="City or city & state suggested (eg. Boston, MA)"
                />
               <TextFieldGroup
                  placeholder="Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                 
                />
                 <TextFieldGroup
                  placeholder="Category"
                  name="category"
                  value={this.state.category}
                  onChange={this.onChange}
                  error={errors.category}
                 
                />
               
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
             </div>
          </div>
        </div>
      </div>
   );
   }
 }

CreateProfileCompany.propTypes = {
   profileCompany: PropTypes.object.isRequired,
   getCurrentProfileCompany:PropTypes.func.isRequired,
   createProfileCompany :PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    profileCompany: state.profileCompany,
    errors: state.errors
  });
  
 


 
 export default connect(mapStateToProps, { createProfileCompany,getCurrentProfileCompany })(
  withRouter(CreateProfileCompany)
);