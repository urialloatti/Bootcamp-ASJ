import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonsTableComponent } from './simpsons-table.component';

describe('SimpsonsTableComponent', () => {
  let component: SimpsonsTableComponent;
  let fixture: ComponentFixture<SimpsonsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpsonsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpsonsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
