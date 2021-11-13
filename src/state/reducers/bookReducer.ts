import { Dispatch } from 'react';
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { Book } from '../../types/interfaces'
import { DEPOSIT, WITHDRAW, SET_BOOKS } from "../actions"

type actionType = {
    type: string,
    payload: any
};

interface RootState {
    books: Book[],
    loading: boolean
}

const initialState: RootState = {
    books: [],
    loading: false
}

export const bookReducer = (state: Object = initialState, action: actionType) => {

    switch (action.type) {
        case SET_BOOKS:
            return { ...state, books: action.payload }
        case DEPOSIT:
            return { ...state, books: action.payload }
        case WITHDRAW:
            return { ...state, ...action.payload }
        default:
            return state
    }

};

export const loadBooks = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch: Dispatch<AnyAction>, getState) => {


}