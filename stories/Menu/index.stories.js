import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { storiesOf } from '@storybook/react'

const items = [
  {
    content: 'TAB #1'
  },
  {
    content: 'TAB #2'
  },
  {
    content: 'TAB #3'
  }
];

storiesOf('Menu', module)
  .add('vertical', () => {
    const items = [
      {
        content: 'Header',
        header: true
      },
      {
        content: 'Home',
        icon: 'home'
      },
      {
        content: 'Places',
        icon: 'place'
      },
      {
        content: 'Reports',
        icon: 'assignment'
      }
    ]
    return (
      <React.Fragment>
        <Menu className="blue" vertical items={items} />
        <Menu className="pink" vertical items={items} />
        <Menu className="green" vertical items={items} />
      </React.Fragment>
    )
  })
  .add('vertical icons only', () => {
    const items = [
      {
        icon: 'home'
      },
      {
        icon: 'place'
      },
      {
        icon: 'assignment'
      }
    ]
    return (
      <React.Fragment>
        <Menu className="blue" vertical icon items={items} />
        <br />
        <Menu className="pink" vertical icon items={items} />
        <br />
        <Menu className="green" vertical icon items={items} />
      </React.Fragment>
    )
  })
  .add('basic pointing ', () => <Menu pointing items={items} />)
  .add('secondary pointing ', () => <Menu secondary pointing items={items} />)
  .add('basic pointing blue', () => (
    <Menu color="blue" pointing items={items} />
  ))
  .add('secondary pointing blue', () => (
    <Menu secondary pointing color="blue" items={items} />
  ))
  .add('basic pointing pink', () => (
    <Menu pointing color="pink" items={items} />
  ))
  .add('secondary pointing  pink', () => (
    <Menu secondary pointing color="pink" items={items} />
  ))
  .add('basic pointing green', () => (
    <Menu color="green" pointing items={items} />
  ))
  .add('secondary pointing green', () => (
    <Menu secondary pointing color="green" items={items} />
  ));
