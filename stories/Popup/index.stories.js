import React from 'react'
import { Button, Popup } from 'semantic-ui-react'
import { storiesOf } from '@storybook/react'

import './popupStory.css'

storiesOf('Popup', module)
  .add('regular', () => (
    <div className="popup-story">
      <Popup
        content="Bottom Popup"
        on="click"
        position="bottom center"
        trigger={<Button className="popup-story__button">Trigger Bottom</Button>}
      />
      <Popup
        content="Right Popup"
        on="click"
        position="center right"
        trigger={<Button className="popup-story__button">Trigger Right</Button>}
      />
      <Popup
        content="Top Popup"
        on="click"
        position="top center"
        trigger={<Button className="popup-story__button">Trigger Top</Button>}
      />
      <Popup
        content="Left Popup"
        on="click"
        position="center left"
        trigger={<Button className="popup-story__button">Trigger Left</Button>}
      />
    </div>
  ))
