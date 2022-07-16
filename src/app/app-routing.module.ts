import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegionIndexComponent} from "./region-index/region-index.component";
import {DepartmentIndexComponent} from "./department-index/department-index.component";
import {CommunesIndexComponent} from "./communes-index/communes-index.component";

const routes: Routes = [
  {path: '', component: RegionIndexComponent},
  {path: 'regions/:code/departments', component: DepartmentIndexComponent},
  {path: 'regions/:codeReg/departments/:codeDpt/communes', component: CommunesIndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
