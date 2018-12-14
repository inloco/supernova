import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Dropdown, Menu, Popup } from 'semantic-ui-react'

import SidebarContext from '../SidebarContext'

class SidebarItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    dropdown: PropTypes.bool,
    icon: PropTypes.string
  }

  static contextType = SidebarContext

  render() {
    const { className, content, dropdown, icon, ...otherProps } = this.props
    const { expanded } = this.context
    const classes = cx('inloco-layout__sidebar-item', className)

    if (dropdown) {
      return (
        <Dropdown.Item
          className={classes}
          text={content}
          icon={icon ? { className: icon } : null}
          {...otherProps}
        />
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
