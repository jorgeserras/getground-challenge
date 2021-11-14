import { RootState } from '../../types/interfaces'
import { DEPOSIT, SET_BOOKS, SET_LOADING, SET_PAGE, SET_ROWS_PAGE } from "../actions"

type actionType = {
    type: string,
    payload: any
}

const initialState: RootState = {
    books: [],
    count: 0,
    page: 1,
    rowsPerPage: 10,
    loading: false
}

export const bookReducer = (state: RootState = initialState, action: actionType) => {

    //console.log("bookReducer", action.type)
    switch (action.type) {
        case SET_BOOKS:
            const { books, count } = action.payload
            return { ...state, books: books, count: count }
        case DEPOSIT:
            return { ...state, books: action.payload }
        case SET_LOADING:
            return { ...state, loading: action.payload }
        case SET_PAGE:
            return { ...state, page: action.payload }
        case SET_ROWS_PAGE:
            return { ...state, rowsPerPage: action.payload }
        default:
            return state
    }

}