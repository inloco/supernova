import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Accordion, Icon, Menu } from 'semantic-ui-react'

class Sidebar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    headerTitle: PropTypes.string
  }

  static defaultProps = {
    headerTitle: 'Menu'
  }

  state = {
    expanded: false
  }

  render() {
    const { children, color, headerTitle } = this.props
    const { expanded } = this.state

    const classes = classNames('inloco-layout__sidebar', color, { expanded })
    const headerIcon = expanded ? 'close' : 'menu'
    return (
      <Menu as={Accordion} className={classes} vertical icon={!expanded}>
        <Menu.Item header>
          <Icon className={headerIcon} onClick={this.handleHeaderIconClick} />
          {expanded && headerTitle}
        </Menu.Item>
        {React.Children.map(children, child =>
          React.cloneElement(child, { expanded })
        )}
      </Menu>
    )
  }

  handleHeaderIconClick = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }))
  }
}

export default Sidebar
