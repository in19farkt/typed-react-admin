declare module 'react-admin/lib/mui' {
  import * as React from "react";
  import { Omit } from "react-router";
  import { WithStyles } from "@material-ui/core";

  export class Pagination extends React.Component<{
    setPage(page: number | string): void;
    setPerPage(perPage: number | string): void;
    page: number;
    total: number;
    perPage: number;
  }> { }
  export class ViewTitle extends React.Component<{
    title: string;
  }> { }

  export class CreateButton extends React.Component<{
    basePath?: string
  }> { }

  export class DeleteButton extends React.Component<{
    resource: string;
    basePath?: string,
    record?: {}
    undoable?: boolean;
  }> { }

  export class EditButton extends React.Component<{
    basePath?: string,
    record?: {}
  }> { }

  export class Labeled extends React.Component<{
    basePath?: string,
    record?: {}
    resource?: string,
    source?: string,
    disabled?: boolean,
    fullWidth?: boolean;
    label?: string;
  }> { }

  export class ListButton extends React.Component<{
    basePath?: string
  }> { }

  export class SavingButton extends React.Component<{
    saving?: boolean
  }> { }

  export class ShowButton extends React.Component<{
    basePath?: string;
    record?: {};
    classes?: Partial<Record<'button' | 'label' | 'labelRightIcon', string>>;
  }> { }

  export class Delete extends React.Component<{
    title?: string | JSX.Element
  }> { }

  export class Create extends React.Component<{
    actions?: JSX.Element,
    title?: string | JSX.Element
  }> { }

  export class Edit extends React.Component<{
    actions?: JSX.Element;
    title?: string | JSX.Element;
    children: React.ReactNode;
  }> { }

  export class Show extends React.Component<{
    title?: string | JSX.Element;
    actions?: JSX.Element;
    children: React.ReactNode;
  }> { }

  export abstract class Form extends React.Component<{
    defaultValue?: {},
    validate?: (allValues: any, props: any) => { [key: string]: string };
  }> { }
  export class SimpleForm extends React.Component<{
    defaultValue?: {},
    record?: object;
    toolbar?: JSX.Element;
    classes?: {
      form?: string;
    }
    save?(record: object, redirect: string): void;
    validate?: (allValues: any, props: any) => { [key: string]: string };
  }> { }
  export class TabbedForm extends Form { }

  type Validator = (value: any, allValues: any, props: any) => string | undefined;

  export interface InputProps {
    source: string;
    defaultValue?: any;
    validate?: Validator | Validator[];
    label?: string;
    style?: {};
    elStyle?: {};
    alwaysOn?: boolean;
    addField?: boolean;
    className?: string;
    formClassName?: string;
    translateChoice?: boolean;
    onFocus?(): void;
    onBlur?(): void;
    onChange?(event: Event): void;
  }

  export interface SelectProps extends InputProps {
    choices?: Array<{}>,            // optional if using ReferenceInput
    optionText?: string | ((value: any) => string),
    optionValue?: string,
    filter?: ((searchText: string, key: string, item?: any) => boolean),
    options?: any // TODO: __MaterialUI.SelectFieldProps
  }

  export interface AutocompleteInputProps extends InputProps {
    choices?: Array<{}>,            // optional if using ReferenceInput
    optionText?: string | ((value: any) => string),
    optionValue?: string,
    filter?: ((searchText: string, key: string, item?: any) => boolean),
    options?: any // TODO: __MaterialUI.AutoCompleteProps<any>
  }

  export interface ImageInputProps extends InputProps {
    accept?: string; // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers
    maxSize?: number;
    minSize?: number;
    multiple?: boolean;
    classes?: { root?: string; };
    options?: {         // DropZone properties https://react-dropzone.netlify.com/#proptypes
      name: string;
      accept?: string;
      maxSize?: number;
      minSize?: number;
      multiple?: boolean;
      disableClick?: boolean;
      disabled?: boolean;
      preventDropOnDocument?: boolean;
      onBlur?(): void;
      onClick?(e: Event): void;
      onDragEnter?(): void;
      onDragLeave?(): void;
      onDragOver?(): void;
      onDragStart?(): void;
      onDrop?(acceptedFiles: File | File[], rejectedFiles: File | File[]): void;
      onDropAccepted?(): void;
      onDropRejected?(): void;
      onFileDialogCancel?(): void;
      onFocus?(): void;
      onKeyDown?(): void;
    };
  }

  export class TextInput extends React.Component<InputProps & Pick<React.HTMLProps<HTMLInputElement>, 'type'>> { }
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
    reference: string;
    resource?: string;
    basePath?: string;
    allowEmpty?: boolean;
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

  export interface SelectInputProps<T> extends Omit<SelectProps, 'source'> {
    source?: string;
    allowEmpty?: boolean;
    optionText?: string | ((choice: { id: T, name: string }) => string);
    choices?: Array<{ id: T, name: string } | boolean>;
    optionValue?: string;
  }
  export class SelectInput<T> extends React.Component<SelectInputProps<T>> { }
  export class SelectArrayInput<T> extends React.Component<SelectInputProps<T>> { }
  export class ReferenceArrayInput extends React.Component<ReferenceInputProps> { }
  export interface TextInputProps extends InputProps {
    type?: string
  }
  export class ImageInput extends React.Component<ImageInputProps> { }
  export class RefreshIconButton extends React.Component { }
}
