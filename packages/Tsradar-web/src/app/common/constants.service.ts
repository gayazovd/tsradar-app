import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ConstantsService {
  public LOGO: string = 'TSradar';
  public LOGIN = {
    title: 'Login',
    username: 'Email',
    password: 'Password',
    buttonText: 'Sign in',
    registerText: 'Don\'t have an account yet?',
    registerLinkText: 'Register'
  }

  public REGISTRATION = {
    title: 'Registration',
    username: 'Email',
    fullName: 'Full name',
    phone: 'Phone',
    password: 'Password',
    confirmPassword: 'Confirm password',
    buttonText: 'Sign up',
    loginText: 'Do you have an account?',
    loginTextLink: 'Login',
  }

  public SUCCESS_REGISTRATION_TEXT = ' account successfully created turn to login';

  public TRANSPORT_FORM = {
    brand: 'Brand:',
    status: 'Car reserved: ',
    color: 'Color:',
    carcass: 'Carcass:',
    power: 'Power:',
    type: 'Type:',
    transport_type: 'Transport type:'
  }

  public TRANSPORTS_TYPES = ['car', 'moto', 'hatchback', 'default']

  public FORM_ERRORS = {
    mismatch: 'Password didn\'t match'
  }

  public STORAGE_KEYS = {
    authToken: 'AUTH_TOKEN',
    userinfo: 'USER_INFO'
  }

  public FROM_PATTERNS = {
    name: '^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{1,}$',
    email: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
    mobile: '^([+]\\d{2}[ ])?\\d{11}$',
    password: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
    passwordMaxLength: 12,
    mobileMaxLength: 11
  }

  public ERROR_STATUS_CODE = {
    unauthorizedUser: 401,
    notFound: 404
  }

  public TRANSPORT_RENTAL = {
    reserved: 'Reserved',
    rental: 'Rental'
  }

  public POPUPS_IDS = {
    edit: 'app-edit-transport-form',
    create: 'app-add-transport-form'
  }
}
