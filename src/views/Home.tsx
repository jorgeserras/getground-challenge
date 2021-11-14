import React, { useCallback } from 'react'
import { ViewProps } from '../types/interfaces'
import { styled } from "@mui/material/styles"
import { useQuery } from '../hooks/query'
import Container from '@mui/material/Container'
import BookShelf from '../components/BookShelf'
import Banner from '../components/Banner'

const StyledContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(10, 2),
    minHeight: '100vh'
}))

const Home: React.FC<ViewProps> = ({ history }) => {
    const query = useQuery()
    const searchQuery = query.get("s") || ""
    const pageQuery = query.get("p") || "1"
    const rowsPerPageQuery = query.get("r") || "10"

    const handleSearch = useCallback((
        searchText: string,
        page: number,
        rowsPerPage: number
    ) => {
        history.push(`/search?s=${searchText}&p=${page}&r=${rowsPerPage}`)
    }, [history])

    return (
        <main>
            <Banner history={history} />
            <StyledContainer maxWidth="lg">
                <BookShelf
                    searchOptions={{
                        searchQuery: searchQuery,
                        pageQuery: pageQuery,
                        rowsPerPageQuery: rowsPerPageQuery
                    }}
                    searchCallBack={handleSearch}
                />
            </StyledContainer>
        </main>
    )
}

export default Home