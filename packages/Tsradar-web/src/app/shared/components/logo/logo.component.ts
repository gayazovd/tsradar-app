import {Component, ViewEncapsulation} from '@angular/core';
import {ConstantsService} from '../../../common/constants.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  public logo: string = this.constants.LOGO;

  constructor(private constants: ConstantsService) {
  }
}
