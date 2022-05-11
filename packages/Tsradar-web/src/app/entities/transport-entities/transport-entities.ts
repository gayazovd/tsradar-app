import {keys} from 'lodash-es';

export interface ITransport {
  brand: string;
  carcass: string;
  color: string;
  status: boolean;
  power: string;
  transport_type: string;
  type: string;
  userId: string;
  __v: number;
  _id: string;
}

export interface IEditTransportConfig {
  isEdit: boolean;
  transport: ITransport
}

// export interface ITransport {
//   [key: string]: string;
//
//   brand: string;
//   carcass: string;
//   status: string;
//   color: string;
//   power: string;
//   transportType: string;
//   type: string;
//   userId: string;
//   _id: string;
// }
