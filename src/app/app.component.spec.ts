import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {By} from '@angular/platform-browser';
import {MatTabLink, MatTabNav, MatTabsModule} from '@angular/material';

import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

import { FormGroup,  FormBuilder, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
	   imports: [ RouterTestingModule,FormsModule,MatTabsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should change active index on click', () => {
    // select the second link
    let tabLink = fixture.debugElement.queryAll(By.css('a'))[1];
    tabLink.nativeElement.click();
    expect(fixture.componentInstance.activeLinkIndex).toBe(1);

    // select the third link
    tabLink = fixture.debugElement.queryAll(By.css('a'))[2];
    tabLink.nativeElement.click();
    expect(fixture.componentInstance.activeLinkIndex).toBe(2);
  });
});
