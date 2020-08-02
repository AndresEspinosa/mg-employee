import { createMuiTheme } from '@material-ui/core/styles';

const color = {
    background: '#2f2f2f',
    backgroundCard: '#262626',
    backgroundHover: 'rgba(0, 0, 0, 0.1)',
    backgroundPanel: '#1D1D1D',
    black: '#000000',
    divider: '#05070A',
    error: '#B0322A',
    icon: '#FFFFFF',
    mainBorder: '#3B3B3B',
    onBackground: '#1E1E1E',
    onError: '#D32F2F',
    onIcon: '#FFFFFF',
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    onSurface: '#212121',
    outlinedContainer: 'rgba(255, 255, 255, 0.12)',
    primary: '#0CB8E5',
    primaryDark: '#0880A0',
    primaryLight: '#3CC6EA',
    secondary: '#B46CEA',
    secondaryDark: '#272727',
    secondaryLight: '#CDCDCD',
    surface: '#212121',
    surfaceSecondary: '#292929',
    textDisabled: 'rgba(255, 255, 255, 0.12)',
    textHighEmphasis: 'rgba(255, 255, 255, 1)',
    textHint: 'rgba(255, 255, 255, 0.38)',
    textMediumEmphasis: 'rgba(255, 255, 255, 0.5)',
    textSubtitle: '#7E7E7E',
    textTitle: '#6C6C6C',
    textUnprogress: 'rgba(126, 126, 126, 0.25)',
    white: '#FFFFFF'
};

export const theme = createMuiTheme({
    overrides: {
        MuiAvatar: {
            colorDefault: {
                backgroundColor: color.secondary,
                color: color.textHighEmphasis
            }
        },
        MuiBadge: {
            colorSecondary: {
                backgroundColor: color.secondary,
                color: color.textHighEmphasis
            }
        },
        MuiFormHelperText: {
            root: {
                color: color.error
            }
        },
        MuiIcon: {
            root: {
                color: color.icon
            }
        },
        MuiIconButton: {
            colorPrimary: {
                color: color.textHighEmphasis,
                '&:hover': {
                    backgroundColor: color.backgroundHover
                }
            }
        },
        MuiInput: {
            underline: {
                '&:after': {
                    borderBottom: `2px solid ${color.primary}`
                },
                '&:before': {
                    borderBottom: `2px solid ${color.background}`
                }
            }
        },
        MuiMenuItem: {
            root: {
                '&:hover': {
                    background: color.backgroundHover
                }
            }
        },
        MuiTooltip: {
            tooltip: {
                fontSize: 13
            }
        }
    },
    palette: {
        action: {
            active: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: color.surface,
            hover: color.backgroundHover,
            hoverOpacity: 0.08
        },
        background: {
            card: color.backgroundCard,
            default: color.background,
            panel: color.backgroundPanel,
            paper: color.surface,
            paperSecondary: color.surfaceSecondary,
            secondary: color.onBackground
        },
        border: {
            main: color.mainBorder
        },
        common: {
            black: color.black,
            white: color.white
        },
        divider: color.divider,
        error: {
            main: color.error
        },
        primary: {
            contrastText: color.onPrimary,
            dark: color.primaryDark,
            light: color.primaryLight,
            main: color.error
        },
        secondary: {
            contrastText: color.onSecondary,
            dark: color.secondaryDark,
            light: color.secondaryLight,
            main: color.secondary
        },
        text: {
            disabled: color.textDisabled,
            hint: color.textHint,
            primary: color.textHighEmphasis,
            secondary: color.textMediumEmphasis,
            subtitle: color.textSubtitle,
            title: color.textTitle,
            unprogress: color.textUnprogress
        }
    }
});
