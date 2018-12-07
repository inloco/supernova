import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import LayoutSidebar from './Sidebar'
import LayoutSidebarItem from './Sidebar/Item'
import LayoutSidebarSubmenu from './Sidebar/Submenu'
import LayoutSidebarFooter from './Sidebar/Footer'
import LayoutTopbar from './Topbar'
import LayoutMain from './Main'
import LayoutHeader from './Main/Header'
import LayoutHeaderTitle from './Main/Header/Title'
import LayoutHeaderControls from './Main/Header/Controls'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    color: PropTypes.string,
    noSidebar: PropTypes.bool
  }

  static Sidebar = LayoutSidebar
  static SidebarItem = LayoutSidebarItem
  static SidebarSubmenu = LayoutSidebarSubmenu
  static SidebarFooter = LayoutSidebarFooter
  static Topbar = LayoutTopbar
  static Main = LayoutMain
  static Header = LayoutHeader
  static HeaderTitle = LayoutHeaderTitle
  static HeaderControls = LayoutHeaderControls

  render() {
    const { children, className, color, noSidebar, ...otherProps } = this.props
    const classes = cx('inloco-layout', className, { noSidebar })
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
