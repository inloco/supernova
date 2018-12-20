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

  dropdownRef = React.createRef()

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
        ref={this.dropdownRef}
        className={classes}
        item
        icon={{ className: icon }}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        {...otherProps}>
        <Dropdown.Menu style={this.getMenuStyle()}>
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

  /**
   * Calculates the menu's top position when the dropdown opens.
   * Usually this wouldn't be necessary, as the menu uses absolute position, so it can
   * handled by CSS automatically. But the sidebar has a vertical scroll, so this
   * doesn't work as expected anymore. We could change it to use fixed position, but
   * it was even harder to make it work that way, due to some fixed elements on the page,
   * such as the sidebar header. Controlling it via js was the simplest approach with the
   * best results.
   *
   * For more information on this problem: https://css-tricks.com/popping-hidden-overflow/.
   */
  getMenuStyle = () => {
    const dropdownComponent = this.dropdownRef.current
    const dropdownElement = dropdownComponent && dropdownComponent.ref
    return this.state.open && dropdownElement
      ? { top: dropdownElement.getBoundingClientRect().top }
      : null
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }
}

export default SidebarSubmenuDropdown
