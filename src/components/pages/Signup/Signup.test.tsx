import React from 'react'
import { render } from '@testing-library/react'
import Signup from './Signup'

describe('Signup Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Signup />)
    expect(asFragment()).toMatchSnapshot()
  })
})
