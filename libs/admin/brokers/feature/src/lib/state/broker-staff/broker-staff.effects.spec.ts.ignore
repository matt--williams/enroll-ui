import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { BrokerStaffEffects } from './broker-staff.effects';
import * as BrokerStaffActions from './broker-staff.actions';

describe('BrokerStaffEffects', () => {
  let actions: Observable<any>;
  let effects: BrokerStaffEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        BrokerStaffEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(BrokerStaffEffects);
  });

  describe('loadBrokerStaff$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: BrokerStaffActions.loadBrokerStaff() });

      const expected = hot('-a-|', {
        a: BrokerStaffActions.loadBrokerStaffSuccess({ brokerStaff: [] }),
      });

      expect(effects.loadBrokerStaff$).toBeObservable(expected);
    });
  });
});
