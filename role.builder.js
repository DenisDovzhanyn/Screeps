var roleBuilder = {
    
    run: function(creep) {
        
        if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.building = false
            creep.say('YAYAYAYA HARVEST YAYAYA I AM LORDE')
        } else if(!creep.memory.building && creep.store.getFreeCapacity() == 0){
            creep.memory.building = true
            creep.say('YAYAYA BUILDING YAYA')
        }
        
        if(creep.memory.building) { 
            var constructionSit = creep.room.find(FIND_CONSTRUCTION_SITES)
            if(constructionSit.length){
                if(creep.build(constructionSit[0]) == ERR_NOT_IN_RANGE) creep.moveTo(constructionSit[0], {visualizePathStyle: {stroke: '#0000ff'}})
            }
        } else {
            var resourc = creep.room.find(FIND_SOURCES)
            if(creep.harvest(resourc[0]) == ERR_NOT_IN_RANGE) creep.moveTo(resourc[0], {visualizePathStyle: {stroke: '#0000ff'}})
            
        }
    }
}
module.exports = roleBuilder