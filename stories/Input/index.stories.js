import React from "react"
import { storiesOf } from "@storybook/react"

import { Input } from "../../components"

storiesOf("Input", module)
  .add("selection", () => <Input placeholder="Input..." />)
  .add("disabled", () => <Input placeholder="Input..." disabled />)
  .add("error icon", () => (
    <Input placeholder="Input..." error icon="error" />
  ))
  .add("warning icon", () => (
    <Input placeholder="Input..." className="warning" icon="warning" />
  ))
