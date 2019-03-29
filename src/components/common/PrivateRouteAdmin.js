import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRouteAdmin = ({ component: Component, authAdmin, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authAdmin.isTestify === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

PrivateRouteAdmin.propTypes = {
  authAdmin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authAdmin: state.authAdmin
});

export default connect(mapStateToProps)(PrivateRouteAdmin);
