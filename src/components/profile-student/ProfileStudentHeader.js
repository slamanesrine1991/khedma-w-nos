import React, { Component } from 'react'
import isEmpty from '../../validation/is-empty';
 class ProfileStudentHeader extends Component {
  render() {
    const { profileStudent } = this.props;
    return !(profileStudent && profileStudent.student) ? (
      "Loading"
    ) : (
      <div>
        <div className="row">
       
         <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  className="rounded-circle"
                  src={profileStudent.student.avatar}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{profileStudent.student.name}</h1>
              <p className="lead text-center">
                {profileStudent.status}{' '}
                {isEmpty(profileStudent.society) ? null : (
                  <span>at {profileStudent.society}</span>
                )}
              </p>
              {isEmpty(profileStudent.location) ? null : <p>{profileStudent.location}</p>}
              <p>
                {isEmpty(profileStudent.website) ? null : (
                  <a
                    className="text-white p-2"
                    href={profileStudent.website}
                    target="_blank"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}

                {isEmpty(profileStudent.social && profileStudent.social.twitter) ? null : (
                  <a
                    className="text-white p-2"
                    href={profileStudent.social.twitter}
                    target="_blank"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}

                {isEmpty(profileStudent.social && profileStudent.social.facebook) ? null : (
                  <a
                    className="text-white p-2"
                    href={profileStudent.social.facebook}
                    target="_blank"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}

                {isEmpty(profileStudent.social && profileStudent.social.linkedin) ? null : (
                  <a
                    className="text-white p-2"
                    href={profileStudent.social.linkedin}
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                )}

                {isEmpty(profileStudent.social && profileStudent.social.youtube) ? null : (
                  <a
                    className="text-white p-2"
                    href={profileStudent.social.youtube}
                    target="_blank"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}

                {isEmpty(profileStudent.social && profileStudent.social.instagram) ? null : (
                  <a
                    className="text-white p-2"
                    href={profileStudent.social.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                )}
              </p>
            </div>
          </div>
        </div> 
      </div>
      </div>
    )
  }
}
export default ProfileStudentHeader ;