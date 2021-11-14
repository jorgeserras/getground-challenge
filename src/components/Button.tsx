import React from 'react'
import { styled } from '@mui/material/styles'
import { Button, ButtonProps } from '@mui/material'

const StyledButton = styled(Button)<ButtonProps>(() => ({
    boxShadow: "0px 3px 4px rgba(0,0,0,0.3)",
    padding: ".4em .8em",
    textTransform: 'unset'
}))

interface Props {
    children: string;
    variant: "outlined" | "contained";
    color: "primary" | "secondary";
}

const CustomButton: React.FC<Props> = ({ children, variant, color }) => {
    return (
        <StyledButton variant={variant} color={color}>
            {children}
        </StyledButton>
    )
}

export default CustomButton