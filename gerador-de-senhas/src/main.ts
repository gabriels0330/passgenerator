import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.config'; // Usando app.config.ts como o módulo principal


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
