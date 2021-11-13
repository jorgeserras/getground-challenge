import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'


const Home: React.FC = () => {

    useEffect(() => {
        axios.post('/api/books', {
            page: 1,
            itemsPerPage: 9999,
            filters: []
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err.response.data.message))

    }, [])

    return (
        <main>
            Home
        </main>
    )

}

export default Home