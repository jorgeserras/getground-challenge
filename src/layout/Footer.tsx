import React from 'react'
import { styled } from "@mui/material/styles"
import { Link } from 'react-router-dom'
import { Grid, Divider } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const StyledLink = styled(Link)(({ theme }) => ({
    /* width: 300, */
    color: theme.palette.primary.main,
    /* '& .MuiSlider-thumb': {
        '&:hover, &.Mui-focusVisible': {
            color: 'red',
        },
        '&.Mui-active': {
            red: 'red',
        },
    }, */
}))


const Footer: React.FC = () => {
    return (
        <footer data-testid="footerTestId">
            <Grid container justifyContent="center" >
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <StyledLink to='/'>
                        <div >GetGround Books</div>
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
                            <Link to='/#'>
                                - Terms & Conditions
                            </Link>
                        </p>
                    </Grid>
                    <Grid item>
                        <p>
                            <Link to='/#'>
                                - Privacy Policy
                            </Link>
                        </p>
                    </Grid>
                </Grid>

            </Grid>
            <Divider />
            <Grid container justifyContent="center">
                <Grid item md={3}>

                </Grid>
                <Grid item xs={12} sm={6} >
                    <div>
                        Copyright &copy; {new Date().getFullYear()} | All rights reserved.
                    </div>
                </Grid>
                <Grid item sm={3} >
                    <div >
                        <a href="/#"
                            target="_blank"
                        >
                            <FacebookIcon color="primary" />
                        </a>
                        <a href="/#"
                            target="_blank"
                        >
                            <InstagramIcon color="primary" />
                        </a>
                        <a href="/#"
                            target="_blank"
                        >
                            <LinkedInIcon color="primary" />
                        </a>
                    </div>
                </Grid>
            </Grid>
        </footer >
    )
}

export default Footer
