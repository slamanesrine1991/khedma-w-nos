import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileStudentItem extends Component {
  render() {
    const { profileStudent } = this.props;
    return !(profileStudent && profileStudent.student) ? 'Loading' : (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img
              src={profileStudent.student.avatar}
              alt=""
              className="rounded-circle"
            />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profileStudent.student.name}</h3>
            <p>
              {profileStudent.status}{" "}
              {isEmpty(profileStudent.company) ? null : (
                <span>at {profileStudent.company}</span>
              )}
            </p>
            <p>
              {isEmpty(profileStudent.location) ? null : (
                <span>{profileStudent.location}</span>
              )}
            </p>
            <Link
              to={`/studentprofile/${profileStudent.handle}`}
              className="btn btn-info"
            >
              View Profile
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Skill Set</h4>
            <ul className="list-group">
              {profileStudent.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProfileStudentItem.propTypes = {
  profileStudent: PropTypes.object.isRequired
};

export default ProfileStudentItem;
