import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ProfileCompanyItem from './ProfileCompanyItem';
import { getCompanyProfiles } from '../../actions/profileCompanyAction';

class ProfilesCompany extends Component {
  componentDidMount() {
    this.props.getCompanyProfiles();
  }

  render() {
    const { profilesCompany, loading } = this.props.profileCompany;
    let profileCompanyItems;
console.log(profilesCompany)
    if (profilesCompany=== null || loading) {
      profileCompanyItems = <Spinner />;
    } else {
      if (profilesCompany.length > 0) {
        profileCompanyItems = profilesCompany.map(profile => (
          <ProfileCompanyItem key={profile._id} profileCompany={profile} />
        ));
      } else {
        profileCompanyItems = <h4>No profiles found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Company Profiles</h1>
              <p className="lead text-center">
                Browse and connect with company
              </p>
              {profileCompanyItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfilesCompany.propTypes = {
  getCompanyProfiles: PropTypes.func.isRequired,
  profileCompany: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profileCompany: state.profileCompany
});

export default connect(mapStateToProps, { getCompanyProfiles })(ProfilesCompany);
