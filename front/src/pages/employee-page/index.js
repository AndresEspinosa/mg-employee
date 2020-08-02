// @packages
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import CtrlTable from '../../controls/toolkit/ctrl-table';
import CtrlTextField from '../../controls/toolkit/ctrl-text-field';
import { config } from '../../config';

// @styles
import styles from './styles';

class EmployeePage extends PureComponent {
    constructor(props) {
        super(props);
        this.handleFieldOnChange = this.handleFieldOnChange.bind(this);
    }

    handleFieldOnChange({ value }) {
        this.props.onSetEmployeeId(value);
    }

    render() {
        const {
            classes,
            employeeId,
            employeeItems,
            id,
            onGetEmployees
        } = this.props;

        const items = employeeId
            ? employeeItems.filter(employee => employee.id === employeeId)
            : employeeItems;

        return (
            <Grid container id={id} className={classes.employee}>
                <Grid item xs={12}>
                    <CtrlTextField
                        autoFocus
                        className={classes.formTextField}
                        id={`${id}-employee-id-input`}
                        name="employeeId"
                        onChange={this.handleFieldOnChange}
                        placeholder={config.text.employee.searchPlaceholder}
                        value={employeeId}
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={12} >
                    <Button
                        className={classes.actionGetAll}
                        color="primary"
                        onClick={onGetEmployees}
                        variant="contained"
                    >
                        {config.text.employee.getAll}
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.table}>
                        <CtrlTable
                            id={`${id}-table`}
                            rows={items}
                        />
                    </div>
                </Grid>
            </Grid>
        );
    }
}


EmployeePage.propTypes = {
    classes: PropTypes.object.isRequired,
    employeeId: PropTypes.string,
    employeeItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
    })).isRequired,
    id: PropTypes.string.isRequired,
    onGetEmployees: PropTypes.func.isRequired,
    onSetEmployeeId: PropTypes.func.isRequired
};

EmployeePage.defaultProps = {
    employeeId: null
};

export default withStyles(styles)(EmployeePage);
