declare module 'react-admin/lib/Admin' {
  import { Permissions } from '_types';
  import * as React from 'react';
  import { Reducer } from 'redux';
  import { History } from 'history';
  import { SagaIterator } from 'redux-saga';
  import { Theme } from '@material-ui/core/styles';
  import { AuthProvider, DataProvider, I18nProvider } from 'react-admin/lib/_types';

  type PermissionsChildren = (permissions: Permissions) => React.ReactElement<any>[];

  export interface Props {
    appLayout?: React.ReactType;
    authProvider: AuthProvider;
    children: Array<React.ReactElement<any>> | PermissionsChildren; // TODO Children props type
    catchAll?: React.ReactType;
    customSagas?: Array<() => SagaIterator>;
    customReducers?: Partial<Record<string, Reducer<any>>>;
    customRoutes?: Array<React.ReactElement<any>>;
    dashboard?: React.ReactType;
    history?: History;
    loginPage?: React.ReactType;
    logoutButton?: React.ReactType;
    menu?: React.ReactType;
    dataProvider: DataProvider.Provider;
    i18nProvider?: I18nProvider;
    theme?: Theme;
    title?: React.ReactChild;
    locale?: string;
    initialState?: any;
  }

  export default class extends React.Component<Props> { }
}
