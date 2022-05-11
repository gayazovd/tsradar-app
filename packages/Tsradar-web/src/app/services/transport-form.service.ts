import {Injectable} from '@angular/core';
import {HttpService} from '../http/services/http.service';
import {ITransport} from '../entities';
import {catchError, Observable, switchMap, tap, throwError} from 'rxjs';
import {RentalService} from './rental.service';
import {ErrorService} from '../common/error.service';


@Injectable()
export class TransportFormService {
  constructor(
    private http: HttpService,
    private rentalService: RentalService,
    private errorService: ErrorService
  ) {
  }

  update(transport: ITransport) {
    return this.http.updateTransport(transport).pipe(
      tap((transports) => this.rentalService.setTransport(transports)),
      catchError(err => {
        this.errorService.catchUnauthorized(err)
        return throwError(err)
      })
    )
  }

  remove(transport: ITransport): Observable<Array<ITransport>> {
    return this.http.removeCar(transport).pipe(
      tap((transports) => this.rentalService.setTransport(transports)),
      catchError(err => {
        this.errorService.catchUnauthorized(err)
        return throwError(err)
      })
    )
  }

  createNew(transport: ITransport) {
    return this.http.createTransport(transport).pipe(
      tap(transports => this.rentalService.setTransport(transports)),
      catchError(err => {
        this.errorService.catchUnauthorized(err)
        return throwError(err)
      })
    )
  }
}
