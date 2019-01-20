import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Product} from './org.iff.supplychain.product';
// export namespace org.iff.supplychain.network{
   export class Trace {
      timestamp: Date;
      location: Address;
      company: IFFparticipant;
   }
   export class Commodity extends Asset {
      tradingSymbol: string;
      name: string;
      description: string;
      quantity: number;
      unitPrice: number;
      totalPrice: number;
      trace: Trace[];
      product: Product;
      purchaseOrder: PO;
      owner: IFFparticipant;
      issuer: IFFparticipant;
   }
   export enum OrderStatus {
      INITIATED,
      CONFIRMED,
      DELIVERING,
      DELIVERED,
   }
   export class Address {
      longtitude: number;
      latitude: number;
      city: string;
      country: string;
      locality: string;
      region: string;
      street: string;
      postalCode: string;
      postOfficeBoxNumber: string;
   }
   export class PO extends Asset {
      orderId: string;
      itemList: Commodity[];
      orderTotalPrice: number;
      orderStatus: OrderStatus;
      orderer: IFFparticipant;
      vender: IFFparticipant;
   }
   export abstract class IFFparticipant extends Participant {
      companyName: string;
      address: Address;
   }
   export class Supplier extends IFFparticipant {
      tradeId: string;
   }
   export class ExtraPartners extends IFFparticipant {
      tradeId: string;
   }
   export class ExteriorCompany extends ExtraPartners {
      CompanyType: string;
   }
   export class interiorCompany extends ExtraPartners {
      CompanyType: string;
   }
   export class Constructor extends IFFparticipant {
      tradeId: string;
   }
   export class BuldingManager extends IFFparticipant {
      tradeId: string;
   }
   export class SiteManager extends IFFparticipant {
      tradeId: string;
   }
   export class InitiatePO extends Transaction {
      orderId: string;
      itemList: Commodity[];
      orderTotalPrice: number;
      orderer: IFFparticipant;
      vender: IFFparticipant;
   }
   export class TransferCommodity extends Transaction {
      commodity: Commodity;
      issuer: IFFparticipant;
      newOwner: IFFparticipant;
      purchaseOrder: PO;
      shipperLocation: Address;
   }
   export class SetupDemo extends Transaction {
      suppliers: Supplier[];
      ExtraPartnerss: ExtraPartners[];
      distributors: Constructor[];
      BuldingManagers: BuldingManager[];
      customers: SiteManager[];
   }
// }
