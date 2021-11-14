import ReactDOM from 'react-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Search from './../Search'

afterEach(cleanup)

describe('test the search render', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        ReactDOM.render(<Search placeholder="placeholder" loading={false} handleSearch={() => null} />, div)
    })

    it("displays loading", () => {
        const div = document.createElement("div")
        const { getByTestId } = render(
            <Search placeholder="placeholder" loading={true} handleSearch={(type, value) => {}} />
        )
        expect(getByTestId('loading')).toBeVisible()
    })
})

describe('test the search functionality', () => {
    it("changing input value", async () => {
        const { getByTestId } = render(
            <Search placeholder="placeholder" defaultValue='getground' loading={false} handleSearch={(type, value) => console.log(type, value)} />
        )
        /* Input inside of InputBase */
        const searchInput = await getByTestId('input')
        expect(searchInput.value).toBe("getground")
        /* Write "book" inside input, replacing "getground" */
        fireEvent.change(searchInput, { target: { value: "book" } })
        expect(searchInput.value).toBe("book")

        const clearBtn = await getByTestId('clear')
        clearBtn.dispatchEvent(
            new MouseEvent("click", { bubbles: true })
        )

    })
})