import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Accordion, Icon, Menu, Transition } from 'semantic-ui-react'

import { normalizeIconProp } from '../../../utils/icons'

import SidebarContext from '../SidebarContext'

class SidebarSubmenuAccordion extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    content: PropTypes.node.isRequired
  }

  static contextType = SidebarContext

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
        <Transition visible={open} animation="slide down" duration={250}>
          <Accordion.Content as={Menu.Menu} active={open}>
            {children}
          </Accordion.Content>
        </Transition>
      </Menu.Item>
    )
  }

  /**
   * Scroll the sidebar down when the footer accordion opens, as its content
   * may cause the scrollbar to appear for the first time.
   */
  componentDidUpdate(props, { open: prevOpen }) {
    const { open } = this.state
    const {
      isFooter,
      scrollRef: { current: scrollElement }
    } = this.context
    if (isFooter && open && !prevOpen) {
      scrollElement.scrollTo(0, scrollElement.scrollHeight)
    }
  }

  handleTitleClick = () => {
    this.setState(({ open }) => ({ open: !open }))
  }
}

export default SidebarSubmenuAccordion
