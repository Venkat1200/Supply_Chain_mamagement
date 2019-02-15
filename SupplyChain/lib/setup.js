/**
* Setup the demo
* @param {org.iff.supplychain.network.SetupDemo} setupDemo - the SetupDemo transaction
* @transaction
*/
function setupDemo(setupDemo) {    
    var factory = getFactory();
    var NS = 'org.iff.supplychain.network';
    var roles = ['suppliers', 'extrapatners', 'constructor', 'buldingmanager', 'sitemanagers'];
    var members = {};
    
    for (var role in setupDemo) {
      var type = (role.charAt(0).toUpperCase() + role.slice(1)).slice(0, -1);
      if (setupDemo[role] && roles.indexOf(role) !== -1) {
          members[role] = [];
          setupDemo[role].forEach(function(participant) {
              var newRole = factory.newResource(NS, type, participant.tradeId);
              newRole.companyName = participant.companyName;
              members[role].push(newRole);
          });      
      } 
    }   
    
    return getParticipantRegistry(NS + '.Supplier')
        .then(function (supplierRegistry){
          return supplierRegistry.addAll(members.suppliers);
        })
        .then(function(){
          return getParticipantRegistry(NS + '.ExtraPatners')
        })
        .then(function (manufacturerRegistry){
          return manufacturerRegistry.addAll(members.extrapatners);
        })    
        .then(function(){
          return getParticipantRegistry(NS + '.Constructor')
        })  
        .then(function (distributorRegistry){
          return distributorRegistry.addAll(members.constructor);
        })      
        .then(function(){
          return getParticipantRegistry(NS + '.BuldingManager')
        })
        .then(function (buldingmanagerRegistry){
          return buldingmanagerRegistry.addAll(members.buldingmanager);
        })
        .then(function(){
          return getParticipantRegistry(NS + '.SiteManagers')
        })
        .then(function (customerRegistry){
          return customerRegistry.addAll(members.sitemanagers);
        })
}