import React from 'react'
import { storiesOf } from '@storybook/react'
import { Pagination } from 'semantic-ui-react'

storiesOf('Pagination', module)
  .add('blue', () => (
    <Pagination
      className="blue"
      totalPages={15}
      defaultActivePage={5}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
    />
  ))
  .add('green', () => (
    <Pagination
      className="green"
      totalPages={15}
      defaultActivePage={5}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
    />
  ))
  .add('pink', () => (
    <Pagination
      className="pink"
      totalPages={15}
      defaultActivePage={5}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
    />
  ))
  .add('with first and last item', () => (
    <Pagination
      className="blue"
      totalPages={15}
      defaultActivePage={5}
      pointing
      secondary
    />
  ))

