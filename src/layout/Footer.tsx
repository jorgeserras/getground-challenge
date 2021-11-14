import React from 'react'
import { styled } from "@mui/material/styles"
import Link from '../components/Link'
import { Grid, Divider, Typography } from "@mui/material"

const StyledFooter = styled("footer")(({ theme }) => ({
    color: "#fff",
    padding: '32px',
    backgroundColor: theme.palette.primary.main
}))

const StyledDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    margin: '16px 0'
}))

const Footer: React.FC = () => {
    return (
        <StyledFooter data-testid="footerTestId">
            <Grid container justifyContent="center" >
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Typography variant="h2">
                        <Link to='/'>
                            GetGround Books
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <Typography variant="h3">
                        Search
                    </Typography>
                    <Grid item>
                        <Link to='/#' variant="light">
                            - Italian books
                        </Link>
                    </Grid>
                    <Grid item >
                        <Link to='/#' variant="light">
                            - Austrian books
                        </Link>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <Typography variant="h3">
                        Legal
                    </Typography>
                    <Grid item>
                        <Link to='/#' variant="light">
                            - Terms & Conditions
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to='/#' variant="light">
                            - Privacy Policy
                        </Link>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    <StyledDivider />
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Grid item>
                    Copyright &copy; {new Date().getFullYear()} | All rights reserved.
                </Grid>
            </Grid>
        </StyledFooter >
    )
}

export default Footer
