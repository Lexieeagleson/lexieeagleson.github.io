import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LandingPageModule } from './app/landing-page.module';

platformBrowserDynamic().bootstrapModule(LandingPageModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
