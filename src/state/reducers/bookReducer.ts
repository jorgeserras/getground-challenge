import { Dispatch } from 'react';
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { DEPOSIT, WITHDRAW, SET_BOOKS, setBooks } from "../actions"

type actionType = {
    type: string,
    payload: any
};

interface RootState {
    books: number,
    loading: boolean
}

const initialState: RootState = {
    books: 0,
    loading: false
}

export const bookReducer = (state: Object = initialState, action: actionType) => {

    switch (action.type) {
        case DEPOSIT:
            return state + action.payload
        case WITHDRAW:
            return { ...state, ...action.payload }
        default:
            return state
    }

};

export const loadBooks = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch: Dispatch<AnyAction>, getState) => {


}