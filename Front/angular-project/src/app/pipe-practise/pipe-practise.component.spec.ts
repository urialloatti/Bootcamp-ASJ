import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePractiseComponent } from './pipe-practise.component';

describe('PipePractiseComponent', () => {
  let component: PipePractiseComponent;
  let fixture: ComponentFixture<PipePractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipePractiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipePractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
