import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup,  FormBuilder, FormControl, Validators,ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatTabsModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { OrderModule } from 'ngx-order-pipe';
import { ToastrModule } from 'ngx-toastr';


import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from "@angular/common/http";

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDatepickerModule,MatNativeDateModule,ToastrModule.forRoot(),RouterTestingModule,ReactiveFormsModule,FormsModule,OrderModule,HttpClientModule
      ],
      declarations: [
        UsersComponent,
        UserComponent,
        UserListComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
