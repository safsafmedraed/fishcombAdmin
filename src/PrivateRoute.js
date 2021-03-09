import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, Auth: { isAuthenticated, loading }, ...rest }) => (
    <Route {...rest} render={props => !isAuthenticated && !loading ? (<Redirect to="/login" />) : (<Component {...props} />)} />
)

PrivateRoute.propTypes = {
    Auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    Auth: state.Auth
});

export default connect(mapStateToProps)(PrivateRoute);