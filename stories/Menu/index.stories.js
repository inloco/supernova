import React from "react";
import { Menu } from "semantic-ui-react";
import { storiesOf } from "@storybook/react";

const items = [
  {
    name: "TAB 1"
  },
  {
    name: "TAB 2"
  },
  {
    name: "TAB 3"
  }
];

storiesOf("Menu", module)
  .add("basic pointing ", () => <Menu pointing items={items} />)
  .add("secondary pointing ", () => <Menu secondary pointing items={items} />)
  .add("basic pointing blue", () => (
    <Menu color="blue" pointing items={items} />
  ))
  .add("secondary pointing blue", () => (
    <Menu secondary pointing color="blue" items={items} />
  ))
  .add("basic pointing pink", () => (
    <Menu pointing color="pink" items={items} />
  ))
  .add("secondary pointing  pink", () => (
    <Menu secondary pointing color="pink" items={items} />
  ))
  .add("basic pointing green", () => (
    <Menu color="green" pointing items={items} />
  ))
  .add("secondary pointing green", () => (
    <Menu secondary pointing color="green" items={items} />
  ));
