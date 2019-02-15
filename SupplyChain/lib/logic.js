
/**
 *  transaction create Trade
 * @param {org.iff.supplychain.trade.CreateTrade} tradeData
 * @transaction
 */
function createTrade(tradeData) {
    // validate the schedule
    var timeNow = new Date().getTime();
    var schedTime = new Date(tradeData.schedule).getTime();
    if(schedTime < timeNow){
        throw new Error("Scheduled time cannot be in the past!!!");
    }

    return getAssetRegistry('org.iff.supplychain.trade.Trade')

    .then(function(tradeRegistry){
        
        var  factory = getFactory();

        var  NS =  'org.iff.supplychain.trade';
         
        var  tradeId = generateTradeId(tradeData.tradeNumber,tradeData.schedule);
        var  trade = factory.newResource(NS,'Trade',tradeId);
        trade.tradeNumber = tradeData.tradeNumber;
        trade.aliasTradeNumber = [];

        
        var route = factory.newConcept(NS,"Route");

        
        route.origin = tradeData.origin;
        route.destination = tradeData.destination;
        route.schedule = tradeData.schedule;

        
        trade.route = route;
        

        // Adding event
        var event = factory.newEvent(NS, 'TradeCreated');
        event.tradeId = tradeId;
        emit(event);

    
        return tradeRegistry.add(trade);
    });

}

function generateTradeId(tradeNum, schedule){
    var dt = new Date(schedule)

    // Date & Month needs to be in the format 01 02 
    // so add a '0' if they are single digits
    var month = dt.getMonth()+1;
    if((month+'').length == 1)  month = '0'+month;
    var dayNum = dt.getDate();
    if((dayNum+'').length == 1)  dayNum = '0'+dayNum;

    // console.log(dayNum,month,dt.getFullYear())

    return tradeNum+'-'+month+'-'+dayNum+'-'+(dt.getFullYear()+'').substring(2,4);
}

/**
 * Create Trade Transaction
 * @param {org.iff.supplychain.trade.Assignproduct} tradeproductData
 * @transaction
 * 
 * **/
function    Assignproduct(tradeproductData){
    var tradeRegistry={}
    return getAssetRegistry('org.iff.supplychain.trade.Trade').then(function(registry){
        tradeRegistry = registry
        return tradeRegistry.get(tradeproductData.tradeId);
    }).then(function(trade){
        if(!trade) throw new Error("Trade : "+tradeproductData.tradeId," Not Found!!!");
        var   factory = getFactory();
        var   relationship = factory.newRelationship('org.iff.supplychain.product','product',tradeproductData.productId);
        trade.product = relationship;
        return tradeRegistry.update(trade);
    }).then(function(){
        // Successful update
        var event = getFactory().newEvent('org.iff.supplychain.trade', 'productAssigned');
        event.tradeId = tradeproductData.tradeId;
        event.productId = tradeproductData.productId;
        emit(event);
    }).catch(function(error){
        throw new Error(error);
    });

}
