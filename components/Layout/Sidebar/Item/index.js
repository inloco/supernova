import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'

class SidebarItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <Menu.Item className="inloco-layout__sidebar-item" link {...this.props} />
    )
  }
}

export default SidebarItem
