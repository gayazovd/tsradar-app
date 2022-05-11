import {Injectable} from '@angular/core';
import {AuthService} from '../auth/services/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class ProfileService {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
