// @packages
import PropTypes from 'prop-types';
import React from 'react';

// @scripts
import CtrlLoadingPage from '../../controls/master-page/ctrl-loading-page';
import CtrlModalDialog from '../../controls/master-page/ctrl-modal-dialog';
import CtrlToastNotification from '../../controls/master-page/ctrl-toast-notification';
import { globalUI } from '../../core';

const CtrlCommonControls = ({
    currentUrl,
    modalDialogProps,
    loadingPageProps,
    toastNotificationProps
}) => ([
    <CtrlLoadingPage
        id="ctrl-loading-page"
        key="ctrl-loading-page"
        leftMargin={currentUrl === globalUI.getLoginUrl() ? 0 : 120}
        msg={loadingPageProps.msg}
        visible={loadingPageProps.isVisible}
    />,
    <CtrlModalDialog
        cancelLabel={modalDialogProps.cancelLabel}
        id="ctrl-confirm-dialog"
        key="ctrl-confirm-dialog"
        msg={modalDialogProps.msg}
        okLabel={modalDialogProps.okLabel}
        onConfirm={modalDialogProps.onConfirm}
        onHide={modalDialogProps.onHide}
        showCancel={modalDialogProps.showCancel}
        title={modalDialogProps.title}
        visible={modalDialogProps.isVisible}
        width={modalDialogProps.width}
    />,
    <CtrlToastNotification
        id="ctrl-toast-notification"
        key="ctrl-toast-notification"
        msg={toastNotificationProps.msg}
        onHide={toastNotificationProps.onHide}
        type={toastNotificationProps.type}
        visible={toastNotificationProps.isVisible}
    />
]);

CtrlCommonControls.propTypes = {
    currentUrl: PropTypes.string.isRequired,
    modalDialogProps: PropTypes.shape({
        isVisible: PropTypes.bool.isRequired,
        msg: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
        onConfirm: PropTypes.func,
        onHide: PropTypes.func.isRequired
    }).isRequired,
    loadingPageProps: PropTypes.shape({
        isVisible: PropTypes.bool.isRequired,
        msg: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    }).isRequired,
    toastNotificationProps: PropTypes.shape({
        isVisible: PropTypes.bool.isRequired,
        msg: PropTypes.string,
        onHide: PropTypes.func.isRequired,
        type: PropTypes.string
    }).isRequired
};

export default CtrlCommonControls;
