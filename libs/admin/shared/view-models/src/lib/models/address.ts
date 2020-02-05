import { PersonAddressKind, OfficeAddressKind } from '@hbx/api-interfaces';

interface Address {
  id: string;
  address1: string;
  address2?: string;
  address3?: string;
  county: string;
  country: string;
  city: string;
  state: string;
  zip: string;

  updatedAt: Date;
  createdAt: Date;
}

export interface PersonAddress extends Address {
  kind: PersonAddressKind;
}

export interface OfficeAddress extends Address {
  kind: OfficeAddressKind;
}
