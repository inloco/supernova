import React from 'react'
import { Accordion, Icon, Menu } from 'semantic-ui-react'
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

storiesOf('Menu/Vertical/SubMenus/Internal', module)
  .add('closed', () => (
    <Menu as={Accordion} className="blue" vertical>
      <Menu.Item link content="Home" icon="home" active />
      <Menu.Item link>
        <Accordion.Title>
          <Icon name="place" />
          <span>Places</span>
          <Icon name="keyboard arrow down" />
        </Accordion.Title>
        <Accordion.Content as={Menu.Menu}>
          <Menu.Item link content="Analytics" icon="timeline" />
          <Menu.Item link content="Lists" icon="view list" />
        </Accordion.Content>
      </Menu.Item>
      <Menu.Item link content="Reports" icon="assignment" />
    </Menu>
  ))
  .add('open', () => (
    <Menu as={Accordion} className="blue" vertical>
      <Menu.Item link content="Home" icon="home" active />
      <Menu.Item link>
        <Accordion.Title active>
          <Icon name="place" />
          <span>Places</span>
          <Icon name="keyboard arrow down" />
        </Accordion.Title>
        <Accordion.Content as={Menu.Menu} active>
          <Menu.Item link content="Analytics" icon="timeline" />
          <Menu.Item link content="Lists" icon="view list" />
        </Accordion.Content>
      </Menu.Item>
      <Menu.Item link content="Reports" icon="assignment" />
    </Menu>
  ))
  .add('open selected', () => (
    <Menu as={Accordion} className="blue" vertical>
      <Menu.Item link content="Home" icon="home" />
      <Menu.Item link active>
        <Accordion.Title active>
          <Icon name="place" />
          <span>Places</span>
          <Icon name="keyboard arrow down" />
        </Accordion.Title>
        <Accordion.Content as={Menu.Menu} active>
          <Menu.Item link content="Analytics" icon="timeline" active />
          <Menu.Item link content="Lists" icon="view list" />
        </Accordion.Content>
      </Menu.Item>
      <Menu.Item link content="Reports" icon="assignment" />
    </Menu>
  ))
  .add('closed selected', () => (
    <Menu as={Accordion} className="blue" vertical>
      <Menu.Item link content="Home" icon="home" />
      <Menu.Item link active>
        <Accordion.Title>
          <Icon name="place" />
          <span>Places</span>
          <Icon name="keyboard arrow down" />
        </Accordion.Title>
        <Accordion.Content as={Menu.Menu}>
          <Menu.Item link content="Analytics" icon="timeline" active />
          <Menu.Item link content="Lists" icon="view list" />
        </Accordion.Content>
      </Menu.Item>
      <Menu.Item link content="Reports" icon="assignment" />
    </Menu>
  ))
