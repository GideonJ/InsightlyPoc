import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailEditorComponent } from './project-detail-editor.component';

describe('ProjectDetailEditorComponent', () => {
  let component: ProjectDetailEditorComponent;
  let fixture: ComponentFixture<ProjectDetailEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
