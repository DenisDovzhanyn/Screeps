var roleHarvester = require('role.harvester')
var roleUpgrader = require('role.upgrader')
var roleBuilder = require('role.builder')
module.exports.loop = function () { 
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var tower = Game.getObjectById('6695b7be8a79c9977b6769f9')
    
    if(tower){
        var closeHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS)
        if(closeHostile && !closeHostile.owner('runtime_error')) tower.attack(closeHostile)
    }
    
    
    if(harvesters.length < 4){
        var newName = 'harvester' + Game.time
        console.log('new harv incoming: ' + newName)
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE, MOVE], newName, {memory: {role: 'harvester'}})
    } else if(upgraders.length < 5){
        var newName = 'upgrader' + Game.time
        console.log('new upgrader incoming: ' + newName)
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], newName, {memory: {role: 'upgrader'}})
    } else if(builders.length < 5){
        var newName = 'builder' + Game.time
        console.log('new builder incoming: ' + newName)
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName, {memory: {role: 'builder'}})
    }
    
    
    for(var name in Game.creeps){
        
        var creep = Game.creeps[name]
        if(creep.memory.role == 'harvester'){
            roleHarvester.run(creep)
        } else if(creep.memory.role == 'upgrader'){
            roleUpgrader.run(creep)
        } else if(creep.memory.role == 'builder'){
            roleBuilder.run(creep)
        }
        
    }
    
}
