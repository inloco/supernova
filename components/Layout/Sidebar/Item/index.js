import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Dropdown, Menu, Popup } from 'semantic-ui-react'

class SidebarItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    dropdown: PropTypes.bool,
    expanded: PropTypes.bool,
    icon: PropTypes.string
  }

  static defaultProps = {
    expanded: true
  }

  render() {
    const {
      className,
      content,
      dropdown,
      expanded,
      icon,
      ...otherProps
    } = this.props
    const classes = cx('inloco-layout__sidebar-item', className)

    if (dropdown) {
      return (
        <Dropdown.Item className={classes} text={content} {...otherProps} />
      )
    }

    const item = (
      <Menu.Item
        className={classes}
        link
        content={expanded ? content : null}
        icon={icon ? { className: icon } : null}
        {...otherProps}
      />
    )

    if (!expanded) {
      return (
        <Popup
          inverted
          size="tiny"
          position="right center"
          content={content}
          trigger={item}
        />
      )
    }
    return item
  }
}

export default SidebarItem
