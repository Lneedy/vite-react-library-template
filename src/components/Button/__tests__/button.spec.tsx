import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import Button from '../index'

describe('Button Test', () => {
  it('should render label', () => {
    const label = 'test'
    const {getByText} = render(<Button label={label} size="small" primary={true} />)
    expect(getByText(label)).toBeInTheDocument()
  })

  it('should render className', () => {
    const label = 'test'
    const {getByRole} = render(<Button label={label} size="small" primary={true} />)
    expect(getByRole('button')).toHaveClass('demo-button--small')
  })

  it('handler when clicked', () => {
    const handleClick = jest.fn()
    const label = 'test'
    const {getByText} = render(<Button label={label} size="small" primary={true} onClick={handleClick} />)

    fireEvent.click(getByText(label))
    expect(handleClick).toHaveBeenCalledTimes(1)

  })

  it('component unmount', () => {
    const label = 'test'
    const {unmount} = render(<Button label={label} size="small" primary={true} />)
    unmount()
    expect(screen.queryByText(label)).toBeNull()
  })

})