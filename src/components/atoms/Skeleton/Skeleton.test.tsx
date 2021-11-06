import React from 'react'
import { render } from '@testing-library/react'
import Skeleton from './Skeleton'

describe('Skeleton Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Skeleton />)
    expect(asFragment()).toMatchSnapshot()
  })
})
