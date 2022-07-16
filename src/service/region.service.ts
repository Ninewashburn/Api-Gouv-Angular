import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegionApi} from "../models/regions/RegionApi";
import {DepartmentApi} from "../models/departements/DepartmentApi";

@Injectable({
  providedIn: 'root'
})
export class HttpRegionService {

  defaultUrl: string = 'https://geo.api.gouv.fr/regions';

  constructor(private httpclient: HttpClient) {
  }

  getApiRegion(): Observable<Array<RegionApi>> {
      return this.httpclient.get<Array<RegionApi>>(this.defaultUrl);
  }

  getRegionByCode(codeRegion: string): Observable<RegionApi> {
    return this.httpclient.get<RegionApi>(this.defaultUrl + '/' + codeRegion);
  }
}

