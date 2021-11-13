import { createTheme } from "@mui/material/styles"

export default createTheme({
    palette: {
        primary: {
            main: "#1c444e",
            contrastText: "#96ccd9",
            light: "#cedac8"
        },
        secondary: {
            main: "#e2af74"
        }
    },
    typography: {
        fontWeightMedium: 500,
        fontFamily: [
            'Roboto',
            'Montserrat',
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
        borderRadius: 8
    },
    spacing: 8,
    h1: {
        fontSize: "5em"
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              margin: 0
            }
          }
        }
    }
})