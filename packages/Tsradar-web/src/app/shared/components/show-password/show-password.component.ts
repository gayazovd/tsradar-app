import {Component, ContentChild, ElementRef, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.scss']
})
export class ShowPasswordComponent {
  @ContentChild('refInput') inputEl: ElementRef<HTMLInputElement> | undefined;
  private isShown: boolean = false;

  togglePassword(): void {
    this.isShown = !this.isShown;
    this.isShown ? this.inputEl!.nativeElement.type = 'text' : this.inputEl!.nativeElement.type = 'password';
  }
}
