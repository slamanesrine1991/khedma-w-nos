import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter,Link } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
//import SelectListGroup from '../common/SelectListGroup';
 import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty'

import { createProfileStudent ,getCurrentProfileStudent} from '../../actions/profileStudent';

 class CreateProfileStudent extends Component {
  constructor(props) {
     super(props);
     this.state = {
       displaySocialInputs: false,
       handle: '',
       society: '',
       website: '',
       location: '',
       status: '',
       skills: '',
       githubusername: '',
       bio: '',
 
       errors: {},
       twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
     };
     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
 
  }
  componentDidMount (){
      this.props.getCurrentProfileStudent();
      
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if(nextProps.profileStudent.profileStudent){
        const profileStudent = nextProps.profileStudent 
       // bring skills array back to csv
      const skillsCSV = profileStudent.profileStudent.skills.join(',');
        // If profile field doesnt exist, make empty string
        console.log(profileStudent.profileStudent.skills.join(','))
       
        profileStudent.society = !isEmpty(profileStudent.society) ? profileStudent.society : '';
      profileStudent.website = !isEmpty(profileStudent.website) ? profileStudent.website : '';
      profileStudent.location = !isEmpty(profileStudent.location) ? profileStudent.location : '';
      profileStudent.githubusername = !isEmpty(profileStudent.githubusername)
        ? profileStudent.githubusername
        : '';
      profileStudent.bio = !isEmpty(profileStudent.bio) ? profileStudent.bio : '';
      profileStudent.social = !isEmpty(profileStudent.social) ? profileStudent.social : {};
      profileStudent.twitter = !isEmpty(profileStudent.social.twitter)
        ? profileStudent.social.twitter
        : '';
      profileStudent.facebook = !isEmpty(profileStudent.social.facebook)
        ? profileStudent.social.facebook
        : '';
      profileStudent.linkedin = !isEmpty(profileStudent.social.linkedin)
        ? profileStudent.social.linkedin
        : '';
      profileStudent.youtube = !isEmpty(profileStudent.social.youtube)
        ? profileStudent.social.youtube
        : '';
      profileStudent.instagram = !isEmpty(profileStudent.social.instagram)
        ? profileStudent.social.instagram
        : '';
 // Set component fields state
 this.setState({
    handle: profileStudent.profileStudent.handle,
    society: profileStudent.profileStudent.society,
    website: profileStudent.profileStudent.website,
    location: profileStudent.profileStudent.location,
    status: profileStudent.profileStudent.status,
    skills:skillsCSV ,
    githubusername: profileStudent.profileStudent.githubusername,
    bio: profileStudent.profileStudent.bio,
    twitter: profileStudent.profileStudent.twitter,
    facebook: profileStudent.profileStudent.facebook,
    linkedin: profileStudent.profileStudent.linkedin,
    youtube: profileStudent.profileStudent.youtube
  });

    }
  }
  onSubmit(e) {
    e.preventDefault();
    const profileStudentData = {
      handle: this.state.handle,
      society: this.state.society,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };
    this.props.createProfileStudent(profileStudentData, this.props.history)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

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
             <Link to="/dashboard" className="btn btn-light">
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
                  placeholder="society"
                  name="society"
                  value={this.state.society}
                  onChange={this.onChange}
                  error={errors.society}
                  info="Could be your own company or one you work for"
                />
                 <TextFieldGroup
                  placeholder="* status"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  error={errors.status}
                  
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
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP"
                />
                <TextFieldGroup
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info="If you want your latest repos and a Github link, include your username"
                />
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a little about yourself"
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

CreateProfileStudent.propTypes = {
   profileStudent: PropTypes.object.isRequired,
   getCurrentProfileStudent:PropTypes.func.isRequired,
   createProfileStudent :PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    profileStudent: state.profileStudent,
    errors: state.errors
  });
  
 


 
 export default connect(mapStateToProps, { createProfileStudent,getCurrentProfileStudent })(
  withRouter(CreateProfileStudent)
);