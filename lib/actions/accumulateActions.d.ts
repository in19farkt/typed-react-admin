import { Action } from 'redux';
import { mixed } from '../types';

export const CRUD_GET_MANY_ACCUMULATE: string;

export function crudGetManyAccumulate(resource: string, ids: mixed[]): Action;
