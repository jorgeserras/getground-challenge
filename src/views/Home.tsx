import React, { useState } from 'react'
import { ViewProps } from '../types/interfaces'
import { styled } from "@mui/material/styles"
import { useQuery } from '../hooks/query'
import { Grid, Container } from '@mui/material'
import BookShelf from '../components/BookShelf'


const GridContainer = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(12, 0)
}))


const Home: React.FC<ViewProps> = () => {

    const query = useQuery()

    console.log(query.get("q"))

    return (
        <main>
            <Container maxWidth="lg">
                <BookShelf />



            </Container>
        </main>
    )

}

export default Home