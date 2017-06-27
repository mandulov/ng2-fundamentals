import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: '/app/events/event-details/event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
  `],
})
export class EventDetailsComponent {
  event: any

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id: number = parseInt(this.activatedRoute.snapshot.params['id'], 10)
    this.event = this.eventService.getEvent(id)
  }

}