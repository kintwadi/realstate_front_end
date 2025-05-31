import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListPopupComponent } from './wish-list-popup.component';

describe('WishListPopupComponent', () => {
  let component: WishListPopupComponent;
  let fixture: ComponentFixture<WishListPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishListPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
