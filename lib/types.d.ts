import * as React from 'react';
import * as MUI from 'material-ui';

export type mixed = number | string;

export interface ResourceProps {
  name: string;
  list?: React.ComponentType;
  create?: React.ComponentType;
  edit?: React.ComponentType;
  show?: React.ComponentType;
  remove?: React.ComponentType;
  icon?: typeof MUI.SvgIcon;
  options?: { label: string };
}

export interface Pagination {
  page: number;
  perPage: number;
}

export interface Sort {
  field: string;
  order: 'ASC' | 'DESC';
}

export type ViewType = 'edit' | 'show' | 'list';
export type NotificationType = 'info' | 'warning' | 'confirm';

export interface I18nMessages {
  [key: string]: string | I18nMessages;
}

// TODO: params
export type AuthProvider = (type: string, params: any) => Promise<void> | Promise<{ redirectTo: string }>;

export type I18nProvider = (message: string) => I18nMessages | Promise<I18nMessages>;

export namespace DataProvider {
  type Provider = (type: string, resource: string, params: Params) => Promise<Response>;

  type Params =
    | GetListParams | GetOneParams | CreateParams | UpdateParams | UpdateManyParams
    | DeleteParams | DeleteManyParams | GetManyParams | GetManyReferenceParams;

  interface GetListParams {
    pagination: {
      page: number;
      perPage: number;
    };
    sort: {
      field: string;
      order: 'ASC' | 'DESC';
    };
    filter: Record<string, any>;
  }

  interface GetOneParams {
    id: mixed;
  }

  interface CreateParams {
    data: any;
  }

  interface UpdateParams {
    id: mixed;
    data: any;
    previousData: any;
  }

  interface UpdateManyParams {
    ids: mixed[];
    data: any;
  }

  interface DeleteParams {
    id: mixed;
    previousData: any;
  }

  interface DeleteManyParams {
    ids: mixed[];
  }

  interface GetManyParams {
    ids: mixed[];
  }

  interface GetManyReferenceParams extends GetListParams {
    target: string;
    id: mixed;
  }

  type Response = PaginatedListResponse | ListResponse | OneResponse | IdsResponse;

  interface PaginatedListResponse {
    data: any[];
    total: number;
  }

  interface ListResponse {
    data: any[];
  }

  interface OneResponse {
    data: any;
  }

  interface IdsResponse {
    data: mixed[];
  }
}
