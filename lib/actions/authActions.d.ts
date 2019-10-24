declare module 'react-admin/lib/actions/authActions' {
  import { Action } from "redux";

  export const USER_CHECK: string;
  export const USER_CHECK_SUCCESS: string;
  export const USER_LOGIN: string;
  export const USER_LOGIN_LOADING: string;
  export const USER_LOGIN_FAILURE: string;
  export const USER_LOGIN_SUCCESS: string;
  export const USER_LOGOUT: string;

  export function userLogin(payload?: any, redirectTo?: string): Action;
  // TODO: routeParams
  export function userCheck(payload?: Record<string, any>, pathName?: string, routeParams?: any): Action;
  export function userLogout(redirectTo?: string): Action;
}
