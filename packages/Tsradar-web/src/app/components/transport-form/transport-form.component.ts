import {Component, OnInit} from '@angular/core';
import {ReactiveFormsService} from '../../common/reactive-forms.service';
import {FormGroup} from '@angular/forms';
import {ConfigService} from '../../common/config.service';
import {IEditTransportConfig, IError, ITransport} from '../../entities';
import {map, Observable, tap} from 'rxjs';
import {PopupService} from '../../services/popup.service';
import {ConstantsService} from '../../common/constants.service';
import {TransportFormService} from '../../services/transport-form.service';
import {find as _find} from 'lodash-es';
import {ErrorService} from '../../common/error.service';

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.scss']
})
export class TransportFormComponent {
  public transportFormText = this.constants.TRANSPORT_FORM;
  public transportsTypes = this.constants.TRANSPORTS_TYPES;
  public transportForm: FormGroup | undefined;
  public editAndTransport: Observable<IEditTransportConfig> = this.popupService.combineEditWithData.pipe(
    tap(([isEdit, transport]) => {
      if (isEdit) {
        this.transportForm?.patchValue(transport);
      }
    }),
    map(([isEdit, transport]) => ({
        isEdit,
        transport
      })
    )
  )


  constructor(
    private config: ConfigService,
    private constants: ConstantsService,
    private reactiveService: ReactiveFormsService,
    private popupService: PopupService,
    private transportFormService: TransportFormService,
    private errorService: ErrorService
  ) {
    this.buildForm();
  }

  public isEdit(transport: IEditTransportConfig): boolean {
    return transport.isEdit;
  }

  public getField(transport: any, key: string): string {
    // @ts-ignore
    return transport[key];
  }

  onSubmit(_id: string): void {
    const formWithId = {...this.transportForm?.value, ...{_id}}
    this.transportFormService.update(formWithId).pipe(tap(
      (transports: Array<ITransport>) => {
        const transport: ITransport | undefined = _find(transports, {_id});
        if (transport) {
          this.popupService.setPopupData(transport);
        }
      }
    )).subscribe({
        next: (transports) => this.handleSuccess(transports),
        error: (e) => this.handleError(e)
      }
    )
  }

  handleSuccess(transports: Array<ITransport>) {
    this.popupService.edit(false);
  }


  onRemove(_id: string): void {
    const formWithId = {...this.transportForm?.value, ...{_id}}
    this.transportFormService.remove(formWithId).subscribe({
      next: () => this.popupService.closePopup(),
      error: (e) => this.handleError(e)
    });
  }

  private handleError(e: IError) {
    this.errorService.logError(e);
  }

  private buildForm(): void {
    this.transportForm = this.reactiveService.buildForm(this.config.transportFormStructure);
  }

  public changeCarType(value: string, key: string) {
    const transportType = this.transportForm?.get(key);
    transportType?.setValue(value);
  }

  public changeStatus(event: any, key: string) {
    const status = this.transportForm?.get(key);
    status?.setValue(event.target.value);
  }

  public isShowError(controlName: string): boolean | undefined {
    return this.reactiveService.isShowError(this.transportForm as FormGroup, controlName);
  }

  public isSuccess(controlName: string): boolean | undefined {
    return this.reactiveService.isSuccess(this.transportForm as FormGroup, controlName);
  }

}
