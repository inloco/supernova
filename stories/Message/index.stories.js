import React from "react";
import { Message } from "semantic-ui-react";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions'

storiesOf("Message", module)
  .add("floating negative", () => 
    <Message floating negative icon='error' header='Error' content='Lorem ipsum dolor sit amet' onDismiss={action('dismissed error')}/>
  )
  .add("floating warning", () => 
    <Message floating warning icon='warning' header='Warning' content='Lorem ipsum dolor sit amet' onDismiss={action('dismissed warning')}/>
  )
  .add("floating positive", () => 
    <Message floating positive icon='check circle' header='Success' content='Lorem ipsum dolor sit amet' onDismiss={action('dismissed success')}/>
  );
