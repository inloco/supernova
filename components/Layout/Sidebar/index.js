import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Accordion, Menu } from 'semantic-ui-react'

/**
 * Exemplo de uso:
 *
 *  <Layout.Sidebar>
 *    <Layout.SidebarItem
 *      as={Link}
 *      icon={icon}
 *      content={content}
 *      active={active}
 *      to={href}
 *    />
 *    <Layout.Divider />
 *    <Layout.SidebarSubMenu
 *      icon={icon}
 *      content={content}
 *      active={active}
 *      items={subMenuItems}
 *    />
 *  </Layout.Sidebar>
 *
 */
class Sidebar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    headerTitle: PropTypes.string
  }

  static defaultProps = {
    headerTitle: 'Menu'
  }

  render() {
    const { children, color, headerTitle } = this.props
    const classes = classNames('inloco-layout__sidebar', color)
    return (
      <Menu as={Accordion} className={classes} vertical>
        <Menu.Item header content={headerTitle} icon="close" />
        {children}
      </Menu>
    )
  }
}

export default Sidebar
