import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { Container } from '@mui/material'

const StyledContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(10, 2),
    /* minHeight: '100vh' */
}))

interface Props {
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
}

const ViewContainer: React.FC<Props> = ({ children }) => {
    return (
        <StyledContainer maxWidth="lg">
            {children}
        </StyledContainer>
    )
}

export default ViewContainer