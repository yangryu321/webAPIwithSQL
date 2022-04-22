import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {

  readonly inspectionAPIUrl = "https://localhost:7070/api";

  constructor(private http:HttpClient) { }

  //inspection CRUD
  getAllInspections():Observable<any[]>
  {
    return this.http.get<any>(this.inspectionAPIUrl + '/Inspections');
  }

  getInspectionById(id:string|number)
  {
    return this.http.get(this.inspectionAPIUrl + `/Inspections/${id}`);  
  }

  addInspecstion(data:any)
  {
    return this.http.post(this.inspectionAPIUrl + '/Inspections/', data);
  }

  updateInspection(id:number|string, data:any)
  {
    return this.http.put(this.inspectionAPIUrl + `/Inspections/${id}`, data)
  }

  deleteInspection(id:number|string)
  {
    return this.http.delete(this.inspectionAPIUrl+`/Inspections/${id}`);
  }

  //status CRUD
  getAllStatuses():Observable<any[]>
  {
    return this.http.get<any>(this.inspectionAPIUrl + '/Statuses');
  }

  addStatus(data:any)
  {
    return this.http.post(this.inspectionAPIUrl + '/Statuses', data);
  }

  updateStatus(data:any, id:number|string)
  {
    return this.http.put(this.inspectionAPIUrl + '/Statuses/${id}', data)
  }

  deleteStatus(id:number|string)
  {
    return this.http.delete(this.inspectionAPIUrl + 'Statuses/${id}');
  }

  //inspectiontype CRUD


  getAllInspectionTypes():Observable<any[]>
  {
    return this.http.get<any>(this.inspectionAPIUrl + '/InspectionTypes');
  }

  addInspectionType(data:any)
  {
    return this.http.post(this.inspectionAPIUrl + '/InspectionTypes', data);
  }

  updateInspectionType(data:any, id:number|string)
  {
    return this.http.put(this.inspectionAPIUrl + `/InspectionTypes/${id}`, data)
  }

  deleteInspectionType(id:number|string)
  {
    return this.http.delete(this.inspectionAPIUrl + `InspectionTypes/${id}`);
  }

  

}
