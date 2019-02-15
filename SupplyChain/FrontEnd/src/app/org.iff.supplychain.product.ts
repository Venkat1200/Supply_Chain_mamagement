import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.iff.supplychain.product{
   export class Product extends Asset {
      productid: string;
      productName: string;
      category: string;
      price: Price;
   }
   export class Price {
      vat_rate: number;
      price_netto: number;
      price_butto: number;
   }
// }
