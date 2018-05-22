
import { Action } from "redux";
import { DataProvider, mixed } from "../types";

interface CommonParams {
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

export const CRUD_UPDATE = 'RA/CRUD_UPDATE';
export const CRUD_UPDATE_LOADING = 'RA/CRUD_UPDATE_LOADING';
export const CRUD_UPDATE_FAILURE = 'RA/CRUD_UPDATE_FAILURE';
export const CRUD_UPDATE_SUCCESS = 'RA/CRUD_UPDATE_SUCCESS';
export const CRUD_UPDATE_OPTIMISTIC = 'RA/CRUD_UPDATE_OPTIMISTIC';

export function crudUpdate(
  resource: string,
  id: number,
  data: any,
  previousData: any,
  basePath: string,
  redirectTo?: string
): Action;

export const CRUD_GET_LIST = 'RA/CRUD_GET_LIST';
export const CRUD_GET_LIST_LOADING = 'RA/CRUD_GET_LIST_LOADING';
export const CRUD_GET_LIST_FAILURE = 'RA/CRUD_GET_LIST_FAILURE';
export const CRUD_GET_LIST_SUCCESS = 'RA/CRUD_GET_LIST_SUCCESS';

export function crudGetList(
  resource: string,
  pagination: DataProvider.GetListParams['pagination'],
  sort: DataProvider.GetListParams['sort'],
  filter: DataProvider.GetListParams['filter'],
): Action;


export const CRUD_GET_ONE = 'RA/CRUD_GET_ONE';
export const CRUD_GET_ONE_LOADING = 'RA/CRUD_GET_ONE_LOADING';
export const CRUD_GET_ONE_FAILURE = 'RA/CRUD_GET_ONE_FAILURE';
export const CRUD_GET_ONE_SUCCESS = 'RA/CRUD_GET_ONE_SUCCESS';

export function crudGetOne(
  resource: string,
  id: mixed,
  basePath: string,
): Action;

export const CRUD_CREATE = 'RA/CRUD_CREATE';
export const CRUD_CREATE_LOADING = 'RA/CRUD_CREATE_LOADING';
export const CRUD_CREATE_FAILURE = 'RA/CRUD_CREATE_FAILURE';
export const CRUD_CREATE_SUCCESS = 'RA/CRUD_CREATE_SUCCESS';

export function crudCreate(
  resource: string,
  data: any,
  basePath: string,
  redirect?: string,
): Action;

export const CRUD_UPDATE_MANY = 'RA/CRUD_UPDATE_MANY';
export const CRUD_UPDATE_MANY_LOADING = 'RA/CRUD_UPDATE_MANY_LOADING';
export const CRUD_UPDATE_MANY_FAILURE = 'RA/CRUD_UPDATE_MANY_FAILURE';
export const CRUD_UPDATE_MANY_SUCCESS = 'RA/CRUD_UPDATE_MANY_SUCCESS';
export const CRUD_UPDATE_MANY_OPTIMISTIC = 'RA/CRUD_UPDATE_MANY_OPTIMISTIC';

export function crudUpdateMany(
  resource: string,
  ids: mixed[],
  data: any,
  basePath: string,
): Action;

export const CRUD_DELETE = 'RA/CRUD_DELETE';
export const CRUD_DELETE_LOADING = 'RA/CRUD_DELETE_LOADING';
export const CRUD_DELETE_FAILURE = 'RA/CRUD_DELETE_FAILURE';
export const CRUD_DELETE_SUCCESS = 'RA/CRUD_DELETE_SUCCESS';
export const CRUD_DELETE_OPTIMISTIC = 'RA/CRUD_DELETE_OPTIMISTIC';

export function crudDelete(
  resource: string,
  id: mixed,
  previousData: any,
  basePath: string,
): Action;

export const CRUD_DELETE_MANY = 'RA/CRUD_DELETE_MANY';
export const CRUD_DELETE_MANY_LOADING = 'RA/CRUD_DELETE_MANY_LOADING';
export const CRUD_DELETE_MANY_FAILURE = 'RA/CRUD_DELETE_MANY_FAILURE';
export const CRUD_DELETE_MANY_SUCCESS = 'RA/CRUD_DELETE_MANY_SUCCESS';
export const CRUD_DELETE_MANY_OPTIMISTIC = 'RA/CRUD_DELETE_MANY_OPTIMISTIC';

export function crudDeleteMany(
  resource: string,
  ids: mixed[],
  basePath: string,
): Action;

export const CRUD_GET_MANY = 'RA/CRUD_GET_MANY';
export const CRUD_GET_MANY_LOADING = 'RA/CRUD_GET_MANY_LOADING';
export const CRUD_GET_MANY_FAILURE = 'RA/CRUD_GET_MANY_FAILURE';
export const CRUD_GET_MANY_SUCCESS = 'RA/CRUD_GET_MANY_SUCCESS';

export function crudGetMany(
  resource: string,
  ids: mixed[],
): Action;

export const CRUD_GET_MATCHING = 'RA/CRUD_GET_MATCHING';
export const CRUD_GET_MATCHING_LOADING = 'RA/CRUD_GET_MATCHING_LOADING';
export const CRUD_GET_MATCHING_FAILURE = 'RA/CRUD_GET_MATCHING_FAILURE';
export const CRUD_GET_MATCHING_SUCCESS = 'RA/CRUD_GET_MATCHING_SUCCESS';

export function crudGetMatching(
  reference: string,
  relatedTo: mixed[],
  pagination: CommonParams['pagination'],
  sort: CommonParams['sort'],
  filter: CommonParams['filter'],
): Action;

export const CRUD_GET_MANY_REFERENCE = 'RA/CRUD_GET_MANY_REFERENCE';
export const CRUD_GET_MANY_REFERENCE_LOADING = 'RA/CRUD_GET_MANY_REFERENCE_LOADING';
export const CRUD_GET_MANY_REFERENCE_FAILURE = 'RA/CRUD_GET_MANY_REFERENCE_FAILURE';
export const CRUD_GET_MANY_REFERENCE_SUCCESS = 'RA/CRUD_GET_MANY_REFERENCE_SUCCESS';

export function crudGetManyReference(
  reference: string,
  target: string,
  id: mixed,
  relatedTo: string,
  pagination: CommonParams['pagination'],
  sort: CommonParams['sort'],
  filter: CommonParams['filter'],
  source: string,
): Action;

