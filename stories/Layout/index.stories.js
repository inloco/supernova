import React from 'react'
import { storiesOf } from '@storybook/react'

import { Dropdown, Layout, Menu } from '../../components'
import engage from './images/engage.svg'

import './layoutStory.css'

storiesOf('Layout', module)
  .add('blue', () => (
    <Layout color="blue">
      <Layout.Sidebar>
        <Layout.SidebarItem content="Home" icon="home" active />
        <Layout.SidebarItem content="Reports" icon="assignment" />
      </Layout.Sidebar>
      <Layout.Topbar logo={<img src={engage} />}>
        <Menu.Menu position="right">
          <Dropdown item text="Maira Bello">
            <Dropdown.Menu>
              <Dropdown.Item text="Account" />
              <Dropdown.Item text="Logout" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Layout.Topbar>
    </Layout>
  ))
  .add('pink', () => (
    <Layout color="pink">
      <Layout.Sidebar>
        <Layout.SidebarItem content="Home" icon="home" active />
        <Layout.SidebarItem content="Reports" icon="assignment" />
      </Layout.Sidebar>
      <Layout.Topbar logo={<img src={engage} />}>
        <Menu.Menu position="right">
          <Dropdown item text="Maira Bello">
            <Dropdown.Menu>
              <Dropdown.Item text="Account" />
              <Dropdown.Item text="Logout" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Layout.Topbar>
    </Layout>
  ))
  .add('green', () => (
    <Layout color="green">
      <Layout.Sidebar>
        <Layout.SidebarItem content="Home" icon="home" active />
        <Layout.SidebarItem content="Reports" icon="assignment" />
      </Layout.Sidebar>
      <Layout.Topbar logo={<img src={engage} />}>
        <Menu.Menu position="right">
          <Dropdown item text="Maira Bello">
            <Dropdown.Menu>
              <Dropdown.Item text="Account" />
              <Dropdown.Item text="Logout" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Layout.Topbar>
    </Layout>
  ))
