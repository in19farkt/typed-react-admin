declare module 'react-admin/lib/actions/accumulateActions' {
  import { Action } from 'redux';
  import { mixed } from 'react-admin/lib/_types';

  export const CRUD_GET_MANY_ACCUMULATE: string;

  export function crudGetManyAccumulate(resource: string, ids: mixed[]): Action;
}
