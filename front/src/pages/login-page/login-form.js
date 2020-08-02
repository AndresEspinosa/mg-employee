// @packages
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import CtrlTextField from '../../controls/toolkit/ctrl-text-field';
import { config } from '../../config';

// @styles
import styles from './styles';

const CtrlLoginForm = ({
    classes,
    id,
    onFieldChange,
    onLogin,
    passwordValue,
    showErrors,
    userValue
}) => (
    <form
        autoComplete="off"
        className={classes.form}
        id={id}
        noValidate
    >
        <Typography id={`${id}-title`} className={classes.formTitle}>
            {config.text.loginPage.formTitle}
        </Typography>
        <Paper
            elevation={3}
            id={`${id}-container`}
            style={{ padding: 20 }}
        >
            <CtrlTextField
                autoFocus
                className={classes.formTextField}
                id={`${id}-user-input`}
                name="user"
                onChange={onFieldChange}
                onEnter={onLogin}
                placeholder={config.text.loginPage.userPlaceholder}
                required
                showErrors={showErrors}
                type="email"
                value={userValue}
                variant="filled"
            />
            <CtrlTextField
                className={classes.formTextField}
                id={`${id}-password-input`}
                name="password"
                onChange={onFieldChange}
                onEnter={onLogin}
                placeholder={config.text.loginPage.passwordPlaceholder}
                required
                showErrors={showErrors}
                type="password"
                value={passwordValue}
                variant="filled"
            />
            <div className={classes.formButtons}>
                <Button
                    className={classes.formButton}
                    id={`${id}-continue-button`}
                    onClick={onLogin}
                    value={config.text.loginPage.continue}
                    variant="contained"
                >
                    {config.text.loginPage.continue}
                </Button>
            </div>
        </Paper>
    </form>
);

CtrlLoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onFieldChange: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    passwordValue: PropTypes.string,
    showErrors: PropTypes.bool.isRequired,
    userValue: PropTypes.string
};

CtrlLoginForm.defaultProps = {
    passwordValue: null,
    userValue: null
};

export default withStyles(styles)(CtrlLoginForm);
