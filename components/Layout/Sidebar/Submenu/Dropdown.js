import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Dropdown, Popup } from 'semantic-ui-react'

class SidebarSubmenuDropdown extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    content: PropTypes.node.isRequired,
    icon: PropTypes.string.isRequired
  }

  render() {
    const {
      active,
      className,
      children,
      icon,
      content,
      ...otherProps
    } = this.props
    const classes = cx('inloco-layout__sidebar-submenu-dropdown', className, {
      activeSubMenu: active
    })

    const dropdown = (
      <Dropdown
        className={classes}
        item
        icon={{ className: icon }}
        {...otherProps}>
        <Dropdown.Menu>
          <Dropdown.Header content={content} />
          {React.Children.map(children, child =>
            React.cloneElement(child, { dropdown: true })
          )}
        </Dropdown.Menu>
      </Dropdown>
    )
    return (
      <Popup
        inverted
        size="tiny"
        position="right center"
        content={content}
        trigger={dropdown}
      />
    )
  }
}

export default SidebarSubmenuDropdown
