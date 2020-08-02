// @constants
export const HIDE_MODAL_DIALOG = 'HIDE_MODAL_DIALOG';
export const SHOW_MODAL_DIALOG = 'SHOW_MODAL_DIALOG';

/**
 * @param {?string} cancelLabel
 * @param {?string} title
 * @param {?string} okLabel
 * @param {string|element} msg
 * @param {?object|object[]} msgArgs
 * @param {?function} onConfirm
 * @param {?boolean} showCancel
 * @param {?number|?string} width
 */
export const showModalDialog = ({
    cancelLabel,
    msg,
    msgArgs,
    okLabel,
    onConfirm,
    showCancel,
    title,
    width
}) => ({
    type: SHOW_MODAL_DIALOG,
    payload: {
        cancelLabel,
        msg,
        msgArgs,
        okLabel,
        onConfirm,
        showCancel,
        title,
        width
    }
});

export const hideModalDialog = () =>
    ({
        type: HIDE_MODAL_DIALOG
    });
