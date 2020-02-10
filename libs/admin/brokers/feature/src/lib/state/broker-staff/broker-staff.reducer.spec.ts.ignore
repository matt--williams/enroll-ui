import { BrokerStaffEntity } from './broker-staff.models';
import * as BrokerStaffActions from './broker-staff.actions';
import { State, initialState, reducer } from './broker-staff.reducer';

describe('BrokerStaff Reducer', () => {
  const createBrokerStaffEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as BrokerStaffEntity);

  beforeEach(() => {});

  describe('valid BrokerStaff actions', () => {
    it('loadBrokerStaffSuccess should return set the list of known BrokerStaff', () => {
      const brokerStaff = [
        createBrokerStaffEntity('PRODUCT-AAA'),
        createBrokerStaffEntity('PRODUCT-zzz'),
      ];
      const action = BrokerStaffActions.loadBrokerStaffSuccess({ brokerStaff });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
