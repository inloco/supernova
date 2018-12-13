import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Accordion, Dimmer, Icon, Menu } from 'semantic-ui-react'

import LayoutContext from '../LayoutContext'
import SidebarContext from './SidebarContext'

class Sidebar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    headerTitle: PropTypes.string
  }

  static defaultProps = {
    headerTitle: 'Menu'
  }

  static contextType = LayoutContext

  state = {
    expanded: false
  }

  render() {
    const { children, headerTitle } = this.props
    const { expanded } = this.state
    const { color } = this.context

    const classes = cx('inloco-layout__sidebar', color, { expanded })
    const headerIcon = expanded ? 'close' : 'menu'
    return (
      <React.Fragment>
        <Menu as={Accordion} className={classes} vertical icon={!expanded}>
          <Menu.Item header>
            <Icon className={headerIcon} onClick={this.handleHeaderIconClick} />
            {expanded && headerTitle}
          </Menu.Item>
          <SidebarContext.Provider value={{ expanded }}>
            {children}
          </SidebarContext.Provider>
        </Menu>
        <Dimmer
          className="inloco-layout__sidebar-dimmer"
          active={expanded}
          page
          onClick={this.handleDimmerClick}
        />
      </React.Fragment>
    )
  }

  handleHeaderIconClick = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }))
  }

  handleDimmerClick = () => {
    this.setState({ expanded: false })
  }
}

export default Sidebar
