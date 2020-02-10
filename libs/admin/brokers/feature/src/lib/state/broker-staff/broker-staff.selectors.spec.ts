import { BrokerStaffEntity } from './broker-staff.models';
import {
  State,
  brokerStaffAdapter,
  initialState,
} from './broker-staff.reducer';
import * as BrokerStaffSelectors from './broker-staff.selectors';

describe('BrokerStaff Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getBrokerStaffId = it => it['id'];
  const createBrokerStaffEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as BrokerStaffEntity);

  let state;

  beforeEach(() => {
    state = {
      brokerStaff: brokerStaffAdapter.addAll(
        [
          createBrokerStaffEntity('PRODUCT-AAA'),
          createBrokerStaffEntity('PRODUCT-BBB'),
          createBrokerStaffEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('BrokerStaff Selectors', () => {
    it('getAllBrokerStaff() should return the list of BrokerStaff', () => {
      const results = BrokerStaffSelectors.getAllBrokerStaff(state);
      const selId = getBrokerStaffId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = BrokerStaffSelectors.getSelected(state);
      const selId = getBrokerStaffId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getBrokerStaffLoaded() should return the current 'loaded' status", () => {
      const result = BrokerStaffSelectors.getBrokerStaffLoaded(state);

      expect(result).toBe(true);
    });

    it("getBrokerStaffError() should return the current 'error' state", () => {
      const result = BrokerStaffSelectors.getBrokerStaffError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
