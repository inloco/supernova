import React from 'react'
import { storiesOf } from '@storybook/react'

import { Layout } from '../../components'

import './layoutStory.css'

storiesOf('Layout', module)
  .add('blue', () => (
    <Layout color="blue">
      <Layout.Sidebar>
        <Layout.SidebarItem content="Home" icon="home" active />
        <Layout.SidebarItem content="Reports" icon="assignment" />
      </Layout.Sidebar>
      <Layout.Topbar />
    </Layout>
  ))
  .add('pink', () => (
    <Layout color="pink">
      <Layout.Sidebar>
        <Layout.SidebarItem content="Home" icon="home" active />
        <Layout.SidebarItem content="Reports" icon="assignment" />
      </Layout.Sidebar>
      <Layout.Topbar />
    </Layout>
  ))
  .add('green', () => (
    <Layout color="green">
      <Layout.Sidebar>
        <Layout.SidebarItem content="Home" icon="home" active />
        <Layout.SidebarItem content="Reports" icon="assignment" />
      </Layout.Sidebar>
      <Layout.Topbar />
    </Layout>
  ))
