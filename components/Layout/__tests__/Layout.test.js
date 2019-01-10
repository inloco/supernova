import { shallow } from 'enzyme'
import React from 'react'

import Layout from '../Layout'

const buildWrapper = props => shallow(<Layout>Test Children Content</Layout>)

describe('Layout', () => {
  it('should render context provider with given content', () => {
    expect(buildWrapper()).toMatchSnapshot()
  })
})
