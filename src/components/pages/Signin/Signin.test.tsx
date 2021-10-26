import React from 'react'
import { render } from '@testing-library/react'
import Signin from './Signin'

describe('Signin Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Signin />)
    expect(asFragment()).toMatchSnapshot()
  })
})
