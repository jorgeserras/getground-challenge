import React, { useState } from 'react'
import { styled } from "@mui/material/styles"
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, AppBarProps, IconButton, Menu, MenuItem, Grid, GridProps, Typography } from '@mui/material'
import Link from '../components/Link'

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
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
            <Link variant="main" to='/#'>
                <MenuItem>
                    Books
                </MenuItem>
            </Link>
            <Link variant="main" to='/#'>
                <MenuItem>
                    Contacts
                </MenuItem>
            </Link>
        </Menu>
    )

    return (
        <>
            <StyledAppBar position="relative">
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={6} sm={3} md={2}>
                        <Link to="/">
                            <Typography variant="h3">GetGround Books</Typography>
                        </Link>
                    </Grid>
                    <Grid item sm={7} md={3}>
                        <StyledGrid container alignItems="center" justifyContent="center">
                            <Grid item xs={6}>
                                <Link to="/" >
                                    <Typography variant="h3">Authors</Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <Link to="/" >
                                    <Typography variant="h3">Cities</Typography>
                                </Link>
                            </Grid>
                        </StyledGrid>
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                        <StyledMobileGrid container justifyContent="center">
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
                </Grid>
            </StyledAppBar>
            {renderMobileMenu}
        </>
    )
}

export default Header