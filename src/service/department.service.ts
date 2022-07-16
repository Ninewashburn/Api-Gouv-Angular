import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DepartmentApi} from "../models/departements/DepartmentApi";

@Injectable({
  providedIn: 'root'
})
export class HttpDepartmentService {

  defaultUrl: string = 'https://geo.api.gouv.fr/regions/';

  constructor(private httpclient: HttpClient) {
  }

  getApiDepartementByCodeRegion(codeRegion: string): Observable<Array<DepartmentApi>> {
    return this.httpclient.get<Array<DepartmentApi>>(this.defaultUrl + codeRegion + '/departements');
  }

  getDepartementByCode(codeDepartement: string): Observable<DepartmentApi> {
    return this.httpclient.get<DepartmentApi>('https://geo.api.gouv.fr/departements/' + codeDepartement);
  }

}
