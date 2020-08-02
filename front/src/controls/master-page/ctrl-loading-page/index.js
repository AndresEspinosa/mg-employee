// @packages
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// @styles
import styles from './styles';

const CtrlLoadingPage = ({
    className,
    classes,
    id,
    leftMargin,
    msg,
    visible
}) => {
    if (!visible) {
        return null;
    }

    const loadingPageClass = classNames(
        className,
        classes.loadingPage
    );

    const centerPanelStyle = {
        left: `calc(50% + ${leftMargin}px)`
    };

    return (
        <div id={id} className={loadingPageClass}>
            <div className={classes.background} />
            <div className={classes.centerPanel} style={centerPanelStyle}>
                <CircularProgress
                    color="secondary"
                    id={`${id}-progress-icon`}
                    size={50}
                />
                <div id={`${id}-msg`} className={classes.msg}>
                    {msg}
                </div>
            </div>
        </div>
    );
};

CtrlLoadingPage.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    leftMargin: PropTypes.number,
    msg: PropTypes.string,
    visible: PropTypes.bool.isRequired
};

CtrlLoadingPage.defaultProps = {
    className: null,
    leftMargin: 120,
    msg: null
};

export default withStyles(styles)(CtrlLoadingPage);
