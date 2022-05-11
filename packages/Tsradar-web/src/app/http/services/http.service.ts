import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../../common/config.service';
import {IAuthToken, IUser, IUserProfile, IUserRegistration} from '../../entities';
import {Observable} from 'rxjs';
import {ITransport} from '../../entities/transport-entities/transport-entities';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) {
  }

  public login(data: IUser): Observable<IAuthToken> {
    return this.http.post<IAuthToken>(this.config.apiUrls.login, data)
  }

  public getProfile(): Observable<IUserProfile> {
    return this.http.get<IUserProfile>(this.config.apiUrls.profile);
  }

  public register(userData: IUserRegistration): Observable<IUserRegistration> {
    return this.http.post<IUserRegistration>(`${this.config.apiUrls.registration}`, userData)
  }

  public getTransports(): Observable<Array<ITransport>> {
    return this.http.get<Array<ITransport>>(`${this.config.apiUrls.transports}`);
  }

  // TODO will think about pagination
  public getListTransports(transport: ITransport, operation: string): Observable<Array<ITransport>> {
    return this.http.get<Array<ITransport>>(`${this.config.apiUrls.listTransports}/?transportId=${transport._id}&operation=${operation}`)
  }

  public createTransport(transport: ITransport): Observable<Array<ITransport>> {
    return this.http.post<Array<ITransport>>(`${this.config.apiUrls.createTransport}`, transport)
  }

  public updateTransport(transport: ITransport): Observable<Array<ITransport>> {
    return this.http.put<Array<ITransport>>(`${this.config.apiUrls.updateTransport}/?transportId=${transport._id}`, transport);
  }

  public removeCar({_id}: ITransport): Observable<Array<ITransport>> {
    return this.http.delete<Array<ITransport>>(`${this.config.apiUrls.removeTransport}/?transportId=${_id}`);
  }

  public removeAccount(): Observable<IUserProfile> {
    return this.http.delete<IUserProfile>(this.config.apiUrls.removeAccount)
  }
}
