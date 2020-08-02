// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import LoginPage from '../pages/login-page';
import { login } from '../actions';

const LoginPageContainer = ({ userOnLogin }) =>
    (
        <LoginPage onLogin={userOnLogin} />
    );

LoginPageContainer.propTypes = {
    userOnLogin: PropTypes.func.isRequired
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
    userOnLogin: login
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(LoginPageContainer);
