import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { styled } from '@mui/material/styles'

const StyledContainer = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh'
}))

interface Props {
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
}

const AppContainer: React.FC<Props> = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default AppContainer