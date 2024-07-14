var roleBuilder = {
    
    run: function(creep) {
        var constructionSit = creep.room.find(FIND_CONSTRUCTION_SITES)
        
        var repairSit = creep.room.find(FIND_STRUCTURES,{
            filter: object => object.hits < object.hitsMax
        })
        repairSit.sort((a,b) => a.hits - b.hits)
        
        if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.building = false
            creep.say('YAYAYAYA HARVEST YAYAYA I AM LORDE')
        } else if(!creep.memory.building && creep.store.getFreeCapacity() == 0){
            creep.memory.building = true
            creep.say('YAYAYA BUILDING YAYA')
        }
        
        if(creep.memory.building && constructionSit.length == 0 && repairSit.length == 0){
            creep.moveTo(Game.flags.AFK, {visualizePathStyle: {stroke: '#0000ff'}})
        }
        else if(creep.memory.building) { 
            if(constructionSit.length){
                if(creep.build(constructionSit[0]) == ERR_NOT_IN_RANGE) creep.moveTo(constructionSit[0], {visualizePathStyle: {stroke: '#0000ff'}})
            } else if(repairSit.length){
                if(creep.repair(repairSit[0]) == ERR_NOT_IN_RANGE) creep.moveTo(repairSit[0], {visualizePathStyle: {stroke: '#0000ff'}})
            }
        } else if(!creep.memory.building){
            var resourc = creep.room.find(FIND_SOURCES)
            if(creep.harvest(resourc[0]) == ERR_NOT_IN_RANGE) creep.moveTo(resourc[0], {visualizePathStyle: {stroke: '#0000ff'}})
            
        }
    }
}
module.exports = roleBuilder