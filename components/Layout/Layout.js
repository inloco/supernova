import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import LayoutSidebar from './Sidebar'
import LayoutSidebarItem from './Sidebar/Item'
import LayoutSidebarSubmenu from './Sidebar/Submenu'
import LayoutSidebarFooter from './Sidebar/Footer'
import LayoutTopbar from './Topbar'
import LayoutMain from './Main'
import LayoutTopWarning from './TopWarning'
import LayoutHeader from './Main/Header'
import LayoutHeaderTitle from './Main/Header/Title'
import LayoutHeaderControls from './Main/Header/Controls'
import LayoutContext from './LayoutContext'

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
  static TopWarning = LayoutTopWarning
  static Main = LayoutMain
  static Header = LayoutHeader
  static HeaderTitle = LayoutHeaderTitle
  static HeaderControls = LayoutHeaderControls

  ref = React.createRef()

  state = {
    withWarning: false
  }

  render() {
    const { children, className, color, noSidebar, ...otherProps } = this.props
    const { withWarning } = this.state
    const classes = cx('inloco-layout', className, { noSidebar, withWarning })
    return (
      <div className={classes} {...otherProps} ref={this.ref}>
        <LayoutContext.Provider
          value={{
            color,
            withWarning,
            onWarningMount: this.handleWarningMount,
            ref: this.ref
          }}>
          {children}
        </LayoutContext.Provider>
      </div>
    )
  }

  handleWarningMount = () => {
    this.setState({ withWarning: true })
  }
}

export default Layout
