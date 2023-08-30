import { Button, Stack, Card, Page, TextStyle } from "@shopify/polaris";
import React, { useState } from "react";

const Home = () => {
  const [isEnable, setIsEnable] = useState(false);
  const handleChange = () => {
    setIsEnable((prev) => !prev);
  };
  return (
    <Page fullWidth title="Home">
      <Card sectioned>
        <Stack alignment="center">
          <Stack.Item fill>
            <TextStyle>
              App status is <strong>disabled</strong>
            </TextStyle>
          </Stack.Item>
          <Stack.Item>
            <Button onClick={handleChange} primary={!isEnable}>
              {isEnable ? "Disable" : "Enable"}
            </Button>
          </Stack.Item>
        </Stack>
      </Card>
    </Page>
  );
};

export default Home;
