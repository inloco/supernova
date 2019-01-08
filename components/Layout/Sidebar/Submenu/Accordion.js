import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Accordion, Icon, Menu } from 'semantic-ui-react'

import { normalizeIconProp } from '../../../utils/icons'

class SidebarSubmenuAccordion extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    content: PropTypes.node.isRequired
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
    const classes = cx(
      'inloco-layout__sidebar-submenu-accordion',
      'submenu-accordion',
      className
    )
    return (
      <Menu.Item className={classes} link active={active} {...otherProps}>
        <Accordion.Title active={open} onClick={this.handleTitleClick}>
          {Icon.create(normalizeIconProp(icon), { autoGenerateKey: false })}
          <span className="inloco-layout__sidebar-submenu-accordion-content">
            {content}
          </span>
          <Icon className="keyboard arrow down dropdown" />
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
