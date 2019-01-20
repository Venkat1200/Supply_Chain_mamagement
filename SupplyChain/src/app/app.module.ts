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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
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

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommodityComponent,
    POComponent,
    ProductComponent,
    ProjectComponent,
    TradeComponent,
    SupplierComponent,
    ExtraPartnersComponent,
    ExteriorCompanyComponent,
    interiorCompanyComponent,
    ConstructorComponent,
    BuldingManagerComponent,
    SiteManagerComponent,
    InitiatePOComponent,
    TransferCommodityComponent,
    SetupDemoComponent,
    ChangeStateToInitiationComponent,
    ChangeStateToPlanningComponent,
    ChangeStateToExecutionComponent,
    ChangeStateToMonitoringComponent,
    ChangeStateToClosureComponent,
    CreateTradeComponent,
    AssignproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
