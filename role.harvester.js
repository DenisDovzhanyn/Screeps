var roleHarvester = {
     run: function(creep) {
         
         var structs = creep.room.find(FIND_STRUCTURES, {
             filter: (structure) => {
                 return (structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_EXTENSION
                 || structure.structureType == STRUCTURE_TOWER /*|| structure.structureType == STRUCTURE_CONTAINER */ ) 
                 && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
             }
         })
         
         var containr = creep.room.find(FIND_STRUCTURES, {
             filter: (structure) => {
                 return (structure.structureType == STRUCTURE_CONTAINER) && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
             }
         })
         
         if(!creep.memory.harvesting && creep.store[RESOURCE_ENERGY] == 0) creep.memory.harvesting = true
         if(creep.memory.harvesting && creep.store.getFreeCapacity() == 0) creep.memory.harvesting = false
         
         if(creep.memory.harvesting){
             var sources = creep.room.find(FIND_SOURCES)
             if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
                 creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ff0000'}})
             }
         } 
         else if(structs.length > 0 && !creep.memory.harvesting){
             if(creep.transfer(structs[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                 creep.moveTo(structs[0], {visualizePathStyle: {stroke: '#ff0000'}})
             }
         } else if(containr.length > 0 && !creep.memory.harvesting){
             if (creep.transfer(containr[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                 creep.moveTo(containr[0], {visualizePathStyle: {stroke: '#ff0000'}})
             }
         }else{
             creep.moveTo(Game.flags.AFK, {visualizePathStyle: {stroke: '#ff0000'}})
         }
     }
}

module.exports = roleHarvester;