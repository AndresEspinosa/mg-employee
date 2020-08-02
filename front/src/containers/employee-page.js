// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import EmployeePage from '../pages/employee-page';
import { getEmployees, setEmployeeId } from '../actions';

const EmployeePageContainer = ({
    employeeId,
    employeeItems,
    onGetEmployees,
    onSetEmployeeId
}) =>
    (
        <EmployeePage
            employeeId={employeeId}
            employeeItems={employeeItems}
            id="employee-page"
            onGetEmployees={onGetEmployees}
            onSetEmployeeId={onSetEmployeeId}
        />
    );

EmployeePageContainer.propTypes = {
    employeeId: PropTypes.string,
    employeeItems: PropTypes.arrayOf(PropTypes.shape({

    })).isRequired,
    onGetEmployees: PropTypes.func.isRequired,
    onSetEmployeeId: PropTypes.func.isRequired
};

EmployeePageContainer.defaultProps = {
    employeeId: null
};

const mapStateToProps = ({ employee }) => ({
    employeeId: employee.id,
    employeeItems: employee.items
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onGetEmployees: getEmployees,
    onSetEmployeeId: setEmployeeId
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(EmployeePageContainer);
