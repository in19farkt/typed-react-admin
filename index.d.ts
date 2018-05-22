// TypeScript Version: 2.4
import * as React from 'react';
import { Omit } from 'react-router';


export * from './lib';

export class Datagrid extends React.Component<IDatagridProps> { }
export class SimpleShowLayout extends React.Component<IAorFieldProps> { }
export class SingleFieldList extends React.Component<IAorFieldProps & {
  linkType?: boolean;
  style?: React.CSSProperties;
}> { }
export class TabbedShowLayout extends React.Component<IAorFieldProps & {
  innerRef?(ref: any): void;
}> { }
export class Tab extends React.Component<IAorFieldProps & {
  icon?: React.ReactChild;
  label?: string | JSX.Element;
}> { }

export interface IDatagridProps {
  styles?: {
    table?: React.CSSProperties;
    tbody?: React.CSSProperties;
    tr?: React.CSSProperties;
    header?: {
      th?: React.CSSProperties;
      'th:first-child'?: React.CSSProperties;
    },
    cell?: {
      td?: React.CSSProperties;
      'td:first-child'?: React.CSSProperties;
    },
  };
  rowStyle?: (record: {}, index: number) => React.CSSProperties;
  options?: React.CSSProperties;
  headerOptions?: React.CSSProperties;
  bodyOptions?: React.CSSProperties;
  rowOptions?: React.CSSProperties;
}

export interface IFromListDataProps<T> {
  currentSort?: {
    field: string;
    order: string;
  };
  data?: { [key: number]: T };
  ids?: number[];
  isLoading?: boolean;
  resource?: string;
  setSort?(): void;
}

export interface IOwnFieldProps {
  source: string;
  label?: string;
  addLabel?: boolean;
  sortable?: boolean;
  headerClassName?: string;
  cellClassName?: string;
  className?: string;
  textAlign?: 'left' | 'right'
}

export interface IAorFieldProps<T = any> {
  record?: Record<string, T>;
  basePath?: string;
}

export type IFieldProps<T = any> = IOwnFieldProps & IAorFieldProps<T>;

export class TextField extends React.Component<IFieldProps> { }
export class ChipField extends React.Component<IFieldProps> { }
export class BooleanField extends React.Component<IFieldProps> { }
export class EmailField extends React.Component<IFieldProps> { }
export class DateField extends React.Component<IFieldProps> { }
export class UrlField extends React.Component<IFieldProps> { }

export class ReferenceField extends React.Component<IFieldProps & {
  reference: string;
  allowEmpty?: boolean;
  linkType?: 'edit' | 'show' | false;
}> { }

export class ReferenceArrayField extends React.Component<IFieldProps & {
  reference: string;
}> { }

export class ReferenceManyField extends React.Component<Omit<IFieldProps, 'source'> & {
  reference: string;
  target: string;
  perPage?: number;
}> { }

export function translate<Props extends ITranslateProps>(
  WrappedComponent: React.ComponentType<Props>,
): React.ComponentClass<Omit<Props, keyof ITranslateProps>>

export type TranslateFunction = (code: string, params?: object | number) => string;

export interface ITranslateProps {
  translate: TranslateFunction;
}

export class MenuItemLink extends React.Component<{
  to: string;
  primaryText: string;
  leftIcon?: React.ReactElement<any>;
  onClick(): void
}> { }


export class List extends React.Component<{
  title?: string | JSX.Element,
  perPage?: number,
  defaultSort?: { field: string, order: 'ASC' | 'DESC' },
  actions?: React.Component<void>,
  filters?: JSX.Element,
  bulkActions?: boolean;
  pagination?: JSX.Element
}> { }

export class Show extends React.Component<{
  title?: string | JSX.Element,
  actions?: JSX.Element,
}> { }

export class RefreshButton extends React.Component { }

export interface ICustomListProps<T = any> {
  data?: T[];
  ids?: number[];
}
export class Filter extends React.Component { }

export interface IMenuProps {
  onMenuTap(): void;
  logout?: React.ReactChild;
  hasDashboard: boolean;
}

export class Menu extends React.Component<IMenuProps> { }

export class Sidebar extends React.Component { }
export class Notification extends React.Component { }

export interface AppBarProps {
  title: string | JSX.Element;
  classes?: Record<string, string>;
  open?: boolean;
}

export class AppBar extends React.Component<AppBarProps> { }

export class Authenticated extends React.Component<{
  authParams?: object;
  location: object;
}> { }

export function getResources(state: any): string[];
