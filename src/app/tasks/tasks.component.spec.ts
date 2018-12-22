import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup,  FormBuilder, FormControl, Validators,ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatTabsModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { OrderModule } from 'ngx-order-pipe';
import { ToastrModule } from 'ngx-toastr';


import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HttpClientModule } from "@angular/common/http";

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDatepickerModule,MatNativeDateModule,ToastrModule.forRoot(),RouterTestingModule,ReactiveFormsModule,FormsModule,OrderModule,HttpClientModule
      ],
      declarations: [
        TasksComponent,
        TaskComponent,
        TaskListComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
