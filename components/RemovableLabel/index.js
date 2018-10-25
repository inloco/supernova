import React from 'react'
import { Icon, Label } from 'semantic-ui-react'

export const RemovableLabel = props => {
  const { children, className = '', content, onRemove, ...otherProps } = props
  return (
    <Label className={`removable ${className}`} {...otherProps}>
      <div className="removable-label-icon">
        <Icon className="clear" size="big" onClick={onRemove} />
      </div>
      <span className="removable-label-content">{children || content}</span>
    </Label>
  )
}
