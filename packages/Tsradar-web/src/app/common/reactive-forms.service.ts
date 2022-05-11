import {Injectable} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ConstantsService} from './constants.service';
import {forEach as _forEach, get as _get} from 'lodash-es';
import {IField, IReactiveForm, TCustomValidator} from '../entities/reactive-form';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormsService {
  private VALIDATORS: { [key: string]: ValidatorFn } = {
    required: Validators.required,
    password: Validators.pattern(this.constants.FROM_PATTERNS.password),
    username: Validators.pattern(this.constants.FROM_PATTERNS.email),
    full_name: Validators.pattern(this.constants.FROM_PATTERNS.name),
    phone: Validators.pattern(this.constants.FROM_PATTERNS.mobile),
    confirm_password: Validators.pattern(this.constants.FROM_PATTERNS.password)
  }

  constructor(
    private constants: ConstantsService
  ) {

  }

  public buildForm(options: Array<IReactiveForm>): FormGroup {
    const accumulatorGroup = new FormGroup({});
    _forEach(options, item => {
      const {settings, fields, customValidator} = item;
      const {isGrouped, groupName} = settings;

      if (isGrouped && groupName) {
        const {name, intoAccumulatorGroup} = this.buildGroupInto(fields, customValidator, groupName);
        accumulatorGroup.addControl(name, intoAccumulatorGroup)
      } else {
        this.buildControlInto(accumulatorGroup, fields)
      }
    })

    return accumulatorGroup;
  }

  private buildControlInto(intoGroup: FormGroup, fields: Array<IField>): void {
    _forEach(fields, field => {
      const {controlName, initial} = field;
      const requireValidator = _get(this.VALIDATORS, 'required');
      const patternValidator = _get(this.VALIDATORS, controlName, () => null);
      const control = new FormControl(initial, [requireValidator, patternValidator]);
      intoGroup.addControl(controlName, control);
    })
  }

  private buildGroupInto(fields: Array<IField>, customValidator: TCustomValidator, groupName: string) {
    const intoAccumulatorGroup = new FormGroup({});
    this.buildControlInto(intoAccumulatorGroup, fields);

    if (customValidator) {
      // @ts-ignore
      intoAccumulatorGroup.addValidators(customValidator)
    }

    return {
      name: groupName,
      intoAccumulatorGroup
    }
  }

  public isShowError(form: FormGroup | AbstractControl, controlName: string): boolean | undefined {
    const field = form?.get(controlName);
    return field?.touched && field.invalid;
  }

  public isSuccess(form: FormGroup | AbstractControl, controlName: string): boolean | undefined {
    const field = form?.get(controlName);
    return field?.touched && field.valid;
  }
}
