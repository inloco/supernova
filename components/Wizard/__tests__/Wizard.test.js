import { shallow } from 'enzyme'
import React from 'react'

import Wizard from '../'

const buildWrapper = props => shallow(<Wizard>Test Children Content</Wizard>)

describe('Wizard', () => {
  it('should render wizard with given content', () => {
    expect(buildWrapper()).toMatchSnapshot()
  })
})
