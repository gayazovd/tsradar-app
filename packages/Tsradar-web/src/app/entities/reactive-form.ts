import {FormArray, FormControl, FormGroup} from '@angular/forms';

export interface IReactiveForm {
  settings: IGroup
  customValidator: TCustomValidator;
  fields: Array<IField>;
}

export interface IField {
  controlName: string;
  initial: boolean | string
}

export interface IGroup {
  isGrouped: boolean;
  groupName: string | null;
}

export type TCustomValidator = (frm: TControls) => null | TCustomError;
export type TCustomError = { mismatch: boolean }
export type TControls = FormGroup | FormArray | FormControl;
