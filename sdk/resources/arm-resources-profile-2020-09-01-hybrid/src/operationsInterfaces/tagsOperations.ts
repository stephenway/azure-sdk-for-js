/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  TagDetails,
  TagsListOptionalParams,
  TagsDeleteValueOptionalParams,
  TagsCreateOrUpdateValueOptionalParams,
  TagsCreateOrUpdateValueResponse,
  TagsCreateOrUpdateOptionalParams,
  TagsCreateOrUpdateResponse,
  TagsDeleteOptionalParams,
  TagsResource,
  TagsCreateOrUpdateAtScopeOptionalParams,
  TagsCreateOrUpdateAtScopeResponse,
  TagsPatchResource,
  TagsUpdateAtScopeOptionalParams,
  TagsUpdateAtScopeResponse,
  TagsGetAtScopeOptionalParams,
  TagsGetAtScopeResponse,
  TagsDeleteAtScopeOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TagsOperations. */
export interface TagsOperations {
  /**
   * This operation performs a union of predefined tags, resource tags, resource group tags and
   * subscription tags, and returns a summary of usage for each tag name and value under the given
   * subscription. In case of a large number of tags, this operation may return a previously cached
   * result.
   * @param options The options parameters.
   */
  list(
    options?: TagsListOptionalParams
  ): PagedAsyncIterableIterator<TagDetails>;
  /**
   * This operation allows deleting a value from the list of predefined values for an existing predefined
   * tag name. The value being deleted must not be in use as a tag value for the given tag name for any
   * resource.
   * @param tagName The name of the tag.
   * @param tagValue The value of the tag to delete.
   * @param options The options parameters.
   */
  deleteValue(
    tagName: string,
    tagValue: string,
    options?: TagsDeleteValueOptionalParams
  ): Promise<void>;
  /**
   * This operation allows adding a value to the list of predefined values for an existing predefined tag
   * name. A tag value can have a maximum of 256 characters.
   * @param tagName The name of the tag.
   * @param tagValue The value of the tag to create.
   * @param options The options parameters.
   */
  createOrUpdateValue(
    tagName: string,
    tagValue: string,
    options?: TagsCreateOrUpdateValueOptionalParams
  ): Promise<TagsCreateOrUpdateValueResponse>;
  /**
   * This operation allows adding a name to the list of predefined tag names for the given subscription.
   * A tag name can have a maximum of 512 characters and is case-insensitive. Tag names cannot have the
   * following prefixes which are reserved for Azure use: 'microsoft', 'azure', 'windows'.
   * @param tagName The name of the tag to create.
   * @param options The options parameters.
   */
  createOrUpdate(
    tagName: string,
    options?: TagsCreateOrUpdateOptionalParams
  ): Promise<TagsCreateOrUpdateResponse>;
  /**
   * This operation allows deleting a name from the list of predefined tag names for the given
   * subscription. The name being deleted must not be in use as a tag name for any resource. All
   * predefined values for the given name must have already been deleted.
   * @param tagName The name of the tag.
   * @param options The options parameters.
   */
  delete(tagName: string, options?: TagsDeleteOptionalParams): Promise<void>;
  /**
   * This operation allows adding or replacing the entire set of tags on the specified resource or
   * subscription. The specified entity can have a maximum of 50 tags.
   * @param scope The resource scope.
   * @param parameters Wrapper resource for tags API requests and responses.
   * @param options The options parameters.
   */
  createOrUpdateAtScope(
    scope: string,
    parameters: TagsResource,
    options?: TagsCreateOrUpdateAtScopeOptionalParams
  ): Promise<TagsCreateOrUpdateAtScopeResponse>;
  /**
   * This operation allows replacing, merging or selectively deleting tags on the specified resource or
   * subscription. The specified entity can have a maximum of 50 tags at the end of the operation. The
   * 'replace' option replaces the entire set of existing tags with a new set. The 'merge' option allows
   * adding tags with new names and updating the values of tags with existing names. The 'delete' option
   * allows selectively deleting tags based on given names or name/value pairs.
   * @param scope The resource scope.
   * @param parameters Wrapper resource for tags patch API request only.
   * @param options The options parameters.
   */
  updateAtScope(
    scope: string,
    parameters: TagsPatchResource,
    options?: TagsUpdateAtScopeOptionalParams
  ): Promise<TagsUpdateAtScopeResponse>;
  /**
   * Gets the entire set of tags on a resource or subscription.
   * @param scope The resource scope.
   * @param options The options parameters.
   */
  getAtScope(
    scope: string,
    options?: TagsGetAtScopeOptionalParams
  ): Promise<TagsGetAtScopeResponse>;
  /**
   * Deletes the entire set of tags on a resource or subscription.
   * @param scope The resource scope.
   * @param options The options parameters.
   */
  deleteAtScope(
    scope: string,
    options?: TagsDeleteAtScopeOptionalParams
  ): Promise<void>;
}