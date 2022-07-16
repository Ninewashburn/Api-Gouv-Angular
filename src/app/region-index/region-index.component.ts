import {Component, OnInit} from '@angular/core';
import {HttpRegionService} from "../../service/region.service";
import {RegionApi} from "../../models/regions/RegionApi";
import {Router} from "@angular/router";

@Component({
  selector: 'app-region-index',
  templateUrl: './region-index.component.html',
  styleUrls: ['./region-index.component.scss']
})
export class RegionIndexComponent implements OnInit {

  regions: Array<RegionApi> = [];

  constructor(
    private router: Router,
    private httpRegionService: HttpRegionService

  ) {
  }
  routerLinkDepartment(code: number): void {
    this.router.navigate(['regions/' + code + '/departments']);
  }
  ngOnInit(): void {
    this.httpRegionService.getApiRegion().subscribe((apiPlatformRegion) => {
      this.regions = apiPlatformRegion;
    });
  }
}
