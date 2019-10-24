declare module 'react-admin/lib/auth/WithPermissions' {
  import { Permissions } from '_types';
  import * as React from 'react';

  export interface WithPermissionsProps {
    permissions: Permissions | null
  }

  type PermissionsRender = (props: WithPermissionsProps) => React.ReactNode;

  export interface Props {
    children?: PermissionsRender;
    render?: PermissionsRender;
  }

  export default class extends React.Component<Props> { }
}
