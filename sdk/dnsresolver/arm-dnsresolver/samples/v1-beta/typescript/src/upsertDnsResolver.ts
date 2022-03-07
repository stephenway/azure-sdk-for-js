/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Creates or updates a DNS resolver.
 *
 * @summary Creates or updates a DNS resolver.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/preview/2020-04-01-preview/examples/DnsResolver_Put.json
 */
import {
  DnsResolver,
  DnsResolverManagementClient
} from "@azure/arm-dnsresolver";
import { DefaultAzureCredential } from "@azure/identity";

async function upsertDnsResolver() {
  const subscriptionId = "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const resourceGroupName = "sampleResourceGroup";
  const dnsResolverName = "sampleDnsResolver";
  const parameters: DnsResolver = {
    location: "westus2",
    tags: { key1: "value1" },
    virtualNetwork: {
      id:
        "/subscriptions/cbb1387e-4b03-44f2-ad41-58d4677b9873/resourceGroups/virtualNetworkResourceGroup/providers/Microsoft.Network/virtualNetworks/sampleVirtualNetwork"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const result = await client.dnsResolvers.beginCreateOrUpdateAndWait(
    resourceGroupName,
    dnsResolverName,
    parameters
  );
  console.log(result);
}

upsertDnsResolver().catch(console.error);