import {Component, OnInit} from '@angular/core';
import {HttpDepartmentService} from "../../service/department.service";
import {DepartmentApi} from "../../models/departements/DepartmentApi";
import {ActivatedRoute, Router} from "@angular/router";
import {RegionApi} from "../../models/regions/RegionApi";
import {HttpRegionService} from "../../service/region.service";

@Component({
  selector: 'app-department-index',
  templateUrl: './department-index.component.html',
  styleUrls: ['./department-index.component.scss']
})
export class DepartmentIndexComponent implements OnInit {

  departments: Array<DepartmentApi> = [];
  codeRegion!: string;
  region!: RegionApi | undefined;

  constructor(
    private httpDepartmentService: HttpDepartmentService,
    private httpRegionService: HttpRegionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.codeRegion = param.code;
      this.httpRegionService.getRegionByCode(this.codeRegion).subscribe((apiRegion) => {
        this.region = apiRegion;
      });
      this.httpDepartmentService.getApiDepartementByCodeRegion(this.codeRegion).subscribe((apiDepartment) => {
        this.departments = apiDepartment;
        console.log(this.departments)
      });
    })
  }

  routerLinkCity(codeReg: string, codeDpt: string): void {
    // adapter le lien pour l'url des villes
    this.router.navigate(['regions/' + codeReg + '/departments/' + codeDpt + '/communes']);
  }
}
