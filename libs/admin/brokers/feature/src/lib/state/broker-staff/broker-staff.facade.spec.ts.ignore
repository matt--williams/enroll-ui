import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { BrokerStaffEntity } from './broker-staff.models';
import { BrokerStaffEffects } from './broker-staff.effects';
import { BrokerStaffFacade } from './broker-staff.facade';

import * as BrokerStaffSelectors from './broker-staff.selectors';
import * as BrokerStaffActions from './broker-staff.actions';
import {
  BROKERSTAFF_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './broker-staff.reducer';

interface TestSchema {
  brokerStaff: State;
}

describe('BrokerStaffFacade', () => {
  let facade: BrokerStaffFacade;
  let store: Store<TestSchema>;
  const createBrokerStaffEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as BrokerStaffEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(BROKERSTAFF_FEATURE_KEY, reducer),
          EffectsModule.forFeature([BrokerStaffEffects]),
        ],
        providers: [BrokerStaffFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(BrokerStaffFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allBrokerStaff$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(BrokerStaffActions.loadBrokerStaff());

        list = await readFirst(facade.allBrokerStaff$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadBrokerStaffSuccess` to manually update list
     */
    it('allBrokerStaff$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allBrokerStaff$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          BrokerStaffActions.loadBrokerStaffSuccess({
            brokerStaff: [
              createBrokerStaffEntity('AAA'),
              createBrokerStaffEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allBrokerStaff$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
