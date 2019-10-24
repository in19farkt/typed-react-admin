declare module 'react-admin/lib/Resource' {
  import * as React from 'react';
  import { RouteComponentProps } from 'react-router';
  import { Permissions } from '_types';

  export interface Props {
    context?: 'route' | 'registration';
    name: string;
    list?: React.ComponentType<ResourceViewProps> | null | false;
    create?: React.ComponentType<ResourceViewProps> | null | false;
    edit?: React.ComponentType<ResourceViewProps> | null | false;
    show?: React.ComponentType<ResourceViewProps> | null | false;
    remove?: React.ComponentType<ResourceViewProps> | null | false;
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
    permissions: Permissions | null;
  }

  export default class extends React.Component<Props> { }

}
