import {Component, Input, OnInit} from '@angular/core';
import {ITransport} from '../../entities';
import {ConstantsService} from '../../common/constants.service';
import {some as _some} from 'lodash-es';
import {PopupService} from '../../services/popup.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {

  public reservedText: string | undefined;

  @Input() transport: ITransport | undefined

  constructor(
    private constants: ConstantsService,
    private popupService: PopupService
  ) {
  }

  ngOnInit(): void {
    this.reservedText = this.transport?.status ? this.constants.TRANSPORT_RENTAL.reserved : this.constants.TRANSPORT_RENTAL.rental;
  }

  public onClick() {
    if (this.transport) {
      this.popupService.showPopup(this.constants.POPUPS_IDS.edit, this.transport);
    }
  }

  public getType(carType: string) {
    const types = ['car', 'hatchback', 'moto'];
    return _some(types, type => type === carType) ? carType : 'default';

  }

}
