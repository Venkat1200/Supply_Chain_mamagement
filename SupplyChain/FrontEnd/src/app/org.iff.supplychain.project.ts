import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Commodity} from './org.iff.supplychain.network';
// export namespace org.iff.supplychain.project{
   export class Project extends Asset {
      projectId: string;
      state: string;
      commodity: Commodity;
   }
   export class ChangeStateToInitiation extends Transaction {
      project: Project;
   }
   export class ChangeStateToPlanning extends Transaction {
      project: Project;
   }
   export class ChangeStateToExecution extends Transaction {
      project: Project;
   }
   export class ChangeStateToMonitoring extends Transaction {
      project: Project;
   }
   export class ChangeStateToClosure extends Transaction {
      project: Project;
   }
// }
