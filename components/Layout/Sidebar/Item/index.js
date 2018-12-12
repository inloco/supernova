import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Dropdown, Menu } from 'semantic-ui-react'

class SidebarItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    dropdown: PropTypes.bool,
    expanded: PropTypes.bool
  }

  static defaultProps = {
    expanded: true
  }

  render() {
    const { className, content, dropdown, expanded, ...otherProps } = this.props
    const classes = cx('inloco-layout__sidebar-item', className)

    if (dropdown) {
      return (
        <Dropdown.Item className={classes} text={content} {...otherProps} />
      )
    }

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
