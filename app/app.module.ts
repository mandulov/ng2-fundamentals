import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolver
} from './events/index'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavBarComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
    EventsListResolver
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }

  return true
}
