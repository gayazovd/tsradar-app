import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {slider} from '../../../route-animations';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    slider
  ]
})
export class AuthComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    if (outlet) {
      return outlet?.activatedRouteData && outlet.activatedRouteData['animation'];
    }
  }

}
