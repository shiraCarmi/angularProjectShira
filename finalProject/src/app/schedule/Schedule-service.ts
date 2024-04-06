import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { volunteer } from "../voluntree.model";

@Injectable()
export class ScheduleService {

    constructor(private http: HttpClient) {

    }
    baseurl:string="http://localhost:5210/";

    getSchedule = (): Observable<String[]> => {
        return this.http.get<String[]>(this.baseurl + "Scheduling/GetSchedule/schedule");
    }

    saveSchedule = (mySchedule: String[]): void => {
        this.http.put(this.baseurl + "Scheduling/updateSchedule/put", mySchedule).subscribe();
    }

    getNameOfId = (id: String, vols: volunteer[]): string => {

        for (var i of vols) {
            if (i.id == id)
                return i.name;
        };
        return "";
    }


    getVolunteerToDay = (i: number): Observable<volunteer[]> => {
        return this.http.get<volunteer[]>(this.baseurl+"Volunteer/"+i);
    }




}