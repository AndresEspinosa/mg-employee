// @scripts
import globals from '../../styles/globals';

export default theme => (Object.assign({}, globals(theme), {
    loginPage: {
        backgroundColor: theme.palette.background.default,
        height: '100vh'
    },
    loginPageLogo: {
        position: 'absolute',
        margin: 30
    },
    form: {
        left: '50%',
        maxWidth: 400,
        position: 'relative',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    formTitle: {
        color: theme.palette.common.white,
        fontFamily: 'GraphikRegularWeb',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'normal',
        marginBottom: 20,
        textAlign: 'center'
    },
    formTextField: {
        '& .MuiFilledInput-root': {
            backgroundColor: 'rgba(126, 126, 126, 0.5)'
        },
        '& .MuiFilledInput-input': {
            padding: '10px 12px 10px'
        },
        '& .MuiIcon-root': {
            color: '#C4C4C4'
        },
        '& .MuiFilledInput-underline:after': {
            borderBottom: '2px solid rgba(126, 126, 126, 0.5)'
        }
    },
    formButtons: {
        textAlign: 'center'
    },
    formButton: {
        backgroundColor: '#B0322A',
        color: '#FFFFFF',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: '#E5463D'
        }
    }
}));
