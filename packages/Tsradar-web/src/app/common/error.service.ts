import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {get as _get} from 'lodash-es';
import {IError} from '../entities';
import {ProfileService} from '../services/profile.service';
import {ConstantsService} from './constants.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private static readonly ERROR_MESSAGE = 'WARNING! Fetching error!';

  constructor(
    private constants: ConstantsService,
    private router: Router
  ) {
  }

  logError(error: any) {
    console.warn(ErrorService.ERROR_MESSAGE, error);
  }

  extractErrorField(httpErrorResponse: HttpErrorResponse): IError {
    const error = _get(httpErrorResponse, 'error');
    return error;
  }

  catchUnauthorized(e: HttpErrorResponse): IError | void {
    const error = this.extractErrorField(e);
    if (error.statusCode === this.constants.ERROR_STATUS_CODE.unauthorizedUser) {
      this.router.navigate(['login'])
      return;
    }
    return error;
  }
}
