import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCarouselComponent } from './city-carousel.component';

describe('CityCarouselComponent', () => {
  let component: CityCarouselComponent;
  let fixture: ComponentFixture<CityCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
