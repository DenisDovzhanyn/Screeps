var roleHarvester = {
     run: function(creep) {
         if(creep.store.getFreeCapacity() > 0){
             var sources = creep.room.find(FIND_SOURCES)
             if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
                 creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ff0000'}})
             }
         } else if(Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity){
             if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                 creep.moveTo(Game.spawns['Spawn1'], {visualizePathStyle: {stroke: '#ff0000'}})
             }
         } else{
             creep.moveTo(Game.flags.AFK, {visualizePathStyle: {stroke: '#ff0000'}})
         }
     }
}

module.exports = roleHarvester;