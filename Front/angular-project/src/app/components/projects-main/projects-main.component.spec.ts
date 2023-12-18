import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsMainComponent } from './projects-main.component';

describe('ProjectsMainComponent', () => {
  let component: ProjectsMainComponent;
  let fixture: ComponentFixture<ProjectsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
