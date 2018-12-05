import React from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import { storiesOf } from '@storybook/react'

storiesOf('Menu/Horizontal', module).add('basic', () => (
  <Menu>
    <Menu.Item link content="Home" active />
    <Menu.Menu position="right">
      <Dropdown item text="Maira Bello">
        <Dropdown.Menu>
          <Dropdown.Item text="Account" />
          <Dropdown.Item text="Logout" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
))
