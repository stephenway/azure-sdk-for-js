/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityCenter } = require("@azure/arm-security");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates a provided Microsoft Defender for Cloud pricing configuration in the subscription.
 *
 * @summary Updates a provided Microsoft Defender for Cloud pricing configuration in the subscription.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2023-01-01/examples/Pricings/PutPricingByName_example.json
 */
async function updatePricingOnSubscription() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const pricingName = "CloudPosture";
  const pricing = { pricingTier: "Standard" };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.pricings.update(pricingName, pricing);
  console.log(result);
}

/**
 * This sample demonstrates how to Updates a provided Microsoft Defender for Cloud pricing configuration in the subscription.
 *
 * @summary Updates a provided Microsoft Defender for Cloud pricing configuration in the subscription.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2023-01-01/examples/Pricings/PutPricingByNamePartialSuccess_example.json
 */
async function updatePricingOnSubscriptionPartialSuccess() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const pricingName = "CloudPosture";
  const pricing = { pricingTier: "Standard" };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.pricings.update(pricingName, pricing);
  console.log(result);
}

async function main() {
  updatePricingOnSubscription();
  updatePricingOnSubscriptionPartialSuccess();
}

main().catch(console.error);
