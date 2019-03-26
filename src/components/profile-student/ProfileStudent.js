import React, { Component } from 'react'
import ProfileStudentHeader from './ProfileStudentHeader';
import ProfileStudentAbout from './ProfileStudentAbout';
import ProfileStudentCreds from './ProfileStudentCreds';
import ProfileStudentGithub from './ProfileStudentGithub';
import Spinner from '../common/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {getStudentProfileByHandle} from '../../actions/profileStudent'

 class ProfileStudent extends Component {

  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getStudentProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profileStudent.profileStudent === null && this.props.profileStudent.loading) {
      this.props.history.push('/not-found');
    }
  }

  render() {
    const {profileStudent, loading} = this.props.profileStudent;
    let profileStudentContent;
    
    if (profileStudent === null || loading) {
      profileStudentContent = <Spinner />;
    } else {
      profileStudentContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles-student" className="btn btn-light mb-3 float-left">
                Back To Profiles
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <ProfileStudentHeader profileStudent={profileStudent} />
         <ProfileStudentAbout profileStudent={profileStudent} />
          <ProfileStudentCreds
            education={profileStudent.education}
            experience={profileStudent.experience}
          />
          {profileStudent.githubusername ? (
            <ProfileStudentGithub username={profileStudent.githubusername} />
          ) : null} 
        </div>
      );
    }
    return (
      <div>
        
        <h1>helo</h1>
        <div className="col-md-12">{profileStudentContent}</div>
      </div>
    )
  }
}
ProfileStudent.propTypes = {
  getStudentProfileByHandle: PropTypes.func.isRequired,
  profileStudent: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profileStudent: state.profileStudent
});
export default connect(mapStateToProps, {getStudentProfileByHandle})(ProfileStudent);