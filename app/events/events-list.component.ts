import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { IEvent } from './shared'

@Component({
  //selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular 2 Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-6" *ngFor="let event of events">
          <event-thumbnail [event]="event"></event-thumbnail>
          <!--<event-thumbnail [event]="event" (click)="handleThumbnailClick(event.name)"></event-thumbnail>-->
        </div>
      </div>      
    </div>
  `,
})
export class EventsListComponent {
  events: IEvent[]

  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute) {    
  }

  ngOnInit() {
    this.events = this.activatedRoute.snapshot.data['events']
    //this.eventService.getEvents().subscribe(events => { this.events = events })
  }

  // handleThumbnailClick(eventName) {
  //   this.toastr.success(eventName)
  // }
}
