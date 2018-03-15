import * as React from "react";
import { Omit } from "react-router";

// export * from './auth';
// export * from './button';
// export * from './detail';
// export * from './form';
// export * from './field';
// export * from './input';
// export * from './layout';
// export * from './list';
// export * from './delete';
// export Link from './Link';
// export defaultTheme from './defaultTheme';

export class ViewTitle extends React.Component<{
  title: string;
}> { }

export class CreateButton extends React.Component<{
  basePath?: string
}> { }

export class DeleteButton extends React.Component<{
  basePath?: string,
  record?: {}
}> { }

export class EditButton extends React.Component<{
  basePath?: string,
  record?: {}
}> { }

export class ListButton extends React.Component<{
  basePath?: string
}> { }

export class SavingButton extends React.Component<{
  saving?: boolean
}> { }

export class ShowButton extends React.Component<{
  basePath?: string,
  record?: {}
}> { }

export class Delete extends React.Component<{
  title?: string | JSX.Element
}> { }

export class Create extends React.Component<{
  actions?: JSX.Element,
  title?: string | JSX.Element
}> { }

export class Edit extends React.Component<{
  actions?: JSX.Element,
  title?: string | JSX.Element
}> { }

export class Show extends React.Component<{
  title?: string | JSX.Element
}> { }

export abstract class Form extends React.Component<{
  defaultValue?: {},
  validation?: (record: {}) => {}
}> { }
export class SimpleForm extends Form { }
export class TabbedForm extends Form { }

export interface InputProps {
  source: string;
  defaultValue?: any;
  validation?: (record: {}) => {};
  label?: string;
  style?: {};
  elStyle?: {};
  alwaysOn?: boolean;
  onFocus?(): void;
  onBlur?(): void;
  onChange?(event: Event): void;
}

export interface SelectProps extends InputProps {
  choices?: Array<{}>,            // optional if using ReferenceInput
  optionText?: string | ((value: any) => string),
  optionValue?: string,
  filter?: ((searchText: string, key: string, item?: any) => boolean),
  options?: any
}

export interface AutocompleteInputProps extends InputProps {
  choices?: Array<{}>,            // optional if using ReferenceInput
  optionText?: string | ((value: any) => string),
  optionValue?: string,
  filter?: ((searchText: string, key: string, item?: any) => boolean),
  options?: any
}
export class TextInput extends React.Component<InputProps> { }
export class AutocompleteInput extends React.Component<AutocompleteInputProps> { }
export class BooleanInput extends React.Component<InputProps> { }
export class NullableInput extends React.Component<InputProps> { }
export interface DateInputProps extends InputProps {
  options?: {} // TODO: use __MaterialUI ({ }Props isn't exported)
}
export class DateInput extends React.Component<DateInputProps> { }
export class DisabledInput extends React.Component<InputProps> { }
export class LongTextInput extends React.Component<InputProps> { }
export interface NumberInputProps extends InputProps {
  step?: number
}
export class NumberInput extends React.Component<NumberInputProps> { }
export class RadioButtonGroupInput extends React.Component<SelectProps> { }
export interface ReferenceInputProps extends InputProps {
  source: string;
  reference: string,
  allowEmpty?: boolean,
  perPage?: number,
  sort?: { field: string, order: 'ASC' | 'DESC' },
  filter?: { [s: string]: boolean; },
  filterToQuery?: () => {},
}
export class ReferenceInput extends React.Component<ReferenceInputProps> { }
export interface RichTextInputProps extends InputProps {
  toolbar?: {}
}
export class RichTextInput extends React.Component<RichTextInputProps> { }

export interface SelectInputProps extends Omit<SelectProps, 'source'> {
  source?: string;
  allowEmpty?: boolean;
  optionText?: string;
  choices?: any[];
  optionValue?: string;
}
export class SelectInput extends React.Component<SelectInputProps> { }
export class SelectArrayInput extends React.Component<SelectInputProps> { }
export class ReferenceArrayInput extends React.Component<ReferenceInputProps> { }
export interface TextInputProps extends InputProps {
  type?: string
}
