// @packages
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import CtrlLoginForm from './login-form';
import { globalUI } from '../../core';
import { initialState } from './state';
import { isAllPropsValid } from '../../util';

// @styles
import styles from './styles';

class LoginPage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = initialState;

        this.handleFieldOnChange = this.handleFieldOnChange.bind(this);
        this.handleOnLogIn = this.handleOnLogIn.bind(this);
    }

    get isFormValid() {
        return isAllPropsValid(this.state);
    }

    handleFieldOnChange({ name, isValid, value }) {
        this.setState({
            [name]: {
                isValid,
                value
            }
        });
    }

    handleOnLogIn() {
        if (this.isFormValid) {
            const { onLogin } = this.props;
            const { user, password } = this.state;

            onLogin({
                email: user.value,
                password: password.value
            }).then(() => {
                globalUI.navigateToDefaultUrl();
            }).catch(() => {});
        } else {
            this.setState({ showErrors: true });
        }
    }

    render() {
        const { classes } = this.props;
        const { password, showErrors, user } = this.state;

        return (
            <div id="login-page" className={classes.loginPage}>
                <CtrlLoginForm
                    id="login-page-form"
                    onFieldChange={this.handleFieldOnChange}
                    onLogin={this.handleOnLogIn}
                    passwordValue={password.value}
                    showErrors={showErrors}
                    userValue={user.value}
                />
            </div>
        );
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired
};

export default withStyles(styles)(LoginPage);
