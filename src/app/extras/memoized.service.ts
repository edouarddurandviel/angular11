// providers they make services available on your application
// depedency provider => injector => runtim version of a depedency value DI token
import { NgModule } from '@angular/core';


// injector.ts
heroService: HeroService;

@NgModule({
  providers: [Logger, {provide: logger, useClass: EventBetterLogger}], // instance of class Logger "Injector"
})

// injector makes a map of all dep.

