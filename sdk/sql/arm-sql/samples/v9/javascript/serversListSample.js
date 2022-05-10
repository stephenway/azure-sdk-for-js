/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlManagementClient } = require("@azure/arm-sql");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a list of all servers in the subscription.
 *
 * @summary Gets a list of all servers in the subscription.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-02-01-preview/examples/ServerList.json
 */
async function listServers() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.servers.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listServers().catch(console.error);

/**
 * This sample demonstrates how to Gets a list of all servers in the subscription.
 *
 * @summary Gets a list of all servers in the subscription.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-02-01-preview/examples/ServerListWithExpandEqualsAdministrators.json
 */
async function listServersWithExpandEqualsAdministrators() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.servers.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listServersWithExpandEqualsAdministrators().catch(console.error);