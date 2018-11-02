import { storiesOf } from '@storybook/react'
import React from 'react'

import { GoalRangeBar } from '../../components'

storiesOf('GoalRangeBar', module)
  .add('behind the goal range', () => (
    <GoalRangeBar progress={60} minGoal={80} maxGoal={100} />
  ))
  .add('reached the goal range', () => (
    <GoalRangeBar progress={90} minGoal={80} maxGoal={100} />
  ))
