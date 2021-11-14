import React from 'react'
import { styled } from "@mui/material/styles"
import { ViewProps } from '../types/interfaces'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from './Button'

const StyledContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(10, 2),
    background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.primary.contrastText})`,
    '& h1': {
        color: '#fff'
    }
}))


type StateProps = {
    filledStar: boolean;
}

class Banner extends React.Component<ViewProps, StateProps> {

    state: StateProps = {
        filledStar: false
    }

    componentDidMount() {
        //this.getProps()
    }

    handleLink = (searchQuery: string) => {
        const { history } = this.props
        history.push(`/search?s=${searchQuery}&p=1&r=10`)
        /*         this.setState({
                    filledStar: true
                }) */
    }

    render() {
        return (
            <StyledContainer>
                <Grid container spacing={4} textAlign="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h1">
                            Find the best books in our repository
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Button onClick={() => this.handleLink('Ιταλία')} variant="contained" color="secondary">
                            Italian
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Button onClick={() => this.handleLink('Αυστρία')} variant="contained" color="secondary">
                            Austrian
                        </Button>
                    </Grid>
                </Grid>
            </StyledContainer>
        )
    }
}

export default Banner