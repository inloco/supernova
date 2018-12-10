import PropTypes from 'prop-types'
import React, { Component } from 'react'

import LayoutSidebar from './Sidebar'
import LayoutSidebarItem from './Sidebar/Item'
import LayoutTopbar from './Topbar'

/**
 * TODO: Remove this block once everything is ready and the story file is
 * the full example.
 *
 * Usage example:
 *
 * <Layout color={color}>
 *  <Layout.Topbar logo={logo}>
 *    {topbarChildren}
 *  </Layout.Topbar>
 *  <Layout.Sidebar>
 *    <Layout.SidebarItem
 *      as={Link}
 *      icon={icon}
 *      content={content}
 *      active={active}
 *      to={href}
 *    />
 *    <Layout.Divider />
 *    <Layout.SidebarSubMenu
 *      icon={icon}
 *      content={content}
 *      active={active}
 *      items={subMenuItems}
 *    />
 *  </Layout.Sidebar>
 *  <Layout.Main logo={logo}>
 *    <Layout.Header>
 *      <Layout.HeaderTitle>{title}</Layout.HeaderTitle>
 *      {headerChildren}
 *    </Layout.Header>
 *    {mainChildren}
 *  </Layout.Main>
 * </Layout>
 *
 */
class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string
  }

  static Sidebar = LayoutSidebar
  static SidebarItem = LayoutSidebarItem
  static Topbar = LayoutTopbar

  render() {
    const { children, color } = this.props
    return (
      <div className="inloco-layout">
        {React.Children.map(children, child =>
          React.cloneElement(child, { color })
        )}
      </div>
    )
  }
}

export default Layout
