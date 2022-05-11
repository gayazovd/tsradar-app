import {Injectable} from '@angular/core';
import {AuthService} from '../auth/services/auth.service';

@Injectable()
export class SettingsService {
  constructor(private authService: AuthService) {
  }

  removeAccount() {
    return this.authService.removeAccount();
  }
}
