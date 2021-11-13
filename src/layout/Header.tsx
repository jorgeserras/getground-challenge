import React, { useState } from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { styled } from "@mui/material/styles"
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, AppBarProps, IconButton, Menu, MenuItem, Grid, GridProps } from '@mui/material'

interface Props {
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
    color?: string;
}

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    color: "#fff",
    backgroundColor: theme.palette.primary.main
}))

interface LinkProps {
    variant?: 'dark' | undefined;
}

const StyledLink = styled(Link, {
    shouldForwardProp: (prop) => prop !== "variant"
})<LinkProps>(({ theme, variant }) => ({
    textDecoration: "none",
    color: variant ? theme.palette.primary.main : "#fff",
    '&:hover': {
        color: theme.palette.primary.contrastText
    }
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

const Header: React.FC<Props> = props => {
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
            <StyledLink variant="dark" to='/#'>
                <MenuItem>
                    Books
                </MenuItem>
            </StyledLink>
            <StyledLink variant="dark" to='/#'>
                <MenuItem>
                    Contacts
                </MenuItem>
            </StyledLink>
        </Menu>
    )

    return (
        <>
            <StyledAppBar position="relative">
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={6} sm={3} md={2}>
                        <StyledLink to="/">
                            <h3>GetGround Books</h3>
                        </StyledLink>
                    </Grid>
                    <Grid item sm={7} md={3}>
                        <StyledGrid container alignItems="center" justifyContent="center">
                            <Grid item xs={6}>
                                <StyledLink to="/" >
                                    <h4>Authors</h4>
                                </StyledLink>
                            </Grid>
                            <Grid item xs={6}>
                                <StyledLink to="/" >
                                    <h4>Cities</h4>
                                </StyledLink>
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