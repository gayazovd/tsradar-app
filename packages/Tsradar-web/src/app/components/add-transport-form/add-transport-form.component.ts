import {Component, Input, OnInit} from '@angular/core';
import {ConstantsService} from '../../common/constants.service';
import {FormGroup} from '@angular/forms';
import {ReactiveFormsService} from '../../common/reactive-forms.service';
import {ConfigService} from '../../common/config.service';
import {TransportFormService} from '../../services/transport-form.service';
import {PopupService} from '../../services/popup.service';
import {ErrorService} from '../../common/error.service';

@Component({
  selector: 'app-add-transport-form',
  templateUrl: './add-transport-form.component.html',
  styleUrls: ['./add-transport-form.component.scss']
})
export class AddTransportFormComponent {
  public transportFormText = this.constants.TRANSPORT_FORM;
  public addTransportForm: FormGroup | undefined;
  public transportsTypes = this.constants.TRANSPORTS_TYPES;

  constructor(
    public config: ConfigService,
    private constants: ConstantsService,
    private reactiveService: ReactiveFormsService,
    public transportFormService: TransportFormService,
    private popupService: PopupService,
    private errorService: ErrorService
  ) {
    this.buildForm();
  }

  private buildForm(): void {
    this.addTransportForm = this.reactiveService.buildForm(this.config.transportFormStructure);
  }

  public changeCarType(value: string, key: string) {
    const transportType = this.addTransportForm?.get(key);
    transportType?.setValue(value);
  }

  public isShowError(controlName: string): boolean | undefined {
    return this.reactiveService.isShowError(this.addTransportForm as FormGroup, controlName);
  }

  public isSuccess(controlName: string): boolean | undefined {
    return this.reactiveService.isSuccess(this.addTransportForm as FormGroup, controlName);
  }

  clearForm(): void {
    this.addTransportForm?.reset();
  }

  public onSubmit() {
    if (this.addTransportForm) {
      this.transportFormService.createNew(this.addTransportForm.value).subscribe({
        next: () => {
          this.popupService.closePopup();
          this.clearForm();
        },
        error: error => this.errorService.logError(error)
      })
    }
  }

}
