import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        LandingPageComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'landing_page'`, () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('landing_page');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, landing_page');
  });
});
