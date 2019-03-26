import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRouteCompany = ({ component: Component, authCompany, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authCompany.isAuthorize === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/loginCompany" />
      )
    }
  />
);

PrivateRouteCompany.propTypes = {
  authCompany: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authCompany: state.authCompany
});

export default connect(mapStateToProps)(PrivateRouteCompany);
