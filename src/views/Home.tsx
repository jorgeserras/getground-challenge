import React, { useCallback } from 'react'
import { ViewProps } from '../types/interfaces'
import { styled } from "@mui/material/styles"
import { useQuery } from '../hooks/query'
import { Grid, Container } from '@mui/material'
import BookShelf from '../components/BookShelf'


const GridContainer = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(12, 0)
}))


const Home: React.FC<ViewProps> = ({ history }) => {
    const query = useQuery()
    const searchQuery = query.get("s")
    const handleSearch = useCallback((searchText: string) => {
        history.push(`/search?s=${searchText}`)
    }, [history])

    return (
        <main>
            <Container maxWidth="lg">
                <BookShelf searchQuery={searchQuery} searchCallBack={handleSearch} />



            </Container>
        </main>
    )

}

export default Home