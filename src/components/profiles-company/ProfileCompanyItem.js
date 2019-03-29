import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class ProfileCompanyItem extends Component {
  render() {
    const { profileCompany } = this.props;
console.log(profileCompany.company.name)
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
          <img src={profileCompany.company.avatar} alt="" className="rounded-circle" />
        
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profileCompany.company.name}</h3>
        
            <p>
              {isEmpty(profileCompany.location) ? null : (
                <span>{profileCompany.location}</span>
              )}
            </p>
            <Link to={`/companyprofile/${profileCompany.handle}`} className="btn btn-info">
              View Profile
            </Link>
          </div>
         
        </div>
      </div>
    );
  }
}

ProfileCompanyItem.propTypes = {
  profileCompany: PropTypes.object.isRequired
};

export default ProfileCompanyItem;
