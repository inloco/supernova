import React from 'react'
import { Menu } from 'semantic-ui-react'
import { storiesOf } from '@storybook/react'

storiesOf('Menu/Vertical', module)
  .add('basic', () => {
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
  .add('icons only', () => {
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
  .add('submenus', () => (
    <Menu className="blue" vertical>
      <Menu.Item link content="Home" icon="home" active />
      <Menu.Item link content="Places" icon="place" />
      <Menu.Item link content="Reports" icon="assignment" />
    </Menu>
  ))
