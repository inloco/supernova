import React from "react";
import { storiesOf } from "@storybook/react";
import { Placeholder } from "semantic-ui-react";

storiesOf("Placeholder", module).add("default", () => (
  <Placeholder>
    <Placeholder.Header image>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line length="medium" />
      <Placeholder.Line length="short" />
    </Placeholder.Paragraph>
  </Placeholder>
));
