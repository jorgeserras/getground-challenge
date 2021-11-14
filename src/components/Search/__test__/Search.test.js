import ReactDOM from 'react-dom'
import Search from './../Search'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

// https://stackoverflow.com/questions/43310536/how-to-test-a-textfield-material-ui-element-with-react-jest
// https://stackoverflow.com/questions/63694951/react-testing-library-for-material-ui-text-input
// https://pretagteam.com/question/testing-materialui-textfield-select-component-with-jest

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Search placeholder="placeholder" loading={false} handleSearch={() => null} />, div)
})

it("renders search field correctly", () => {
    const { getByTestId } = render(
        <Search placeholder="placeholder" loading={true} handleSearch={(type, value) => null} />
    )
    expect(getByTestId('loading')).toBeVisible()
    /* Input inside of InputBase */
    const searchInput = getByTestId('input')
    /* Write book inside input */
    fireEvent.change(searchInput, { target: { value: "book" } })
    fireEvent.change(searchInput, { search: { value: "book" } })
    expect(searchInput.value).toBe("book")


    //fireEvent.change(searchInput, { search: { value: "book" } })

    /* const submitBtn = getByTestId('submit')
    submitBtn.dispatchEvent(
        new MouseEvent("click", { bubbles: true })
    ) */


})
