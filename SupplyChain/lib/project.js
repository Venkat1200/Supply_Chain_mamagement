/*  
* @param {org.iff.supplychain.project.ChangeStateToInitiation} tx The transaction that changes the state of the project from to the initiation state.
* @transaction
*/

function ChangeStateToInitiation(tx) {

tx.project.state = "initiation";
 
   // Get the asset registry for the project asset.
   return getAssetRegistry('org.iff.supplychain.project.project')
       .then(function (assetRegistry) {

           // Update the asset in the project asset registry.
           return assetRegistry.update(tx.project);
       });
}

/**
* 
* @param {org.iff.supplychain.project.ChangeStateToPlanning} tx The transaction that changes the state of the project from to the planning state.
* @transaction
*/

function ChangeStateToPlanning(tx) {

tx.project.state = "planning";
 
   // Get the asset registry for the projec asset.
   return getAssetRegistry('org.iff.supplychain.project.project')
       .then(function (assetRegistry) {

           // Update the asset in the project asset registry.
           return assetRegistry.update(tx.project);
       });
}

/**
* 
* @param {org.iff.supplychain.project.ChangeStateToExecution} tx The transaction that changes the state of the project from to the execution state.
* @transaction
*/

function ChangeStateToExecution(tx) {

tx.project.state = "execution";
 
   // Get the asset registry for the project asset.
   return getAssetRegistry('org.iff.supplychain.project.project')
       .then(function (assetRegistry) {

           // Update the asset in the project asset registry.
           return assetRegistry.update(tx.project);
       });
}

/**
* .
* @param {org.iff.supplychain.project.ChangeStateToMonitoring} tx The transaction that changes the state of the project from to the Monitoring state.
* @transaction
*/

function ChangeStateToMonitoring(tx) {

tx.project.state = "monitoring";
 
   // Get the asset registry for the project asset.
   return getAssetRegistry('org.iff.supplychain.project.project')
       .then(function (assetRegistry) {

           // Update the asset in the project asset registry.
           return assetRegistry.update(tx.project);
       });
}


/**
* 
* @param {org.iff.supplychain.project.ChangeStateToClosure} tx The transaction that changes the state of the project from to the Closure state.
* @transaction
*/

function ChangeStateToClosure(tx) {

tx.project.state = "closure";
 
   // Get the asset registry for the project asset.
   return getAssetRegistry('org.iff.supplychain.project.project')
       .then(function (assetRegistry) {

           // Update the asset in the project asset registry.
           return assetRegistry.update(tx.project);
       });
}