import { Callback } from "../callback";

export interface IssueResponse {
  expand: string;
  id: string;
  self: string;
  key: string;
  renderedFields: any;
  properties: any;
  names: any;
  schema: any;
  transitions: any[];
  operations: any;
  editmeta: any;
  changelog: any;
  versionedRepresentations: any;
  fieldsToInclude: any;
  fields: any;
}

export interface SearchResult {
  isLast: boolean;
  issues: IssueResponse[];
  names: any;
  schema: any;
  nextPageToken: string;
}

export class Search {
  search(
    opts: {
      method?: 'GET' | 'POST' | 'get' | 'post';
      jql?: string;
      nextPageToken?: string;
      maxResults?: number;
      expand?: string[];
      properties?: string[];
      fieldsByKeys?: boolean;
      timeout?: number;
      fields?: string[];
    },
    callback?: Callback<SearchResult>
  ): Promise<SearchResult>;
}
