import React from "react";
import { storiesOf } from "@storybook/react";
import { Pagination } from "semantic-ui-react";

storiesOf("Pagination", module)
  .add("regular", () => (
    <React.Fragment>
      <Pagination
        className="blue"
        totalPages={15}
        activePage={3}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
      />
    </React.Fragment>
  ));
