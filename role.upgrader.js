
var roleUpgrader = {
    run: function(creep){
        if(creep.store[RESOURCE_ENERGY] == 0 && creep.memory.upgrading){
            creep.memory.upgrading = false
            creep.say('HARVEST TIME')
        } else if(creep.store.getFreeCapacity() == 0 && !creep.memory.upgrading){
            creep.memory.upgrading = true
            creep.say('UPGRADE TIME')
        }
        
        if(!creep.memory.upgrading){
            var sources = creep.room.find(FIND_SOURCES)
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#00ff00'}})
            }
        } else {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#00ff00'}})
            }
        }
    }
}

module.exports = roleUpgrader