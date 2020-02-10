// Eventually use this file as a View Model entity interface

import { PrimaryBrokerStaff, BrokerAgencyStaff } from '@hbx/api-interfaces';

/**
 * Interface for the 'BrokerStaff' data
 */
// export interface BrokerStaffEntity {
//   id: string | number; // Primary ID
// }

export type BrokerStaffEntity = PrimaryBrokerStaff | BrokerAgencyStaff;
