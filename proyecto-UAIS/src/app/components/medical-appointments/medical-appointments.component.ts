import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Appointment } from './appointment';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { CalendarService } from '../../services/calendar.service';


@Component({
  selector: 'app-medical-appointments',
  templateUrl: './medical-appointments.component.html',
  styleUrls: ['./medical-appointments.component.css'],
})

export class MedicalAppointmentsComponent {
  readonly URL_ROOT: string = 'https://jsonplaceholder.typicode.com';
  appointments: Observable<Appointment[]> | undefined;
  isCollapsed = false;
  isHorizontal = !false;
  faCircle = faCircle;
  date: Date = new Date();
  dayOfWeek: string = '';
  dayName: string = '';

  constructor(private http: HttpClient, private calendarService: CalendarService) { }

  ngOnInit() {
    this.getAppointments();
    this.getData();
  }

  getAppointments() {
    this.appointments = this.http.get<Appointment[]>(this.URL_ROOT + '/posts')
  }

  getData() {
    this.calendarService.sendData().subscribe(x => {
      console.log(x);
      this.date = x;
      this.parseDate();
    })
  }

  parseDate() {
    let stringDate = this.date.toString();
    let words = stringDate.split(' ');
    this.dayName = words[0];
    this.dayOfWeek = words[2];
    console.log(this.dayName);
    console.log(this.dayOfWeek);
  }

}
