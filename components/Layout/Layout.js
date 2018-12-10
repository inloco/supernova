import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import LayoutSidebar from './Sidebar'
import LayoutSidebarItem from './Sidebar/Item'
import LayoutTopbar from './Topbar'
import LayoutMain from './Main'
import LayoutHeader from './Main/Header'
import LayoutHeaderTitle from './Main/Header/Title'
import LayoutHeaderControls from './Main/Header/Controls'

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
 *  <Layout.Main>
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
    className: PropTypes.string,
    color: PropTypes.string
  }

  static Sidebar = LayoutSidebar
  static SidebarItem = LayoutSidebarItem
  static Topbar = LayoutTopbar
  static Main = LayoutMain
  static Header = LayoutHeader
  static HeaderTitle = LayoutHeaderTitle
  static HeaderControls = LayoutHeaderControls

  render() {
    const { children, className, color, ...otherProps } = this.props
    const classes = cx('inloco-layout', className)
    return (
      <div className={classes} {...otherProps}>
        {React.Children.map(children, child =>
          React.cloneElement(child, { color })
        )}
      </div>
    )
  }
}

export default Layout
