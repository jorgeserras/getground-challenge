import React from 'react'
import { styled } from "@mui/material/styles"
import { Link } from 'react-router-dom'
import { Grid, Divider } from "@mui/material"

const StyledFooter = styled("footer")(({ theme }) => ({
    color: "#fff",
    padding: '32px',
    backgroundColor: theme.palette.primary.main
}))

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
    '&:hover' : {
        color: theme.palette.primary.light
    }
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
                    <StyledLink to='/'>
                        <h4>GetGround Books</h4>
                    </StyledLink>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <h4>
                        Search
                    </h4>
                    <Grid item>
                        <p>
                            <StyledLink to='/'>
                                - By author
                            </StyledLink>
                        </p>
                    </Grid>
                    <Grid item >
                        <p>
                            <StyledLink to='/'>
                                - By city
                            </StyledLink>
                        </p>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <h4>
                        Legal
                    </h4>
                    <Grid item>
                        <p>
                            <StyledLink to='/#'>
                                - Terms & Conditions
                            </StyledLink>
                        </p>
                    </Grid>
                    <Grid item>
                        <p>
                            <StyledLink to='/#'>
                                - Privacy Policy
                            </StyledLink>
                        </p>
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
