import React from 'react'
import { storiesOf } from '@storybook/react'

import { Layout } from '../../components'

storiesOf('Layout', module)
  .add('basic', () => (
    <Layout />
  ))
