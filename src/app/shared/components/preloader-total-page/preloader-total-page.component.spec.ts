import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloaderTotalPageComponent } from './preloader-total-page.component';

describe('PreloaderTotalPageComponent', () => {
  let component: PreloaderTotalPageComponent;
  let fixture: ComponentFixture<PreloaderTotalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreloaderTotalPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreloaderTotalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
