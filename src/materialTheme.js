import { createTheme } from "@mui/material/styles"

export default createTheme({
    palette: {
        primary: {
            main: "#4AD295"
        },
        secondary: {
            main: "#e23a1e"
        },
        alternative: {
            main: "#9221f3"
        }
    },
    typography: {
        fontWeightMedium: 500,
        fontFamily: [
            'Roboto',
            'Montserrat',
            'Camphor',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'sans-serif',
        ].join(','),
        body1: {
            fontSize: "1.5em"
        },
        subtitle1: {
            fontSize: "1.3em"
        },
        button: {
            fontSize: "1.6em",
            lineHeight: "1.75em"
        }
    },
    shape: {
        borderRadius: 5
    },
    h1: {
        fontSize: "5em"
    },
    // overrides global material components styles
    overrides: {
        MuiToolbar: {
            /* gutters: {
                paddingLeft: '32px',
                paddingRight: '32px'
            } */
        },
        MuiCard: {
            root: {
                position: 'relative',
                width: '100%'
            }
        },
        MuiFormLabel: {
            root: {
                fontSize: '1.2em'
            }
        },
        MuiTableCell: {
            head: {
                lineHeight: '1em'
            }
        },
        MuiCardMedia: {
            root: {
                backgroundSize: 'contain'
            },
            img: {
                objectFit: 'contain'
            }
        },
        MuiCardActions: {
            root: {
                padding: '16px'
            }
        },
        MuiGrid: {},
        MuiPaper: {
            rounded: {
                borderRadius: "8px"
            }
        },
        MuiAppBar: {
            colorTransparent: {
                boxShadow: 'none'
            }
        },
        MuiAvatar: {
            img: {
                objectFit: 'contain'
            }
        },
        MuiRating: {
            root: {
                color: '#4AD295'
            }
        },
        MuiDialog: {
            paper: {
                boxShadow: '0 -40px 100px, 0 0 2px, 0 0 10em #05ffa1, 0 0 0.5em #05ffa1'
            }
        },
        MuiTextField: {
            root: {
                width: '100%'
            }
        },
        MuiButton: {
            root: {
                backgroundColor: "white",
                boxShadow: "0px 3px 4px rgba(0,0,0,0.2)",
                margin: ".4em 0 .4em 0",
                padding: ".4em .8em",
                textTransform: 'unset',
                fontSize: '1em',
                //boxShadow: '0 14px 26px -12px #4AD295, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 10px 12px -7px rgba(54, 244, 191, 0.3)'
                //maxWidth: 304
            },
            containedPrimary: {
                color: '#fff',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                '&:hover': {
                    transform: 'translateY(-1px)',
                    backgroundColor: "#461E52",
                    boxShadow: '0 14px 26px -12px #4ad295, 0 4px 23px 0px rgb(0 0 0 / 12%), 0 10px 12px -7px rgb(54 244 191 / 30%)'
                }
            },
            outlinedPrimary: {
                color: '#fff',
                backgroundColor: "#B967FF",
                boxShadow: '0 0px 26px 6px #B967FF, 0 0px 23px 6px rgb(0 0 0 / 12%), 0 0px 12px 6px rgb(54 244 191 / 30%)',
                border: 'unset',
                //letterSpacing: '4px',
                //textTransform: 'uppercase',
                //boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                '&:hover': {
                    border: 'unset',
                    background: '#03e9f4',
                    color: '#050801',
                    boxShadow: '0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4',
                    //WebkitBoxReflect: 'below 1px linear-gradient(transparent, #0005)',
                    backgroundColor: '#03e9f4'
                }
            }
        }
    }
})
