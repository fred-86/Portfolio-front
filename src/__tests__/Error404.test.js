import { render, screen } from '@testing-library/react'
import React from 'react'
import { Error404 } from '../Pages/Error404'

describe('Error Page without crash', () => {
    it('should render the Error component', () => {
        render(<Error404 />)
        const titleElement = screen.getByTestId('title-error')
        expect(titleElement).toBeInTheDocument()
    })
})
