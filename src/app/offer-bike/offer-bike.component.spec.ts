import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBikeComponent } from './offer-bike.component';

describe('OfferBikeComponent', () => {
  let component: OfferBikeComponent;
  let fixture: ComponentFixture<OfferBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
