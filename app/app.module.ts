import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service'
import { AuthService } from './user/auth.service'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolver,
  CreateSessionComponent,
  SessionListComponent
} from './events/index'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    NavBarComponent,
    Error404Component,
    SessionListComponent
  ],
  providers: [
    EventService,
    ToastrService,
    AuthService,    
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
