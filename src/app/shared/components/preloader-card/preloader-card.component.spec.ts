import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloaderCardComponent } from './preloader-card.component';

describe('PreloaderCardComponent', () => {
  let component: PreloaderCardComponent;
  let fixture: ComponentFixture<PreloaderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreloaderCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreloaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
