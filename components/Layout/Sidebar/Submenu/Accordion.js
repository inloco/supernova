import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Accordion, Icon, Menu } from 'semantic-ui-react'

class SidebarSubmenuAccordion extends Component {
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
    const classes = cx('inloco-layout__sidebar-submenu-accordion', className)
    return (
      <Menu.Item className={classes} link active={active} {...otherProps}>
        <Accordion.Title active={open} onClick={this.handleTitleClick}>
          <Icon className={icon} />
          <span>{content}</span>
          <Icon className="keyboard arrow down" />
        </Accordion.Title>
        <Accordion.Content as={Menu.Menu} active={open}>
          {children}
        </Accordion.Content>
      </Menu.Item>
    )
  }

  handleTitleClick = () => {
    this.setState(({ open }) => ({ open: !open }))
  }
}

export default SidebarSubmenuAccordion
