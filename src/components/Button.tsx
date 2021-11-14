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
    onClick: () => void;
}

const CustomButton: React.FC<Props> = ({ children, variant, color, onClick }) => {
    return (
        <StyledButton variant={variant} color={color} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default CustomButton