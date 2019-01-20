/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { CommodityComponent } from './Commodity/Commodity.component';
import { POComponent } from './PO/PO.component';
import { ProductComponent } from './Product/Product.component';
import { ProjectComponent } from './Project/Project.component';
import { TradeComponent } from './Trade/Trade.component';

import { SupplierComponent } from './Supplier/Supplier.component';
import { ExtraPartnersComponent } from './ExtraPartners/ExtraPartners.component';
import { ExteriorCompanyComponent } from './ExteriorCompany/ExteriorCompany.component';
import { interiorCompanyComponent } from './interiorCompany/interiorCompany.component';
import { ConstructorComponent } from './Constructor/Constructor.component';
import { BuldingManagerComponent } from './BuldingManager/BuldingManager.component';
import { SiteManagerComponent } from './SiteManager/SiteManager.component';

import { InitiatePOComponent } from './InitiatePO/InitiatePO.component';
import { TransferCommodityComponent } from './TransferCommodity/TransferCommodity.component';
import { SetupDemoComponent } from './SetupDemo/SetupDemo.component';
import { ChangeStateToInitiationComponent } from './ChangeStateToInitiation/ChangeStateToInitiation.component';
import { ChangeStateToPlanningComponent } from './ChangeStateToPlanning/ChangeStateToPlanning.component';
import { ChangeStateToExecutionComponent } from './ChangeStateToExecution/ChangeStateToExecution.component';
import { ChangeStateToMonitoringComponent } from './ChangeStateToMonitoring/ChangeStateToMonitoring.component';
import { ChangeStateToClosureComponent } from './ChangeStateToClosure/ChangeStateToClosure.component';
import { CreateTradeComponent } from './CreateTrade/CreateTrade.component';
import { AssignproductComponent } from './Assignproduct/Assignproduct.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Commodity', component: CommodityComponent },
  { path: 'PO', component: POComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'Project', component: ProjectComponent },
  { path: 'Trade', component: TradeComponent },
  { path: 'Supplier', component: SupplierComponent },
  { path: 'ExtraPartners', component: ExtraPartnersComponent },
  { path: 'ExteriorCompany', component: ExteriorCompanyComponent },
  { path: 'interiorCompany', component: interiorCompanyComponent },
  { path: 'Constructor', component: ConstructorComponent },
  { path: 'BuldingManager', component: BuldingManagerComponent },
  { path: 'SiteManager', component: SiteManagerComponent },
  { path: 'InitiatePO', component: InitiatePOComponent },
  { path: 'TransferCommodity', component: TransferCommodityComponent },
  { path: 'SetupDemo', component: SetupDemoComponent },
  { path: 'ChangeStateToInitiation', component: ChangeStateToInitiationComponent },
  { path: 'ChangeStateToPlanning', component: ChangeStateToPlanningComponent },
  { path: 'ChangeStateToExecution', component: ChangeStateToExecutionComponent },
  { path: 'ChangeStateToMonitoring', component: ChangeStateToMonitoringComponent },
  { path: 'ChangeStateToClosure', component: ChangeStateToClosureComponent },
  { path: 'CreateTrade', component: CreateTradeComponent },
  { path: 'Assignproduct', component: AssignproductComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
