import { createTheme } from "@mui/material/styles"

export default createTheme({
    palette: {
        primary: {
            main: "#1c444e",
            contrastText: "#cedac8",
            light: "#96ccd9"
        },
        secondary: {
            main: "#e2af74"
        }
    },
    typography: {
        fontWeightMedium: 500,
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
        h1: {
            fontWeight: 700,
            fontSize: "2em",
            marginBottom: "64px",
            fontFamily: "Eczar"
        },
        h2: {
            margin: "16px 0",
            fontSize: "1.5em",
            fontFamily: "Eczar"
        },
        h3: {
            margin: "16px 0",
            fontSize: "1.3em",
            fontFamily: "Eczar"
        },
        body1: {
            fontSize: "1.2em"
        },
        subtitle1: {
            fontSize: "1em"
        },
        button: {
            fontSize: "1.4em",
            lineHeight: "1.75em"
        }
    },
    shape: {
        borderRadius: 6
    },
    spacing: 8,
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