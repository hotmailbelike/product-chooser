import React, { useState } from "react";
import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

const index = () => {
  const [open, setOpen] = useState(false);

  const handleSelection = (resources) => {
    setOpen(false);
    console.log("handleSelection -> resources", resources);
  };

  return (
    <Page
      title="Product Selector"
      primaryAction={{
        content: "Select Products",
        onAction: () => setOpen(true),
      }}
    >
      <ResourcePicker
        resourceType="Product"
        open={open}
        onCancel={() => setOpen(false)}
        onSelection={(resources) => handleSelection(resources)}
      ></ResourcePicker>
    </Page>
  );
};

export default index;
