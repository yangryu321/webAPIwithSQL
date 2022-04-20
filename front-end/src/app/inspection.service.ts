import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {

  private readonly inspectionAPIUrl = "";

  constructor(private http:HttpClient) { }

  //inspection CRUD
  getAllInspections():Observable<any[]>
  {
    return this.http.get<any>(this.inspectionAPIUrl + '/Inspections');
  }

  addInspecstion(data:any):Observable<any[]>
  {
    return this.http.post<any>(this.inspectionAPIUrl + '/Inspections/', data);
  }

  updateInspection(data:any, id:number|string):Observable<any[]>
  {
    return this.http.put<any>(this.inspectionAPIUrl + '/Inspections/${id}', data)
  }

  deleteInspection(id:number|string)
  {
    return this.http.delete<any>(this.inspectionAPIUrl + 'Inspections/#{id}');
  }

  //status CRUD
  getAllStatuses():Observable<any[]>
  {
    return this.http.get<any>(this.inspectionAPIUrl + '/Status');
  }

  addStatus(data:any):Observable<any[]>
  {
    return this.http.post<any>(this.inspectionAPIUrl + '/Statuses', data);
  }

  updateStatus(data:any, id:number|string):Observable<any[]>
  {
    return this.http.put<any>(this.inspectionAPIUrl + '/Statuses/${id}', data)
  }

  deleteStatus(id:number|string)
  {
    return this.http.delete<any>(this.inspectionAPIUrl + 'Statuses/#{id}');
  }

  //inspectiontype CRUD


  getAllInspectionTypes():Observable<any[]>
  {
    return this.http.get<any>(this.inspectionAPIUrl + '/InspectionTypes');
  }

  addInspectionType(data:any):Observable<any[]>
  {
    return this.http.post<any>(this.inspectionAPIUrl + '/InspectionTypes', data);
  }

  updateInspectionType(data:any, id:number|string):Observable<any[]>
  {
    return this.http.put<any>(this.inspectionAPIUrl + '/InspectionTypes/${id}', data)
  }

  deleteInspectionType(id:number|string)
  {
    return this.http.delete<any>(this.inspectionAPIUrl + 'InspectionTypes/#{id}');
  }

  

}
