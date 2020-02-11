import { createAction, props } from '@ngrx/store';

export const loadAgencies = createAction('[Agencies] Load Agencies');

export const loadAgenciesSuccess = createAction(
  '[Agencies] Load Agencies Success',
  props<{ agencies: ApiBenefitSponsorsOrganization[] }>()
);

export const loadAgenciesFailure = createAction(
  '[Agencies] Load Agencies Failure',
  props<{ error: any }>()
);
