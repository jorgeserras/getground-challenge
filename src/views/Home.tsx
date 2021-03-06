import React, { useCallback } from 'react'
import { ViewProps } from '../types/interfaces'
import { BooksContainer, ViewContainer } from '../components/Containers'
import { Banner } from '../components/Banner'

const Home: React.FC<ViewProps> = ({ history }) => {

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
                        searchQuery: '',
                        pageQuery: '1',
                        rowsPerPageQuery: '10'
                    }}
                    searchCallBack={handleSearch}
                />
            </ViewContainer>
        </main>
    )
}

export default Home