import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button, ButtonGroup } from 'semantic-ui-react'

storiesOf('Button', module)
  .add('primary', () => (
    <React.Fragment>
      <Button className="blue" onClick={action('clicked blue')}>
        Blue
      </Button>
      <br />
      <br />
      <Button className="pink" onClick={action('clicked pink')}>
        Pink
      </Button>
      <br />
      <br />
      <Button className="green" onClick={action('clicked green')}>
        Green
      </Button>
      <br />
      <br />
      <Button disabled className="blue" onClick={action('clicked blue')}>
        Blue Disabled
      </Button>
      <br />
      <br />
      <Button disabled className="pink" onClick={action('clicked pink')}>
        Pink Disabled
      </Button>
      <br />
      <br />
      <Button disabled className="green" onClick={action('clicked green')}>
        Green Disabled
      </Button>
    </React.Fragment>
  ))
  .add('primary icon', () => (
    <React.Fragment>
      <Button
        className="blue"
        onClick={action('clicked blue')}
        icon="cloud"
        content="Icon with text"
      />
      <br />
      <br />
      <Button
        className="pink"
        onClick={action('clicked pink')}
        icon="cloud"
        content="Icon with text"
      />
      <br />
      <br />
      <Button
        className="green"
        onClick={action('clicked green')}
        icon="cloud"
        content="Icon with text"
      />
      <br />
      <br />
      <Button className="blue" onClick={action('clicked blue')} icon="cloud" />
      <br />
      <br />
      <Button className="pink" onClick={action('clicked pink')} icon="cloud" />
      <br />
      <br />
      <Button
        className="green"
        onClick={action('clicked green')}
        icon="cloud"
      />
      <br />
      <br />
      <Button
        disabled
        className="blue"
        onClick={action('clicked blue')}
        icon="cloud"
      />
      <br />
      <br />
      <Button
        disabled
        className="pink"
        onClick={action('clicked pink')}
        icon="cloud"
      />
      <br />
      <br />
      <Button
        disabled
        className="green"
        onClick={action('clicked green')}
        icon="cloud"
      />
    </React.Fragment>
  ))
  .add('secondary', () => (
    <React.Fragment>
      <Button>Enabled</Button>
      <br />
      <br />
      <Button disabled>Disabled</Button>
      <br />
      <br />
    </React.Fragment>
  ))
  .add('subtle', () => (
    <React.Fragment>
      <Button basic className="blue" onClick={action('clicked blue')}>
        Blue
      </Button>
      <br />
      <br />
      <Button basic className="pink" onClick={action('clicked pink')}>
        Pink
      </Button>
      <br />
      <br />
      <Button basic className="green" onClick={action('clicked green')}>
        Green
      </Button>
      <br />
      <br />
      <Button disabled basic className="blue" onClick={action('clicked blue')}>
        Blue Disabled
      </Button>
      <br />
      <br />
      <Button disabled basic className="pink" onClick={action('clicked pink')}>
        Pink Disabled
      </Button>
      <br />
      <br />
      <Button
        disabled
        basic
        className="green"
        onClick={action('clicked green')}>
        Green Disabled
      </Button>
    </React.Fragment>
  ))
  .add('outline', () => (
    <React.Fragment>
      <Button className="outline blue" onClick={action('clicked blue')}>
        Blue
      </Button>
      <br />
      <br />
      <Button className="outline pink" onClick={action('clicked pink')}>
        Pink
      </Button>
      <br />
      <br />
      <Button className="outline green" onClick={action('clicked green')}>
        Green
      </Button>
      <br />
      <br />
      <Button
        disabled
        className="outline blue"
        onClick={action('clicked blue')}>
        Blue Disabled
      </Button>
      <br />
      <br />
      <Button
        disabled
        className="outline pink"
        onClick={action('clicked pink')}>
        Pink Disabled
      </Button>
      <br />
      <br />
      <Button
        disabled
        className="outline green"
        onClick={action('clicked green')}>
        Green Disabled
      </Button>
    </React.Fragment>
  ))
  .add('outline icon', () => (
    <React.Fragment>
      <Button
        className="outline blue"
        onClick={action('clicked blue')}
        icon="cloud"
      />
      <br />
      <br />
      <Button
        className="outline pink"
        onClick={action('clicked pink')}
        icon="cloud"
      />
      <br />
      <br />
      <Button
        className="outline green"
        onClick={action('clicked green')}
        icon="cloud"
      />
      <br />
      <br />
      <Button
        disabled
        className="outline blue"
        onClick={action('clicked blue')}
        icon="cloud"
      />
      <br />
      <br />
      <Button
        disabled
        className="outline pink"
        onClick={action('clicked pink')}
        icon="cloud"
      />
      <br />
      <br />
      <Button
        disabled
        className="outline green"
        onClick={action('clicked green')}
        icon="cloud"
      />
    </React.Fragment>
  ))
  .add('loading', () => (
    <React.Fragment>
      <Button loading className="blue" onClick={action('clicked blue')}>
        Blue
      </Button>
      <br />
      <br />
      <Button loading className="pink" onClick={action('clicked pink')}>
        Pink
      </Button>
      <br />
      <br />
      <Button loading className="green" onClick={action('clicked green')}>
        Green
      </Button>
    </React.Fragment>
  ))
