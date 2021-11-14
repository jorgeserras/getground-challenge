import React from 'react'
import axios from 'axios'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../types/interfaces'
import useActions from './useActions'
export const SET_BOOKS = "SET_BOOKS"
export const DEPOSIT = "DEPOSIT"
export const SET_LOADING = "SET_LOADING"
export const SET_ROWS_PAGE = "SET_ROWS_PAGE"
export const SET_PAGE = "SET_PAGE"


type actionType = {
    type: string,
    payload: any
}

export const depositBooks = (amount: number) => {

    return (dispatch: React.Dispatch<actionType>) => {
        dispatch({
            type: DEPOSIT,
            payload: amount
        })
    }

}

export const setBooks = (books: number) => {

    return (dispatch: React.Dispatch<actionType>) => {
        dispatch({
            type: SET_BOOKS,
            payload: books
        })
    }

}

export const setPage = (page: number) => {

    return (dispatch: React.Dispatch<actionType>) => {
        dispatch({
            type: SET_PAGE,
            payload: page
        })
    }

}

export const setRowsPerPage = (rowsPerPage: number) => {

    return (dispatch: React.Dispatch<actionType>) => {
        dispatch({
            type: SET_ROWS_PAGE,
            payload: rowsPerPage
        })
    }

}

export const toggleLoading = (loading: boolean) => {

    return (dispatch: React.Dispatch<actionType>) => {
        dispatch({
            type: SET_LOADING,
            payload: loading
        })
    }

}

export const loadBooks = (search?: string, page: number = 1, itemsPerPage: number = 9999): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch: React.Dispatch<AnyAction>, getState) => {
    dispatch({
        type: SET_LOADING,
        payload: true
    })
    axios.post('/api/books', {
        page: page,
        itemsPerPage: itemsPerPage,
        filters: search ? [{ type: "all", values: [search] }] : []
    })
        .then(res => {
            const { books, count } = res.data
            dispatch({
                type: SET_BOOKS,
                payload: {
                    books: books,
                    count: count
                }
            })
        })
        .catch(err => console.log(err.response.data.message))
        .then(() => dispatch({
            type: SET_LOADING,
            payload: false
        }))
}


export { useActions }