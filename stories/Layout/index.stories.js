import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  Breadcrumb,
  Button,
  Divider,
  Dropdown,
  Icon,
  Layout,
  Menu,
  Placeholder
} from '../../components'
import engage from './images/engage.svg'

import './layoutStory.css'

const StoryLayout = ({ noBreadcrumb, withWarning, ...otherProps }) => (
  <Layout className="layout-story" {...otherProps}>
    <Layout.Sidebar>
      <Layout.SidebarItem content="Home" icon="home" active />
      <Layout.SidebarItem content="Reports" icon="assignment" />
      <Divider />
      <Layout.SidebarSubmenu content="Places" icon="place">
        <Layout.SidebarItem content="Analytics" icon="timeline" />
        <Layout.SidebarItem content="Lists" icon="view list" />
      </Layout.SidebarSubmenu>
      <Layout.SidebarItem content="Apps" icon="smartphone" />
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
    {withWarning && (
      <Layout.TopWarning
        warning
        header="Warning!"
        content="This is a test account."
      />
    )}
    <Layout.Main>
      <Layout.Header>
        {!noBreadcrumb && (
          <Breadcrumb>
            <Breadcrumb.Section link>Previous section</Breadcrumb.Section>
            <Breadcrumb.Divider>/</Breadcrumb.Divider>
            <Breadcrumb.Section link>Previous section 2</Breadcrumb.Section>
          </Breadcrumb>
        )}
        <Layout.HeaderTitle>Home Title</Layout.HeaderTitle>
        <Layout.HeaderControls>
          <Button>Cancel</Button>
          <Button className={otherProps.color}>Save</Button>
        </Layout.HeaderControls>
      </Layout.Header>
      <Layout.MainContent>
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
      </Layout.MainContent>
    </Layout.Main>
  </Layout>
)

storiesOf('Layout', module)
  .add('blue', () => <StoryLayout color="blue" />)
  .add('pink', () => <StoryLayout color="pink" />)
  .add('green', () => <StoryLayout color="green" />)
  .add('no breadcrumb', () => <StoryLayout color="blue" noBreadcrumb />)
  .add('no sidebar', () => <StoryLayout color="blue" noSidebar />)
  .add('with warning', () => <StoryLayout color="blue" withWarning />)
