// @packages
import PropTypes from 'prop-types';
import React from 'react';

// @scripts
import CtrlMainMenu from '../../controls/master-page/ctrl-main-menu';

const CtrlRestrictedControls = ({
    currentUrl,
    mainMenuProps,
    userProps
}) => {
    if (!userProps.isLoggedIn) {
        return null;
    }

    return (
        <CtrlMainMenu
            currentUrl={currentUrl}
            expandedItems={mainMenuProps.expandedItems}
            id="ctrl-main-menu"
            isExpanded={mainMenuProps.isExpanded}
            key="ctrl-main-menu"
            onCollapseItem={mainMenuProps.onCollapseItem}
            onExpandItem={mainMenuProps.onExpandItem}
            userPermissions={userProps.permissions}
            visible
        />
    );
};

CtrlRestrictedControls.propTypes = {
    currentUrl: PropTypes.string.isRequired,
    mainMenuProps: PropTypes.shape({
        expandedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
        onCollapseItem: PropTypes.func.isRequired,
        onExpandItem: PropTypes.func.isRequired
    }).isRequired,
    userProps: PropTypes.shape({
        email: PropTypes.string,
        isLoggedIn: PropTypes.bool.isRequired,
        name: PropTypes.string,
        permissions: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default CtrlRestrictedControls;
