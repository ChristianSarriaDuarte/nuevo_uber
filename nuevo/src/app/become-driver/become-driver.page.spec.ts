import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BecomeDriverPage } from './become-driver.page';

describe('BecomeDriverPage', () => {
  let component: BecomeDriverPage;
  let fixture: ComponentFixture<BecomeDriverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
