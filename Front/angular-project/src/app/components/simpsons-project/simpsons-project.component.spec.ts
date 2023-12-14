import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonsProjectComponent } from './simpsons-project.component';

describe('SimpsonsFormComponent', () => {
  let component: SimpsonsProjectComponent;
  let fixture: ComponentFixture<SimpsonsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpsonsProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpsonsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
