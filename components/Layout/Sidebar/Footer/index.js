import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'

class Footer extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    expanded: PropTypes.bool
  }

  render() {
    const { className, children, expanded, ...otherProps } = this.props
    const classes = cx('inloco-layout__sidebar-footer', className)
    return (
      <React.Fragment>
        <Divider />
        <div className={classes} {...otherProps}>
          {React.Children.map(children, child =>
            React.cloneElement(child, { expanded })
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default Footer
