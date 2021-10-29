import React from 'react'
import { render } from '@testing-library/react'
import Heading from './Heading'

describe('Heading Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Heading>Hello world</Heading>)
    expect(asFragment()).toMatchSnapshot()
  })
})
