import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommuneApi} from "../models/communes/CommuneApi";

@Injectable({
  providedIn: 'root'
})
export class HttpCommuneService {

  defaultUrl: string = 'https://geo.api.gouv.fr';

  constructor(private httpclient: HttpClient) {
  }

  getApiCommune(codeRegion: string, codeDpt: string): Observable<Array<CommuneApi>> {
    return this.httpclient.get<Array<CommuneApi>>(this.defaultUrl + '/departements/' + codeDpt + '/communes');
  }
}
