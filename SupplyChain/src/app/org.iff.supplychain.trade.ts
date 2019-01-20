import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Product} from './org.iff.supplychain.product';
// export namespace org.iff.supplychain.trade{
   export class Trade extends Asset {
      tradeId: string;
      quantity: number;
      route: Route;
      product: Product;
   }
   export class Route {
      destination: string;
      schedule: Date;
   }
   export class CreateTrade extends Transaction {
      quantity: string;
      destination: string;
      schedule: Date;
   }
   export class TradeCreated extends Event {
      tradeId: string;
   }
   export class Assignproduct extends Transaction {
      tradeId: string;
      productid: string;
   }
   export class ProductAssigned extends Event {
      tradeId: string;
      productid: string;
   }
// }
