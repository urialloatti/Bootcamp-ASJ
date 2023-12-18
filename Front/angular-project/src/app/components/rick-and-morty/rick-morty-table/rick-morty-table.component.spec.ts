import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyTableComponent } from './rick-morty-table.component';

describe('RickMortyTableComponent', () => {
  let component: RickMortyTableComponent;
  let fixture: ComponentFixture<RickMortyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RickMortyTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RickMortyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
