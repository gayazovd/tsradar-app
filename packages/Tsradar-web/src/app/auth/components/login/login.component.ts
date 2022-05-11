import {Component} from '@angular/core';
import {ConstantsService} from '../../../common/constants.service';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {IError} from '../../../entities';
import {forEach as _forEach} from 'lodash-es';
import {ReactiveFormsService} from '../../../common/reactive-forms.service';
import {ConfigService} from '../../../common/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public loginText = this.constants.LOGIN;
  public passwordMaxLength: number = this.constants.FROM_PATTERNS.passwordMaxLength;
  public loginForm: FormGroup | undefined;
  public errorMessage: string | undefined;

  constructor(
    private constants: ConstantsService,
    private config: ConfigService,
    private authService: AuthService,
    private router: Router,
    private reactiveService: ReactiveFormsService
  ) {
    this.buildForm();
  }

  public checkCorrecting() {
    return this.loginForm?.errors?.['incorrect'];
  }

  private buildForm(): void {
    this.loginForm = this.reactiveService.buildForm([this.config.loginStructure]);
  }

  public onSubmit(): void {
    this.authService.login(this.loginForm?.value).subscribe({
      next: () => this.router.navigate(['main/rentals']),
      error: error => this.handleError(error)
    });
  }

  private handleError(error: IError) {
    if (error.statusCode === this.constants.ERROR_STATUS_CODE.unauthorizedUser || error.statusCode === this.constants.ERROR_STATUS_CODE.notFound) {
      const {message} = error;
      this.errorMessage = message;
      this.setFieldsOptions(['username', 'password'], {incorrect: true});
    }
  }

  public setFieldsOptions(controlNames: string[], options: { [key: string]: boolean } | null) {
    this.loginForm?.setErrors(options);
    _forEach(controlNames, controlName => {
      this.loginForm?.get(controlName)?.setErrors(options);
    })
  }

  public isShowError(controlName: string): boolean | undefined {
    return this.reactiveService.isShowError(this.loginForm as FormGroup, controlName);
  }

  public isSuccess(controlName: string): boolean | void {
    return this.reactiveService.isSuccess(this.loginForm as FormGroup, controlName);
  }

}
