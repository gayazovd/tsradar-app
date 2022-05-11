import {Component, OnDestroy, OnInit} from '@angular/core';
import {RentalService} from '../../services/rental.service';
import {LocalStorage} from '../../common/storage.service';
import {ConstantsService} from '../../common/constants.service';
import {ITransport} from '../../entities';
import {ConfigService} from '../../common/config.service';
import {PopupService} from '../../services/popup.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit, OnDestroy {

  public popupsIds = this.constants.POPUPS_IDS;
  public mainHeaders = this.config.mainHeaders;
  public transports$: Observable<Array<ITransport>> = this.rentalService.transports$;

  constructor(
    private localStorage: LocalStorage,
    private constants: ConstantsService,
    private rentalService: RentalService,
    private config: ConfigService,
    private popupService: PopupService,
  ) {
  }

  ngOnInit(): void {
    this.rentalService.getTransports().subscribe();
  }

  ngOnDestroy() {
    this.popupService.removePopups();
  }

  onClick() {
    this.popupService.showPopup(this.constants.POPUPS_IDS.create);
  }

}
