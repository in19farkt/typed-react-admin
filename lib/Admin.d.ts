import * as React from 'react';
import { Reducer } from 'redux';
import { History } from 'history';
import { SagaIterator } from 'redux-saga';
import { Theme } from 'material-ui/styles';
import { AuthProvider, DataProvider, I18nProvider } from './types';

export interface Props {
    appLayout?: React.ReactType;
    authProvider: AuthProvider;
    children: Array<React.ReactElement<any>>; // TODO Children props type
    catchAll?: React.ReactType;
    customSagas?: Array<() => SagaIterator>;
    customReducers?: Array<Reducer<any>>;
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
