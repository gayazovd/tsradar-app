import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomSelectComponent {
  @Input() value: string | undefined;
  @Input() transportsTypes: Array<string> | undefined;
  @Output() changeCarType: EventEmitter<string> = new EventEmitter<string>()

  constructor() {
  }

  public changeType(e: any) {
    const value = e.target.value;
    this.changeCarType.emit(value);
  }

}
