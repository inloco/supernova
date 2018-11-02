import { Progress } from 'semantic-ui-react'
import React from 'react'

import './GoalRangeBar.css'

export const GoalRangeBar = props => {
  const progressPercentage = formatPercentage(props.progress, props.maxGoal)
  const minLeft = formatPercentage(props.minGoal, props.maxGoal)

  return (
    <div className="goal-range-bar__wrapper">
      <Progress
        className="goal-range-bar"
        percent={progressPercentage}
        size="tiny"
      />
      <div
        style={{ width: `${minLeft}%` }}
        className="goal-range-bar__overlay"
      />
      <div
        style={{ left: `${minLeft}%` }}
        className="goal-range-bar__overlay-mark"
      />
      <div className="goal-range-bar__label-wrapper">
        <div
          className="goal-range-bar__min-goal"
          style={{ left: `${minLeft}%` }}>
          {props.minGoal}
        </div>
        <div className="goal-range-bar__max-goal">{props.maxGoal}</div>
      </div>
    </div>
  )
}

const formatPercentage = (fraction, total) => {
  return ((fraction / total) * 100).toFixed()
}
