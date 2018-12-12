import React from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import { storiesOf } from '@storybook/react'

storiesOf('Menu/Vertical/SubMenus/Lateral', module)
  .add('basic', () => (
    <Menu className="blue" vertical>
      <Menu.Item link content="Home" icon="home" active />
      <Dropdown item text="Places" icon="place">
        <Dropdown.Menu>
          <Dropdown.Header content="Places" />
          <Dropdown.Item text="Analytics" icon="timeline" />
          <Dropdown.Item text="Lists" icon="view list" />
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item link content="Reports" icon="assignment" />
    </Menu>
  ))
  .add('icons only', () => (
    <Menu className="blue" vertical icon>
      <Menu.Item link icon="home" active />
      <Dropdown item icon="place">
        <Dropdown.Menu>
          <Dropdown.Header content="Places" />
          <Dropdown.Item text="Analytics" icon="timeline" />
          <Dropdown.Item text="Lists" icon="view list" />
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item link icon="assignment" />
    </Menu>
  ))
  .add('selected', () => (
    <Menu className="blue" vertical>
      <Menu.Item link content="Home" icon="home" />
      <Dropdown className="activeSubMenu" item text="Places" icon="place">
        <Dropdown.Menu>
          <Dropdown.Header content="Places" />
          <Dropdown.Item text="Analytics" icon="timeline" active />
          <Dropdown.Item text="Lists" icon="view list" />
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item link content="Reports" icon="assignment" />
    </Menu>
  ))
  .add('no icons on subitems', () => (
    <Menu className="blue" vertical>
      <Menu.Item link content="Home" icon="home" active />
      <Dropdown item text="Places" icon="place">
        <Dropdown.Menu>
          <Dropdown.Header content="Places" />
          <Dropdown.Item text="Analytics" />
          <Dropdown.Item text="Lists" />
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item link content="Reports" icon="assignment" />
    </Menu>
  ))
