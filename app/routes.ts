import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component'
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolver
} from './events/index'

export const appRoutes: Routes = [
  { path: '404', component: Error404Component },
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },  // position matters - will get matched by 'events/:id'
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
]