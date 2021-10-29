import React from 'react'
import { render } from '@testing-library/react'
import Text from './Text'

describe('Text Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Text>Hello world</Text>)
    expect(asFragment()).toMatchSnapshot()
  })
})
