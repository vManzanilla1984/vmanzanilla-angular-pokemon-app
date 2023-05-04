import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPageTitleComponent } from './pokemon-page-title.component';

describe('PokemonPageTitleComponent', () => {
  let component: PokemonPageTitleComponent;
  let fixture: ComponentFixture<PokemonPageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonPageTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
