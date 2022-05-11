import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ConstantsService} from '../../../common/constants.service';
import {ConfigService} from '../../../common/config.service';
import {FormGroup} from '@angular/forms';
import {ReactiveFormsService} from '../../../common/reactive-forms.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {IError, IUserRegistration} from '../../../entities';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {

  public registrationText = this.constants.REGISTRATION;
  public misMatchText = this.constants.FORM_ERRORS.mismatch;
  public mobileMaxLength = this.constants.FROM_PATTERNS.mobileMaxLength
  public registrationForm: FormGroup | undefined;
  public successText: string | any;

  constructor(
    private constants: ConstantsService,
    private config: ConfigService,
    private reactiveService: ReactiveFormsService,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {

  }

  private buildForm(): void {
    this.registrationForm = this.reactiveService.buildForm(this.config.registrationStructure);
  }

  public onSubmit() {
    this.authService.register(this.registrationForm?.value).subscribe(
      {
        next: (data: IUserRegistration) => this.handleRegistrationSuccess(data),
        error: (e: IError) => this.handleError(e)
      }
    )
  }

  private handleRegistrationSuccess(data: IUserRegistration): void {
    this.successText = `${data.username} ${this.constants.SUCCESS_REGISTRATION_TEXT}`;
    this.registrationForm?.reset();
  }

  private handleError(e: IError) {
    console.log('error: ', e)
  }

  public isShowError(controlName: string): boolean | void {
    if (this.registrationForm) {
      return this.reactiveService.isShowError(this.registrationForm, controlName);
    }
  }

  checkMatchPassword() {
    return this.registrationForm?.get('password_group')?.errors?.['mismatch'];
  }

  isSuccess(controlName: string): boolean | void {
    if (this.registrationForm) {
      return this.reactiveService.isSuccess(this.registrationForm, controlName)
    }
  }

}
