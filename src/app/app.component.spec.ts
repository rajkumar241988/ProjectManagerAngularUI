import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MatTabsModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(compiled.querySelector('h1')).toBeTruthy();
  });

  it('should display login form at start', () => {
    expect(compiled.querySelector('app-login-form')).toBeTruthy();
  });

  it('should display registration form after clicking second tab', () => {
    compiled = fixture.nativeElement;
    compiled.querySelectorAll('mat-tab')[1].click();
    fixture.detectChanges();
    expect(compiled.querySelector('app-registration-form')).toBeTruthy();
  });
  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'ProjectManagerAngular7'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('ProjectManagerAngular7');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to ProjectManagerAngular7!');
  // });
});
