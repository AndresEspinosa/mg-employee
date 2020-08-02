// @scripts
import EmployeePageContainer from '../../containers/employee-page';
import LoginPageContainer from '../../containers/login-page';
import LogoutPageContainer from '../../containers/logout-page';

// @constants
const components = {
    EmployeePageContainer,
    LoginPageContainer,
    LogoutPageContainer
};

/**
 * @param {string} componentName
 * @returns {function}
 */
export const mapComponent = componentName =>
    components[componentName];
