import {Injectable} from '@angular/core';
import {
  BehaviorSubject,
  combineLatestWith,
  Observable,
  Subject
} from 'rxjs';
import {ITransport} from '../entities';
import {forEach as _forEach, find as _find} from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private _popups: any[] = [];

  private popUpDataStream$: Subject<ITransport> = new Subject<ITransport>();
  public popUpData$: Observable<ITransport> = this.popUpDataStream$.asObservable();
  private editStream$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isEdit$: Observable<boolean> = this.editStream$.asObservable();
  public combineEditWithData: Observable<any> = this.isEdit$.pipe(combineLatestWith(this.popUpData$))


  private get popups() {
    return this._popups;
  }

  private set popups(value) {
    this._popups = value;
  }


  public showPopup(id: string, data?: ITransport) {
    if (data) {
      this.setPopupData(data);
    }
    const popup = _find(this.popups, popup => popup.id == id)
    popup.open()
  }

  setPopupData(data: ITransport) {
    this.popUpDataStream$.next(data);
  }

  public add(popup: any) {
    this.popups.push(popup);
  }

  public closePopup() {
    _forEach(this.popups, popup => popup.close());
  }

  public removePopups() {
    this.popups = [];
  }

  public edit(isEdit: boolean) {
    this.editStream$.next(isEdit);
  }
}
