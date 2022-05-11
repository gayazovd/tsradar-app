import {Injectable} from '@angular/core';
import {IReactiveForm, TControls, TCustomError} from '../entities/reactive-form';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private apiBase: string = 'http://localhost:3030/v1';
  public apiUrls = {
    login: `${this.apiBase}/auth/login`,
    registration: `${this.apiBase}/auth/registration`,
    transports: `${this.apiBase}/transport`,
    profile: `${this.apiBase}/user/profile`,
    createTransport: `${this.apiBase}/transport/create`,
    removeTransport: `${this.apiBase}/transport/remove`,
    updateTransport: `${this.apiBase}/transport/update`,
    removeAccount: `${this.apiBase}/user/remove`,
    listTransports: `${this.apiBase}/transports/list` // pagination
  }

  public loginStructure: IReactiveForm = {
    settings: {
      isGrouped: false,
      groupName: null
    },
    customValidator: () => null,
    fields: [
      {
        controlName: 'password',
        initial: ''
      },
      {
        controlName: 'username',
        initial: ''
      }
    ]
  }

  public registrationStructure: Array<IReactiveForm> = [
    {
      settings: {
        isGrouped: false,
        groupName: null
      },
      customValidator: () => null,
      fields: [
        {
          controlName: 'username',
          initial: ''
        },
        {
          controlName: 'phone',
          initial: ''
        },
        {
          controlName: 'full_name',
          initial: ''
        }
      ]
    },
    {
      settings: {
        isGrouped: true,
        groupName: 'password_group'
      },
      customValidator: (frm: TControls) => frm.get('password')?.value === frm.get('confirm_password')?.value ? null : {mismatch: true} as TCustomError,
      fields: [
        {
          controlName: 'password',
          initial: ''
        },
        {
          controlName: 'confirm_password',
          initial: ''
        }
      ]
    }
  ]

  public transportFormStructure: Array<IReactiveForm> = [{
    settings: {
      isGrouped: false,
      groupName: null
    },
    customValidator: () => null,
    fields: [
      {
        controlName: 'brand',
        initial: ''
      },
      {
        controlName: 'status',
        initial: false
      },
      {
        controlName: 'color',
        initial: ''
      },
      {
        controlName: 'carcass',
        initial: ''
      },
      {
        controlName: 'power',
        initial: ''
      },
      {
        controlName: 'type',
        initial: ''
      },
      {
        controlName: 'transport_type',
        initial: 'default'
      }
    ]
  }]

  public headerNavigation = [
    {
      link: './rentals',
      name: 'Rentals',
      icon: 'key'
    },
    {
      link: './planer',
      name: 'Planer',
      icon: 'note'
    },
    {
      link: './dashboard',
      name: 'Dashboard',
      icon: 'dashboard'
    }
  ]

  public profileList = [
    {
      name: 'My account',
      action: 'goToMyaccount'
    },
    {
      name: 'Log out',
      action: 'logout'
    }
  ];

  public settingsList = [
    {
      name: 'Remove account',
      action: 'remove'
    }
  ];

  public mainHeaders = [
    'Brand', 'Status', 'Color', 'Carcass', 'Power', 'Type', 'Transport Type'
  ]
}
