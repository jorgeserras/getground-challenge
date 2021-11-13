import React, { useEffect, useState, useCallback } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { loadBooks, useActions } from '../state/actions'
import { styled } from "@mui/material/styles"
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
    searchQuery?: string | null;
    searchCallBack: (searchText: string) => void;
}

const BookShelf: React.FC<Props> = ({ searchQuery, searchCallBack }) => {

    const { books, count } = useSelector((state: RootStateOrAny) => state.repository, (prev, next) => prev.loading === next.loading)
    const getRepositoryBooks = useActions(loadBooks)


    useEffect(() => {
        getRepositoryBooks(searchQuery)
    }, [getRepositoryBooks, searchQuery])

    const handleSearch = useCallback((e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            search: { value: string }
        }
        const search = target.search.value
        searchCallBack(search)

    }, [searchCallBack])

    console.log("BookShelf Render")


    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={6} lg={3}>
                Find the best books
            </Grid>
            <Grid item xs={6} lg={3}>
                <Search text="Search book" defaultValue={searchQuery} handleSearch={handleSearch} />
            </Grid>
            <Table rows={books} columns={cols} totalRows={count} />
        </Grid>
    )
}


export default BookShelf