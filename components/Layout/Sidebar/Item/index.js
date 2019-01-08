import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Dropdown, Menu, Popup } from 'semantic-ui-react'

import { normalizeIconProp } from '../../../utils/icons'
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
          icon={normalizeIconProp(icon)}
          {...otherProps}
        />
      )
    }

    const wrappedContent = (
      <div className="inloco-layout__sidebar-item-content">{content}</div>
    )
    const item = (
      <Menu.Item
        className={classes}
        link
        content={expanded ? wrappedContent : null}
        icon={normalizeIconProp(icon)}
        {...otherProps}
        onClick={this.handleItemClick}
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

  handleItemClick = (event, data) => {
    const { onClick } = this.props
    const { onSidebarClose } = this.context

    onSidebarClose()
    if (onClick) {
      onClick(event, data)
    }
  }
}

export default SidebarItem
