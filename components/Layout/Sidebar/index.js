import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Accordion, Dimmer, Icon, Menu, Sticky } from 'semantic-ui-react'

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
    expanded: false,
    transitioning: false
  }

  render() {
    const { children, headerTitle } = this.props
    const { expanded, transitioning } = this.state
    const { color } = this.context

    const classes = cx('inloco-layout__sidebar', color, {
      expanded,
      transitioning
    })
    const headerIcon = expanded ? 'close' : 'menu'
    return (
      <React.Fragment>
        <Menu
          as={Accordion}
          className={classes}
          vertical
          onTransitionEnd={this.handleTransitionEnd}>
          <div className="inloco-layout__sidebar-content">
            <Sticky>
              <Menu.Item header>
                <Icon
                  className={headerIcon}
                  onClick={this.handleHeaderIconClick}
                />
                {expanded && headerTitle}
              </Menu.Item>
            </Sticky>
            <SidebarContext.Provider
              value={{ onSidebarClose: this.handleClose, expanded }}>
              {children}
            </SidebarContext.Provider>
          </div>
        </Menu>
        <Dimmer
          className="inloco-layout__sidebar-dimmer"
          active={expanded}
          page
          onClick={this.handleClose}
        />
      </React.Fragment>
    )
  }

  handleClose = () => {
    this.setState({ expanded: false, transitioning: true })
  }

  handleHeaderIconClick = () => {
    this.setState(({ expanded }) => ({
      expanded: !expanded,
      transitioning: true
    }))
  }

  handleTransitionEnd = () => {
    this.setState({ transitioning: false })
  }
}

export default Sidebar
