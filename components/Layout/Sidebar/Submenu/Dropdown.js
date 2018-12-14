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

  state = {
    open: false
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
    const { open } = this.state
    const classes = cx('inloco-layout__sidebar-submenu-dropdown', className, {
      activeSubMenu: active
    })

    const dropdown = (
      <Dropdown
        className={classes}
        item
        icon={{ className: icon }}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        {...otherProps}>
        <Dropdown.Menu>
          <Dropdown.Header content={content} />
          {React.Children.map(children, child =>
            React.cloneElement(child, { dropdown: true })
          )}
        </Dropdown.Menu>
      </Dropdown>
    )

    // We don't want to keep showing the tooltip when the dropdown is
    // open. This css class is the simplest way of achieving that.
    const popupClasses = cx({ 'inloco-popup--hidden': open })
    return (
      <Popup
        className={popupClasses}
        inverted
        size="tiny"
        position="right center"
        content={content}
        trigger={dropdown}
      />
    )
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }
}

export default SidebarSubmenuDropdown
