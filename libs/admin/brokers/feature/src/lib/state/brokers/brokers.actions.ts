import { createAction, props } from '@ngrx/store';
import { ApiBenefitSponsorsOrganization } from '@hbx/api-interfaces';

export const loadBrokers = createAction('[Brokers] Load Brokers');

export const loadBrokersSuccess = createAction(
  '[Brokers] Load Brokers Success',
  props<{ brokers: ApiBenefitSponsorsOrganization[] }>()
);

export const loadBrokersFailure = createAction(
  '[Brokers] Load Brokers Failure',
  props<{ error: any }>()
);
