import { async, TestBed } from '@angular/core/testing';
import { AdminBrokersFeatureModule } from './admin-brokers-feature.module';

describe('AdminBrokersFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminBrokersFeatureModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminBrokersFeatureModule).toBeDefined();
  });
});
