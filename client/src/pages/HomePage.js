import { Button, Stack, Card, Page, TextStyle } from "@shopify/polaris";
import React from "react";

const Home = () => {
  return (
    <Page title="Home">
      <Card sectioned>
        <Stack alignment="center">
          <Stack.Item fill>
            <TextStyle>
              App status is <strong>disabled</strong>
            </TextStyle>
          </Stack.Item>
          <Stack.Item>
            <Button primary>Enable</Button>
          </Stack.Item>
        </Stack>
      </Card>
    </Page>
  );
};

export default Home;
