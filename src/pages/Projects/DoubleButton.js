import React from "react";
import { Button } from "semantic-ui-react";

const DoubleButton = ({ githubUrl, appUrl, disablePrimaryButton }) => {
  return (
    <Button.Group>
      <Button
        primary
        size="large"
        content="View App"
        icon="eye"
        labelPosition="left"
        href={appUrl}
        target="_blank"
        disabled={disablePrimaryButton}
      />
      <Button.Or />
      <Button
        secondary
        size="large"
        content="Github Repo"
        icon="github"
        labelPosition="right"
        href={githubUrl}
        target="_blank"
      />
    </Button.Group>
  );
};

export default DoubleButton;
