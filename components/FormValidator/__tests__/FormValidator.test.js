import { shallow } from 'enzyme'
import React from 'react'
import { Form } from 'semantic-ui-react'

import FormValidator from '../'

const buildWrapper = props =>
  shallow(
    <FormValidator
      className="test-class"
      onSubmit={jest.fn()}
      onSubmitSuccess={jest.fn()}
      validate={({ age, name }) => {
        const errors = {}
        if (!name) {
          errors.name = 'Name is required'
        }
        if (!Number.isInteger(age)) {
          errors.age = 'Age should be an integer'
        }
        return errors
      }}
      value={{
        age: 29
      }}
      {...props}>
      Test Children Content
    </FormValidator>
  )

describe('FormValidator', () => {
  it('should render form and context provider with no errors at first', () => {
    expect(buildWrapper()).toMatchSnapshot()
  })

  describe('when the form is submitted', () => {
    let wrapper

    beforeEach(() => {
      wrapper = buildWrapper()
      wrapper.find(Form).simulate('submit')
    })

    it('should render a context provider with the validation errors', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call "onSubmit" prop', () => {
      const {
        props: { onSubmit }
      } = wrapper.instance()
      expect(onSubmit).toHaveBeenCalled()
    })

    describe('when the "value" changes', () => {
      it('should clear existing errors that were resolved', () => {
        wrapper.setProps({
          value: { name: 'Maira', age: 29 }
        })
        expect(wrapper).toMatchSnapshot()
      })

      it('should not show new errors', () => {
        wrapper.setProps({ value: { age: 'String age?' } })
        expect(wrapper).toMatchSnapshot()
      })
    })
  })
})
