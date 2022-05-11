import {Component, Input, OnInit} from '@angular/core';
import {PopupService} from '../../../services/popup.service';
import {ConstantsService} from '../../../common/constants.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  public isVisible: boolean = false;
  public isEdit: boolean = false;
  @Input() id: string | undefined;
  @Input() title: string | undefined;


  constructor(
    private popupService: PopupService,
    private constants: ConstantsService
  ) {
  }

  ngOnInit() {
    this.popupService.add(this);
  }

  public onClose() {
    this.popupService.closePopup();
  }

  public open() {
    this.isVisible = !this.isVisible;
  }

  public close() {
    this.isVisible = false;
    this.popupService.edit(false);
    this.isEdit = false;
  }

  public onEdit() {
    this.isEdit = !this.isEdit;
    this.popupService.edit(this.isEdit);
  }


  public isEditPopup() {
    return this.id === this.constants.POPUPS_IDS.edit;
  }
}
