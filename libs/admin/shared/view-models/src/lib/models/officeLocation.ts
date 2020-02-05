import { OfficePhone } from './phone';
import { OfficeAddress } from './address';

export interface OfficeLocation {
  id: string;
  primary: boolean;
  address: OfficeAddress;
  phone: OfficePhone;
}
