import {Injectable} from '@angular/core';
import {HttpService} from '../../http/services/http.service';
import {LocalStorage} from '../../common/storage.service';
import {ConstantsService} from '../../common/constants.service';
import {IUser, IUserProfile, IUserRegistration} from '../../entities';
import {catchError, switchMap, tap, throwError} from 'rxjs';
import {ErrorService} from '../../common/error.service';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpService,
    private localStorage: LocalStorage,
    private constants: ConstantsService,
    private errorService: ErrorService
  ) {
  }

  public removeAccount() {
    return this.http.removeAccount().pipe(
      catchError(err => {
        this.errorService.catchUnauthorized(err)
        return throwError(err)
      })
    )
  }

  public login(data: IUser) {
    return this.http.login(data).pipe(
      tap(({access_token}) => {
        this.setAuthorizationToken(access_token);
      }),
      switchMap(() => {
        return this.http.getProfile().pipe(
          tap(user => {
            this.setUser(user);
          })
        )
      }),
      catchError(e => {
        this.errorService.logError(e);
        const error = this.errorService.extractErrorField(e);
        return throwError(() => error);
      }),
    )
  }

  register(data: IUserRegistration) {
    return this.http.register(data).pipe(
      catchError(e => {
        this.errorService.logError(e);
        const error = this.errorService.extractErrorField(e);
        return throwError(() => error);
      })
    )
  }

  public isLoggedIn(): boolean {
    return this.getAuthorizationToken() !== null;
  }

  public logout() {
    this.clear();
  }

  public setUser(userInfo: IUserProfile) {
    this.localStorage.setItem(this.constants.STORAGE_KEYS.userinfo, JSON.stringify(userInfo));
  }

  public setAuthorizationToken(token: string): void {
    this.localStorage.setItem(this.constants.STORAGE_KEYS.authToken, token)
  }

  public clear(): void {
    this.localStorage.clear()
  }

  public getAuthorizationToken(): string | null {
    return this.localStorage.getItem(this.constants.STORAGE_KEYS.authToken)
  }
}
