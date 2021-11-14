import React, { useState } from 'react'
import { styled } from "@mui/material/styles"
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, AppBarProps, IconButton, Menu, MenuItem, Grid, GridProps, Typography } from '@mui/material'
import { Link } from '../components/Buttons'

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    padding: theme.spacing(0, 2),
    color: "#fff",
    backgroundColor: theme.palette.primary.main
}))

const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        display: "none"
    }
}))

const StyledMobileGrid = styled(Grid)<GridProps>(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const Header: React.FC = () => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

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
            <Link variant="main" to='/search?s=Ιταλία&p=1&r=10'>
                <MenuItem>
                    Italy
                </MenuItem>
            </Link>
            <Link variant="main" to='/search?s=Ελλάδα&p=1&r=10'>
                <MenuItem>
                    Greece
                </MenuItem>
            </Link>
            <Link variant="main" to='/search?s=Γερμανία&p=1&r=10'>
                <MenuItem>
                    Germany
                </MenuItem>
            </Link>
        </Menu>
    )

    return (
        <>
            <StyledAppBar position="relative">
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={6} sm={4} md={3}>
                        <Link to="/">
                            <Typography variant="h3">GetGround Books</Typography>
                        </Link>
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <StyledGrid container alignItems="center" justifyContent="center">
                            <Grid item textAlign="center" xs={4}>
                                <Link to="/search?s=Ιταλία&p=1&r=10" >
                                    <Typography variant="h4">Italy</Typography>
                                </Link>
                            </Grid>
                            <Grid item textAlign="center" xs={4}>
                                <Link to="/search?s=Ελλάδα&p=1&r=10" >
                                    <Typography variant="h4">Greece</Typography>
                                </Link>
                            </Grid>
                            <Grid item textAlign="center" xs={4}>
                                <Link to="/search?s=Γερμανία&p=1&r=10" >
                                    <Typography variant="h4">Germany</Typography>
                                </Link>
                            </Grid>
                        </StyledGrid>
                    </Grid>
                    <StyledMobileGrid item textAlign="right" xs={6}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuIcon color="secondary" />
                        </IconButton>
                    </StyledMobileGrid>
                </Grid>
            </StyledAppBar>
            {renderMobileMenu}
        </>
    )
}

export default Header