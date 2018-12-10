import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'

class SidebarItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    expanded: PropTypes.bool
  }

  render() {
    const { className, content, expanded, ...otherProps } = this.props
    const classes = cx('inloco-layout__sidebar-item', className)
    return (
      <Menu.Item
        className={classes}
        link
        content={expanded ? content : null}
        {...otherProps}
      />
    )
  }
}

export default SidebarItem
