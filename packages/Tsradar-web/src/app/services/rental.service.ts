import {Injectable} from '@angular/core';
import {HttpService} from '../http/services/http.service';
import {BehaviorSubject, catchError, Observable, tap, throwError} from 'rxjs';
import {ITransport} from '../entities';
import {ConstantsService} from '../common/constants.service';
import {ErrorService} from '../common/error.service';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private _transports: Array<ITransport> = [];
  private transportListStream$: BehaviorSubject<Array<ITransport> | []> = new BehaviorSubject<Array<ITransport> | []>(this._transports);
  public transports$: Observable<Array<ITransport>> = this.transportListStream$.asObservable();

  constructor(
    private constants: ConstantsService,
    private http: HttpService,
    private errorService: ErrorService
  ) {
  }

  public setTransport(transports: Array<ITransport>) {
    this.transportListStream$.next(transports);
  }

  getTransports(): Observable<Array<ITransport>> {
    return this.http.getTransports().pipe(
      tap(transports => this.setTransport(transports)),
      catchError(err => {
        this.errorService.catchUnauthorized(err)
        return throwError(err)
      })
    )
  }

  getTransportList(): any/*Observable<Array<ITransport>>*/ {
    //TODO will think about pagination
  }

}
