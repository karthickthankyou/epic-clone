import React from 'react'
import { render } from '@testing-library/react'
import Avatar from './Avatar'

describe('Avatar Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Avatar src="" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
