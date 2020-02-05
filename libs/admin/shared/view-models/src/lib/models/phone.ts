import { PersonPhoneKind } from '@hbx/api-interfaces';

interface Phone {
  id: string;
  countryCode: string;
  areaCode: string;
  phoneNumber: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface PersonPhone extends Phone {
  kind: PersonPhoneKind;
}

export interface OfficePhone extends Phone {
  kind: 'phone main';
}
