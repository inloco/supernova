import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  Divider,
  Dropdown,
  Layout,
  Menu,
  Placeholder,
  Wizard
} from '../../components'
import engage from './images/engage.svg'

import './layoutStory.css'

storiesOf('Layout', module).add('wizard', () => (
  <Layout className="layout-story">
    <Layout.Sidebar>
      <Layout.SidebarItem content="Home" icon="home" active />
      <Layout.SidebarItem content="Reports" icon="assignment" />
      <Divider />
      <Layout.SidebarSubmenu content="Places" icon="place">
        <Layout.SidebarItem content="Analytics" icon="timeline" />
        <Layout.SidebarItem content="Lists" icon="view list" />
      </Layout.SidebarSubmenu>
      <Divider />
      <Layout.SidebarFooter>
        <Layout.SidebarSubmenu content="Help" icon="help">
          <Layout.SidebarItem content="About" />
          <Layout.SidebarItem content="Documentation" />
        </Layout.SidebarSubmenu>
      </Layout.SidebarFooter>
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
    <Layout.Main>
      <Layout.Wizard steps={['First Step', 'Second Step', 'Third Step']}>
        <Wizard.Step>
          Step 1 Content
          <Placeholder fluid>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        </Wizard.Step>

        <Wizard.Step>
          Step 2 Content
          <Placeholder fluid>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        </Wizard.Step>
        <Wizard.Step>
          Step 3 Content
          <Placeholder fluid>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        </Wizard.Step>
      </Layout.Wizard>
    </Layout.Main>
  </Layout>
))
