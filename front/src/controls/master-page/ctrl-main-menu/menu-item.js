// @packages
import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// @styles
import styles from './styles';
import { globalUI } from '../../../core';

const CtrlMenuItem = ({
    classes,
    currentUrl,
    icon,
    id,
    isExpanded,
    isSubmenuItem,
    label,
    name,
    onCollapseItem,
    onExpandItem,
    permission,
    submenuItems,
    url,
    userPermissions
}) => {
    const hasSubmenu = Array.isArray(submenuItems);

    let expandIcon;

    if (hasSubmenu) {
        expandIcon = isExpanded
            ? <Icon>expand_less</Icon>
            : <Icon>expand_more</Icon>;
    }

    const userHasPermissionsOnSubmenuItems = hasSubmenu
        ? submenuItems.map(submenuItem =>
            submenuItem.permission).some(permission => userPermissions.includes(permission))
        : false;

    const renderSubmenuItems = () => (
        hasSubmenu && (
            <Collapse id={`${id}-collapser`} in={isExpanded} timeout="auto" unmountOnExit>
                {submenuItems.map((submenuItem, index) => (
                    <CtrlMenuItem
                        classes={classes}
                        icon={submenuItem.icon}
                        id={`${submenuItem.id}-submenu-item`}
                        isSubmenuItem
                        key={index}
                        label={submenuItem.description}
                        permission={submenuItem.permission}
                        selected={submenuItem.url === currentUrl}
                        url={submenuItem.url}
                        userPermissions={userPermissions}
                    />
                ))}
            </Collapse>)
    );

    const handleOnClick = () => {
        if (!hasSubmenu) {
            globalUI.navigateToUrl(url);
        } else if (hasSubmenu && isExpanded) {
            onCollapseItem(name);
        } else if (hasSubmenu && !isExpanded) {
            onExpandItem(name);
        }
    };

    const permissionsRule = (userPermissions.includes(permission) || (!permission && userHasPermissionsOnSubmenuItems));

    return (
        permissionsRule &&
            <div>
                <MenuItem
                    className={!isSubmenuItem ? classes.menuItem : classes.submenuItem}
                    id={id}
                    onClick={handleOnClick}
                    selected={url === currentUrl}
                >
                        <div className={classes.menuItemDirection}>
                            <ListItemIcon>
                                <Tooltip title={label} placement="right">
                                    <Icon
                                        className={classes.menuIcon}
                                        color="inherit"
                                        id={`${id}-icon`}
                                    >
                                        {icon}
                                    </Icon>
                                </Tooltip>
                            </ListItemIcon>
                        </div>
                    <Typography>
                        {label}
                    </Typography>
                    {expandIcon}
                </MenuItem>
                {renderSubmenuItems()}
            </div>
    );
};

CtrlMenuItem.propTypes = {
    classes: PropTypes.object.isRequired,
    currentUrl: PropTypes.string,
    icon: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool,
    isSubmenuItem: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    onCollapseItem: PropTypes.func,
    onExpandItem: PropTypes.func,
    permission: PropTypes.string,
    submenuItems: PropTypes.arrayOf(PropTypes.object),
    url: PropTypes.string,
    userPermissions: PropTypes.arrayOf(PropTypes.string).isRequired
};

CtrlMenuItem.defaultProps = {
    currentUrl: null,
    isExpanded: false,
    isSubmenuItem: false,
    name: null,
    onCollapseItem: null,
    onExpandItem: null,
    permission: null,
    submenuItems: null,
    url: null
};

export default withStyles(styles)(CtrlMenuItem);
