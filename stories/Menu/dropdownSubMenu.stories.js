import React from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import { storiesOf } from '@storybook/react'

storiesOf('Menu/Vertical/SubMenus/Lateral', module)
  .add('closed', () => (
    <Menu className="blue" vertical>
      <Menu.Item link content="Home" icon="home" active />
      <Dropdown item text="Places" icon="place">
        <Dropdown.Menu>
          <Dropdown.Item text="Analytics" icon="timeline" />
          <Dropdown.Item text="Lists" icon="view list" />
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item link content="Reports" icon="assignment" />
    </Menu>
  ))
