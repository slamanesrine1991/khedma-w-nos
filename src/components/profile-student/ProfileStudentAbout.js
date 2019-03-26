import React, { Component } from 'react'
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileStudentAbout extends Component {
  render() {
    const { profileStudent } = this.props;

    // Get first name
    const firstName = profileStudent.student.name.trim().split(' ')[0];

    // Skill List
    const skills = profileStudent.skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {skill}
      </div>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">{firstName}'s Bio</h3>
            <p className="lead">
              {isEmpty(profileStudent.bio) ? (
                <span>{firstName} does not have a bio</span>
              ) : (
                <span>{profileStudent.bio}</span>
              )}
            </p>
            <hr />
            <h3 className="text-center text-info">Skill Set</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {skills}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileStudentAbout.propTypes = {
  profileStudent: PropTypes.object.isRequired
};


export default ProfileStudentAbout;