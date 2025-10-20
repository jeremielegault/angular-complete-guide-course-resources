import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
// Provides this service by default, less efficient
// bootstrapApplication(AppComponent, {
//   providers: [TasksService]
// }).catch((err) => console.error(err));
bootstrapApplication(AppComponent).catch((err) => console.error(err));
