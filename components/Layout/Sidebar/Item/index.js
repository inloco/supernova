import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'

class SidebarItem extends Component {
  static propTypes = {
    expanded: PropTypes.bool
  }

  render() {
    const { content, expanded, ...otherProps } = this.props
    return (
      <Menu.Item
        className="inloco-layout__sidebar-item"
        link
        content={expanded ? content : null}
        {...otherProps}
      />
    )
  }
}

export default SidebarItem
