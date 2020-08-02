// @packages
import axios from 'axios';

// @scripts
import { config } from '../config';

// @constants
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

/**
 * @param {string} email
 * @param {string} password
 */
export const login = ({ email, password }) =>
    dispatch => axios
        .post(config.services.security.login, {
            email,
            password
        })
        .then((response) => {
            dispatch({
                type: LOGIN,
                payload: response
            });
            return response;
        })
        .catch(error => Promise.reject(error));

export const logout = () =>
    ({
        type: LOGOUT
    });

