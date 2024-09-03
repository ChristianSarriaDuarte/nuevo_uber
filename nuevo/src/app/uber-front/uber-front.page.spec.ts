import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UberFrontPage } from './uber-front.page';

describe('UberFrontPage', () => {
  let component: UberFrontPage;
  let fixture: ComponentFixture<UberFrontPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UberFrontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
