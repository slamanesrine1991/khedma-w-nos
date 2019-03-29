import React, { Component } from 'react'
 import ProfileCompanyHeader from './ProfileCompanyHeader';


import Spinner from '../common/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {getCompanyProfileByHandle} from '../../actions/profileCompanyAction'

 class ProfileCompany extends Component {

  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getCompanyProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profileCompany === null && this.props.profileCompany.loading) {
      this.props.history.push('/not-found');
    }
  }

  render() {
    const {profileCompany, loading} = this.props.profileCompany;
    let profileCompanyContent;
    
    if (profileCompany === null || loading) {
      profileCompanyContent = <Spinner />;
    } else {
      profileCompanyContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles-company" className="btn btn-light mb-3 float-left">
                Back To Profiles
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <ProfileCompanyHeader profileCompany={profileCompany} />
         {/* <ProfileStudentAbout profileStudent={profileStudent} />
          <ProfileStudentCreds
            education={profileStudent.education}
            experience={profileStudent.experience}
          />
          {profileStudent.githubusername ? (
            <ProfileStudentGithub username={profileStudent.githubusername} />
          ) : null}  */}
        </div>
      );
    }
    return (
      <div>
        
        
        <div className="col-md-12">{profileCompanyContent}</div>
      </div>
    )
  }
}
ProfileCompany.propTypes = {
  getCompanyProfileByHandle: PropTypes.func.isRequired,
  profileCompany: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profileCompany: state.profileCompany
});
export default connect(mapStateToProps, {getCompanyProfileByHandle})(ProfileCompany);