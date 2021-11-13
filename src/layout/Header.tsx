import React, { useState } from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { styled } from "@mui/material/styles"
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Grid } from '@mui/material'

interface Props {
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
    color?: string;
}

/* const useStyles = makeStyles<Theme, Props>(theme => createStyles({
    class: {
        color: ({ color }) => color, // props.color
        margin: "0 auto 16px"
    }
})) */

const Header: React.FC<Props> = props => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
    /* const classes = useStyles(props) */


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const mobileMenuId = 'menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Link to='/#'>
                <MenuItem>
                    Books
                </MenuItem>
            </Link>
            <Link to='/#'>
                <MenuItem>
                    Contacts
                </MenuItem>
            </Link>
        </Menu>
    )

    return (
        <>
            <AppBar color="transparent">
                <Toolbar >
                    <Grid container alignItems="center">
                        <Grid item xs={6} sm={3} md={3}>
                            <Link to="/">
                                <h2>GetGround Books</h2>
                            </Link>
                        </Grid>
                        <Grid item sm={7} md={4} lg={3}>
                            <Grid container alignItems="center" justifyContent="center">
                                <Grid item xs={3}>
                                    <Link to="/" >
                                        <h4>Authors</h4>
                                    </Link>
                                </Grid>
                                <Grid item xs={3}>
                                    <Link to="/" >
                                        <h4>Cities</h4>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={3} lg={3}>
                            {/*  */}
                        </Grid>
                        <Grid item xs={6} sm={2} md={2}>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <IconButton
                                        aria-label="show more"
                                        aria-controls={mobileMenuId}
                                        aria-haspopup="true"
                                        onClick={handleMobileMenuOpen}
                                        color="inherit"
                                    >
                                        <MenuIcon color="primary" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </>
    )
}

export default Header