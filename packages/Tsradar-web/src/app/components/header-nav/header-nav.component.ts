import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../common/config.service';
import {Router, RouterLinkActive} from '@angular/router';
import {SettingsService} from '../../services/settings.service';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {
  public links = this.config.headerNavigation;
  public profileList = this.config.profileList;
  public settingsList = this.config.settingsList;
  public isShowSettings: boolean = false;
  public isShowProfile: boolean = false;

  public actions: { [key: string]: () => void } = {
    remove: () => this.removeAccount(),
    logout: () => this.profileService.logout(),
    goToMyaccount: () => this.router.navigate(['main/myaccount'])
  }

  public activeClass = {
    activeLink: 'header-nav__navigation-active-link',
    activeIcon: 'header-nav__navigation-list-item'
  }

  constructor(
    private config: ConfigService,
    private settingsService: SettingsService,
    private profileService: ProfileService,
    private router: Router
  ) {
  }

  removeAccount() {
    this.settingsService.removeAccount().subscribe({
      next: value => this.handleRemoveAccount(value),
      error: err => console.log(err)
    })
  }

  handleRemoveAccount(value: any) {
    console.log(value);
    this.profileService.logout();
  }

  toggleSettings() {
    this.isShowSettings = !this.isShowSettings;
    if (this.isShowProfile) {
      this.isShowProfile = false
    }
  }

  toggleProfile() {
    this.isShowProfile = !this.isShowProfile;
    if (this.isShowSettings) {
      this.isShowSettings = false
    }
  }

  triggerAction(action: string) {
    this.actions[action]();
  }

  calculateClasses(rel: RouterLinkActive, item: any): any {
    if (rel.isActive) {
      return {
        [`${this.activeClass.activeIcon}-${item.icon}--active`]: true,
        [this.activeClass.activeLink]: true
      }
    }
  }

}
