import React from 'react'
import { styled } from "@mui/material/styles"
import { ViewProps } from '../types/interfaces'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from './Button'

const StyledContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(10, 0),
    background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.primary.contrastText})`,
    '& h1': {
        color: '#fff'
    }
}))

const Banner: React.FC<ViewProps> = ({ history }) => {
    return (
        <StyledContainer>
            <Grid container textAlign="center" justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h1">
                        Find the best books in our repository
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="secondary">
                        Italian
                    </Button> {/* Ιταλία */}
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="secondary">
                        Austrian
                    </Button> {/* Αυστρία */}
                </Grid>
            </Grid>
        </StyledContainer>
    )

}

export default Banner