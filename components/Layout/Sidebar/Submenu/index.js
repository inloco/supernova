import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

import SidebarSubmenuAccordion from './Accordion'
import SidebarSubmenuDropdown from './Dropdown'
import SidebarContext from '../SidebarContext'

class SidebarSubmenu extends Component {
  static propTypes = {
    className: PropTypes.string,
    content: PropTypes.node.isRequired,
    icon: PropTypes.string.isRequired
  }

  static contextType = SidebarContext

  render() {
    const { className, ...otherProps } = this.props
    const classes = cx('inloco-layout__sidebar-submenu', className)
    const ElementType = this.context.expanded
      ? SidebarSubmenuAccordion
      : SidebarSubmenuDropdown
    return <ElementType className={classes} {...otherProps} />
  }
}

export default SidebarSubmenu
