// @styles
import globals, { dimensions } from '../../../styles/globals';

export default theme => (Object.assign({}, globals(theme), {
    mainMenu: {
    },
    menuPaper: {
        backgroundColor: theme.palette.background.secondary,
        backgroundSize: 'cover',
        borderRight: '1px solid rgba(64, 64, 64)',
        transition: theme.transitions.create(['margin', 'width'], {
            duration: theme.transitions.duration.enteringScreen,
            easing: theme.transitions.easing.easeOut
        }),
        width: dimensions.MAIN_MENU_WIDTH
    },
    menuPaperCollapsed: {
        backgroundSize: 'cover',
        transition: theme.transitions.create(['margin', 'width'], {
            duration: theme.transitions.duration.leavingScreen,
            easing: theme.transitions.easing.sharp
        }),
        width: dimensions.MAIN_MENU_COLLAPSED_WIDTH
    },
    menuItem: {
        paddingTop: 10,
        paddingBottom: 10,
        '&:hover span': {
            color: theme.palette.error.main
        },
        '&:hover': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.error.main
        },
        '&.MuiListItem-root.Mui-selected': {
            backgroundColor: theme.palette.background.paper,
            '& span': {
                color: theme.palette.error.main
            },
            '& .MuiTypography-body1': {
                color: theme.palette.error.main
            }
        }
    },
    menuIcon: {
        marginLeft: 8,
        marginTop: 8
    },
    menuIconSelected: {
        color: 'red',
        marginLeft: 8,
        marginTop: 8
    },
    submenuItem: {
        height: 35,
        paddingLeft: theme.spacing(4)
    }
}));
