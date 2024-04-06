import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { volunteer } from "../voluntree.model";


@Injectable()
export class VolunteerService {
constructor(private http:HttpClient){}

getAllVolunteer():Observable<volunteer[]>{
    return this.http.get<volunteer[]>("http://localhost:5210/" + "Volunteer");
}

   

updateVolunteer():Observable<Boolean>{
   
    return this.http.put<boolean>("http://localhost:5210/" + "Volunteer/Update",this.selectorvolunteer);
     
}


selectorvolunteer?:volunteer|undefined;

}


