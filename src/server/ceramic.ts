// Import ComposeDB client

import { ComposeClient } from "@composedb/client";
import { definition } from "./__generated__/definition.js";

// Import your compiled composite

// Create an instance of ComposeClient
// Pass the URL of your Ceramic server
// Pass reference to your compiled composite

const compose = new ComposeClient({
  ceramic: "http://localhost:7007",
  definition,
});
