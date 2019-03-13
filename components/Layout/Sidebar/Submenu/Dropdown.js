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
    openWithHover: false,
    openWithClick: false
  }

  wrapperRef = React.createRef()
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
    const classes = cx('inloco-layout__sidebar-submenu-dropdown', className, {
      activeSubMenu: active
    })

    return (
      <div
        ref={this.wrapperRef}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <Dropdown
          item
          ref={this.dropdownRef}
          open={this.isMenuOpen()}
          className={classes}
          icon={normalizeIconProp(icon)}
          {...otherProps}>
          <Dropdown.Menu style={this.getMenuStyle()}>
            <Dropdown.Header content={content} />
            {/**
             * This invisible element helps to avoid the mouseleave trigger when
             * the user tries to move the mouse from the trigger to
             */}
            <div className="inloco-layout__sidebar-submenu-invisible-item" />
            {React.Children.map(children, child =>
              React.cloneElement(child, { dropdown: true })
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, true)
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

    return this.isMenuOpen() && dropdownElement
      ? { top: dropdownElement.getBoundingClientRect().top }
      : null
  }

  handleClick = () => {
    if (this.state.openWithClick) {
      return this.closeMenu()
    }

    return this.setState({ openWithClick: true })
  }

  handleOutsideClick = event => {
    const { current: wrapper } = this.wrapperRef
    const isAnOutsideClick = wrapper && !wrapper.contains(event.target)

    if (!isAnOutsideClick) {
      return this.handleClick()
    }

    if (this.isMenuOpen()) {
      return this.closeMenu()
    }
  }

  handleMouseEnter = () => {
    this.setState({ openWithHover: true })
  }

  handleMouseLeave = () => {
    this.setState({ openWithHover: false })
  }

  closeMenu = () => {
    this.setState({ openWithClick: false, openWithHover: false })
  }

  isMenuOpen = () => {
    return this.state.openWithHover || this.state.openWithClick
  }
}

export default SidebarSubmenuDropdown
