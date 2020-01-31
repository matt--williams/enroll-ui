import { async, TestBed } from '@angular/core/testing';
import { BrokerStaffModelsModule } from './broker-staff-models.module';

describe('BrokerStaffModelsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrokerStaffModelsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BrokerStaffModelsModule).toBeDefined();
  });
});
