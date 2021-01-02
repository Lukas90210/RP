import React from "react";
import Button from "../../components/Button/Button";
import styled from "styled-components";

const Text = styled.text`
  color: red;
`;

const Root = () => (
  <div>
    <h1>Hello</h1>
    <Button>button</Button>
    <Text>
      <h1>hell</h1>
    </Text>
  </div>
);

export default Root;
