import React, { useEffect } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { depositBooks, useActions } from '../state/actions'
import axios from 'axios'
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

const BookShelf: React.FC = () => {

    const { books } = useSelector((state: RootStateOrAny) => state.repository)
    //const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)

    const setRepositoryBooks = useActions(depositBooks)

    const [bookCount, setBookCount] = React.useState<number>(0)


    useEffect(() => {
        axios.post('/api/books', {
            page: 1,
            itemsPerPage: 9999,
            filters: []
        })
            .then(res => {
                const { books, count } = res.data
                setBookCount(count)
                setRepositoryBooks(books)
            })
            .catch(err => console.log(err.response.data.message))

    }, [])

    const handleSearch = (e: React.SyntheticEvent) => {
        e.preventDefault()

        const target = e.target as typeof e.target & {
            search: { value: string }
        }

        const search = target.search.value

        console.log(search)

        if (!search)
            console.log("Nothing searched")

    }



    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={6} lg={3}>
                Find the best books
            </Grid>
            <Grid item xs={6} lg={3}>
                <Search text="Search book" handleSearch={handleSearch} />
            </Grid>
            <Table rows={books} columns={cols} totalRows={bookCount} />
        </Grid>
    )
}


export default BookShelf