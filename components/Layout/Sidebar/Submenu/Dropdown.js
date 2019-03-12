import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

import { normalizeIconProp } from '../../../utils/icons'

class SidebarSubmenuDropdown extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    content: PropTypes.node.isRequired
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

    return (
      <div onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}>
        <Dropdown
          ref={this.dropdownRef}
          className={classes}
          item
          icon={normalizeIconProp(icon)}
          open={this.state.open}
          {...otherProps}>
          <Dropdown.Menu style={this.getMenuStyle()}>
            <Dropdown.Header content={content} />
            {React.Children.map(children, child =>
              React.cloneElement(child, { dropdown: true })
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
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
