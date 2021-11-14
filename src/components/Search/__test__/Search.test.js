import ReactDOM from 'react-dom'
import Search from './../Search'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Search placeholder="placeholder" loading={false} handleSearch={() => null} />, div)
})

it("renders search field correctly", () => {
    const { getByTestId } = render(
        <Search placeholder="placeholder" loading={true} handleSearch={() => null} />
    )

})
