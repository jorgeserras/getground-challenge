import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from "@mui/material/styles"

interface LinkProps {
    to: string;
    variant?: 'main' | 'light' | undefined;
}

const StyledLink = styled(Link, {
    shouldForwardProp: (prop) => prop !== "variant"
})<LinkProps>(({ theme, variant }) => ({
    textDecoration: 'none',
    color: variant ? theme.palette.primary[variant] : "#fff",
    '&:hover': {
        color: theme.palette.primary.contrastText
    }
}))

const CustomLink: React.FC<LinkProps> = ({ children, to, variant }) => {
    return (
        <StyledLink to={to} variant={variant}>
            {children}
        </StyledLink>
    )

}

export default CustomLink