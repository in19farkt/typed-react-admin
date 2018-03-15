import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface Props {
    context?: 'route' | 'registration';
    name: string;
    list?: React.ComponentType<ResourceViewProps>;
    create?: React.ComponentType<ResourceViewProps>;
    edit?: React.ComponentType<ResourceViewProps>;
    show?: React.ComponentType<ResourceViewProps>;
    remove?: React.ComponentType<ResourceViewProps>;
    icon?: React.ComponentType;
    options?: ResourceOptions;
}

export interface ResourceOptions {
    label?: string;
}

// TODO route params
export interface ResourceViewProps extends RouteComponentProps<any> {
    hasCreate: boolean;
    hasDelete: boolean;
    hasEdit: boolean;
    hasList: boolean;
    hasShow: boolean;
    resource: string;
    options?: ResourceOptions;
    permissions?: any;
}

export default class extends React.Component<Props> { }
