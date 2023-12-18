import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyCharacterComponent } from './rick-morty-character.component';

describe('RickMortyCharacterComponent', () => {
  let component: RickMortyCharacterComponent;
  let fixture: ComponentFixture<RickMortyCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RickMortyCharacterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RickMortyCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
