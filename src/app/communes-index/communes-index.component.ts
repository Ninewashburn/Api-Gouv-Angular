import {Component, OnInit} from '@angular/core';
import {HttpCommuneService} from "../../service/commune.service";
import {CommuneApi} from "../../models/communes/CommuneApi";
import {RegionApi} from "../../models/regions/RegionApi";
import {DepartmentApi} from "../../models/departements/DepartmentApi";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpDepartmentService} from "../../service/department.service";
import {HttpRegionService} from "../../service/region.service";

@Component({
  selector: 'app-communes-index',
  templateUrl: './communes-index.component.html',
  styleUrls: ['./communes-index.component.scss']
})
export class CommunesIndexComponent implements OnInit {

  communes: Array<CommuneApi> = [];
  department: DepartmentApi | undefined;
  region!: RegionApi | undefined;
  codeRegion!: string;
  codeDpt!: string;

  constructor(
    private httpCommuneService: HttpCommuneService,
    private httpDepartmentService: HttpDepartmentService,
    private httpRegionService: HttpRegionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.codeDpt = params.codeDpt;
      this.httpDepartmentService.getDepartementByCode(this.codeDpt).subscribe((apiDepartment) => {
        this.department = apiDepartment;
      });
      this.codeRegion = params.codeReg;
      this.httpRegionService.getRegionByCode(this.codeRegion).subscribe((apiRegion) => {
        this.region = apiRegion;
      });
      // request vers departmentService en donnant le codeDpt
      // faire dans le subscribe le this.department = apiDepartment
      this.httpCommuneService.getApiCommune(this.codeRegion, this.codeDpt).subscribe((apiPlatformRegion) => {
        this.communes = apiPlatformRegion;
      })
    })
  }
}
