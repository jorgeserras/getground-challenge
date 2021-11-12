
import React from 'react'
export const SET_BOOKS = "SET_BOOKS"
export const DEPOSIT = "DEPOSIT"
export const WITHDRAW = "WITHDRAW"

type actionType = {
    type: string,
    payload: any
};

export const depositBook = (amount: number) => {

    return (dispatch: React.Dispatch<actionType>) => {
        dispatch({
            type: DEPOSIT,
            payload: amount
        })
    };

};

export const withdrawBook = (amount: number) => {

    return (dispatch: React.Dispatch<actionType>) => {
        dispatch({
            type: WITHDRAW,
            payload: amount
        })
    };

};

export const setBooks = (book: number) => {

    return (dispatch: React.Dispatch<actionType>) => {
        dispatch({
            type: SET_BOOKS,
            payload: book
        })
    };

};