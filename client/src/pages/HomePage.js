import {
  Button,
  HorizontalStack,
  LegacyCard,
  Page,
  Text,
} from "@shopify/polaris";
import React from "react";

const Home = () => {
  return (
    <Page title="Home">
      <LegacyCard sectioned>
        <HorizontalStack blockAlign="center" align="space-between">
          <Text>
            App status is <strong>disabled</strong>
          </Text>
          <Button primary>Enable</Button>
        </HorizontalStack>
      </LegacyCard>
    </Page>
  );
};

export default Home;
