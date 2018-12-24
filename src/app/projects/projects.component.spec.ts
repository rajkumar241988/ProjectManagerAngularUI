import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup,  FormBuilder, FormControl, Validators,ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatTabsModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { OrderModule } from 'ngx-order-pipe';
import { ToastrModule } from 'ngx-toastr';

import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { HttpClientModule } from "@angular/common/http";

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDatepickerModule,MatNativeDateModule,ToastrModule.forRoot(),RouterTestingModule,ReactiveFormsModule,FormsModule,OrderModule,HttpClientModule
      ],
      declarations: [
        ProjectsComponent,
        ProjectComponent,
        ProjectListComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
