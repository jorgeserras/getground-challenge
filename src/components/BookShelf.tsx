import React, { useEffect, useCallback } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { loadBooks, useActions } from '../state/actions'
import { Grid } from '@mui/material'
import Search from '../components/Search'
import Table from '../components/Table'

const cols = [
    { name: 'Book Title', value: 'book_title' },
    { name: 'Author', value: 'book_author' },
    { name: 'City', value: 'book_publication_city' },
    { name: 'Country', value: 'book_publication_country' },
    { name: 'Year', value: 'book_publication_year' },
    { name: 'Pages', value: 'book_pages' }
]

interface Props {
    searchOptions: {
        searchQuery: string,
        pageQuery: string,
        rowsPerPageQuery: string
    };
    searchCallBack: (
        searchText: string,
        page: number,
        rowsPerPage: number
    ) => void;
}

const BookShelf: React.FC<Props> = ({ searchOptions, searchCallBack }) => {

    const { books, count, loading } = useSelector((state: RootStateOrAny) => state.repository, (prev, next) => prev.loading === next.loading)
    const getRepositoryBooks = useActions(loadBooks)

    const { searchQuery, pageQuery, rowsPerPageQuery } = searchOptions

    const page = parseInt(pageQuery)
    const rowsPerPage = parseInt(rowsPerPageQuery)


    useEffect(() => {
        getRepositoryBooks(searchQuery, page, rowsPerPage)
    }, [getRepositoryBooks, searchQuery, page, rowsPerPage])

    const handleSearch = useCallback((type: 'search' | 'page' | 'rowsPerPage', newValue: string) => {
        switch (type) {
            case 'search':
                return searchCallBack(
                    newValue,
                    1,
                    rowsPerPage
                )
            case 'page':
                return searchCallBack(
                    searchQuery,
                    parseInt(newValue),
                    rowsPerPage
                )
            case 'rowsPerPage':
                return searchCallBack(
                    searchQuery,
                    1,
                    parseInt(newValue)
                )
            default:
                return null
        }
    }, [searchCallBack, searchQuery, rowsPerPage])


    console.log("BookShelf Render")


    return (
        <Grid container rowSpacing={4} justifyContent="center">
            <Grid item>
                <Search
                    placeholder="Search book..."
                    loading={loading}
                    defaultValue={searchQuery}
                    handleSearch={handleSearch}
                />
            </Grid>
            <Grid item xs={12}>
                <Table
                    loading={loading}
                    rows={books}
                    columns={cols}
                    page={page - 1}
                    rowsPerPage={rowsPerPage}
                    totalRows={count}
                    handleChangeOptions={handleSearch}
                />
            </Grid>
        </Grid>
    )
}


export default BookShelf