import { BehaviorSubject, Observable } from 'rxjs';

export class CalendarService{

    date:Date = new Date();
    private calendarObservable = new BehaviorSubject<Date>(this.date);

    getData(date:Date){
        this.date = date;
        this.calendarObservable.next(this.date);
    }

    sendData():Observable<Date>{
        return this.calendarObservable;
    }
}