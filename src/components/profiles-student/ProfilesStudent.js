import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ProfileStudentItem from "./ProfileStudentItem";
import { getStudentProfiles } from "../../actions/profileStudent";

class ProfilesStudent extends Component {
  componentDidMount() {
    this.props.getStudentProfiles();
  }

  render() {
    const { profilesStudent, loading } = this.props.profileStudent;
    let profileStudentItems;

    if (profilesStudent === null || loading) {
      profileStudentItems = <Spinner />;
    } else {
      if (profilesStudent.length > 0) {
        profileStudentItems = profilesStudent.map(profile => 
          (
          <ProfileStudentItem key={profile._id} profileStudent={profile} />
        ));
      } else {
        profileStudentItems = <h4>No profiles found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Profiles</h1>
              <p className="lead text-center">
                Browse and connect with students
              </p>
              {profileStudentItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfilesStudent.propTypes = {
  getStudentProfiles: PropTypes.func.isRequired,
  profileStudent: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profileStudent: state.profileStudent
});

export default connect(
  mapStateToProps,
  { getStudentProfiles }
)(ProfilesStudent);
