import React, { useCallback } from 'react'
import { ViewProps } from '../types/interfaces'
import { useQuery } from '../hooks/query'
import { BooksContainer, ViewContainer } from '../components/Containers'
import { Banner } from '../components/Banner'

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
            <ViewContainer>
                <BooksContainer
                    searchOptions={{
                        searchQuery: searchQuery,
                        pageQuery: pageQuery,
                        rowsPerPageQuery: rowsPerPageQuery
                    }}
                    searchCallBack={handleSearch}
                />
            </ViewContainer>
        </main>
    )
}

export default Home